import React from 'react';
import AdminSidebar from './AdminSidebar'
import AdminMain from './AdminMain/'
import './admin.css'

class Admin extends React.Component {

  render() {
    const { data, currentUser } = this.props;
    return (
      <div className='admin'>
        <AdminSidebar currentUser={currentUser} />
        <AdminMain data={data} />
      </div>
    )
  }
}

export default Admin;
