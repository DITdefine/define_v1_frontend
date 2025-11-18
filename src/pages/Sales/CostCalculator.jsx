import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style'; // 기존 style.js 재사용

function CostCalculator() {
  const [entryTime, setEntryTime] = useState('');
  const [exitTime, setExitTime] = useState('');
  const [result, setResult] = useState(null);

  const hourlyRate = 1000; // 1시간당 요금

  // 10분 0
  // 40 미만 3000
  // 40분이상 10분당 천원

  const calculateCost = () => {
    if (!entryTime || !exitTime) {
      alert('입차 시간과 출차 시간을 모두 입력하세요.');
      return;
    }

    const start = new Date(entryTime);
    const end = new Date(exitTime);

    if (end <= start) {
      alert('출차 시간은 입차 시간 이후여야 합니다.');
      return;
    }

    const diffMs = end - start;
    const totalMinutes = Math.ceil(diffMs / (1000 * 60)); // 총 분 계산
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    let cost = 0;
    if (totalMinutes <= 10) {
      cost = 0;
    } else if (totalMinutes < 40) {
      cost = 3000;
    } else {
      cost = Math.floor(totalMinutes / 10) * hourlyRate;
    }

    setResult({
      hours,
      minutes,
      cost,
    });
  };

  return (
    <div css={s.maincontainer}>
      <h2 css={s.title1}>예상 비용 계산</h2>
      <p css={s.smalltitle}>입차 시간과 출차 시간을 입력하면 예상 비용이 계산됩니다.</p>

      <div css={s.searchbox}>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <div css={s.inputbox}>
            <label>입차 시간</label>
            <input
              type="datetime-local"
              value={entryTime}
              onChange={(e) => setEntryTime(e.target.value)}
            />
          </div>
          <div css={s.inputbox}>
            <label>출차 시간</label>
            <input
              type="datetime-local"
              value={exitTime}
              onChange={(e) => setExitTime(e.target.value)}
            />
          </div>
          <button css={s.searchbutton} onClick={calculateCost}>계산</button>
        </div>

        {result && (
          <div css={s.contentbox} style={{ marginTop: '20px', display: 'flex', gap: '40px' }}>
            <div css={s.moneycontent}>
              <h3>총 주차 시간</h3>
              <h1>{result.hours}시간 {result.minutes}분</h1>
            </div>
            <div css={s.carcontent}>
              <h3>예상 비용</h3>
              <h1>{result.cost.toLocaleString()}원</h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CostCalculator;
