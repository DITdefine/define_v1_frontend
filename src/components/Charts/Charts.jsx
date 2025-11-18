import { useState, useMemo } from "react";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend
} from "recharts";
import * as s from "./style";
/** @jsxImportSource @emotion/react */

export default function Charts({ log = { usage: [], sales: [] } }) {
  const [activeTab, setActiveTab] = useState("usage");

  // ✅ Recharts용 데이터로 변환
  const chartData = useMemo(() => {
    const targetArray = activeTab === "sales" ? log.sales : log.usage;
    console.log("로그", targetArray)
    if (!Array.isArray(targetArray)) return [];

    return targetArray.map((value) => ({
      time: `${value.hour}시`,
      [activeTab]: activeTab === "sales" ?value.total_fee: value.count,
    }));
  }, [log, activeTab]);

  const chartColor = activeTab === "sales" ? "#8884d8" : "#82ca9d";
  const chartKey = activeTab === "sales" ? "sales" : "usage";
  const chartName = activeTab === "sales" ? "매출" : "이용량";

  return (
    <div css={s.container}>
      {/* 버튼 */}
      <div css={s.buttonContainer}>
        <div css={s.slider(activeTab)} />
        <button
          css={s.button(activeTab === "usage")}
          onClick={() => setActiveTab("usage")}
        >
          이용량
        </button>
        <button
          css={s.button(activeTab === "sales")}
          onClick={() => setActiveTab("sales")}
        >
          매출
        </button>
      </div>

      {/* 차트 */}
      <div css={s.chartcontainer}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend align="center" />
            <Line
              type="monotone"
              dataKey={chartKey}
              stroke={chartColor}
              strokeWidth={2}
              name={chartName}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
