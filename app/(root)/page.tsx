import TotalBalanceBox from '@/components/TotalBalanceBox';
import HeaderBox from '@/components/HeaderBox'
import React from 'react'
import RightSidebar from '@/components/RightSidebar';

const Home = () => {
  const loggedIn = {firstName:'Mjstar', lastName:'M416', email:'contact@jsmastery.pro'};
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
            <HeaderBox 
              type="greeting"
              title="welcome"
              user={loggedIn?.firstName || 'Guest'}
              subtext="Access and manage your account and transaction efficiently."
            />

            <TotalBalanceBox 
              accounts = {[]}
              totalBanks = {1}
              totalCurrentBalance={1250.35}
            />
        </header>
        RECENT TRANSECTION
      </div>
      <RightSidebar 
        user = {loggedIn}
        transactions = {[]}
        banks={[{currentBalance: 123.50}, {currentBalance: 500.50}]}
      />
    </section>
  )
}

export default Home
