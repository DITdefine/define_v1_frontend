import React, { useState } from 'react'
/** @jsxImportSource @emotion/react */
import * as s from './style';
import CarList from '../../components/CarList/CarList';
import { instance } from '../../apis/instance';

function DatePage() {
    const [mode, setMode] = useState("date"); // 'date' | 'datetime'
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [startTime, setStartTime] = useState("00:00");
    const [endTime, setEndTime] = useState("23:59");
    const [logs, setLogs] = useState([]);
    let plate;

    // ✅ 날짜 + 시간 조합 함수
    // buildDateTime는 필요하면 아래처럼 ISO 'T' 포맷으로 바꾸는 걸 권장합니다.
    const buildDateTime = (date, time) => {
        if (!date) return "";
        if (mode === "date") return `${date}T00:00`; // T 사용 권장
        return `${date}T${time}`;
    };

    const handleSearch = async () => {
        if (!startDate && !endDate) {
            alert("최소한 시작일 또는 종료일을 선택하세요.");
            return;
        }

        const startDatetime = startDate ? buildDateTime(startDate, startTime) : null;
        const endDatetime = endDate ? buildDateTime(endDate, endTime) : null;

        // axios params 사용 — axios가 자동으로 인코딩 처리
        const params = {};
        if (startDatetime) params.start_datetime = startDatetime;
        if (endDatetime) params.end_datetime = endDatetime;
        // if (plate) params.plate = plate; // plate 사용 시 이렇게 추가

        console.log("📤 요청 (axios params):", params);

        try {
            // instance는 baseURL을 이미 가지고 있음
            const res = await instance.get('/log', { params });
            console.log("🔁 response:", res);
            const data = res.data.data || res.data;
            if (!data || data.length === 0) {
                alert("조회 결과가 없습니다.");
                setLogs([]);
            } else {
                setLogs(data);
            }
        } catch (error) {
            console.error("🚨 기간 조회 요청 오류:", error);
            alert("데이터를 불러오는 중 오류가 발생했습니다.");
        }
    };


    console.log(logs)
    return (
        <div css={s.maincontainer}>
            <p css={s.title1}>기간 조회</p>
            <p css={s.smalltitle}>기간을 설정하여 입출차 기록 및 매출을 확인하세요.</p>

            {/* 검색 영역 */}
            <div css={s.searchbox}>
                <div style={{ display: 'flex', gap: '20px', marginLeft: '50px' }}>
                    {/* 조회 범위 */}
                    <div css={s.selection}>
                        <p>조회 범위</p>
                        <div>
                            <select value={mode} onChange={(e) => setMode(e.target.value)}>
                                <option value="date">날짜</option>
                                <option value="datetime">날짜 + 시간</option>
                            </select>
                        </div>
                    </div>

                    {/* 시작일 */}
                    <div css={s.inputbox}>
                        <label>시작일</label>
                        <div>
                            <input
                                type="date"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                style={mode === "datetime"
                                    ? { borderTopRightRadius: "0", borderBottomRightRadius: "0" }
                                    : {}}
                            />
                            {mode === "datetime" && (
                                <input
                                    type="time"
                                    value={startTime}
                                    onChange={(e) => setStartTime(e.target.value)}
                                    style={{
                                        borderTopLeftRadius: '0',
                                        borderBottomLeftRadius: '0',
                                        borderLeft: 'none'
                                    }}
                                />
                            )}
                        </div>
                    </div>

                    {/* 종료일 */}
                    <div css={s.inputbox}>
                        <label>종료일</label>
                        <div>
                            <input
                                type="date"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                                style={mode === "datetime"
                                    ? { borderTopRightRadius: "0", borderBottomRightRadius: "0" }
                                    : {}}
                            />
                            {mode === "datetime" && (
                                <input
                                    type="time"
                                    value={endTime}
                                    onChange={(e) => setEndTime(e.target.value)}
                                    style={{
                                        borderTopLeftRadius: '0',
                                        borderBottomLeftRadius: '0',
                                        borderLeft: 'none'
                                    }}
                                />
                            )}
                        </div>
                    </div>

                    {/* 조회 버튼 */}
                    <button css={s.searchbutton} onClick={handleSearch}>조회</button>
                </div>

                {/* 매출/입출차 정보 */}
                <div css={s.contentbox}>
                    <div css={s.moneycontent}>
                        <h3>선택 기간 매출</h3>
                        <h1>
                            {logs.length > 0
                                ? logs.reduce((total, log) => total + (log.fee || 0), 0).toLocaleString() + "원"
                                : "0원"}
                        </h1>
                        {startDate && endDate && (
                            <p>{startDate} ~ {endDate}</p>
                        )}
                    </div>
                    <div css={s.carcontent}>
                        <h3>총 입출차 횟수</h3>
                        <h1>{logs.length}회</h1>
                        {startDate && endDate ? (
                            <p>
                                일 평균:{" "}
                                {logs && logs.length > 0
                                    ? (
                                        logs.length /
                                        (
                                            (new Date(endDate) - new Date(startDate)) /
                                            (1000 * 60 * 60 * 24) +
                                            1
                                        )
                                    ).toFixed(1)
                                    : 0}
                                회
                            </p>
                        ) : (
                            <p>일 평균: 0회</p>
                        )}

                    </div>
                </div>
            </div>

            {/* 입출차 기록 리스트 */}
            <div style={{
                boxSizing: 'border-box',
                display: 'flex',
                width: '100%',
                minHeight: '380px'
            }}>
                <div css={s.listbox}>
                    <h2 style={{ marginLeft: '20px' }}>기간 내 입출차 기록</h2>
                    <CarList log={logs} />
                </div>
            </div>
        </div>
    );
}

export default DatePage;
