import user from "../data/user.json";
import statistics from "../data/statistics.json";
import friends from "../data/friends.json";
import transactions from "../data/transactions.json";
import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import FriendsList from "./FriendsList/FriendsList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

export default function App() {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        username={user.username}
        location={user.location}
        tag={user.tag}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statistics} />
      <FriendsList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
}
