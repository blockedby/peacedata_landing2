"use client";

const navPills = ["Jobs", "Companies", "AI Match"];

const jobs = [
  {
    title: "Senior Frontend Developer",
    company: "TechCorp",
    location: "Remote",
    salary: "$120-160k",
    tags: ["React", "TypeScript", "Next.js"],
    match: 94,
    tagColor: "#3b82f6",
  },
  {
    title: "Product Designer",
    company: "DesignLab",
    location: "Hybrid",
    salary: "$95-130k",
    tags: ["Figma", "UX", "Design Systems"],
    match: 87,
    tagColor: "#8b5cf6",
  },
  {
    title: "ML Engineer",
    company: "DataFlow",
    location: "Remote",
    salary: "$150-200k",
    tags: ["Python", "PyTorch", "LLMs"],
    match: 91,
    tagColor: "#10b981",
  },
];

export default function JobSearchSite() {
  return (
    <div
      className="w-full h-full flex flex-col overflow-hidden"
      style={{ backgroundColor: "#fafbff", fontSize: "10px" }}
    >
      {/* Top nav */}
      <div
        className="flex items-center justify-between px-3 py-2"
        style={{
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #e8ecf0",
        }}
      >
        <span
          className="font-bold text-[11px] tracking-tight"
          style={{
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          JobMind AI
        </span>
        <div className="flex gap-1">
          {navPills.map((pill, i) => (
            <span
              key={pill}
              className="px-1.5 py-0.5 rounded-full text-[7px] font-medium transition-colors duration-150"
              style={{
                backgroundColor: i === 0 ? "#6366f1" : "#f1f5f9",
                color: i === 0 ? "#ffffff" : "#64748b",
              }}
            >
              {pill}
            </span>
          ))}
        </div>
      </div>

      {/* Search bar */}
      <div className="px-3 pt-2 pb-1.5">
        <div
          className="flex items-center gap-1.5 rounded-lg px-2 py-1.5"
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid #e2e8f0",
          }}
        >
          {/* Magnifying glass icon (CSS) */}
          <div className="shrink-0 relative" style={{ width: "10px", height: "10px" }}>
            <div
              style={{
                width: "7px",
                height: "7px",
                border: "1.5px solid #94a3b8",
                borderRadius: "50%",
                position: "absolute",
                top: "0",
                left: "0",
              }}
            />
            <div
              style={{
                width: "4px",
                height: "1.5px",
                backgroundColor: "#94a3b8",
                position: "absolute",
                bottom: "0",
                right: "0",
                transform: "rotate(45deg)",
                borderRadius: "1px",
              }}
            />
          </div>
          <span className="text-[8px]" style={{ color: "#94a3b8" }}>
            Search jobs, skills, companies...
          </span>
        </div>
      </div>

      {/* AI Match featured badge */}
      <div className="px-3 pb-1.5">
        <div
          className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[7px] font-semibold relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #6366f1, #a855f7, #ec4899)",
            color: "#ffffff",
          }}
        >
          <span className="relative z-10">AI Match: 94%</span>
          {/* Shimmer overlay */}
          <span
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)",
              animation: "shimmer 2s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      {/* Job listing cards */}
      <div className="px-3 flex-1 min-h-0 flex flex-col gap-1.5 pb-2 overflow-hidden">
        {jobs.map((job) => (
          <div
            key={job.title}
            className="rounded-lg p-2 transition-all duration-150"
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #e8ecf0",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#6366f1";
              e.currentTarget.style.boxShadow =
                "0 2px 8px rgba(99, 102, 241, 0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#e8ecf0";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {/* Top row: title + AI match */}
            <div className="flex items-start justify-between gap-1">
              <div className="min-w-0">
                <div
                  className="text-[9px] font-bold truncate leading-tight"
                  style={{ color: "#0f172a" }}
                >
                  {job.title}
                </div>
                <div className="text-[7px]" style={{ color: "#64748b" }}>
                  {job.company}
                </div>
              </div>
              <span
                className="shrink-0 text-[6px] font-bold px-1 py-0.5 rounded"
                style={{
                  backgroundColor:
                    job.match >= 90
                      ? "rgba(16, 185, 129, 0.1)"
                      : "rgba(245, 158, 11, 0.1)",
                  color: job.match >= 90 ? "#10b981" : "#f59e0b",
                }}
              >
                AI: {job.match}%
              </span>
            </div>

            {/* Meta row: location + salary */}
            <div className="flex items-center gap-1.5 mt-0.5">
              <span
                className="text-[6px] px-1 py-[1px] rounded"
                style={{
                  backgroundColor: "#f1f5f9",
                  color: "#475569",
                }}
              >
                {job.location}
              </span>
              <span
                className="text-[7px] font-semibold"
                style={{ color: "#0f172a" }}
              >
                {job.salary}
              </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-0.5 mt-1">
              {job.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[6px] px-1 py-[1px] rounded-full font-medium transition-colors duration-150"
                  style={{
                    backgroundColor: `${job.tagColor}14`,
                    color: job.tagColor,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = `${job.tagColor}28`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = `${job.tagColor}14`;
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Keyframe animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}
