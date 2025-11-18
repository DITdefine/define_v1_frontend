import './App.css';
import { Global } from '@emotion/react';
import { reset } from './Global/global';
import { Route, Routes } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { instance } from './apis/instance';
import MainPage from './pages/MainPage/MainPage';
import MainLayout from './components/MainLayout/MainLayout';
import NotFoundPage from './pages/NotFound/NotFoundPage';
import DatePage from './pages/DatePage/DatePage';
import Charts from './components/Charts/Charts';
import Sales from './pages/Sales/Sales';
import Usage from './pages/Usage/Usage';
import CostCalculator from './pages/Sales/CostCalculator';
import Mobile from './pages/Mobile/Mobile';
import QrMobile from './pages/QrMobile/QrMobile';
import Camera from './components/Camera/Camera';
import { useCarCountQuery } from './apis/getCarCount';

function getDeviceType() {
  const ua = navigator.userAgent;
  if (/android/i.test(ua)) return "android";
  if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) return "ios";
  if (/Win|Mac|Linux/.test(ua)) return "pc";
  return "unknown";
}

function App() {
  const device = getDeviceType();
  const { data, isLoading, isError } = useCarCountQuery();
  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>데이터 불러오기 실패</div>;
  console.log(data)
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>🚨 데이터 불러오기 실패</div>;

  console.log("기기:", device);
  console.log("차량 수", data.parkingCount)
  console.log("차량 로그", data.todayLogs);
  // console.log("차량 수:", count);
  return (
    <>
      <Global styles={reset} />
      <Routes>
        <Route path="/" element={<MainLayout count = {data.parkingCount}/>}>
          <Route index element={<MainPage todayLogs = {data.todayLogs} gralog={data.log}/>} />
          <Route path="Searchdate" element={<DatePage />} />
          <Route path="sales" element={<Sales />} />
          <Route path="usage" element={<Usage />} />
          <Route path="forecast" element={<CostCalculator />} />
          <Route path="settings" element={<QrMobile />} />
          <Route path="/camera" element={<Camera />} />
        </Route>

        <Route path="/test" element={<Charts />} />
        <Route path="/mobile" element={<Mobile count = {data.parkingCount}/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
