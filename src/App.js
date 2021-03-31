import './App.css';
import { HashRouter, Route } from 'react-router-dom'
import Build from './page/error/build'
import Login from './page/login'
import Index from './page/home'
import Admin from './page/admin'
function App(props) {
  return (
    <div className="App">
      <HashRouter>
        <Route path="/" exact component={Build} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={Index} />
        <Route path="/build" component={Build} />
        <Route path="/admin" component={Admin} />
      </HashRouter>
    </div>
  );
}

export default App;
