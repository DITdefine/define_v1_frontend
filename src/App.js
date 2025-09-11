import './App.css';
import { Global } from '@emotion/react';
import { reset } from './Global/global';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import MainLayout from './components/MainLayout/MainLayout';
import NotFoundPage from './pages/NotFound/NotFoundPage';

function App() {
  return (
    <>
      <Global styles={reset} />
      <MainLayout>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;
