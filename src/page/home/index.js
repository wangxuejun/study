import React from 'react'
import Chead from './components/c-head'
import Cbanner from './components/c-banner'
import Cuser from './components/c-user'
import Cpublic from './components/c-public'
import Clist from './components/c-list'
import {Drawer} from 'antd'
function Index() {
  const [ visible, setVisible ] = React.useState(false)
  function toggle() {
    setVisible(!visible)
  }
  return (
    <div className="home-page">
      <Chead visible={visible} setVisible={setVisible}></Chead>
      <Cbanner></Cbanner>
      <div className="home-main">
        <div className="home-content">
          <div className="home-tool">
            <Cuser></Cuser>
            <Cpublic></Cpublic>
            <span>world</span>
          </div>
          <div className="home-list">
            <Clist></Clist>
          </div>
        </div>
      </div>
      <Drawer placement="left" visible={visible} onClose={toggle}></Drawer>
    </div>
  );
}
export default Index;
