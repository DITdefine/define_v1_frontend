import React, { useEffect, useRef, useState } from "react";
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { io } from "socket.io-client";
import { useQueryClient } from "@tanstack/react-query";

export default function CameraRealtime() {
  const canvasRef = useRef(null);
  const [logs, setLogs] = useState([]);
  const logEndRef = useRef(null);
  const socketRef = useRef(null);
  const queryClient = useQueryClient(); // React Query client

  useEffect(() => {
    // const socket = io("http://192.168.45.37:5000", {
    const socket = io("http://127.0.0.1:5000", {
      transports: ["websocket"],
      forceNew: true,
      reconnectionAttempts: 5,
    });
    socketRef.current = socket;

    socket.on("connect", () => console.log("socket connected"));
    socket.on("disconnect", () => console.log("socket disconnected"));

    // video_frame 수신
    socket.on("video_frame", (data) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");

      let blob;
      try {
        if (data instanceof Blob) blob = data;
        else if (data.buffer) blob = new Blob([data.buffer], { type: "image/jpeg" });
        else blob = new Blob([data], { type: "image/jpeg" });
      } catch {
        blob = new Blob([data], { type: "image/jpeg" });
      }

      createImageBitmap(blob)
        .then((imageBitmap) => {
          ctx.drawImage(imageBitmap, 0, 0, canvas.width, canvas.height);
          imageBitmap.close();
        })
        .catch((err) => {
          const url = URL.createObjectURL(blob);
          const img = new Image();
          img.onload = () => {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            URL.revokeObjectURL(url);
          };
          img.src = url;
        });
    });

    // 시스템 로그
    socket.on("log", (msg) => {
        if(msg === "true"){
            queryClient.invalidateQueries(["todayOverview"]);
        }
        else setLogs((prev) => [...prev, msg].slice(-3));
    });
    return () => {
      socket.disconnect();
    };
  }, [queryClient]);

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: "instant" });
  }, [logs]);

  return (
    <div css={s.container}>
      <canvas ref={canvasRef} height={480} width={480} css={s.Img} />
      <div css={s.Logbox}>
        {logs.map((l, idx) => (
          <div key={idx} style={{ whiteSpace: 'pre-line' }}>{l}</div>
        ))}
        <div ref={logEndRef} />
      </div>
    </div>
  );
}
