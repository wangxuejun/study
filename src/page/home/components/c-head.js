import { Input } from 'antd';
import { MenuUnfoldOutlined } from '@ant-design/icons'
function Chead(popus) {
  const {visible, setVisible}  = popus
  function toggle() {
    setVisible(!visible)
  }
  return (
    <div className="home-head">
      <MenuUnfoldOutlined className="home-mune-all" onClick={toggle} />
      <span className="home-space"></span>
      <Input className="home-search" placeholder="搜索想看的文章" />
      <span className="home-menu">首页</span>
      <span className="home-menu">分类</span>
      <span className="home-menu">登录</span>
    </div>
  );
}
export default Chead;
