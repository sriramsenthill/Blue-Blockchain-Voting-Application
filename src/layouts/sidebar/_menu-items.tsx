import routes from '@/config/routes';
import { HomeIcon } from '@/components/icons/home';
import { FarmIcon } from '@/components/icons/farm';
import { PoolIcon } from '@/components/icons/pool';
import { ProfileIcon } from '@/components/icons/profile';
import { DiskIcon } from '@/components/icons/disk';
import { ExchangeIcon } from '@/components/icons/exchange';
import { VoteIcon } from '@/components/icons/vote-icon';
import { PlusCircle } from '@/components/icons/plus-circle';
import { CompassIcon } from '@/components/icons/compass';

export const menuItems = [
  {
    name: 'Home',
    icon: <HomeIcon />,
    href: routes.home,
  },
  {
    name: 'Vote',
    icon: <VoteIcon />,
    href: routes.proposals,
    dropdownItems: [
      {
        name: 'Vote Candidates',
        href: routes.proposals,
      },
    ],
  },
  {
    name: 'Explore Candidates',
    icon: <CompassIcon />,
    href: routes.search,
  },
  {
    name: 'Candidate Details',
    icon: <DiskIcon />,
    href: routes.nftDetails,
  },
];
