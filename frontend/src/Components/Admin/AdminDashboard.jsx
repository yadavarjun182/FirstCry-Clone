import React from 'react';
import AppHeader from './Components/AppHeader';
import SideMenu from './Components/SideMenu';
import PageContent from './Components/PageContent';


const AdminDashboard = () => {
  return (
    <div>
        <AppHeader />
        <div className='SideMenuAndPageContent'>
          <SideMenu />
          <PageContent />
        </div>

    </div>
  )
}

export default AdminDashboard