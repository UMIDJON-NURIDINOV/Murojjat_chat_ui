import { useEffect, useState } from 'react';
import './App.css';
import ReportMessage from './components/RepordMessagePanel.js/ReportMessage';
import SideMessage from './components/SideMessage/SideMessage';
import { DataContextProvider } from './components/Contex/Contex';
import Login from './components/Login/Login';
// import NavbarTop from './components/Navbar/NavbarTop';
import NavScrollExample from './components/Navbar/Nda';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // const [loginlocal, setLoginlocal] = useState(null)
  // const [passwordlocal, setpasswordlocal] = useState(null)


  // const localdata = {
  //   loginlocal: localStorage.getItem('loginData'),
  //   passwordlocal: localStorage.getItem('passwordData'),
  // }


  return (
    <DataContextProvider>
      <div className="App">
        <NavScrollExample />
        <div className="row d-flex">
          <div class="col s3 sidebarContent">
            <SideMessage />
          </div>
          <div className="col s9 mainBarContent">
            <ReportMessage />
          </div>
        </div>
      </div>
    </DataContextProvider>
  );
}

export default App;
