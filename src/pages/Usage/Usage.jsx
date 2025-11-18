import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import CarList from '../../components/CarList/CarList';
import Charts from '../../components/Charts/Charts';
import { instance } from '../../apis/instance';

function Usage() {
    const [mode, setMode] = useState("date");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [startTime, setStartTime] = useState("00:00");
    const [endTime, setEndTime] = useState("23:59");
    const [startYear, setStartYear] = useState(new Date().getFullYear());
    const [endYear, setEndYear] = useState(new Date().getFullYear());
    const [carNumber, setCarNumber] = useState("");

    const [carlog, setCarlog] = useState([]);
    const [log, setLog] = useState([]);

    const handleSearch = async () => {
        let params = new URLSearchParams();

        if (mode === "year") {
            params.append("start_time", startYear);
            params.append("end_time", endYear);
        } else if (mode === "datetime") {
            if (startDate) params.append("start_time", `${startDate} ${startTime}`);
            if (endDate) params.append("end_time", `${endDate} ${endTime}`);
        } else { // date
            if (startDate) params.append("start_time", startDate);
            if (endDate) params.append("end_time", endDate);
        }

        if (carNumber) {
            params.append("car_number", carNumber);
        }

        try {
            const res = await instance.get(`/searchOverview?${params.toString()}`);
            console.log(res)
            // const data = await res.json();
            setCarlog(res.data?.todayLogs || []);
            setLog(res.data?.log || []);
        } catch (err) {
            console.error("API fetch error:", err);
        }
    }

    return (
        <div css={s.maincontainer}>
            <p css={s.title1}>이용량 분석</p>
            <p css={s.smalltitle}>주차된 차량에 대한 통계 및 분석 데이터를 확인합니다.</p>

            <div css={s.searchbox}>
                <div style={{ display: 'flex', gap: '20px', marginLeft: '50px' }}>
                    <div css={s.selection}>
                        <p>조회 범위</p>
                        <div>
                            <select value={mode} onChange={(e) => setMode(e.target.value)}>
                                <option value="date">날짜</option>
                                <option value="datetime">날짜 + 시간</option>
                                <option value="year">년도별</option>
                            </select>
                        </div>
                    </div>

                    {mode === "year" ? (
                        <>
                            <div css={s.inputbox}>
                                <label>시작년도</label>
                                <div>
                                    <input type="number" value={startYear} onChange={(e) => setStartYear(e.target.value)} />
                                </div>
                            </div>
                            <div css={s.inputbox}>
                                <label>종료년도</label>
                                <div>
                                    <input type="number" value={endYear} onChange={(e) => setEndYear(e.target.value)} />
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div css={s.inputbox}>
                                <label>시작일</label>
                                <div>
                                    <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                                    {mode === "datetime" && <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />}
                                </div>
                            </div>
                            <div css={s.inputbox}>
                                <label>종료일</label>
                                <div>
                                    <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                                    {mode === "datetime" && <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />}
                                </div>
                            </div>
                        </>
                    )}

                    <div css={s.inputbox}>
                        <label>차량번호</label>
                        <div>
                            <input type="text" value={carNumber} onChange={(e) => setCarNumber(e.target.value)} />
                        </div>
                    </div>

                    <button css={s.searchbutton} onClick={handleSearch}>조회</button>
                </div>

                {/* 요약 정보 */}
                <div css={s.contentbox}>
                    <div css={s.moneycontent}>
                        <h3>선택 기간 매출</h3>
                        <h1>{(log?.sales?.reduce((sum, s) => sum + s.total_fee, 0) || 0).toLocaleString()}원</h1>
                    </div>
                    <div css={s.carcontent}>
                        <h3>총 입출차 횟수</h3>
                        <h1>{(log?.usage?.reduce((sum, u) => sum + u.count, 0) || 0)}회</h1>
                    </div>
                </div>
            </div>

            {/* 리스트 + 차트 */}
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', minHeight: '380px' }}>
                <div css={s.listbox}>
                    <h2 style={{ marginLeft: '20px' }}>기간 내 입출차 기록</h2>
                    <CarList log={carlog} />
                </div>
                <div css={s.box}>
                    <h2>현재 통계</h2>
                    <Charts log={log}/>
                </div>
            </div>
        </div>
    );
}

export default Usage;
