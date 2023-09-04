import {useState,createContext } from 'react';
import './App.css';
import Header from './Components/Header';
import { Outlet } from 'react-router-dom';
import {Provider} from 'react-redux';
import ReduxStore from './Utils/ReduxStore';
import UserContext from './Utils/UserContext';


export const SearchUserContext=createContext();

function App() {
  const [open, setOpen] = useState(true);
  const [value,setValue]=useState();
  return (
    <Provider store={ReduxStore}>
    <div className="App">
      <UserContext.Provider value={{open:open,setOpen:setOpen}}>
      <Header/>
      <SearchUserContext.Provider value={{value:value,setValue:setValue}}>
      <Outlet />
      </SearchUserContext.Provider>
      </UserContext.Provider>
    </div>
    </Provider>
  );
}

export default App;
