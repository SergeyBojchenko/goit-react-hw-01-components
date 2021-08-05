import React from 'react';
import user from './user.json';
import Profile from './components/profile/Profile';
import statsData from './statistical-data.json';
import Statistics from './components/statistics/Statistics';
import StatisticsList from './components/statistics-list/StatisticsList';
import friends from './friends.json';
import FriendList from './components/friend-list/FriendList';
import transactions from './transactions.json';
import TransactionHistory from './components/transaction-history/TransactionHistory';
import './base-style.module.css';

// Не явный возврат функции

const App = () => (
  <>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      urlAvatar={user.avatar}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
    />
    <Statistics title="Upload Stats">
      <StatisticsList stats={statsData} />
    </Statistics>
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </>
);

// Явный возврат функции

// const App = () => {
//     return (
//         <Profile
//           name = {user.name}
//           tag = {user.tag}
//           location = {user.location}
//           urlAvatar = {user.avatar}
//           followers = {user.stats.followers}
//           views = {user.stats.views}
//           likes = {user.stats.likes}
//         />
//     )
// }

export default App;
