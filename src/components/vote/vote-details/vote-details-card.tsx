import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dayjs from 'dayjs';
import cn from 'classnames';
import Button from '@/components/ui/button';
import RevealContent from '@/components/ui/reveal-content';
import AuctionCountdown from '@/components/nft/auction-countdown';
import { Switch } from '@/components/ui/switch';
import { ExportIcon } from '@/components/icons/export-icon';
import VotePoll from '@/components/vote/vote-details/vote-poll';
import VoteActions from '@/components/vote/vote-details/vote-actions';
import VoterTable from '@/components/vote/vote-details/voter-table';
import { fadeInBottom } from '@/lib/framer-motion/fade-in-bottom';
import { useLayout } from '@/lib/hooks/use-layout';
import { LAYOUT_OPTIONS } from '@/lib/constants';
import { ethers } from 'ethers';
import axios from 'axios';
import { useRouter } from 'next/router';
import { error } from 'console';
import { toast } from 'react-toastify';


function VoteActionButton({ setIsCardVisible }) {

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [contract, setContract] = useState(null);
  const [signer, setSigner] = useState(null);
  const [voted, setVoted] = useState(false);
  const contractAdress = "0x146Fed36501Cfa03E22Fa46CCa60EE861B18c6d0"

  useEffect(() => {
    // Check if MetaMask is installed
    if (typeof window.ethereum !== 'undefined' && contractAdress) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      setSigner(signer);

      // Connect to the deployed VotingSystem contract
      const votingSystemContract = new ethers.Contract(
        contractAdress,
        ['function vote(uint256)', 'function reject()'],
        signer
      );
      setContract(votingSystemContract);
    } else {
      console.error('MetaMask not detected or contractAddress is undefined.');
    }
  }, [contractAdress]);



  const handleVoteClick = async () => {
    try {
      // Send PUT request to backend API using Axios
      const metamaskID = await signer.getAddress();
      await axios.put("https://blue-x3fg.onrender.com/vote", {
        metamaskID
      });

      setIsLoading(true);

      // Check if the contract, signer, and tokenContractAddress are available
      if (contract && signer && contractAdress) {
        // Send 1 ETH to the smart contract
        const transaction = await contract.vote(1);

        // Wait for the transaction to be mined
        await transaction.wait();

        console.log('Vote successful!');

        // Transfer 1 token from the separate ERC-20 token contract to the smart contract
        const tokenContract = new ethers.Contract(
          contractAdress,
          ['function transfer(address to, uint256 amount) external'],
          signer
        );

        await tokenContract.transfer(contract.address, 1);

        // Set voted to true to conditionally render the component
        setVoted(true);
        router.push("/");
      } else {
        console.error('Contract, signer, or tokenContractAddress not available.');
      }
    } catch (error) {
      // Handle error from the backend API
      if (error.response && error.response.status === 400) {
        console.log('User has already voted. Blocking voting polls.');

        // Show a Snackbar message using react-toastify
        alert('You have already voted.');
        router.push("/?layout=Minimal");


        // Implement logic to block voting polls
        // For example, you can set a state variable to disable voting buttons
      } else {
        console.error('Error voting:', error.message);
      }
    }
  };

  return (
    <div className="mt-4 flex items-center gap-3 xs:mt-6 xs:inline-flex md:mt-10">
      <Button shape="rounded" color="success" className="flex-1 xs:flex-auto" onClick={handleVoteClick}>
        Vote
      </Button>
      <Button
        shape="rounded"
        color="danger"
        className="flex-1 xs:flex-auto"
        onClick={() => setIsCardVisible(false)}
      >
        Reject
      </Button>
    </div>
  );
}

// FIXME: need to add vote type
export default function VoteDetailsCard({ vote }: any) {
  const [isExpand, setIsExpand] = useState(false);
  const [isCardVisible, setIsCardVisible] = useState(true);
  const { layout } = useLayout();

  return (
    <AnimatePresence>
      {isCardVisible && (
        <motion.div
          layout
          initial={{ borderRadius: 8 }}
          className={cn(
            'mb-3 rounded-lg bg-white p-5 transition-shadow duration-200 dark:bg-light-dark xs:p-6 xl:p-4',
            isExpand ? 'shadow-large' : 'shadow-card hover:shadow-large'
          )}
        >
          <motion.div
            layout
            className={cn('flex w-full flex-col-reverse justify-between ', {
              'md:grid md:grid-cols-3': layout !== LAYOUT_OPTIONS.RETRO,
              'lg:grid lg:grid-cols-3': layout === LAYOUT_OPTIONS.RETRO,
            })}
          >
            <div className="self-start md:col-span-2">
              <h3
                onClick={() => setIsExpand(!isExpand)}
                className="cursor-pointer text-base font-medium leading-normal dark:text-gray-100 2xl:text-lg"
              >
                {vote.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Candidate Of {vote.id}
              </p>

              {/* show only when vote is active */}
              {vote.status === 'active' && (
                <>
                  {!isExpand ? (
                    <Button
                      onClick={() => setIsExpand(!isExpand)}
                      className="mt-4 w-full xs:mt-6 xs:w-auto md:mt-10"
                      shape="rounded"
                    >
                      Vote Now
                    </Button>
                  ) : (
                    <VoteActionButton setIsCardVisible={setIsCardVisible} />
                  )}
                </>
              )}

              {/* show only for past vote */}
              {vote.status === 'past' && (
                <time className="mt-4 block text-gray-400 xs:mt-6 md:mt-7">
                  <span className="font-medium">Executed</span> at{' '}
                  {dayjs(vote.executed_at).format('MMM DD, YYYY')}
                </time>
              )}
            </div>

            {/* vote countdown timer only for active & off-chain vote */}
            {['active', 'off-chain'].indexOf(vote.status) !== -1 && (
              <div
                className={cn(
                  "before:content-[' '] relative grid h-full gap-2 before:absolute before:bottom-0 before:border-b before:border-r before:border-dashed before:border-gray-200 ltr:before:left-0 rtl:before:right-0 dark:border-gray-700 dark:before:border-gray-700 xs:gap-2.5 ",
                  {
                    'mb-5 pb-5 before:h-[1px] before:w-full md:mb-0 md:pb-0 md:before:h-full md:before:w-[1px] ltr:md:pl-5 rtl:md:pr-5 ltr:xl:pl-3 rtl:xl:pr-3':
                      layout !== LAYOUT_OPTIONS.RETRO,
                    'mb-5 pb-5 before:h-[1px] before:w-full ltr:pl-0 lg:mb-0 lg:pb-0 lg:before:h-full lg:before:w-[1px] ltr:lg:pl-3 rtl:lg:pr-3':
                      layout === LAYOUT_OPTIONS.RETRO,
                  }
                )}
              >
                <h3 className="text-gray-400 md:text-base md:font-medium md:uppercase md:text-gray-900 dark:md:text-gray-100 2xl:text-lg ">
                  Voting ends in
                </h3>
                <AuctionCountdown date={new Date(Date.now() + 172800000)} />
              </div>
            )}

            {/* switch toggle indicator for past vote */}
            {vote.status === 'past' && (
              <div className="mb-4 flex items-center gap-3 md:mb-0 md:items-start md:justify-end">
                <Switch
                  checked={isExpand}
                  onChange={setIsExpand}
                  className="flex items-center gap-3 text-gray-400"
                >
                  <span className="inline-flex text-xs font-medium uppercase sm:text-sm">
                    Close
                  </span>
                  <div
                    className={cn(
                      isExpand
                        ? 'bg-brand dark:bg-white'
                        : 'bg-gray-200 dark:bg-gray-700',
                      'relative inline-flex h-[22px] w-10 items-center rounded-full transition-colors duration-300'
                    )}
                  >
                    <span
                      className={cn(
                        isExpand
                          ? 'bg-white ltr:translate-x-5 rtl:-translate-x-5 dark:bg-gray-700'
                          : 'bg-white ltr:translate-x-0.5 rtl:-translate-x-0.5 dark:bg-gray-200',
                        'inline-block h-[18px] w-[18px] transform rounded-full bg-white transition-transform duration-200'
                      )}
                    />
                  </div>
                  <span className="inline-flex text-xs font-medium uppercase sm:text-sm">
                    View
                  </span>
                </Switch>
              </div>
            )}
          </motion.div>
          <AnimatePresence>
            {isExpand && (
              <motion.div
                layout
                initial="exit"
                animate="enter"
                exit="exit"
                variants={fadeInBottom('easeIn', 0.25, 16)}
              >
                <br />
                <RevealContent defaultHeight={250}>
                  <h4 className="mb-6 uppercase dark:text-gray-100">
                    Description
                  </h4>
                  <div
                    className="dynamic-html grid gap-2 leading-relaxed text-gray-600 dark:text-gray-400"
                    dangerouslySetInnerHTML={{ __html: vote.description }}
                  />
                </RevealContent>

                <div className="mt-6 flex items-center justify-center border-t border-dashed border-gray-200 pt-6 dark:border-gray-700">
                  <Button
                    shape="rounded"
                    fullWidth={true}
                    className={cn({
                      'sm:w-4/6 md:w-3/6 xl:w-2/6':
                        layout !== LAYOUT_OPTIONS.RETRO,
                      'w-full lg:w-3/6 2xl:w-[48%] 3xl:w-1/3':
                        layout === LAYOUT_OPTIONS.RETRO,
                    })}
                    onClick={() => setIsExpand(false)}
                  >
                    close
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
