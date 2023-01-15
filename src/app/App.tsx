import {Routes, Route} from 'react-router-dom';

import  HomePage  from "../pages/HomePage";
import  CatalogPage  from "../pages/CatalogPage";
import  BasketPage  from "../pages/BasketPage";
import  SpecialOrderPage  from "../pages/SpecialOrderPage";
import  UserRoomPage  from "../pages/UserRoomPage";
import Footer from '../components/footer/Footer';

import Header from "../components/header/Header";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={ <HomePage/> } />
        <Route path='/CatalogPage' element={ <CatalogPage/> } />
        <Route path='/BasketPage' element={ <BasketPage/> } />
        <Route path='/SpecialOrderPage' element={ <SpecialOrderPage/> } />
        <Route path='/UserRoomPage' element={ <UserRoomPage/> } />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
