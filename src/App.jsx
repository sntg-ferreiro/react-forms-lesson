import Header from './components/Header.jsx';
import Login from './components/Login.jsx';
import RefLogin from './components/RefLogin.jsx';
import { Signup } from './components/Signup.jsx';
import StateLogin from './components/StateLogin.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        {/* <Login /> */}
        <StateLogin/>
        {/* <RefLogin/> */}
        {/* <Signup/> */}
      </main>
    </>
  );
}

export default App;
