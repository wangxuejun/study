import { Button } from 'antd';
import { Link } from 'react-router-dom';
function Login() {
  return (
    <div className="Login">
      <div>登录页面</div>
      <Link to={{
        pathname: '/home',
        search: '?name=dog'
      }}>home</Link>
      <Button>登录</Button>
    </div>
  );
}

export default Login;
