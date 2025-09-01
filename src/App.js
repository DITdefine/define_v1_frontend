import logo from './logo.svg';
import './App.css';
import { Global } from '@emotion/react';
import { reset } from './Global/global';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';

function App() {
  return (
    <>
      <Global styles={reset}/>
      <Routes>
        <Route path='/*' element={<MainPage/>}/>
      </Routes>
    </>
  );
}

export default App;
