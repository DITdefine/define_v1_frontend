import React, { useState } from 'react'
/** @jsxImportSource @emotion/react */
import * as s from './style'

const todayLogs = [{
    cars: [
      { car_number: "12가3456", entry_time: "2025-09-09T10:13:10", exit_time: "2025-09-09T10:19:10" },
      { car_number: "12가3456", entry_time: "2025-09-09T10:13:10", exit_time: "2025-09-09T10:19:10" },
      { car_number: "12가3456", entry_time: "2025-09-09T10:13:10", exit_time: "2025-09-09T10:19:10" },
      { car_number: "12가3456", entry_time: "2025-09-09T10:13:10", exit_time: "2025-09-09T10:19:10" },
      { car_number: "12가3456", entry_time: "2025-09-09T10:13:10", exit_time: "2025-09-09T10:19:10" },
      { car_number: "12가3456", entry_time: "2025-09-09T10:13:10", exit_time: "2025-09-09T10:19:10" },
      { car_number: "12가3456", entry_time: "2025-09-09T10:13:10", exit_time: "2025-09-09T10:19:10" },
      { car_number: "12가3456", entry_time: "2025-09-09T10:13:10", exit_time: "2025-09-09T10:19:10" },
      { car_number: "12가3456", entry_time: "2025-09-09T10:13:10", exit_time: "2025-09-09T10:19:10" },
      { car_number: "12가3456", entry_time: "2025-09-09T10:13:10", exit_time: "2025-09-09T10:19:10" },
      { car_number: "12가3456", entry_time: "2025-09-09T10:13:10", exit_time: "2025-09-09T10:19:10" },
      { car_number: "12가3456", entry_time: "2025-09-09T10:13:10", exit_time: "2025-09-09T10:19:10" },
      { car_number: "12가3456", entry_time: "2025-09-09T10:13:10", exit_time: "2025-09-09T10:19:10" },
      { car_number: "12가3456", entry_time: "2025-09-09T10:13:10", exit_time: "2025-09-09T10:19:10" },
      { car_number: "12가3456", entry_time: "2025-09-09T10:13:10", exit_time: "2025-09-09T10:19:10" },
      { car_number: "12가3456", entry_time: "2025-09-09T10:13:10", exit_time: "2025-09-09T10:19:10" },
      { car_number: "12가3456", entry_time: "2025-09-09T10:13:10", exit_time: "2025-09-09T10:19:10" },
      { car_number: "12가3456", entry_time: "2025-09-09T10:13:10", exit_time: "2025-09-09T10:19:10" },
      { car_number: "12가3456", entry_time: "2025-09-09T10:13:10", exit_time: "2025-09-09T10:19:10" },
      { car_number: "12가3456", entry_time: "2025-09-09T10:13:10", exit_time: "2025-09-09T10:19:10" },
    ]
}];

function CarList({log = []}) {
    // const [todayLogs, setTodayLogs] = useState([]);
     const safeLog = Array.isArray(log) ? log : [];
    console.log(safeLog)
    return (
        <div css={s.table_container}>
            <table css={s.parking_table}>
                <thead>
                    <tr>
                        <th>차량 번호</th>
                        <th>차종</th>
                        <th>입차 시간</th>
                        <th>출차 시간</th>
                        <th>주차 시간</th>
                        <th>출차여부</th>
                        <th>요금</th>
                    </tr>
                </thead>
                <tbody>
                    {safeLog.length === 0 ? (
                        <tr>
                            <td colSpan="4" style={{ textAlign: "center" }}>
                                오늘 주차된 차량이 없습니다.
                            </td>
                        </tr>
                    ) : (
                        [...safeLog]
                            .sort((a, b) => new Date(a.entry_time) - new Date(b.entry_time))
                            .map((car, index) => {
                                const inTime = car.entry_time ? new Date(car.entry_time) : null;
                                const outTime = car.exit_time ? new Date(car.exit_time) : null;
                                const type = car.vehicle_class === "star"? "스타렉스":
                                    car.vehicle_class === "g80"? "재네시스 G80":
                                    "모닝";
                                const parkingTime =
                                    inTime && outTime
                                        ? Math.floor((outTime - inTime) / 1000 / 60) + "분"
                                        : "-";

                                return (
                                    <tr key={index}>
                                        <td>{car.car_number}</td>
                                        <td>{type}</td>
                                        <td>{inTime ? inTime.toLocaleTimeString() : "-"}</td>
                                        <td>{outTime ? outTime.toLocaleTimeString() : "-"}</td>
                                        <td>{parkingTime}</td>
                                        <td>{car.is_parked == 1? "주차중": "출차완료"}</td>
                                        <td>{car.fee+"원"}</td>
                                    </tr>
                                );
                            })
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default CarList