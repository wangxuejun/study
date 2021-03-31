import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  PieChartOutlined,
  UserOutlined,
} from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const menu = [
  {
    id: '1',
    name: '文章管理',
    path: 'admin/article',
    children: [
      {
        id: '1-1',
        name: '文章列表',
        path: 'admin/article/list'
      }
    ]
  },
  {
    id: '2',
    name: '打卡设置',
    path: 'admin/clock'
  }
]
// 生成菜单
function createMenu (menu) {
  console.log('menu', menu)
  return menu.map((item) => {
    if (item.children && item.children.length > 0) {
      let children = item.children.map((mitem) => {
        return (
          <Menu.Item key={mitem.id} icon={<PieChartOutlined />}>
            {mitem.name}
          </Menu.Item>
        )
      })
      return (
        <SubMenu key="sub1" icon={<UserOutlined />} title="User">
          {children}
        </SubMenu>
      )
    } else {
      return (
        <Menu.Item key={item.id} icon={<PieChartOutlined />}>
          {item.name}
        </Menu.Item>
      )
    }
  })
}
function Index() {
  const [ collapsed, setCollapsed ] = React.useState(false)
  function toggle(res) {
    setCollapsed(res)
  }
  return (
    <div className="admin-page">
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={toggle}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            {createMenu(menu)}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    </div>
  );
}
export default Index;
