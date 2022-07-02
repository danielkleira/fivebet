import * as React from 'react'
import { Container, Div } from './styles'
import { DashboardContainer } from './styles'
import Settings from '../../Components/Settings'
import Transactions from '../../Components/Transactions'
import MyBets from '../../Components/MyBets'
import RecentActivity from '../../Components/RecentActivity'
import NavigationBar from '../../Components/NavigationBar'
import SideBar from '../../Components/SideBar'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Afilliate from '../../Components/Affiliate'
import { DashboardContext } from '../../Providers/Dashboard'
import MyBetsList from '../../Components/MyBetsList'
import CurrentBalance from '../../Components/CurrentBalance'
import BuyCrypto from '../../Components/BuyCrypto'
import Deposit from '../../Components/Deposit'
import Withdraw from '../../Components/Withdraw'

const Dashboard = () => {
  const { tab } = React.useContext(DashboardContext)

  const renderTab = () => {
    switch (tab) {
      case 'My Bets':
        return <MyBetsList />
      case 'Deposit / Withdraw':
        return (
          <Div>
            <Deposit />
            <Withdraw />
          </Div>
        )
      case 'Affiliate':
        return <Afilliate />
      case 'Transactions':
        return <Transactions />
      case 'Settings':
        return <Settings />
      default:
        return <RecentActivity />
    }
  }

  return (
    <Container>
      <Header />
      <NavigationBar />
      <DashboardContainer>
        <SideBar />
        <div>{renderTab()}</div>
      </DashboardContainer>
      <Footer />
    </Container>
  )
}

export default Dashboard
