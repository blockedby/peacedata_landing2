"use client";

import { useState } from "react";

const navItems = [
  { label: "Dashboard", color: "#3b82f6" },
  { label: "Network Map", color: "#06b6d4" },
  { label: "Wireless", color: "#8b5cf6" },
  { label: "WAN", color: "#10b981" },
  { label: "LAN", color: "#f59e0b" },
  { label: "Firewall", color: "#ef4444" },
  { label: "VPN", color: "#ec4899" },
];

const barHeights = [60, 85, 45, 95, 70];

export default function AsusRouterSite() {
  const [activeNav, setActiveNav] = useState(0);

  return (
    <div className="flex w-full h-full" style={{ fontSize: "10px" }}>
      {/* Sidebar */}
      <div
        className="flex flex-col py-2 px-1.5 shrink-0"
        style={{ backgroundColor: "#1a1a2e", width: "30%" }}
      >
        <div
          className="text-[8px] font-bold px-1.5 mb-2 tracking-wider uppercase"
          style={{ color: "#4a9eff" }}
        >
          RT-AX88U
        </div>
        <nav className="flex flex-col gap-0.5">
          {navItems.map((item, i) => (
            <button
              key={item.label}
              onClick={() => setActiveNav(i)}
              className="flex items-center gap-1.5 px-1.5 py-1 rounded text-left transition-colors duration-150"
              style={{
                backgroundColor:
                  activeNav === i ? "rgba(74, 158, 255, 0.15)" : "transparent",
                color: activeNav === i ? "#4a9eff" : "#8888aa",
              }}
              onMouseEnter={(e) => {
                if (activeNav !== i) {
                  e.currentTarget.style.backgroundColor =
                    "rgba(74, 158, 255, 0.08)";
                }
              }}
              onMouseLeave={(e) => {
                if (activeNav !== i) {
                  e.currentTarget.style.backgroundColor = "transparent";
                }
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-[8px] truncate">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div
        className="flex-1 p-2.5 overflow-hidden flex flex-col gap-2"
        style={{ backgroundColor: "#0f0f1a" }}
      >
        {/* Heading */}
        <h3 className="text-[11px] font-bold" style={{ color: "#e0e0ff" }}>
          Dashboard
        </h3>

        {/* Stat cards row */}
        <div className="flex gap-1.5">
          <div
            className="flex-1 rounded-md p-1.5 transition-all duration-200 hover:brightness-125"
            style={{
              backgroundColor: "rgba(74, 158, 255, 0.08)",
              border: "1px solid rgba(74, 158, 255, 0.15)",
            }}
          >
            <div className="text-[7px]" style={{ color: "#6688aa" }}>
              Connected Devices
            </div>
            <div
              className="text-[13px] font-bold"
              style={{ color: "#4a9eff" }}
            >
              12
            </div>
          </div>
          <div
            className="flex-1 rounded-md p-1.5 transition-all duration-200 hover:brightness-125"
            style={{
              backgroundColor: "rgba(139, 92, 246, 0.08)",
              border: "1px solid rgba(139, 92, 246, 0.15)",
            }}
          >
            <div className="text-[7px]" style={{ color: "#8877aa" }}>
              Network Speed
            </div>
            <div
              className="text-[13px] font-bold"
              style={{ color: "#8b5cf6" }}
            >
              450 Mbps
            </div>
          </div>
        </div>

        {/* Bar chart + WiFi icon row */}
        <div className="flex gap-2 items-end flex-1 min-h-0">
          {/* Mini bar chart */}
          <div className="flex items-end gap-[3px] flex-1 h-full pb-1">
            {barHeights.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm"
                style={{
                  height: `${h}%`,
                  background: `linear-gradient(to top, #3b82f6, #8b5cf6)`,
                  animation: `barGrow 0.8s ease-out ${i * 0.1}s both`,
                }}
              />
            ))}
          </div>

          {/* WiFi signal icon */}
          <div
            className="flex items-center justify-center shrink-0"
            style={{
              width: "36px",
              height: "36px",
              animation: "wifiPulse 2s ease-in-out infinite",
            }}
          >
            <div className="relative flex items-center justify-center">
              {/* Outer arc */}
              <div
                className="absolute"
                style={{
                  width: "24px",
                  height: "12px",
                  borderTop: "2px solid rgba(74, 158, 255, 0.4)",
                  borderRadius: "50% 50% 0 0",
                  top: "-2px",
                }}
              />
              {/* Middle arc */}
              <div
                className="absolute"
                style={{
                  width: "16px",
                  height: "8px",
                  borderTop: "2px solid rgba(74, 158, 255, 0.6)",
                  borderRadius: "50% 50% 0 0",
                  top: "3px",
                }}
              />
              {/* Inner arc */}
              <div
                className="absolute"
                style={{
                  width: "8px",
                  height: "4px",
                  borderTop: "2px solid rgba(74, 158, 255, 0.9)",
                  borderRadius: "50% 50% 0 0",
                  top: "8px",
                }}
              />
              {/* Center dot */}
              <div
                className="absolute rounded-full"
                style={{
                  width: "3px",
                  height: "3px",
                  backgroundColor: "#4a9eff",
                  top: "12px",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              />
            </div>
          </div>
        </div>

        {/* Status row */}
        <div className="flex items-center gap-3 pt-1 border-t border-white/5">
          <div className="flex items-center gap-1">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: "#28c840" }}
            />
            <span className="text-[7px]" style={{ color: "#6688aa" }}>
              Internet: Connected
            </span>
          </div>
          <div className="flex items-center gap-1 flex-1">
            <span className="text-[7px]" style={{ color: "#6688aa" }}>
              CPU: 23%
            </span>
            <div
              className="flex-1 h-1 rounded-full overflow-hidden"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.08)" }}
            >
              <div
                className="h-full rounded-full"
                style={{
                  width: "23%",
                  background: "linear-gradient(to right, #3b82f6, #06b6d4)",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Keyframe animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes barGrow {
          from { transform: scaleY(0); transform-origin: bottom; }
          to { transform: scaleY(1); transform-origin: bottom; }
        }
        @keyframes wifiPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
      ` }} />
    </div>
  );
}
