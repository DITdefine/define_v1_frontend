import React, { useState } from 'react'
/** @jsxImportSource @emotion/react */
import * as s from './style';
import CarList from '../../components/CarList/CarList';
import Charts from '../../components/Charts/Charts';

function Sales() {
    const [mode, setMode] = useState("date"); // date | datetime | year
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [startTime, setStartTime] = useState("00:00");
    const [endTime, setEndTime] = useState("23:59");
    const [startYear, setStartYear] = useState(new Date().getFullYear());
    const [endYear, setEndYear] = useState(new Date().getFullYear());

    return (
        <div css={s.maincontainer}>
            <p css={s.title1}>매출 분석</p>
            <p css={s.smalltitle}>기간 또는 연도를 설정하여 매출을 확인하세요.</p>
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
                        // 년도 선택
                        <>
                            <div css={s.inputbox}>
                                <label>시작년도</label>
                                <div>
                                    <input type="number" style={{ padding: '7px' }} value={startYear} onChange={(e) => setStartYear(e.target.value)} min="2000" max="2099" />
                                </div>
                            </div>
                            <div css={s.inputbox}>
                                <label>종료년도</label>
                                <div>
                                    <input type="number" style={{ padding: '7px' }} value={endYear} onChange={(e) => setEndYear(e.target.value)} min="2000" max="2099" />
                                </div>
                            </div>
                        </>
                    ) : (
                        // 날짜 또는 날짜+시간 선택
                        <>
                            <div css={s.inputbox}>
                                <label>시작일</label>
                                <div >
                                    <input style={mode === "datetime"
                                        ? { borderTopRightRadius: "0", borderBottomRightRadius: "0" }
                                        : {}} type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                                    {mode === "datetime" && (
                                        <input style={{ borderTopLeftRadius: '0', borderBottomLeftRadius: '0', borderLeft: 'none' }} type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
                                    )}
                                </div>
                            </div>

                            <div css={s.inputbox}>
                                <label>종료일</label>
                                <div>
                                    <input style={mode === "datetime"
                                        ? { borderTopRightRadius: "0", borderBottomRightRadius: "0" }
                                        : {}} type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                                    {mode === "datetime" && (
                                        <input style={{ borderTopLeftRadius: '0', borderBottomLeftRadius: '0', borderLeft: 'none' }} type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
                                    )}
                                </div>
                            </div>
                        </>
                    )}

                    <button css={s.searchbutton}>조회</button>
                </div>

                <div css={s.contentbox}>
                    <div css={s.moneycontent}>
                        <h3>선택 기간 매출</h3>
                        <h1>89,275원</h1>
                        {mode === "year" ? (
                            <p>{startYear} ~ {endYear}</p>
                        ) : (
                            <p>{startDate || 'YYYY-MM-DD'} ~ {endDate || 'YYYY-MM-DD'}</p>
                        )}
                    </div>
                    <div css={s.carcontent}>
                        <h3>총 입출차 횟수</h3>
                        <h1>580회</h1>
                        <p>일 평균: 82.8회</p>
                    </div>
                </div>
            </div>

            <div style={{ boxSizing: 'border-box', display: 'flex', justifyContent: 'space-between', width: '100%', minHeight: '380px' }}>
                <div css={s.listbox}>
                    <h2 style={{ marginLeft: '20px' }}>기간 내 입출차 기록</h2>
                    <CarList />
                </div>
                <div css={s.box}>
                    <h2>현재 통계</h2>
                    <Charts />
                </div>
            </div>
        </div>
    )
}

export default Sales
