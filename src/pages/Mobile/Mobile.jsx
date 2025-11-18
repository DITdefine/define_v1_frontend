/** @jsxImportSource @emotion/react */
import React, { useEffect } from "react";
import * as s from "./style";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// 🟦 Leaflet 기본 마커 이미지 깨짐 방지
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import markerShadowPng from "leaflet/dist/images/marker-shadow.png";

function Mobile({count}) {
  useEffect(() => {
    // 지도 초기화
    const map = L.map("map").setView([35.165702, 129.072525], 20); // 서울 시청 근처

    // 무료 OSM 타일 사용
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    // 마커(핑) 하나 표시
    const marker = L.marker([35.165702, 129.072525], {
      icon: L.icon({
        iconUrl: markerIconPng,
        shadowUrl: markerShadowPng,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      }),
    }).addTo(map);

    marker.bindPopup("🅿️ 주차장 위치").openPopup();

    return () => {
      map.remove(); // 컴포넌트 언마운트 시 메모리 정리
    };
  }, []);

  return (
    <div css={s.container}>
      <div css={s.today_car}>
        <h2 css={s.title}>🚗 주차 현황 요약</h2>

        <div css={s.row}>
          <p css={s.today_car_text}>총 주차 공간</p>
          <p css={[s.today_car_text2, { color: "#333333" }]}>40</p>
        </div>

        <div css={s.row}>
          <p css={s.today_car_text}>현재 주차 차량</p>
          <p css={[s.today_car_text2, { color: "#483EE4" }]}>{count}</p>
        </div>

        <div css={s.row}>
          <p css={s.today_car_text}>잔여 공간</p>
          <p css={[s.today_car_text2, { color: "#23C561" }]}>{40-count}</p>
        </div>
      </div>

      {/* 지도 영역 */}
      <div id="map" css={s.map}></div>
    </div>
  );
}

export default Mobile;
