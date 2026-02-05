"use client";

const transactions = [
  { name: "Netflix", amount: -15.99, color: "#e50914" },
  { name: "Salary", amount: 4200.0, color: "#10b981" },
  { name: "Amazon", amount: -67.32, color: "#ff9900" },
  { name: "Freelance", amount: 850.0, color: "#3b82f6" },
];

const quickActions = [
  { label: "Send", icon: "\u2191", color: "#3b82f6" },
  { label: "Receive", icon: "\u2193", color: "#10b981" },
  { label: "Pay", icon: "$", color: "#f59e0b" },
  { label: "Invest", icon: "\u2197", color: "#8b5cf6" },
];

export default function BankAppSite() {
  return (
    <div
      className="w-full h-full flex flex-col overflow-hidden"
      style={{ backgroundColor: "#f8f9fc", fontSize: "10px" }}
    >
      {/* Top bar */}
      <div
        className="flex items-center justify-between px-3 py-2"
        style={{
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #e8ecf0",
        }}
      >
        <span
          className="font-bold text-[11px] tracking-tight"
          style={{ color: "#0f172a" }}
        >
          Apex Bank
        </span>
        <div
          className="w-5 h-5 rounded-full flex items-center justify-center text-[7px] font-bold"
          style={{ backgroundColor: "#3b82f6", color: "#ffffff" }}
        >
          JD
        </div>
      </div>

      {/* Balance card */}
      <div className="px-3 pt-2.5 pb-2">
        <div
          className="rounded-lg p-2.5"
          style={{
            background: "linear-gradient(135deg, #1e3a5f, #2563eb)",
            color: "#ffffff",
          }}
        >
          <div className="text-[7px] opacity-70">Total Balance</div>
          <div className="text-[16px] font-bold tracking-tight leading-tight">
            $24,531.89
          </div>
          <div className="text-[7px] mt-0.5" style={{ color: "#86efac" }}>
            +2.4% this month
          </div>
        </div>
      </div>

      {/* Quick actions */}
      <div className="flex justify-between px-5 py-1.5">
        {quickActions.map((action) => (
          <div
            key={action.label}
            className="flex flex-col items-center gap-0.5"
          >
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold transition-transform duration-150 hover:scale-110"
              style={{
                backgroundColor: `${action.color}18`,
                color: action.color,
              }}
            >
              {action.icon}
            </div>
            <span className="text-[6px]" style={{ color: "#64748b" }}>
              {action.label}
            </span>
          </div>
        ))}
      </div>

      {/* Transaction list */}
      <div className="px-3 pt-1 flex-1 min-h-0 flex flex-col">
        <div
          className="text-[8px] font-semibold mb-1"
          style={{ color: "#0f172a" }}
        >
          Recent Transactions
        </div>
        <div className="flex flex-col gap-[3px]">
          {transactions.map((tx) => (
            <div
              key={tx.name}
              className="flex items-center gap-1.5 px-1.5 py-1 rounded transition-colors duration-150"
              style={{ backgroundColor: "transparent" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#f1f5f9";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ backgroundColor: tx.color }}
              />
              <span
                className="flex-1 text-[8px]"
                style={{ color: "#334155" }}
              >
                {tx.name}
              </span>
              <span
                className="text-[8px] font-semibold tabular-nums"
                style={{
                  color: tx.amount > 0 ? "#10b981" : "#ef4444",
                }}
              >
                {tx.amount > 0 ? "+" : ""}
                ${Math.abs(tx.amount).toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                })}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Mini area chart */}
      <div className="px-3 pb-2 pt-1">
        <div
          className="w-full rounded-md overflow-hidden"
          style={{ height: "24px" }}
        >
          <svg
            viewBox="0 0 200 30"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <defs>
              <linearGradient
                id="chartGrad"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.02" />
              </linearGradient>
            </defs>
            {/* Area fill */}
            <path
              d="M0,25 L20,20 L40,22 L60,15 L80,18 L100,10 L120,14 L140,8 L160,12 L180,6 L200,9 L200,30 L0,30 Z"
              fill="url(#chartGrad)"
            />
            {/* Line */}
            <path
              d="M0,25 L20,20 L40,22 L60,15 L80,18 L100,10 L120,14 L140,8 L160,12 L180,6 L200,9"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
