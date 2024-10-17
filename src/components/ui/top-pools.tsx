import cn from 'classnames';
import { PartyVotesData } from '@/data/static/token-data';
import CurrencySwapIcons from '@/components/ui/currency-swap-icons';
import { CoinList } from '@/components/ui/currency-swap-icons';
import { useLayout } from '@/lib/hooks/use-layout';
import { LAYOUT_OPTIONS } from '@/lib/constants';

interface TopPoolsProps {
  limit?: number;
}

export default function TopPools({ limit }: TopPoolsProps) {
  const { layout } = useLayout();
  return (
    <div
      className={cn(
        'rounded-lg bg-white p-6 shadow-card dark:bg-light-dark sm:p-8',
        {
          'w-full lg:w-[49%]': layout === LAYOUT_OPTIONS.RETRO,
        }
      )}
    >
      <h3 className="mb-6 text-base font-medium uppercase">Top Parties</h3>
      <div className="mb-5 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
        <span className="col-span-2">Parties</span>
        <span>Number Of Votes</span>
      </div>

      {Object.entries(PartyVotesData).slice(0, limit ?? Object.keys(PartyVotesData).length).map(([partyName, data], index) => {
        return (
          <div
            className="mb-5 flex items-center justify-between text-sm text-gray-900 last:mb-0 dark:text-white"
            key={index}
          >
            <div className="col-span-2 flex items-center gap-2">
              <img src={data.icon} alt={`${partyName} Logo`} className="w-8 h-8 rounded-full" />
              <span className="ml-2">{partyName}</span>
            </div>
            <span>{data.voteCount}</span>
          </div>
        );
      })}
    </div>
  );
}
