import userData from "../data/userData.json";
import friends from '../data/friends.json';
import transactions from "../data/transactions.json";
import Profile from "../Profile/Profile";
import FriendList from "../FriendList/FriendList";
import TransactionHistory from "../Transaction/TransactionHistory";

const App = () => {
  return (
    <>
      <Profile
        image={userData.avatar}
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;