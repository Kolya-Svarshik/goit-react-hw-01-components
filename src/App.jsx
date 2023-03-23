import FriendList from './components/friend-status/FriendList';
import ProfileItem from './components/social-profile/ProfileItem';
import StatisticsList from './components/statistics/StatisticsList';
import TransactionHistoryList from './components/transaction-history/TransactionHistoryList';

import friends from './friends.json';
import user from './user.json';
import data from './data.json';
import transactions from './transactions.json';

export default function App() {
  return (
    <>
      <FriendList items={friends} />
      <ProfileItem user={user} />
      <StatisticsList title="Upload stats" stats={data} />
      <TransactionHistoryList items={transactions} />
    </>
  );
}
