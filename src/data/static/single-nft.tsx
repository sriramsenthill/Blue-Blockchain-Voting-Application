import SingleNft from '@/assets/images/nft/nft-1.jpg';

import Bitcoin from '@/assets/images/currency/bitcoin.svg';
import Ethereum from '@/assets/images/currency/ethereum.svg';
import Avatar1 from '@/assets/images/avatar/1.png';
import Avatar2 from '@/assets/images/avatar/2.png';
import Avatar3 from '@/assets/images/avatar/3.png';
import Avatar4 from '@/assets/images/avatar/4.png';
import Avatar5 from '@/assets/images/avatar/5.png';
import Avatar6 from '@/assets/images/avatar/6.png';

export const nftData = {
  isAuction: true,
  name: 'Rachel Wu',
  image: SingleNft,
  minted_date: 'Jan 26, 1988',
  minted_slug: '',
  price: 0.2,
  description:
    'The Labour Alliance Party is a progressive political movement dedicated to championing the rights and welfare of the working class, fostering social justice, and promoting economic prosperity for all. Grounded in the principles of solidarity, equality, and opportunity, our party seeks to create a society where every individual can thrive and contribute to the common good.',
  creator: { id: 1, logo: Avatar1, name: 'Labour Party', slug: '#' },
  // collection: { id: 1, logo: Avatar3, name: 'Criptic', slug: '#' },
  owner: { id: 1, logo: Avatar4, name: '@Rachel', slug: '#' },
  block_chains: [
    { id: 1, logo: Bitcoin, name: 'Ethereum', slug: '#' },
    { id: 2, logo: Ethereum, name: 'Bitcoin', slug: '#' },
  ],
  // bids: [
  //   {
  //     id: 1,
  //     label: 'Bid Placed',
  //     name: 'ronson',
  //     authorSlug: '#',
  //     created_at: '2022-01-22T17:26:22.000000Z',
  //     avatar: Avatar1,
  //     amount: 0.02,
  //     transactionUrl: '#',
  //   },
  //   {
  //     id: 2,
  //     label: 'Bid Placed',
  //     name: 'Cameron',
  //     authorSlug: '#',
  //     created_at: '2022-02-22T17:26:22.000000Z',
  //     avatar: Avatar2,
  //     amount: 0.05,
  //     transactionUrl: '#',
  //   },
  //   {
  //     id: 3,
  //     label: 'Bid Placed',
  //     name: 'Williamson',
  //     authorSlug: '#',
  //     created_at: '2022-03-22T17:26:22.000000Z',
  //     avatar: Avatar3,
  //     amount: 0.07,
  //     transactionUrl: '#',
  //   },
  //   {
  //     id: 4,
  //     label: 'Bid Placed',
  //     name: 'ronson',
  //     authorSlug: '#',
  //     created_at: '2022-01-22T17:26:22.000000Z',
  //     avatar: Avatar4,
  //     amount: 0.78,
  //     transactionUrl: '#',
  //   },
  //   {
  //     id: 5,
  //     label: 'Bid Placed',
  //     name: 'Cameron',
  //     authorSlug: '#',
  //     created_at: '2022-02-22T17:26:22.000000Z',
  //     avatar: Avatar5,
  //     amount: 0.98,
  //     transactionUrl: '#',
  //   },
  //   {
  //     id: 6,
  //     label: 'Bid Placed',
  //     name: 'Williamson',
  //     authorSlug: '#',
  //     created_at: '2022-03-22T17:26:22.000000Z',
  //     avatar: Avatar6,
  //     amount: 1.01,
  //     transactionUrl: '#',
  //   },
  // ],
  // history: [
  //   {
  //     id: 1,
  //     label: 'Minted',
  //     name: 'Williamson',
  //     authorSlug: '#',
  //     created_at: '2022-03-22T17:26:22.000000Z',
  //     avatar: Avatar3,
  //     amount: null,
  //     transactionUrl: '#',
  //   },
  //   {
  //     id: 2,
  //     label: 'Listed',
  //     name: 'Cameron',
  //     authorSlug: '#',
  //     created_at: '2022-02-22T17:26:22.000000Z',
  //     avatar: Avatar2,
  //     amount: null,
  //     transactionUrl: '#',
  //   },
  //   {
  //     id: 3,
  //     label: 'Bid Placed',
  //     name: 'ronson',
  //     authorSlug: '#',
  //     created_at: '2022-01-22T17:26:22.000000Z',
  //     avatar: Avatar1,
  //     amount: 1.01,
  //     transactionUrl: '#',
  //   },
  // ],
};
