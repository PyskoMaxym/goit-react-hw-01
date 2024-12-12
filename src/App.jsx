import userData from './userData.json';
import Profile from './components/Profile/Profile.jsx';
import friends from './Friends.json';
import FriendList from './components/FriendList/FriendsList.jsx';
import transaction from './transaction.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory.jsx';

const App = () => {
  return (
    <>
      <Profile 
      name={userData.username}
      tag={userData.tag}
      location={userData.location}
      image={userData.avatar}
      stats={userData.stats}
      />
       <FriendList friends={friends} />
       <TransactionHistory items={transaction} />
    </>


  )
}

export default App;