import React, { useEffect, useState } from 'react'
import * as s from './style'
import Charts from '../../components/Charts/Charts';
import Camera from '../../components/Camera/Camera';
import CarList from '../../components/CarList/CarList';
import { instance } from '../../apis/instance';
/** @jsxImportSource @emotion/react */

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

function MainPage({ todayLogs, gralog }) {
  const [hourlyStats, setHourlyStats] = useState({});
  const [time, setTime] = useState(new Date());
  const [searchPlate, setSearchPlate] = useState("");
  const [filteredLog, setFilteredLog] = useState([]); // 🚗 단일 객체로 변경

  // ✅ 최초 렌더링 시 /log 가져오기 + 5초마다 갱신
  // useEffect(() => {
  //   const fetchLogs = async () => {
  //     try {
  //       const res = await instance.get("/log");
  //       const res2 = await instance.get("/graphData");
  //       setGralog(res2.data)
  //     } catch (error) {
  //       console.error("🚨 /log 요청 중 오류:", error);
  //     }
  //   };

  //   fetchLogs();
  //   const interval = setInterval(fetchLogs, 5000);
  //   return () => clearInterval(interval);
  // }, []);
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  console.log(gralog)

  // ✅ 검색 처리 함수
  const handleSearch = () => {
    if (!Array.isArray(todayLogs) || todayLogs.length === 0) {
      alert("아직 주차 기록이 로드되지 않았습니다.");
      setSearchPlate("");
      return;
    }

    if (!searchPlate.trim()) {
      alert("차량 번호를 입력해주세요.");
      setSearchPlate("");
      return;
    }

    const found = todayLogs.find(
      (todayLogs) => todayLogs.car_number?.trim() === searchPlate.trim()
    );

    if (found) {
      setFilteredLog([found]);
      console.log(found)
    } else {
      alert("검색 결과가 없습니다.");
      setFilteredLog(null);
      setSearchPlate("");
    }
  };


  // ✅ Enter 키 입력 시 검색 실행
  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div css={s.maincontainer}>
      <div css={s.date_text}>
        <p>Edge AI 기반 무인 주차 관리 시스템</p>
        <div css={s.inputbox}>
          <input
            type="text"
            placeholder="차량 번호 입력"
            value={searchPlate}
            onChange={(e) => setSearchPlate(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          {
            filteredLog.length != 0 ?
              <button onClick={() => {
                setFilteredLog([]);
                setSearchPlate("");
              }}>초기화</button>

              :
              <button onClick={handleSearch}>확인</button>
          }
        </div>
        <p>{formatDate(time)}</p>
      </div>

      {/* 상단 */}
      <div
        style={{
          boxSizing: 'border-box',
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          height: '380px',
        }}
      >
        {/* 카메라 */}
        <div css={s.livebox}>
          <div style={{ display: "flex", gap: "120px", justifyContent: "space-between", marginBottom: "10px" }}>
            <h2 style={{ paddingLeft: "75px" }}>실시간 카메라</h2>
            <h2 style={{ paddingRight: "80px" }}>시스템 로그</h2>
          </div>
          <div style={{ height: '325px', width: '100%' }}>
            <Camera />
          </div>
        </div>

        <div css={s.box}>
          <h2>이용량 통계</h2>
          <Charts log={gralog} />
        </div>
      </div>

      {/* 하단 */}
      <div
        style={{
          boxSizing: 'border-box',
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          height: '380px',
        }}
      >
        <div css={s.log_box}>
          <h2>현재 주차 현황</h2>
          <CarList log={filteredLog.length > 0 ? filteredLog : todayLogs} />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
