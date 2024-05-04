import TotalBalanceBox from '@/components/TotalBalanceBox';
import HeaderBox from '@/components/HeaderBox'
import React from 'react'
import RightSidebar from '@/components/RightSidebar';
import { getLoggedInUser } from '@/lib/actions/user.action';

const Home = async () => {
  const loggedIn = await getLoggedInUser();
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
            <HeaderBox 
              type="greeting"
              title="welcome"
              user={loggedIn?.name || 'Guest'}
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
