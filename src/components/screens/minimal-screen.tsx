import { useEffect, useState } from 'react';
import { NextSeo } from 'next-seo';
import ComparisonChart from '@/components/ui/chats/comparison-chart';
import Avatar from '@/components/ui/avatar';
import OverviewChart from '@/components/ui/chats/overview-chart';
import TopPools from '@/components/ui/top-pools';
import TransactionTable from '@/components/transaction/transaction-table';
import WalletCard from '@/components/ui/wallet-card';
import TransactCoin from '@/components/ui/transact-coin';
import PriceFeedSlider from '@/components/ui/live-price-feed';
import { priceFeedData } from '@/data/static/price-feed';
import { useBreakpoint } from '@/lib/hooks/use-breakpoint';
import { useRouter } from 'next/router';

//images

import AuthorImage from '@/assets/images/author.jpg';

const topPoolsLimit = (breakpoint: string) => {
  switch (breakpoint) {
    case 'md':
      return 5;
    case '2xl':
      return 5;
    default:
      return 4;
  }
};

export default function MinimalScreen() {
  const [limit, setLimit] = useState(4);
  const breakpoint = useBreakpoint();
  const router = useRouter();

  useEffect(() => {
    setLimit(topPoolsLimit(breakpoint));
  }, [breakpoint]);
  return (
    <>
      <NextSeo
        title="Blue - Blockchain Voting Machine"
        description="Blockchain Voting Machine"
      />
      <div className="">
        <PriceFeedSlider
          limit={4}
          priceFeeds={priceFeedData}
          gridClassName="grid-cols-1 gap-6 2xl:grid-cols-4"
        />
        <div className="mt-6 grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-12">
          <div className="flex items-center rounded-lg bg-white p-6 shadow-card dark:bg-light-dark md:col-span-1 md:h-[678px] lg:col-span-5 lg:h-[644px] xl:col-span-3 xl:row-start-1 xl:row-end-2 xl:h-auto 2xl:col-span-3 2xl:h-full 2xl:p-6 3xl:col-span-3 3xl:p-8">
            <div className="w-full">
              <div className="mb-8 h-full">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="Author"
                  className="h-50 w-50 mx-auto mb-6 rounded-full" // Add styling classes as needed
                />
                <h3 className="mb-2 text-center text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 3xl:mb-3">
                  XDC User
                </h3>
                <div className="flex justify-center">
                  <button
                    className="mb-7 rounded-full bg-blue-500 py-2 px-4 text-center font-medium tracking-tighter text-gray-900 text-white hover:bg-blue-600 dark:text-white xl:text-2xl 3xl:mb-8 3xl:text-[32px]"
                    onClick={() => {
                      router.push('/proposals?layout=Minimal');
                    }}
                  >
                    Vote For 2024
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className=" md:col-span-2 lg:col-span-12 lg:col-start-6 lg:col-end-13 lg:row-start-1 lg:row-end-2 xl:col-start-4 xl:col-end-10 xl:row-start-1 xl:row-end-2 2xl:col-span-8 2xl:col-start-4 2xl:col-end-10 2xl:row-start-1 2xl:row-end-2 3xl:col-span-6 3xl:col-start-4 3xl:col-end-10 3xl:row-start-1 3xl:row-end-2">
            <ComparisonChart />
          </div>

          <div className="md:col-span-2 lg:col-span-6 lg:row-start-2 lg:row-end-3 xl:col-start-10 xl:col-end-13 xl:row-start-1 xl:row-end-2 2xl:col-start-10 2xl:col-end-13 2xl:row-start-1 2xl:row-end-2 3xl:col-span-3 3xl:row-start-1">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
              <OverviewChart chartWrapperClass="h-[224px] lg:h-[214px] xl:h-[190px] 2xl:h-[214px] 3xl:h-[268px] 4xl:h-[352px]" />
              <TopPools limit={limit} />
            </div>
          </div>

          <div className="md:col-span-2 lg:col-span-full xl:col-start-1 xl:col-end-9 xl:row-start-2 xl:row-end-3 2xl:col-start-1 2xl:col-end-10 2xl:row-start-2 2xl:row-end-3 3xl:col-span-9 3xl:row-start-2 3xl:row-end-3">
            <TransactionTable />
          </div>

          <div className="md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 lg:col-span-6 lg:row-start-2 lg:row-end-3 xl:col-start-9 xl:col-end-13 xl:row-start-2 xl:row-end-3 2xl:col-start-10 2xl:col-end-13 2xl:row-start-2 2xl:row-end-3 3xl:col-span-3 3xl:row-start-2 3xl:row-end-3">
            <WalletCard />
          </div>
        </div>
      </div>
    </>
  );
}
