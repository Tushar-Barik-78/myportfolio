import { useState } from "react";
const SECTIONS = [
  "Hero",
  "Skills",
  "Experience",
  "Projects",
  "Education",
  "Contact",
];

const initialData = {
  hero: {
    name: "Tushar Barik",
    greeting: "Hii, I am",
    roles: ["Fullstack Developer", "App Developer", "Coder", "Problem Solver"],
    bio: "I am a full-stack developer with over 2 years of experience in building scalable web applications. Skilled in both front-end and back-end development, I specialize in the MERN stack and modern technologies.",
    resumeUrl:
      "https://drive.google.com/file/d/1cFqxcrKFJfnJXrJXmE9HnmO18bdVKJl2/view",
  },

  skills: [
    {
      id: 1,
      title: "Frontend",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Redux",
        "Tailwind CSS",
      ],
    },
    {
      id: 2,
      title: "Backend",
      skills: ["Node JS", "Express JS", "MongoDB", "MySQL"],
    },
  ],

  experience: [
    {
      id: 1,
      role: "FullStack Developer",
      company: "Internpe",
      date: "June 2025 - July 2025",
      desc: "Developed scalable web applications using MERN Stack.",
      skills: ["HTML", "CSS", "JavaScript", "React JS", "Node JS", "MongoDB"],
    },
  ],

  projects: [
    {
      id: 1,
      title: "JobQuest",
      description:
        "A full-stack job portal connecting recruiters and job seekers.",
      tags: ["React JS", "Node JS", "MongoDB", "Express JS", "Tailwind CSS"],
      github: "https://github.com/Tushar-Barik-78/JobQuest",
      webapp: "https://jobquest-tushar.onrender.com/",
    },
  ],

  education: [
    {
      id: 1,
      school: "Ajay Binay Institute of Technology",
      date: "2022 - Present",
      grade: "8.95 CGPA",
      degree: "B.Tech CSE",
      desc: "Pursuing B.Tech in Computer Science.",
    },
  ],

  contact: {
    email: "tushar@example.com",
    phone: "+91 9876543210",
    github: "https://github.com/Tushar-Barik-78",
    linkedin: "https://linkedin.com/in/tushar-barik",
    twitter: "",
  },
};

const ICON = {
  hero: "🏠",
  skills: "⚡",
  experience: "💼",
  projects: "🚀",
  education: "🎓",
  contact: "📬",
  save: "💾",
  add: "＋",
  del: "✕",
  edit: "✏️",
  check: "✓",
};

const glass = "rgba(255,255,255,0.05)";
const border = "1px solid rgba(255,255,255,0.08)";

const inputStyle = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: 14,
  border,
  background: glass,
  color: "#fff",
  fontSize: 14,
  outline: "none",
  boxSizing: "border-box",
  backdropFilter: "blur(10px)",
};

const labelStyle = {
  fontSize: 12,
  color: "rgba(255,255,255,0.65)",
  marginBottom: 8,
  display: "block",
  fontWeight: 600,
  letterSpacing: 0.4,
};

const cardStyle = {
  background:
    "linear-gradient(145deg, rgba(17,17,35,0.9), rgba(10,10,20,0.95))",
  borderRadius: 24,
  border: "1px solid rgba(130,69,236,0.15)",
  padding: "24px",
  marginBottom: 18,
  boxShadow: "0 10px 40px rgba(0,0,0,0.35)",
  backdropFilter: "blur(18px)",
};

const btnPrimary = {
  background: "linear-gradient(135deg,#8245ec,#6366f1)",
  color: "#fff",
  border: "none",
  borderRadius: 14,
  padding: "12px 20px",
  cursor: "pointer",
  fontSize: 14,
  fontWeight: 600,
  boxShadow: "0 8px 20px rgba(130,69,236,0.35)",
  transition: "0.3s",
};

const btnSecondary = {
  background: "rgba(255,255,255,0.05)",
  color: "#d1d5db",
  border,
  borderRadius: 14,
  padding: "12px 18px",
  cursor: "pointer",
  fontSize: 14,
  fontWeight: 500,
  backdropFilter: "blur(10px)",
};

const btnDanger = {
  background: "rgba(255,77,79,0.08)",
  color: "#ff6b6b",
  border: "1px solid rgba(255,107,107,0.18)",
  borderRadius: 12,
  padding: "10px 14px",
  cursor: "pointer",
  fontSize: 13,
  fontWeight: 600,
};

function Toast({ msg, onClose }) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        zIndex: 999,
        background:
          "linear-gradient(135deg, rgba(130,69,236,0.95), rgba(99,102,241,0.95))",
        color: "#fff",
        borderRadius: 18,
        padding: "14px 20px",
        fontSize: 14,
        fontWeight: 600,
        boxShadow: "0 12px 35px rgba(130,69,236,0.45)",
        display: "flex",
        alignItems: "center",
        gap: 12,
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.08)",
        maxWidth: "90%",
      }}
    >
      <div
        style={{
          width: 30,
          height: 30,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.12)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {ICON.check}
      </div>

      <span style={{ flex: 1 }}>{msg}</span>

      <span
        onClick={onClose}
        style={{
          cursor: "pointer",
          opacity: 0.7,
          fontSize: 16,
        }}
      >
        ✕
      </span>
    </div>
  );
}

function HeroSection({ data, onChange }) {
  const [rolesStr, setRolesStr] = useState(data.roles.join(", "));

  const handleRoles = (v) => {
    setRolesStr(v);

    onChange({
      ...data,
      roles: v
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
    });
  };

  return (
    <div style={cardStyle}>
      {/* Heading */}
      <div
        style={{
          marginBottom: 24,
          display: "flex",
          alignItems: "center",
          gap: 14,
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            width: 54,
            height: 54,
            borderRadius: 18,
            background: "linear-gradient(135deg,#8245ec,#6366f1,#06b6d4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 24,
            boxShadow: "0 8px 20px rgba(130,69,236,0.35)",
          }}
        >
          👨‍💻
        </div>

        <div>
          <h2
            style={{
              margin: 0,
              fontSize: 24,
              fontWeight: 700,
              color: "#fff",
            }}
          >
            Hero Section
          </h2>

          <p
            style={{
              margin: "6px 0 0",
              color: "rgba(255,255,255,0.6)",
              fontSize: 13,
            }}
          >
            Customize your portfolio introduction and identity
          </p>
        </div>
      </div>

      {/* Inputs */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
          gap: 18,
          marginBottom: 20,
        }}
      >
        <div>
          <label style={labelStyle}>Greeting Text</label>

          <input
            style={inputStyle}
            value={data.greeting}
            placeholder="Hello, I am"
            onChange={(e) =>
              onChange({
                ...data,
                greeting: e.target.value,
              })
            }
          />
        </div>

        <div>
          <label style={labelStyle}>Your Name</label>

          <input
            style={inputStyle}
            value={data.name}
            placeholder="Tushar Barik"
            onChange={(e) =>
              onChange({
                ...data,
                name: e.target.value,
              })
            }
          />
        </div>
      </div>

      {/* Roles */}
      <div style={{ marginBottom: 20 }}>
        <label style={labelStyle}>Typing Roles (comma separated)</label>

        <input
          style={inputStyle}
          value={rolesStr}
          onChange={(e) => handleRoles(e.target.value)}
          placeholder="Fullstack Developer, App Developer"
        />

        <div
          style={{
            marginTop: 14,
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
          }}
        >
          {data.roles.map((r, i) => (
            <div
              key={i}
              style={{
                background:
                  "linear-gradient(135deg, rgba(130,69,236,0.18), rgba(99,102,241,0.18))",
                border: "1px solid rgba(130,69,236,0.18)",
                color: "#fff",
                borderRadius: 999,
                padding: "10px 14px",
                fontSize: 13,
                fontWeight: 500,
                backdropFilter: "blur(10px)",
              }}
            >
              ✨ {r}
            </div>
          ))}
        </div>
      </div>

      {/* Bio */}
      <div style={{ marginBottom: 20 }}>
        <label style={labelStyle}>Bio / About Me</label>

        <textarea
          style={{
            ...inputStyle,
            minHeight: 140,
            resize: "vertical",
            lineHeight: 1.7,
          }}
          value={data.bio}
          placeholder="Write something amazing about yourself..."
          onChange={(e) =>
            onChange({
              ...data,
              bio: e.target.value,
            })
          }
        />
      </div>

      {/* Resume */}
      <div>
        <label style={labelStyle}>Resume / CV Link</label>

        <input
          style={inputStyle}
          value={data.resumeUrl}
          placeholder="https://drive.google.com/..."
          onChange={(e) =>
            onChange({
              ...data,
              resumeUrl: e.target.value,
            })
          }
        />

        {/* Preview */}
        <div
          style={{
            marginTop: 18,
            background: "rgba(255,255,255,0.04)",
            border,
            borderRadius: 18,
            padding: 18,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div>
            <div
              style={{
                color: "#fff",
                fontWeight: 600,
                marginBottom: 4,
              }}
            >
              Resume Preview
            </div>

            <div
              style={{
                fontSize: 12,
                color: "rgba(255,255,255,0.55)",
              }}
            >
              Your visitors can download your resume directly
            </div>
          </div>

          <a
            href={data.resumeUrl}
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: "none",
            }}
          >
            <button style={btnPrimary}>View Resume ↗</button>
          </a>
        </div>
      </div>
    </div>
  );
}

function SkillsSection({ data, onChange }) {
  const [newSkill, setNewSkill] = useState({});
  const [openSections, setOpenSections] = useState(
    data.reduce((acc, cat) => {
      acc[cat.id] = true;
      return acc;
    }, {}),
  );

  const toggleSection = (id) => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const addSkill = (catId) => {
    if (!newSkill[catId]?.trim()) return;

    onChange(
      data.map((cat) =>
        cat.id === catId
          ? {
              ...cat,
              skills: [...cat.skills, newSkill[catId].trim()],
            }
          : cat,
      ),
    );

    setNewSkill({
      ...newSkill,
      [catId]: "",
    });
  };

  const removeSkill = (catId, idx) => {
    onChange(
      data.map((cat) =>
        cat.id === catId
          ? {
              ...cat,
              skills: cat.skills.filter((_, i) => i !== idx),
            }
          : cat,
      ),
    );
  };

  const addCategory = () => {
    const newId = Date.now();

    onChange([
      ...data,
      {
        id: newId,
        title: "New Category",
        skills: [],
      },
    ]);

    setOpenSections((prev) => ({
      ...prev,
      [newId]: true,
    }));
  };

  const removeCategory = (id) => {
    onChange(data.filter((c) => c.id !== id));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
      {data.map((cat) => (
        <div
          key={cat.id}
          style={{
            background:
              "linear-gradient(145deg, rgba(18,18,35,0.95), rgba(10,10,20,0.95))",
            border: "1px solid rgba(130,69,236,0.15)",
            borderRadius: 22,
            overflow: "hidden",
            boxShadow: "0 8px 30px rgba(0,0,0,0.35)",
            backdropFilter: "blur(14px)",
            transition: "0.3s",
          }}
        >
          {/* Header */}
          <div
            onClick={() => toggleSection(cat.id)}
            style={{
              padding: "18px 20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "pointer",
              flexWrap: "wrap",
              gap: 12,
              background: openSections[cat.id]
                ? "rgba(130,69,236,0.08)"
                : "transparent",
              borderBottom: openSections[cat.id]
                ? "1px solid rgba(255,255,255,0.06)"
                : "none",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                flex: 1,
                minWidth: 0,
              }}
            >
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg,#8245ec,#a855f7,#6366f1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 18,
                  color: "#fff",
                  fontWeight: 700,
                  boxShadow: "0 4px 15px rgba(130,69,236,0.4)",
                }}
              >
                ⚡
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <input
                  style={{
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    outline: "none",
                    color: "#fff",
                    fontSize: 18,
                    fontWeight: 600,
                  }}
                  value={cat.title}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) =>
                    onChange(
                      data.map((c) =>
                        c.id === cat.id ? { ...c, title: e.target.value } : c,
                      ),
                    )
                  }
                />

                <div
                  style={{
                    fontSize: 12,
                    color: "rgba(255,255,255,0.55)",
                    marginTop: 3,
                  }}
                >
                  {cat.skills.length} Skills Added
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeCategory(cat.id);
                }}
                style={{
                  background: "rgba(226,75,74,0.1)",
                  color: "#ff6b6b",
                  border: "1px solid rgba(255,107,107,0.2)",
                  borderRadius: 10,
                  padding: "8px 12px",
                  cursor: "pointer",
                  fontSize: 12,
                  fontWeight: 600,
                }}
              >
                Remove
              </button>

              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 10,
                  background: "rgba(255,255,255,0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: 16,
                  transition: "0.3s",
                  transform: openSections[cat.id]
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                }}
              >
                ⌄
              </div>
            </div>
          </div>

          {/* Content */}
          {openSections[cat.id] && (
            <div
              style={{
                padding: 20,
                animation: "fadeIn 0.25s ease",
              }}
            >
              {/* Skills */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 10,
                  marginBottom: 18,
                }}
              >
                {cat.skills.map((sk, i) => (
                  <div
                    key={i}
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(130,69,236,0.18), rgba(99,102,241,0.18))",
                      border: "1px solid rgba(130,69,236,0.18)",
                      borderRadius: 999,
                      padding: "9px 14px",
                      fontSize: 13,
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      transition: "0.2s",
                    }}
                  >
                    <span>{sk}</span>

                    <span
                      onClick={() => removeSkill(cat.id, i)}
                      style={{
                        cursor: "pointer",
                        color: "#ff7b7b",
                        fontWeight: "bold",
                        fontSize: 13,
                      }}
                    >
                      ✕
                    </span>
                  </div>
                ))}
              </div>

              {/* Add Skill */}
              <div
                style={{
                  display: "flex",
                  gap: 12,
                  flexWrap: "wrap",
                }}
              >
                <input
                  style={{
                    flex: 1,
                    minWidth: 220,
                    padding: "14px 16px",
                    borderRadius: 14,
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: "rgba(255,255,255,0.04)",
                    color: "#fff",
                    fontSize: 14,
                    outline: "none",
                    backdropFilter: "blur(8px)",
                  }}
                  placeholder="Add skill..."
                  value={newSkill[cat.id] || ""}
                  onChange={(e) =>
                    setNewSkill({
                      ...newSkill,
                      [cat.id]: e.target.value,
                    })
                  }
                  onKeyDown={(e) => e.key === "Enter" && addSkill(cat.id)}
                />

                <button
                  onClick={() => addSkill(cat.id)}
                  style={{
                    background: "linear-gradient(135deg,#8245ec,#6366f1)",
                    color: "#fff",
                    border: "none",
                    borderRadius: 14,
                    padding: "0 24px",
                    minHeight: 48,
                    cursor: "pointer",
                    fontWeight: 600,
                    fontSize: 14,
                    boxShadow: "0 6px 20px rgba(130,69,236,0.35)",
                  }}
                >
                  + Add Skill
                </button>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Add Category */}
      <button
        onClick={addCategory}
        style={{
          width: "100%",
          border: "1px dashed rgba(130,69,236,0.35)",
          background: "rgba(130,69,236,0.05)",
          color: "#b892ff",
          padding: "18px",
          borderRadius: 20,
          cursor: "pointer",
          fontSize: 15,
          fontWeight: 600,
          transition: "0.3s",
        }}
      >
        ✨ Add Skill Category
      </button>
    </div>
  );
}

function ExperienceSection({ data, onChange }) {
  const [newSkill, setNewSkill] = useState({});

  const update = (id, field, val) =>
    onChange(data.map((e) => (e.id === id ? { ...e, [field]: val } : e)));

  const addSkill = (id) => {
    const s = (newSkill[id] || "").trim();
    if (!s) return;

    onChange(
      data.map((e) => (e.id === id ? { ...e, skills: [...e.skills, s] } : e)),
    );

    setNewSkill({ ...newSkill, [id]: "" });
  };

  const removeSkill = (id, idx) =>
    onChange(
      data.map((e) =>
        e.id === id
          ? {
              ...e,
              skills: e.skills.filter((_, i) => i !== idx),
            }
          : e,
      ),
    );

  const addExp = () =>
    onChange([
      ...data,
      {
        id: Date.now(),
        role: "",
        company: "",
        date: "",
        desc: "",
        skills: [],
      },
    ]);

  const removeExp = (id) => onChange(data.filter((e) => e.id !== id));

  return (
    <div className="space-y-6">
      {data.map((exp) => (
        <div
          key={exp.id}
          className="relative overflow-hidden rounded-3xl border border-purple-500/20 bg-[#0f0a24]/80 backdrop-blur-xl p-6 shadow-[0_0_40px_rgba(130,69,236,0.15)]"
        >
          {/* Glow */}
          <div className="absolute top-0 right-0 h-32 w-32 bg-purple-500/10 blur-3xl rounded-full"></div>

          {/* Header */}
          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-bold text-white">
                {exp.role || "New Experience"}
              </h3>
              <p className="text-sm text-purple-300">
                {exp.company || "Company Name"}
              </p>
            </div>

            <button
              onClick={() => removeExp(exp.id)}
              className="px-4 py-2 rounded-xl border border-red-500/30 text-red-400 hover:bg-red-500/10 transition"
            >
              Remove
            </button>
          </div>

          {/* Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="text-sm text-gray-300 mb-2 block">
                Role / Position
              </label>

              <input
                value={exp.role}
                onChange={(e) => update(exp.id, "role", e.target.value)}
                placeholder="Frontend Developer"
                className="w-full rounded-2xl border border-white/10 bg-[#140d2e] px-4 py-3 text-white outline-none focus:border-purple-500 transition"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300 mb-2 block">
                Company
              </label>

              <input
                value={exp.company}
                onChange={(e) => update(exp.id, "company", e.target.value)}
                placeholder="Google"
                className="w-full rounded-2xl border border-white/10 bg-[#140d2e] px-4 py-3 text-white outline-none focus:border-purple-500 transition"
              />
            </div>

            <div className="md:col-span-2">
              <label className="text-sm text-gray-300 mb-2 block">
                Date Range
              </label>

              <input
                value={exp.date}
                placeholder="June 2025 - July 2025"
                onChange={(e) => update(exp.id, "date", e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-[#140d2e] px-4 py-3 text-white outline-none focus:border-purple-500 transition"
              />
            </div>
          </div>

          {/* Description */}
          <div className="mt-5">
            <label className="text-sm text-gray-300 mb-2 block">
              Description
            </label>

            <textarea
              value={exp.desc}
              onChange={(e) => update(exp.id, "desc", e.target.value)}
              placeholder="Describe your work..."
              rows={5}
              className="w-full rounded-2xl border border-white/10 bg-[#140d2e] px-4 py-3 text-white outline-none resize-none focus:border-purple-500 transition"
            />
          </div>

          {/* Skills */}
          <div className="mt-5">
            <label className="text-sm text-gray-300 mb-3 block">
              Skills Used
            </label>

            <div className="flex flex-wrap gap-3 mb-4">
              {exp.skills.map((sk, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-200"
                >
                  {sk}

                  <button
                    onClick={() => removeSkill(exp.id, i)}
                    className="text-red-400 hover:text-red-300"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                value={newSkill[exp.id] || ""}
                placeholder="Add skill..."
                onChange={(e) =>
                  setNewSkill({
                    ...newSkill,
                    [exp.id]: e.target.value,
                  })
                }
                onKeyDown={(e) => e.key === "Enter" && addSkill(exp.id)}
                className="flex-1 rounded-2xl border border-white/10 bg-[#140d2e] px-4 py-3 text-white outline-none focus:border-purple-500 transition"
              />

              <button
                onClick={() => addSkill(exp.id)}
                className="rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-3 font-semibold text-white hover:scale-[1.02] transition"
              >
                + Add Skill
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Add Experience */}
      <button
        onClick={addExp}
        className="w-full rounded-3xl border border-dashed border-purple-500/40 bg-purple-500/5 py-4 text-purple-300 hover:bg-purple-500/10 transition"
      >
        + Add Experience
      </button>
    </div>
  );
}

function ProjectsSection({ data, onChange }) {
  const [newTag, setNewTag] = useState({});

  const update = (id, field, val) =>
    onChange(data.map((p) => (p.id === id ? { ...p, [field]: val } : p)));

  const addTag = (id) => {
    const t = (newTag[id] || "").trim();
    if (!t) return;

    onChange(
      data.map((p) => (p.id === id ? { ...p, tags: [...p.tags, t] } : p)),
    );

    setNewTag({ ...newTag, [id]: "" });
  };

  const removeTag = (id, idx) =>
    onChange(
      data.map((p) =>
        p.id === id
          ? {
              ...p,
              tags: p.tags.filter((_, i) => i !== idx),
            }
          : p,
      ),
    );

  const addProject = () =>
    onChange([
      ...data,
      {
        id: Date.now(),
        title: "",
        description: "",
        tags: [],
        github: "",
        webapp: "",
      },
    ]);

  const removeProject = (id) => onChange(data.filter((p) => p.id !== id));

  return (
    <div className="space-y-6">
      {data.map((proj) => (
        <div
          key={proj.id}
          className="rounded-3xl border border-purple-500/20 bg-[#0f0a24]/80 p-6 backdrop-blur-xl"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-bold text-white">
                {proj.title || "New Project"}
              </h3>

              <p className="text-sm text-purple-300">Portfolio Project</p>
            </div>

            <button
              onClick={() => removeProject(proj.id)}
              className="px-4 py-2 rounded-xl border border-red-500/30 text-red-400 hover:bg-red-500/10 transition"
            >
              Remove
            </button>
          </div>

          <div className="space-y-5">
            <div>
              <label className="text-sm text-gray-300 block mb-2">
                Project Title
              </label>

              <input
                value={proj.title}
                onChange={(e) => update(proj.id, "title", e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-[#140d2e] px-4 py-3 text-white outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300 block mb-2">
                Description
              </label>

              <textarea
                rows={5}
                value={proj.description}
                onChange={(e) => update(proj.id, "description", e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-[#140d2e] px-4 py-3 text-white outline-none resize-none focus:border-purple-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="text-sm text-gray-300 block mb-2">
                  GitHub URL
                </label>

                <input
                  value={proj.github}
                  onChange={(e) => update(proj.id, "github", e.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-[#140d2e] px-4 py-3 text-white outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="text-sm text-gray-300 block mb-2">
                  Live Demo URL
                </label>

                <input
                  value={proj.webapp}
                  onChange={(e) => update(proj.id, "webapp", e.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-[#140d2e] px-4 py-3 text-white outline-none focus:border-purple-500"
                />
              </div>
            </div>

            {/* Tags */}
            <div>
              <label className="text-sm text-gray-300 block mb-3">
                Tech Stack
              </label>

              <div className="flex flex-wrap gap-3 mb-4">
                {proj.tags.map((t, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-200"
                  >
                    {t}

                    <button
                      onClick={() => removeTag(proj.id, i)}
                      className="text-red-400"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  value={newTag[proj.id] || ""}
                  placeholder="Add technology..."
                  onChange={(e) =>
                    setNewTag({
                      ...newTag,
                      [proj.id]: e.target.value,
                    })
                  }
                  onKeyDown={(e) => e.key === "Enter" && addTag(proj.id)}
                  className="flex-1 rounded-2xl border border-white/10 bg-[#140d2e] px-4 py-3 text-white outline-none focus:border-purple-500"
                />

                <button
                  onClick={() => addTag(proj.id)}
                  className="rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-3 font-semibold text-white"
                >
                  + Add Tag
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={addProject}
        className="w-full rounded-3xl border border-dashed border-purple-500/40 bg-purple-500/5 py-4 text-purple-300 hover:bg-purple-500/10 transition"
      >
        + Add Project
      </button>
    </div>
  );
}

function EducationSection({ data, onChange }) {
  const update = (id, field, val) =>
    onChange(data.map((e) => (e.id === id ? { ...e, [field]: val } : e)));

  const addEdu = () =>
    onChange([
      ...data,
      {
        id: Date.now(),
        school: "",
        date: "",
        grade: "",
        degree: "",
        desc: "",
      },
    ]);

  const removeEdu = (id) => onChange(data.filter((e) => e.id !== id));

  return (
    <div className="space-y-6">
      {data.map((edu) => (
        <div
          key={edu.id}
          className="rounded-3xl border border-purple-500/20 bg-[#0f0a24]/80 p-6 backdrop-blur-xl"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-bold text-white">
                {edu.school || "New Education"}
              </h3>
            </div>

            <button
              onClick={() => removeEdu(edu.id)}
              className="px-4 py-2 rounded-xl border border-red-500/30 text-red-400 hover:bg-red-500/10 transition"
            >
              Remove
            </button>
          </div>

          <div className="space-y-5">
            <input
              value={edu.school}
              placeholder="Institution Name"
              onChange={(e) => update(edu.id, "school", e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-[#140d2e] px-4 py-3 text-white outline-none"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                value={edu.date}
                placeholder="Oct 2022 - Present"
                onChange={(e) => update(edu.id, "date", e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-[#140d2e] px-4 py-3 text-white outline-none"
              />

              <input
                value={edu.grade}
                placeholder="8.95 CGPA"
                onChange={(e) => update(edu.id, "grade", e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-[#140d2e] px-4 py-3 text-white outline-none"
              />
            </div>

            <input
              value={edu.degree}
              placeholder="Degree / Program"
              onChange={(e) => update(edu.id, "degree", e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-[#140d2e] px-4 py-3 text-white outline-none"
            />

            <textarea
              rows={4}
              value={edu.desc}
              placeholder="Description..."
              onChange={(e) => update(edu.id, "desc", e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-[#140d2e] px-4 py-3 text-white outline-none resize-none"
            />
          </div>
        </div>
      ))}

      <button
        onClick={addEdu}
        className="w-full rounded-3xl border border-dashed border-purple-500/40 bg-purple-500/5 py-4 text-purple-300 hover:bg-purple-500/10 transition"
      >
        + Add Education
      </button>
    </div>
  );
}

function ContactSection({ data, onChange }) {
  const fields = [
    {
      key: "email",
      label: "Email",
      placeholder: "you@example.com",
    },
    {
      key: "phone",
      label: "Phone",
      placeholder: "+91 9876543210",
    },
    {
      key: "github",
      label: "GitHub",
      placeholder: "https://github.com/username",
    },
    {
      key: "linkedin",
      label: "LinkedIn",
      placeholder: "https://linkedin.com/in/username",
    },
    {
      key: "twitter",
      label: "Twitter / X",
      placeholder: "https://twitter.com/username",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {fields.map((f) => (
        <div
          key={f.key}
          className="rounded-3xl border border-purple-500/20 bg-[#0f0a24]/80 p-5 backdrop-blur-xl"
        >
          <label className="text-sm text-purple-300 block mb-3">
            {f.label}
          </label>

          <input
            value={data[f.key] || ""}
            placeholder={f.placeholder}
            onChange={(e) =>
              onChange({
                ...data,
                [f.key]: e.target.value,
              })
            }
            className="w-full rounded-2xl border border-white/10 bg-[#140d2e] px-4 py-3 text-white outline-none focus:border-purple-500 transition"
          />
        </div>
      ))}
    </div>
  );
}

export default function PortfolioAdmin() {
  const [active, setActive] = useState("Hero");
  const [data, setData] = useState(initialData);
  const [toast, setToast] = useState(null);
  const [exported, setExported] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2800);
  };

  const handleSave = () => {
    localStorage.setItem("portfolioData", JSON.stringify(data));
    showToast("Changes saved successfully!");
  };

  const handleExport = () => {
    const json = JSON.stringify(data, null, 2);

    const blob = new Blob([json], {
      type: "application/json",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;
    a.download = "portfolio-data.json";

    a.click();

    URL.revokeObjectURL(url);

    setExported(true);

    showToast("portfolio-data.json downloaded!");
  };

  const navItems = SECTIONS.map((s) => ({
    label: s,
    icon: ICON[s.toLowerCase()],
    key: s,
  }));

  const sectionKey = active.toLowerCase();

  const completionStats = [
    {
      label: "Roles",
      val: data.hero.roles.length,
    },
    {
      label: "Skills",
      val: data.skills.length,
    },
    {
      label: "Experience",
      val: data.experience.length,
    },
    {
      label: "Projects",
      val: data.projects.length,
    },
    {
      label: "Education",
      val: data.education.length,
    },
  ];

  return (
    <div className="min-h-screen bg-[#050414] text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-purple-600/20 blur-[120px] rounded-full" />

      <div className="absolute bottom-[-100px] right-[-100px] w-[350px] h-[350px] bg-pink-500/20 blur-[120px] rounded-full" />

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex relative z-10">
        {/* Sidebar */}
        <aside
          className={`
          fixed lg:static top-0 left-0 h-screen w-[270px]
          bg-white/5 backdrop-blur-2xl
          border-r border-white/10
          z-50
          p-5
          transition-all duration-300
          ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }
        `}
        >
          {/* Logo */}
          <div className="mb-10">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Portfolio CMS
            </h1>

            <p className="text-gray-400 text-sm mt-2">Manage your portfolio</p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-2">
            {navItems.map((n) => (
              <button
                key={n.key}
                onClick={() => {
                  setActive(n.key);
                  setSidebarOpen(false);
                }}
                className={`
                  flex items-center gap-3
                  px-4 py-3 rounded-xl
                  transition-all duration-300
                  ${
                    active === n.key
                      ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg shadow-purple-500/20"
                      : "hover:bg-white/5 text-gray-300"
                  }
                `}
              >
                <span>{n.icon}</span>

                {n.label}
              </button>
            ))}
          </div>

          {/* Export Notice */}
          {exported && (
            <div className="mt-10 bg-white/5 border border-white/10 rounded-2xl p-4 text-sm text-gray-300 leading-6">
              📄 Import{" "}
              <code className="text-purple-400">portfolio-data.json</code> into
              your constants.js file.
            </div>
          )}
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-0 p-4 sm:p-6 lg:p-8">
          {/* Mobile Header */}
          <div className="flex items-center justify-between lg:hidden mb-6">
            <button
              onClick={() => setSidebarOpen(true)}
              className="bg-white/10 border border-white/10 rounded-xl px-4 py-2"
            >
              ☰
            </button>

            <h2 className="text-lg font-semibold">Portfolio Admin</h2>
          </div>

          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold">
                {active} Section
              </h2>

              <p className="text-gray-400 mt-2 text-sm sm:text-base">
                Manage your portfolio content professionally
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={handleExport}
                className="
                  px-5 py-3 rounded-xl
                  border border-white/10
                  bg-white/5
                  hover:bg-white/10
                  transition
                "
              >
                ⬇ Export JSON
              </button>

              <button
                onClick={handleSave}
                className="
                  px-5 py-3 rounded-xl
                  bg-gradient-to-r from-purple-600 to-pink-500
                  hover:scale-105
                  transition-all
                  shadow-lg shadow-purple-500/20
                "
              >
                {ICON.save} Save Changes
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">
            {completionStats.map((s) => (
              <div
                key={s.label}
                className="
                  bg-white/5
                  border border-white/10
                  rounded-2xl
                  p-5
                  backdrop-blur-xl
                "
              >
                <h3 className="text-3xl font-bold text-purple-400">{s.val}</h3>

                <p className="text-gray-400 mt-2 text-sm">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Content Panel */}
          <div
            className="
              bg-white/5
              border border-white/10
              rounded-3xl
              p-4 sm:p-6 lg:p-8
              backdrop-blur-xl
              shadow-2xl
            "
          >
            {/* Section Header */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center text-lg">
                {ICON[sectionKey]}
              </div>

              <div>
                <h3 className="text-2xl font-semibold">{active}</h3>

                <p className="text-sm text-gray-400">
                  Update your {active.toLowerCase()} section
                </p>
              </div>
            </div>

            {/* Sections */}
            {active === "Hero" && (
              <HeroSection
                data={data.hero}
                onChange={(v) =>
                  setData({
                    ...data,
                    hero: v,
                  })
                }
              />
            )}

            {active === "Skills" && (
              <SkillsSection
                data={data.skills}
                onChange={(v) =>
                  setData({
                    ...data,
                    skills: v,
                  })
                }
              />
            )}

            {active === "Experience" && (
              <ExperienceSection
                data={data.experience}
                onChange={(v) =>
                  setData({
                    ...data,
                    experience: v,
                  })
                }
              />
            )}

            {active === "Projects" && (
              <ProjectsSection
                data={data.projects}
                onChange={(v) =>
                  setData({
                    ...data,
                    projects: v,
                  })
                }
              />
            )}

            {active === "Education" && (
              <EducationSection
                data={data.education}
                onChange={(v) =>
                  setData({
                    ...data,
                    education: v,
                  })
                }
              />
            )}

            {active === "Contact" && (
              <ContactSection
                data={data.contact}
                onChange={(v) =>
                  setData({
                    ...data,
                    contact: v,
                  })
                }
              />
            )}

            {/* Footer */}
            <div className="mt-10 pt-6 border-t border-white/10 flex justify-end">
              <button
                onClick={handleSave}
                className="
                  px-6 py-3 rounded-xl
                  bg-gradient-to-r from-purple-600 to-pink-500
                  hover:scale-105
                  transition-all
                  shadow-lg shadow-purple-500/20
                "
              >
                {ICON.save} Save Changes
              </button>
            </div>
          </div>
        </main>
      </div>

      {/* Toast */}
      {toast && (
        <div
          className="
            fixed bottom-6 right-6
            bg-gradient-to-r from-purple-600 to-pink-500
            px-5 py-3
            rounded-xl
            shadow-2xl
            z-[100]
            animate-pulse
          "
        >
          {toast}
        </div>
      )}
    </div>
  );
}
