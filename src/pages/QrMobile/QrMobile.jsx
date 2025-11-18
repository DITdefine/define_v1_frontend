import React from "react";
import { QRCodeSVG } from "qrcode.react";

export default function QrMobile() {
  const url = "https://www.dit-define.site/mobile"; // QR 스캔 시 이동할 주소

  return (
    <div style={{
      display: "flex",
      boxSizing: 'border-box',
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      fontFamily: "sans-serif",
      padding: "20px",
      gap: '30px',
      fontSize: '30px',
      fontWeight: '600'
    }}>
      <h2>📱 모바일 페이지 QR 코드</h2>
      <p>스캔하면 모바일 전용 페이지로 이동합니다.</p>
      <QRCodeSVG value={url} size={400} fgColor="#000000" />
    </div>
  );
}
