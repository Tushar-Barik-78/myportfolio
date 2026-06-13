import { useState, useRef, useEffect } from "react";
// FIND: import { savePortfolio, uploadImage } from "../api";
// CHANGE TO:
import { savePortfolio, uploadImage, saveCodingStats } from "../api";
const SECTIONS = [
  "Hero",
  "Skills",
  "Experience",
  "Projects",
  "Education",
  "Contact",
  "Stats",
];

const initialData = {
  hero: {
    name: "Tushar Barik",
    greeting: "Hii, I am",
    roles: ["Fullstack Developer", "App Developer", "Coder", "Problem Solver"],
    bio: "I am a full-stack developer with over 2 years of experience in building scalable web applications.",
    resumeUrl:
      "https://drive.google.com/file/d/1cFqxcrKFJfnJXrJXmE9HnmO18bdVKJl2/view",
    profileImage: "",
  },
  skills: [
    {
      id: 1,
      title: "Frontend",
      skills: [
        { name: "React JS", logo: "" },
        { name: "Tailwind CSS", logo: "" },
      ],
    },
    {
      id: 2,
      title: "Backend",
      skills: [
        { name: "Node JS", logo: "" },
        { name: "MongoDB", logo: "" },
      ],
    },
  ],
  experience: [
    {
      id: 1,
      role: "FullStack Developer",
      company: "Internpe",
      companyLogo: "",
      date: "June 2025 - July 2025",
      desc: "Developed scalable web applications using MERN Stack.",
      skills: ["React JS", "Node JS"],
    },
  ],
  projects: [
    {
      id: 1,
      title: "JobQuest",
      description: "A full-stack job portal.",
      image: "",
      tags: ["React JS", "Node JS"],
      github: "https://github.com/Tushar-Barik-78/JobQuest",
      webapp: "https://jobquest-tushar.onrender.com/",
    },
  ],
  education: [
    {
      id: 1,
      school: "Ajay Binay Institute of Technology",
      schoolLogo: "",
      date: "2022 - Present",
      grade: "8.95 CGPA",
      degree: "B.Tech CSE",
      desc: "Pursuing B.Tech in Computer Science.",
    },
  ],
  contact: { email: "", phone: "", github: "", linkedin: "", twitter: "" },
  codingStats: {
    usernames: {
      leetcode: "",
      gfg: "",
      github: "",
      hackerrank: "",
      codechef: "",
    },
    manual: {
      leetcode: {
        totalSolved: 0,
        easySolved: 0,
        mediumSolved: 0,
        hardSolved: 0,
        rating: 0,
        attended: 0,
      },
      gfg: {
        totalSolved: 0,
        easy: 0,
        medium: 0,
        hard: 0,
        score: 0,
        streak: 0,
        maxStreak: 0,
      },
      github: { publicRepos: 0, totalStars: 0, followers: 0 },
      hackerrank: { stars: 0, badges: 0 },
      codechef: { rating: 0, stars: "" },
    },
  },
};

const ICON = {
  Hero: "🏠",
  Skills: "⚡",
  Experience: "💼",
  Projects: "🚀",
  Education: "🎓",
  Contact: "📬",
  Stats: "📊",
};

// ─── Reusable Image Upload Box ────────────────────────────────────────────
function ImageUploadBox({
  label,
  currentUrl,
  onUploaded,
  shape = "square",
  hint = "",
}) {
  const inputRef = useRef();
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(currentUrl || "");

  const handleFile = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    // Instant local preview
    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result);
    reader.readAsDataURL(file);
    // Upload to Cloudinary
    setUploading(true);
    try {
      const res = await uploadImage(file);
      const url = res.data.url;
      setPreview(url);
      onUploaded(url);
    } catch (err) {
      console.error("Upload failed:", err);
    } finally {
      setUploading(false);
    }
  };

  const previewStyle =
    shape === "circle"
      ? {
          width: 80,
          height: 80,
          borderRadius: "50%",
          objectFit: "cover",
          border: "2px solid rgba(130,69,236,0.4)",
        }
      : {
          width: "100%",
          maxHeight: 200,
          borderRadius: 12,
          objectFit: "cover",
          border: "1px solid rgba(130,69,236,0.3)",
        };

  const placeholderStyle =
    shape === "circle"
      ? {
          width: 80,
          height: 80,
          borderRadius: "50%",
          background: "rgba(130,69,236,0.1)",
          border: "2px dashed rgba(130,69,236,0.35)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 4,
          cursor: "pointer",
          flexShrink: 0,
        }
      : {
          width: "100%",
          minHeight: 130,
          borderRadius: 12,
          background: "rgba(130,69,236,0.06)",
          border: "2px dashed rgba(130,69,236,0.25)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 6,
          cursor: "pointer",
        };

  return (
    <div>
      {label && (
        <label
          style={{
            fontSize: 12,
            color: "rgba(255,255,255,0.6)",
            marginBottom: 10,
            display: "block",
            fontWeight: 600,
            letterSpacing: 0.4,
          }}
        >
          {label}
        </label>
      )}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        {/* Preview or placeholder */}
        {preview ? (
          <div
            style={{
              position: "relative",
              flexShrink: 0,
              ...(shape === "square" ? { width: "100%" } : {}),
            }}
          >
            <img src={preview} alt="preview" style={previewStyle} />
            {uploading && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: shape === "circle" ? "50%" : 12,
                  background: "rgba(0,0,0,0.6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: 24,
                    height: 24,
                    border: "2px solid #a78bfa",
                    borderTopColor: "transparent",
                    borderRadius: "50%",
                    animation: "spin 0.8s linear infinite",
                  }}
                />
              </div>
            )}
          </div>
        ) : (
          <div
            style={{
              ...(shape === "square" ? { width: "100%" } : {}),
              ...placeholderStyle,
            }}
            onClick={() => inputRef.current?.click()}
          >
            <span style={{ fontSize: shape === "circle" ? 24 : 32 }}>📷</span>
            <span
              style={{
                fontSize: 12,
                color: "rgba(255,255,255,0.4)",
                textAlign: "center",
                padding: "0 8px",
              }}
            >
              {shape === "circle" ? "Upload logo" : "Click to upload image"}
            </span>
          </div>
        )}
        {/* Buttons */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <button
            onClick={() => inputRef.current?.click()}
            style={{
              background: "linear-gradient(135deg,#8245ec,#6366f1)",
              color: "#fff",
              border: "none",
              borderRadius: 10,
              padding: "9px 18px",
              cursor: "pointer",
              fontSize: 13,
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: 8,
              whiteSpace: "nowrap",
            }}
          >
            📁 Choose File
          </button>
          {uploading && (
            <span style={{ fontSize: 11, color: "#a78bfa" }}>
              Uploading to Cloudinary...
            </span>
          )}
          {hint && !uploading && (
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.35)" }}>
              {hint}
            </span>
          )}
          {preview && !uploading && (
            <button
              onClick={() => {
                setPreview("");
                onUploaded("");
              }}
              style={{
                background: "rgba(255,77,79,0.1)",
                color: "#ff6b6b",
                border: "1px solid rgba(255,107,107,0.2)",
                borderRadius: 8,
                padding: "6px 12px",
                cursor: "pointer",
                fontSize: 12,
              }}
            >
              ✕ Remove
            </button>
          )}
        </div>
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleFile}
        style={{ display: "none" }}
      />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────
function HeroSection({ data, onChange }) {
  const [rolesStr, setRolesStr] = useState(data?.roles?.join(", "));
  const resumeInputRef = useRef();
  const [resumeUploading, setResumeUploading] = useState(false);

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

  const handleResumeUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setResumeUploading(true);
    try {
      const res = await uploadImage(file);
      onChange({ ...data, resumeUrl: res.data.url });
    } catch (err) {
      console.error("Resume upload failed:", err);
    } finally {
      setResumeUploading(false);
    }
  };

  const inp = {
    width: "100%",
    padding: "13px 16px",
    borderRadius: 14,
    border: "1px solid rgba(255,255,255,0.08)",
    background: "rgba(255,255,255,0.05)",
    color: "#fff",
    fontSize: 14,
    outline: "none",
    boxSizing: "border-box",
  };
  const lbl = {
    fontSize: 12,
    color: "rgba(255,255,255,0.6)",
    marginBottom: 8,
    display: "block",
    fontWeight: 600,
    letterSpacing: 0.4,
  };
  const box = {
    background: "rgba(130,69,236,0.06)",
    border: "1px solid rgba(130,69,236,0.15)",
    borderRadius: 20,
    padding: 20,
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {/* Profile Photo */}
      <div style={box}>
        <ImageUploadBox
          label="Profile Photo"
          currentUrl={data?.profileImage}
          onUploaded={(url) => onChange({ ...data, profileImage: url })}
          shape="circle"
          hint="Square image recommended, min 300×300px"
        />
      </div>

      {/* Name + Greeting */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 16,
        }}
      >
        <div>
          <label style={lbl}>Greeting Text</label>
          <input
            style={inp}
            value={data?.greeting}
            placeholder="Hello, I am"
            onChange={(e) => onChange({ ...data, greeting: e.target.value })}
          />
        </div>
        <div>
          <label style={lbl}>Your Name</label>
          <input
            style={inp}
            value={data?.name}
            placeholder="Tushar Barik"
            onChange={(e) => onChange({ ...data, name: e.target.value })}
          />
        </div>
      </div>

      {/* Roles */}
      <div>
        <label style={lbl}>Typing Roles (comma separated)</label>
        <input
          style={inp}
          value={rolesStr}
          onChange={(e) => handleRoles(e.target.value)}
          placeholder="Fullstack Developer, App Developer"
        />
        <div
          style={{ marginTop: 12, display: "flex", flexWrap: "wrap", gap: 8 }}
        >
          {data?.roles?.map((r, i) => (
            <span
              key={i}
              style={{
                background: "rgba(130,69,236,0.18)",
                border: "1px solid rgba(130,69,236,0.2)",
                color: "#d8b4fe",
                borderRadius: 999,
                padding: "8px 14px",
                fontSize: 13,
              }}
            >
              ✨ {r}
            </span>
          ))}
        </div>
      </div>

      {/* Bio */}
      <div>
        <label style={lbl}>Bio / About Me</label>
        <textarea
          style={{
            ...inp,
            minHeight: 130,
            resize: "vertical",
            lineHeight: 1.7,
          }}
          value={data?.bio}
          placeholder="Write about yourself..."
          onChange={(e) => onChange({ ...data, bio: e.target.value })}
        />
      </div>

      {/* Resume */}
      <div style={box}>
        <label style={lbl}>Resume / CV</label>
        <label style={{ ...lbl, marginTop: 0 }}>
          Option 1 — Paste a Google Drive / any URL
        </label>
        <input
          style={inp}
          value={data?.resumeUrl}
          placeholder="https://drive.google.com/..."
          onChange={(e) => onChange({ ...data, resumeUrl: e.target.value })}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            margin: "16px 0",
          }}
        >
          <div
            style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.08)" }}
          />
          <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 12 }}>
            OR
          </span>
          <div
            style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.08)" }}
          />
        </div>

        <label style={{ ...lbl, marginBottom: 10 }}>
          Option 2 — Upload from device (PDF / DOC / Image)
        </label>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => resumeInputRef.current?.click()}
            style={{
              background: "linear-gradient(135deg,#8245ec,#6366f1)",
              color: "#fff",
              border: "none",
              borderRadius: 12,
              padding: "11px 20px",
              cursor: "pointer",
              fontSize: 14,
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            📄 Choose Resume File
          </button>
          {resumeUploading && (
            <span style={{ color: "#a78bfa", fontSize: 13 }}>Uploading...</span>
          )}
          {data?.resumeUrl && !resumeUploading && (
            <a
              href={data.resumeUrl}
              target="_blank"
              rel="noreferrer"
              style={{ color: "#a78bfa", fontSize: 13 }}
            >
              View current resume ↗
            </a>
          )}
        </div>
        <input
          ref={resumeInputRef}
          type="file"
          accept=".pdf,.doc,.docx,image/*"
          onChange={handleResumeUpload}
          style={{ display: "none" }}
        />
        <p
          style={{
            color: "rgba(255,255,255,0.3)",
            fontSize: 11,
            marginTop: 10,
          }}
        >
          Accepted: PDF, DOC, DOCX, Images — uploaded to Cloudinary, URL
          auto-fills above
        </p>
      </div>
    </div>
  );
}

// function SkillsSection({ data, onChange }) {
//   const [newSkillName, setNewSkillName] = useState({});
//   const [openSections, setOpenSections] = useState(
//     data?.reduce((a, c) => {
//       a[c.id] = true;
//       return a;
//     }, {}),
//   );

//   console.log(data);
  


//   const toggleSection = (id) =>
//     setOpenSections((p) => ({ ...p, [id]: !p[id] }));

//   // Logo upload for new skill being added

//   const addSkill = (catId) => {
//     if (!newSkillName[catId]?.trim()) return;
//     onChange(
//       data.map((cat) =>
//         cat.id === catId
//           ? {
//               ...cat,
//               skills: [
//                 ...cat.skills,
//                 {
//                   name: newSkillName[catId].trim(),
//                 },
//               ],
//             }
//           : cat,
//       ),
//     );
//     setNewSkillName((p) => ({ ...p, [catId]: "" }));
//   };

//   const removeSkill = (catId, idx) =>
//     onChange(
//       data?.map((cat) =>
//         cat.id === catId
//           ? { ...cat, skills: cat.skills.filter((_, i) => i !== idx) }
//           : cat,
//       ),
//     );

//   const addCategory = () => {
//     const id = Date.now();
//     onChange([...data, { id, title: "New Category", skills: [] }]);
//     setOpenSections((p) => ({ ...p, [id]: true }));
//   };

//   const removeCategory = (id) => onChange(data.filter((c) => c.id !== id));

//   const inputCls =
//     "w-full rounded-2xl border border-white/10 bg-[#140d2e] px-4 py-3 text-white outline-none focus:border-purple-500 transition";

//   return (
//     <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
//       {data?.map((cat) => (
//         <div
//           key={cat._id}
//           style={{
//             background:
//               "linear-gradient(145deg,rgba(18,18,35,.95),rgba(10,10,20,.95))",
//             border: "1px solid rgba(130,69,236,0.15)",
//             borderRadius: 22,
//             overflow: "hidden",
//           }}
//         >
//           {/* Category Header */}
//           <div
//             onClick={() => toggleSection(cat.id)}
//             style={{
//               padding: "18px 20px",
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//               cursor: "pointer",
//               flexWrap: "wrap",
//               gap: 12,
//               background: openSections[cat.id]
//                 ? "rgba(130,69,236,0.08)"
//                 : "transparent",
//               borderBottom: openSections[cat.id]
//                 ? "1px solid rgba(255,255,255,0.06)"
//                 : "none",
//             }}
//           >
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: 14,
//                 flex: 1,
//                 minWidth: 0,
//               }}
//             >
//               <div
//                 style={{
//                   width: 42,
//                   height: 42,
//                   borderRadius: "50%",
//                   background: "linear-gradient(135deg,#8245ec,#a855f7)",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   fontSize: 18,
//                   flexShrink: 0,
//                 }}
//               >
//                 ⚡
//               </div>
//               <div style={{ flex: 1, minWidth: 0 }}>
//                 <input
//                   style={{
//                     width: "100%",
//                     background: "transparent",
//                     border: "none",
//                     outline: "none",
//                     color: "#fff",
//                     fontSize: 18,
//                     fontWeight: 600,
//                   }}
//                   value={cat.title}
//                   onClick={(e) => e.stopPropagation()}
//                   onChange={(e) =>
//                     onChange(
//                       data.map((c) =>
//                         c.id === cat.id ? { ...c, title: e.target.value } : c,
//                       ),
//                     )
//                   }
//                 />
//                 <div
//                   style={{
//                     fontSize: 12,
//                     color: "rgba(255,255,255,0.45)",
//                     marginTop: 2,
//                   }}
//                 >
//                   {cat?.skills?.length} skills
//                 </div>
//               </div>
//             </div>
//             <div style={{ display: "flex", gap: 10 }}>
//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   removeCategory(cat.id);
//                 }}
//                 style={{
//                   background: "rgba(226,75,74,0.1)",
//                   color: "#ff6b6b",
//                   border: "1px solid rgba(255,107,107,0.2)",
//                   borderRadius: 10,
//                   padding: "8px 12px",
//                   cursor: "pointer",
//                   fontSize: 12,
//                   fontWeight: 600,
//                 }}
//               >
//                 Remove
//               </button>
//               <div
//                 style={{
//                   width: 34,
//                   height: 34,
//                   borderRadius: 10,
//                   background: "rgba(255,255,255,0.06)",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   color: "#fff",
//                   transition: "0.3s",
//                   transform: openSections[cat.id]
//                     ? "rotate(180deg)"
//                     : "rotate(0deg)",
//                 }}
//               >
//                 ⌄
//               </div>
//             </div>
//           </div>

//           {openSections[cat.id] && (
//             <div style={{ padding: 20 }}>
//               {/* Existing Skills */}
//               <div
//                 style={{
//                   display: "flex",
//                   flexWrap: "wrap",
//                   gap: 10,
//                   marginBottom: 20,
//                 }}
//               >
//                 {cat.skills.map((sk, i) => (
//                   <div
//                     key={i}
//                     style={{
//                       background: "rgba(130,69,236,0.18)",
//                       border: "1px solid rgba(130,69,236,0.18)",
//                       borderRadius: 999,
//                       padding: "8px 14px",
//                       fontSize: 13,
//                       color: "#fff",
//                       display: "flex",
//                       alignItems: "center",
//                       gap: 8,
//                     }}
//                   >
//                     {sk.logo ? (
//                       <img
//                         src={sk.logo}
//                         alt={sk.name}
//                         style={{
//                           width: 22,
//                           height: 22,
//                           objectFit: "contain",
//                           borderRadius: "50%",
//                           background: "#fff",
//                           padding: 2,
//                         }}
//                       />
//                     ) : (
//                       <span style={{ fontSize: 16 }}>🔧</span>
//                     )}
//                     <span>{sk.name}</span>
//                     <span
//                       onClick={() => removeSkill(cat.id, i)}
//                       style={{
//                         cursor: "pointer",
//                         color: "#ff7b7b",
//                         fontWeight: "bold",
//                       }}
//                     >
//                       ✕
//                     </span>
//                   </div>
//                 ))}
//                 {cat.skills.length === 0 && (
//                   <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 13 }}>
//                     No skills yet — add one below
//                   </p>
//                 )}
//               </div>

//               {/* Add New Skill */}
//               <div
//                 style={{
//                   background: "rgba(130,69,236,0.06)",
//                   border: "1px solid rgba(130,69,236,0.15)",
//                   borderRadius: 16,
//                   padding: 16,
//                 }}
//               >
//                 <p
//                   style={{
//                     color: "rgba(255,255,255,0.55)",
//                     fontSize: 12,
//                     fontWeight: 600,
//                     marginBottom: 14,
//                     letterSpacing: 0.4,
//                   }}
//                 >
//                   ADD NEW SKILL
//                 </p>

//                 {/* Skill Name */}
//                 <div style={{ marginBottom: 14 }}>
//                   <label
//                     style={{
//                       fontSize: 12,
//                       color: "rgba(255,255,255,0.5)",
//                       marginBottom: 6,
//                       display: "block",
//                     }}
//                   >
//                     Skill Name
//                   </label>
//                   <input
//                     className={inputCls}
//                     placeholder="e.g. React JS"
//                     value={newSkillName[cat.id] || ""}
//                     onChange={(e) =>
//                       setNewSkillName((p) => ({
//                         ...p,
//                         [cat.id]: e.target.value,
//                       }))
//                     }
//                     onKeyDown={(e) => e.key === "Enter" && addSkill(cat.id)}
//                   />
//                 </div>

              

//                 {/* Add Button */}
//                 <button
//                   onClick={() => addSkill(cat.id)}
//                   disabled={
//                     !newSkillName[cat.id]?.trim()
//                   }
//                   style={{
//                     background: "linear-gradient(135deg,#8245ec,#6366f1)",
//                     color: "#fff",
//                     border: "none",
//                     borderRadius: 14,
//                     padding: "12px 24px",
//                     cursor: "pointer",
//                     fontWeight: 600,
//                     fontSize: 14,
//                     opacity:
//                       !newSkillName[cat.id]?.trim() 
//                         ? 0.5
//                         : 1,
//                   }}
//                 >
//                   + Add Skill
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       ))}

//       <button
//         onClick={addCategory}
//         style={{
//           width: "100%",
//           border: "1px dashed rgba(130,69,236,0.35)",
//           background: "rgba(130,69,236,0.05)",
//           color: "#b892ff",
//           padding: "18px",
//           borderRadius: 20,
//           cursor: "pointer",
//           fontSize: 15,
//           fontWeight: 600,
//         }}
//       >
//         ✨ Add Skill Category
//       </button>
//     </div>
//   );
// }


// import React, { useState } from 'react';

function SkillsSection({ data, onChange }) {
  const [newSkillName, setNewSkillName] = useState({});
  const [openSections, setOpenSections] = useState(
    // 1. Yahan c.id ki jagah c._id kiya taaki initial state sahi bane
    data?.reduce((a, c) => {
      a[c._id] = false;
      return a;
    }, {}),
  );

  console.log(data);

  // 2. toggleSection me id ab hamesha _id hogi
  const toggleSection = (id) =>
    setOpenSections((p) => ({ ...p, [id]: !p[id] }));

  const addSkill = (catId) => {
    if (!newSkillName[catId]?.trim()) return;
    onChange(
      data.map((cat) =>
        // 3. cat.id ki jagah cat._id
        cat._id === catId
          ? {
              ...cat,
              skills: [
                ...cat.skills,
                {
                  name: newSkillName[catId].trim(),
                },
              ],
            }
          : cat,
      ),
    );
    setNewSkillName((p) => ({ ...p, [catId]: "" }));
  };

  const removeSkill = (catId, idx) =>
    onChange(
      data?.map((cat) =>
        // 4. cat.id ki jagah cat._id
        cat._id === catId
          ? { ...cat, skills: cat.skills.filter((_, i) => i !== idx) }
          : cat,
      ),
    );

  const addCategory = () => {
    // 5. Naye category ke liye hum _id standard maintain kar rahe hain
    const _id = Date.now().toString(); 
    onChange([...data, { _id, title: "New Category", skills: [] }]);
    setOpenSections((p) => ({ ...p, [_id]: true }));
  };

  const removeCategory = (id) => onChange(data.filter((c) => c._id !== id)); // 6. c.id -> c._id

  const inputCls =
    "w-full rounded-2xl border border-white/10 bg-[#140d2e] px-4 py-3 text-white outline-none focus:border-purple-500 transition";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
      {data?.map((cat) => (
        <div
          key={cat._id} // Yeh pehle se sahi tha
          style={{
            background:
              "linear-gradient(145deg,rgba(18,18,35,.95),rgba(10,10,20,.95))",
            border: "1px solid rgba(130,69,236,0.15)",
            borderRadius: 22,
            overflow: "hidden",
          }}
        >
          {/* Category Header */}
          <div
            onClick={() => toggleSection(cat._id)} // 7. cat.id -> cat._id
            style={{
              padding: "18px 20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "pointer",
              flexWrap: "wrap",
              gap: 12,
              background: openSections[cat._id] // 8. cat.id -> cat._id
                ? "rgba(130,69,236,0.08)"
                : "transparent",
              borderBottom: openSections[cat._id] // 9. cat.id -> cat._id
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
                  background: "linear-gradient(135deg,#8245ec,#a855f7)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 18,
                  flexShrink: 0,
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
                        // 10. c.id -> c._id aur cat.id -> cat._id
                        c._id === cat._id ? { ...c, title: e.target.value } : c,
                      ),
                    )
                  }
                />
                <div
                  style={{
                    fontSize: 12,
                    color: "rgba(255,255,255,0.45)",
                    marginTop: 2,
                  }}
                >
                  {cat?.skills?.length} skills
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeCategory(cat._id); // 11. cat.id -> cat._id
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
                  transition: "0.3s",
                  transform: openSections[cat._id] // 12. cat.id -> cat._id
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                }}
              >
                ⌄
              </div>
            </div>
          </div>

          {openSections[cat._id] && ( // 13. cat.id -> cat._id
            <div style={{ padding: 20 }}>
              {/* Existing Skills */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 10,
                  marginBottom: 20,
                }}
              >
                {cat.skills.map((sk, i) => (
                  <div
                    key={i}
                    style={{
                      background: "rgba(130,69,236,0.18)",
                      border: "1px solid rgba(130,69,236,0.18)",
                      borderRadius: 999,
                      padding: "8px 14px",
                      fontSize: 13,
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    {sk.logo ? (
                      <img
                        src={sk.logo}
                        alt={sk.name}
                        style={{
                          width: 22,
                          height: 22,
                          objectFit: "contain",
                          borderRadius: "50%",
                          background: "#fff",
                          padding: 2,
                        }}
                      />
                    ) : (
                      <span style={{ fontSize: 16 }}>🔧</span>
                    )}
                    <span>{sk.name}</span>
                    <span
                      onClick={() => removeSkill(cat._id, i)} // 14. cat.id -> cat._id
                      style={{
                        cursor: "pointer",
                        color: "#ff7b7b",
                        fontWeight: "bold",
                      }}
                    >
                      ✕
                    </span>
                  </div>
                ))}
                {cat.skills.length === 0 && (
                  <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 13 }}>
                    No skills yet — add one below
                  </p>
                )}
              </div>

              {/* Add New Skill */}
              <div
                style={{
                  background: "rgba(130,69,236,0.06)",
                  border: "1px solid rgba(130,69,236,0.15)",
                  borderRadius: 16,
                  padding: 16,
                }}
              >
                <p
                  style={{
                    color: "rgba(255,255,255,0.55)",
                    fontSize: 12,
                    fontWeight: 600,
                    marginBottom: 14,
                    letterSpacing: 0.4,
                  }}
                >
                  ADD NEW SKILL
                </p>

                {/* Skill Name */}
                <div style={{ marginBottom: 14 }}>
                  <label
                    style={{
                      fontSize: 12,
                      color: "rgba(255,255,255,0.5)",
                      marginBottom: 6,
                      display: "block",
                    }}
                  >
                    Skill Name
                  </label>
                  <input
                    className={inputCls}
                    placeholder="e.g. React JS"
                    value={newSkillName[cat._id] || ""} // 15. cat.id -> cat._id
                    onChange={(e) =>
                      setNewSkillName((p) => ({
                        ...p,
                        [cat._id]: e.target.value, // 16. cat.id -> cat._id
                      }))
                    }
                    onKeyDown={(e) => e.key === "Enter" && addSkill(cat._id)} // 17. cat.id -> cat._id
                  />
                </div>

                {/* Add Button */}
                <button
                  onClick={() => addSkill(cat._id)} // 18. cat.id -> cat._id
                  disabled={
                    !newSkillName[cat._id]?.trim() // 19. cat.id -> cat._id
                  }
                  style={{
                    background: "linear-gradient(135deg,#8245ec,#6366f1)",
                    color: "#fff",
                    border: "none",
                    borderRadius: 14,
                    padding: "12px 24px",
                    cursor: "pointer",
                    fontWeight: 600,
                    fontSize: 14,
                    opacity:
                      !newSkillName[cat._id]?.trim() // 20. cat.id -> cat._id
                        ? 0.5
                        : 1,
                  }}
                >
                  + Add Skill
                </button>
              </div>
            </div>
          )}
        </div>
      ))}

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
        }}
      >
        ✨ Add Skill Category
      </button>
    </div>
  );
}

// export default SkillsSection;

// ─── Experience Section ───────────────────────────────────────────────────
function ExperienceSection({ data, onChange }) {
  const [newSkill, setNewSkill] = useState({});
  const [openCards, setOpenCards] = useState({});

  const toggleCard = (id) => setOpenCards((p) => ({ ...p, [id]: !p[id] }));
  const update = (id, field, val) =>
    onChange(
      data.map((e) =>
        e._id === id || e.id === id ? { ...e, [field]: val } : e,
      ),
    );
  const addSkill = (id) => {
    const s = (newSkill[id] || "")
      .trim()
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    if (!s.length) return;
    onChange(
      data.map((e) =>
        e._id === id || e.id === id ? { ...e, skills: [...e.skills, ...s] } : e,
      ),
    );
    setNewSkill({ ...newSkill, [id]: "" });
  };
  const removeSkill = (id, idx) =>
    onChange(
      data.map((e) =>
        e._id === id || e.id === id
          ? { ...e, skills: e.skills.filter((_, i) => i !== idx) }
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
        companyLogo: "",
        date: "",
        mode: "",
        desc: "",
        skills: [],
      },
    ]);
  const removeExp = (id) =>
    onChange(data.filter((e) => e._id !== id && e.id !== id));
  const inputCls =
    "w-full rounded-2xl border border-white/10 bg-[#140d2e]/90 px-4 py-3 text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-[#8245ec] focus:bg-[#1a1238] focus:shadow-[0_0_0_4px_rgba(130,69,236,0.15)]";

  return (
    <div className="space-y-6">
      {data?.map((exp) => {
        const id = exp._id || exp.id; // support both _id (from DB) and id (new entries)
        const isOpen = openCards[id] ?? false;

        return (
          <div
            key={id}
            className="group relative overflow-hidden rounded-[30px] border border-purple-500/20 bg-[linear-gradient(145deg,rgba(15,10,36,.96),rgba(10,8,24,.96))] p-5 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-300 hover:border-purple-500/40 hover:shadow-[0_15px_60px_rgba(130,69,236,0.18)] sm:p-6"
          >
            {/* Glow Effects */}
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-pink-500/10 blur-3xl" />

            {/* Header */}
            <div className="relative mb-5 flex flex-wrap items-center justify-between gap-4">
              <div className="flex min-w-0 items-center gap-4">
                {/* Logo */}
                {exp.companyLogo ? (
                  <img
                    src={exp.companyLogo}
                    alt="logo"
                    className="h-16 w-16 flex-shrink-0 rounded-2xl border border-white/10 object-cover shadow-lg"
                  />
                ) : (
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl border border-dashed border-white/10 bg-[#140d2e] text-xs text-gray-500">
                    Logo
                  </div>
                )}

                {/* Info */}
                <div className="min-w-0">
                  <h3 className="truncate text-lg font-bold text-white sm:text-[22px]">
                    {exp.role || "New Experience"}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-purple-300">
                    {exp.company || "Company Name"}
                  </p>

                  <div className="mt-2 flex items-center gap-2 text-[11px] text-gray-500">
                    <div className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                    Experience Card
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => toggleCard(id)}
                  className="rounded-xl border border-purple-500/30 bg-purple-500/5 px-4 py-2 text-sm font-medium text-purple-300 transition-all duration-300 hover:bg-purple-500/10"
                >
                  {isOpen ? "Close" : "Open"}
                </button>

                <button
                  onClick={() => removeExp(id)}
                  className="rounded-xl border border-red-500/30 bg-red-500/5 px-4 py-2 text-sm font-medium text-red-400 transition-all duration-300 hover:bg-red-500/10"
                >
                  Remove
                </button>
              </div>
            </div>

            {isOpen && (
              <div className="relative space-y-5">
                {/* Upload Section */}
                <div className="rounded-3xl border border-purple-500/15 bg-[rgba(130,69,236,0.06)] p-5 backdrop-blur-xl">
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white">
                      Company Branding
                    </h4>
                    <p className="mt-1 text-[12px] text-gray-400">
                      Upload company logo for better presentation
                    </p>
                  </div>

                  <ImageUploadBox
                    label="Company Logo"
                    currentUrl={exp.companyLogo}
                    onUploaded={(url) => update(id, "companyLogo", url)}
                    shape="circle"
                    hint="PNG/JPG square recommended"
                  />
                </div>

                {/* Inputs */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {/* Role */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-300">
                      Role / Position
                    </label>

                    <input
                      value={exp.role}
                      onChange={(e) => update(id, "role", e.target.value)}
                      placeholder="Frontend Developer"
                      className={inputCls}
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-300">
                      Company
                    </label>

                    <input
                      value={exp.company}
                      onChange={(e) => update(id, "company", e.target.value)}
                      placeholder="Google"
                      className={inputCls}
                    />
                  </div>

                  {/* Date */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-300">
                      Date Range
                    </label>

                    <input
                      value={exp.date}
                      onChange={(e) => update(id, "date", e.target.value)}
                      placeholder="June 2025 - July 2025"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-300">
                      Mode of Work
                    </label>

                    <input
                      value={exp.mode}
                      onChange={(e) => update(id, "mode", e.target.value)}
                      placeholder="Remote / On-site / Hybrid"
                      className={inputCls}
                    />
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Description
                  </label>

                  <textarea
                    value={exp.desc}
                    onChange={(e) => update(id, "desc", e.target.value)}
                    placeholder="Describe your work and achievements..."
                    rows={5}
                    className={`${inputCls} resize-none`}
                  />
                </div>

                {/* Skills */}
                <div className="rounded-3xl border border-purple-500/15 bg-white/[0.02] p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        Skills Used
                      </h4>

                      <p className="mt-1 text-[12px] text-gray-400">
                        Technologies used in this experience
                      </p>
                    </div>

                    <div className="rounded-xl bg-purple-500/10 px-3 py-1 text-[11px] text-purple-300">
                      {exp.skills.length} Skills
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="mb-5 flex flex-wrap gap-3">
                    {exp.skills.map((sk, i) => (
                      <div
                        key={`${sk}-${i}`}
                        className="flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-200 transition-all duration-300 hover:bg-purple-500/20"
                      >
                        <span>{sk}</span>

                        <button
                          onClick={() => removeSkill(id, i)}
                          className="text-red-400 transition-all hover:text-red-300"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Add Skill */}
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <input
                      value={newSkill[id] || ""}
                      placeholder="Add skill (comma separated)..."
                      onChange={(e) =>
                        setNewSkill({
                          ...newSkill,
                          [id]: e.target.value,
                        })
                      }
                      onKeyDown={(e) => e.key === "Enter" && addSkill(id)}
                      className={`${inputCls} flex-1`}
                    />

                    <button
                      onClick={() => addSkill(id)}
                      className="rounded-2xl bg-gradient-to-r from-purple-600 via-[#8245ec] to-pink-500 px-6 py-3 font-semibold text-white shadow-lg shadow-purple-900/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-purple-900/50"
                    >
                      + Add Skill
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}

      {/* Add Experience */}
      <button
        onClick={addExp}
        className="group relative w-full overflow-hidden rounded-[28px] border border-dashed border-purple-500/40 bg-purple-500/5 py-5 text-purple-300 transition-all duration-300 hover:border-purple-500/70 hover:bg-purple-500/10"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <span className="relative z-10 flex items-center justify-center gap-2 text-[15px] font-semibold">
          ✨ + Add Experience
        </span>
      </button>
    </div>
  );
}

// ─── Projects Section ─────────────────────────────────────────────────────
function ProjectsSection({ data, onChange }) {
  const [newTag, setNewTag] = useState({});
  const [openProjects, setOpenProjects] = useState({});

  const toggleProject = (id) =>
    setOpenProjects((p) => ({
      ...p,
      [id]: !p[id],
    }));

  const update = (id, field, val) =>
    onChange(data.map((p) => (p._id === id ? { ...p, [field]: val } : p)));

  const addTag = (id) => {
    const t = (newTag[id] || "")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

    if (!t.length) return;

    onChange(
      data.map((p) =>
        p._id === id || p.id === id ? { ...p, tags: [...p.tags, ...t] } : p,
      ),
    );

    setNewTag({ ...newTag, [id]: "" });
  };

  const removeTag = (id, idx) =>
    onChange(
      data.map((p) =>
        p._id === id || p.id === id
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
        // _id: crypto.randomUUID(),
        title: "",
        description: "",
        image: "",
        tags: [],
        github: "",
        webapp: "",
      },
    ]);

  const removeProject = (id) => onChange(data.filter((p) => p._id !== id));

  const inputCls =
    "w-full rounded-2xl border border-white/10 bg-[#140d2e]/90 px-4 py-3 text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-[#8245ec] focus:bg-[#1a1238] focus:shadow-[0_0_0_4px_rgba(130,69,236,0.15)]";

  return (
    <div className="space-y-6">
      {data?.map((proj) => {
        const id = proj._id || proj.id; // using _id from DB, or generated id for new projects
        const isOpen = openProjects[id] ?? false;

        return (
          <div
            key={id}
            className="group relative overflow-hidden rounded-[30px] border border-purple-500/20 bg-[linear-gradient(145deg,rgba(15,10,36,.96),rgba(10,8,24,.96))] p-5 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-300 hover:border-purple-500/40 hover:shadow-[0_15px_60px_rgba(130,69,236,0.18)] sm:p-6"
          >
            {/* Glow */}
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-pink-500/10 blur-3xl" />

            {/* Header */}
            <div className="relative mb-5 flex flex-wrap items-center justify-between gap-4">
              <div className="min-w-0">
                <h3 className="truncate text-lg font-bold text-white sm:text-[22px]">
                  {proj.title || "New Project"}
                </h3>

                {/* <p className="mt-1 text-sm font-medium text-purple-300">
                  Portfolio Project
                </p> */}

                <div className="mt-2 flex items-center gap-2 text-[13px] text-gray-500">
                  <div className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                  Project Showcase
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => toggleProject(id)}
                  className="rounded-xl border border-purple-500/30 bg-purple-500/5 px-4 py-2 text-sm font-medium text-purple-300 transition-all duration-300 hover:bg-purple-500/10"
                >
                  {isOpen ? "Close" : "Open"}
                </button>

                <button
                  onClick={() => removeProject(id)}
                  className="rounded-xl border border-red-500/30 bg-red-500/5 px-4 py-2 text-sm font-medium text-red-400 transition-all duration-300 hover:bg-red-500/10"
                >
                  Remove
                </button>
              </div>
            </div>

            {isOpen && (
              <div className="relative space-y-5">
                {/* Image Upload */}
                <div className="rounded-3xl border border-purple-500/15 bg-[rgba(130,69,236,0.06)] p-5 backdrop-blur-xl">
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white">
                      Project Media
                    </h4>

                    <p className="mt-1 text-[12px] text-gray-400">
                      Upload project preview image or screenshot
                    </p>
                  </div>

                  <ImageUploadBox
                    label="Project Screenshot / Cover Image"
                    currentUrl={proj.image}
                    onUploaded={(url) => update(id, "image", url)}
                    shape="square"
                    hint="Recommended: 1280×720px (16:9 ratio)"
                  />
                </div>

                {/* Project Title */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Project Title
                  </label>

                  <input
                    value={proj.title}
                    onChange={(e) => update(id, "title", e.target.value)}
                    className={inputCls}
                    placeholder="My Awesome Project"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Description
                  </label>

                  <textarea
                    rows={5}
                    value={proj.description}
                    onChange={(e) => update(id, "description", e.target.value)}
                    className={`${inputCls} resize-none`}
                    placeholder="Describe your project, features and impact..."
                  />
                </div>

                {/* URLs */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-300">
                      GitHub URL
                    </label>

                    <input
                      value={proj.github}
                      onChange={(e) => update(id, "github", e.target.value)}
                      className={inputCls}
                      placeholder="https://github.com/username/project"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-300">
                      Live Demo URL
                    </label>

                    <input
                      value={proj.webapp}
                      onChange={(e) => update(id, "webapp", e.target.value)}
                      className={inputCls}
                      placeholder="https://myproject.vercel.app"
                    />
                  </div>
                </div>

                {/* Tags */}
                <div className="rounded-3xl border border-purple-500/15 bg-white/[0.02] p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        Tech Stack
                      </h4>

                      <p className="mt-1 text-[12px] text-gray-400">
                        Add technologies used in this project
                      </p>
                    </div>

                    <div className="rounded-xl bg-purple-500/10 px-3 py-1 text-[11px] text-purple-300">
                      {proj.tags.length} Tags
                    </div>
                  </div>

                  {/* Tags List */}
                  <div className="mb-5 flex flex-wrap gap-3">
                    {proj.tags.map((t, i) => (
                      <div
                        key={`${t}-${i}`}
                        className="flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-200 transition-all duration-300 hover:bg-purple-500/20"
                      >
                        <span>{t}</span>

                        <button
                          onClick={() => removeTag(id, i)}
                          className="text-red-400 transition-all hover:text-red-300"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Add Tag */}
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <input
                      value={newTag[proj._id] || ""}
                      placeholder="React JS, Node JS, MongoDB..."
                      onChange={(e) =>
                        setNewTag({
                          ...newTag,
                          [id]: e.target.value,
                        })
                      }
                      onKeyDown={(e) => e.key === "Enter" && addTag(id)}
                      className={`${inputCls} flex-1`}
                    />

                    <button
                      onClick={() => addTag(id)}
                      className="rounded-2xl bg-gradient-to-r from-purple-600 via-[#8245ec] to-pink-500 px-6 py-3 font-semibold text-white shadow-lg shadow-purple-900/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-purple-900/50"
                    >
                      + Add Tag
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}

      {/* Add Project */}
      <button
        onClick={addProject}
        className="group relative w-full overflow-hidden rounded-[28px] border border-dashed border-purple-500/40 bg-purple-500/5 py-5 text-purple-300 transition-all duration-300 hover:border-purple-500/70 hover:bg-purple-500/10"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <span className="relative z-10 flex items-center justify-center gap-2 text-[15px] font-semibold">
          ✨ + Add Project
        </span>
      </button>
    </div>
  );
}
// ─── Education Section ────────────────────────────────────────────────────
function EducationSection({ data, onChange }) {
  const [openEdu, setOpenEdu] = useState({});

  const toggleEdu = (id) =>
    setOpenEdu((p) => ({
      ...p,
      [id]: !p[id],
    }));

  const update = (id, field, val) =>
    onChange(data.map((e) => (e._id === id ? { ...e, [field]: val } : e)));

  const addEdu = () =>
    onChange([
      ...data,
      {
        _id: crypto.randomUUID(),
        school: "",
        schoolLogo: "",
        date: "",
        grade: "",
        degree: "",
        desc: "",
      },
    ]);

  const removeEdu = (id) => onChange(data.filter((e) => e._id !== id));

  const inputCls =
    "w-full rounded-2xl border border-white/10 bg-[#140d2e]/90 px-4 py-3 text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-[#8245ec] focus:bg-[#1a1238] focus:shadow-[0_0_0_4px_rgba(130,69,236,0.15)]";

  return (
    <div className="space-y-6">
      {data?.map((edu) => {
        const isOpen = openEdu[edu._id] ?? false;

        return (
          <div
            key={edu._id}
            className="group relative overflow-hidden rounded-[30px] border border-purple-500/20 bg-[linear-gradient(145deg,rgba(15,10,36,.96),rgba(10,8,24,.96))] p-5 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-300 hover:border-purple-500/40 hover:shadow-[0_15px_60px_rgba(130,69,236,0.18)] sm:p-6"
          >
            {/* Glow Effects */}
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-pink-500/10 blur-3xl" />

            {/* Header */}
            <div className="relative mb-5 flex flex-wrap items-center justify-between gap-4">
              <div className="flex min-w-0 items-center gap-4">
                {/* Logo */}
                {edu.schoolLogo ? (
                  <img
                    src={edu.schoolLogo}
                    alt="logo"
                    className="h-16 w-16 flex-shrink-0 rounded-2xl border border-white/10 object-cover shadow-lg"
                  />
                ) : (
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl border border-dashed border-white/10 bg-[#140d2e] text-xs text-gray-500">
                    Logo
                  </div>
                )}

                {/* Info */}
                <div className="min-w-0">
                  <h3 className="truncate text-lg font-bold text-white sm:text-[22px]">
                    {edu.school || "New Education"}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-purple-300">
                    {edu.degree || "Degree / Program"}
                  </p>

                  <div className="mt-2 flex items-center gap-2 text-[11px] text-gray-500">
                    <div className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                    Education Card
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => toggleEdu(edu._id)}
                  className="rounded-xl border border-purple-500/30 bg-purple-500/5 px-4 py-2 text-sm font-medium text-purple-300 transition-all duration-300 hover:bg-purple-500/10"
                >
                  {isOpen ? "Close" : "Open"}
                </button>

                <button
                  onClick={() => removeEdu(edu._id)}
                  className="rounded-xl border border-red-500/30 bg-red-500/5 px-4 py-2 text-sm font-medium text-red-400 transition-all duration-300 hover:bg-red-500/10"
                >
                  Remove
                </button>
              </div>
            </div>

            {isOpen && (
              <div className="relative space-y-5">
                {/* Logo Upload */}
                <div className="rounded-3xl border border-purple-500/15 bg-[rgba(130,69,236,0.06)] p-5 backdrop-blur-xl">
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white">
                      Institution Branding
                    </h4>

                    <p className="mt-1 text-[12px] text-gray-400">
                      Upload institution logo for better presentation
                    </p>
                  </div>

                  <ImageUploadBox
                    label="School / Institution Logo"
                    currentUrl={edu.schoolLogo}
                    onUploaded={(url) => update(edu._id, "schoolLogo", url)}
                    shape="circle"
                    hint="PNG/JPG square recommended"
                  />
                </div>

                {/* Institution Name */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Institution Name
                  </label>

                  <input
                    value={edu.school}
                    onChange={(e) => update(edu._id, "school", e.target.value)}
                    placeholder="Ajay Binay Institute of Technology"
                    className={inputCls}
                  />
                </div>

                {/* Date + Grade */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-300">
                      Date Range
                    </label>

                    <input
                      value={edu.date}
                      onChange={(e) => update(edu._id, "date", e.target.value)}
                      placeholder="Oct 2022 - Present"
                      className={inputCls}
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-300">
                      Grade / CGPA
                    </label>

                    <input
                      value={edu.grade}
                      onChange={(e) => update(edu._id, "grade", e.target.value)}
                      placeholder="8.95 CGPA"
                      className={inputCls}
                    />
                  </div>
                </div>

                {/* Degree */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Degree / Program
                  </label>

                  <input
                    value={edu.degree}
                    onChange={(e) => update(edu._id, "degree", e.target.value)}
                    placeholder="B.Tech Computer Science"
                    className={inputCls}
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Description
                  </label>

                  <textarea
                    rows={4}
                    value={edu.desc}
                    onChange={(e) => update(edu._id, "desc", e.target.value)}
                    placeholder="Describe your academic journey, achievements, activities..."
                    className={`${inputCls} resize-none`}
                  />
                </div>
              </div>
            )}
          </div>
        );
      })}

      {/* Add Education */}
      <button
        onClick={addEdu}
        className="group relative w-full overflow-hidden rounded-[28px] border border-dashed border-purple-500/40 bg-purple-500/5 py-5 text-purple-300 transition-all duration-300 hover:border-purple-500/70 hover:bg-purple-500/10"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <span className="relative z-10 flex items-center justify-center gap-2 text-[15px] font-semibold">
          ✨ + Add Education
        </span>
      </button>
    </div>
  );
}

// ─── Contact Section ──────────────────────────────────────────────────────
function ContactSection({ data, onChange }) {
  const fields = [
    { key: "email", label: "Email", placeholder: "you@example.com" },
    { key: "phone", label: "Phone", placeholder: "+91 9876543210" },
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {fields?.map((f) => (
        <div
          key={f.key}
          className="rounded-3xl border border-purple-500/20 bg-[#0f0a24]/80 p-5 backdrop-blur-xl"
        >
          <label className="text-sm text-purple-300 block mb-3">
            {f.label}
          </label>
          <input
            value={data?.[f.key] || ""}
            placeholder={f.placeholder}
            onChange={(e) => onChange({ ...data, [f.key]: e.target.value })}
            className="w-full rounded-2xl border border-white/10 bg-[#140d2e] px-4 py-3 text-white outline-none focus:border-purple-500 transition"
          />
        </div>
      ))}
    </div>
  );
}

// ─── Main Admin Shell ─────────────────────────────────────────────────────
export default function PortfolioAdmin({ initialData: dbData }) {
  const [active, setActive] = useState("Hero");
  const [data, setData] = useState(dbData || initialData);
  const [toast, setToast] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false); // for mobile sidebar
  const [saving, setSaving] = useState(false);
  const sideBarRef = useRef(null);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 4000);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      await savePortfolio(data);
      if (data.codingStats) await saveCodingStats(data.codingStats);
      showToast("✓ Saved to database!");
    } catch (err) {
      console.error("Save failed:", err);
      showToast("❌ Save failed! Check console.");
    } finally {
      setSaving(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sideBarRef.current && !sideBarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sideBarRef]);

  /* Logout */
  const handleLogout = () => {
    localStorage.removeItem("adminToken");

    showToast("Logged out successfully");

    setTimeout(() => {
      window.location.reload();
    }, 800);
  };

  const stats = [
    { label: "Roles", val: data.hero?.roles?.length ?? 0 },
    { label: "Skill cats", val: data?.skills?.length ?? 0 },
    { label: "Experience", val: data?.experience?.length ?? 0 },
    { label: "Projects", val: data?.projects?.length ?? 0 },
    { label: "Education", val: data?.education?.length ?? 0 },
  ];

  return (
    <div className="min-h-screen bg-[#050414] text-white relative overflow-hidden">
      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[350px] h-[350px] bg-pink-500/20 blur-[120px] rounded-full pointer-events-none" />

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60  lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="relative z-10 flex">
        {/* Sidebar */}
        <aside
          ref={sideBarRef}
          className={`fixed lg:fixed top-0 left-0 h-screen w-[240px] bg-white/5 backdrop-blur-2xl border-r border-white/10 z-60 p-5 flex flex-col transition-transform duration-300 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }`}
        >
          <div className="mb-10">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Portfolio CMS
            </h1>
            <p className="text-gray-400 text-sm mt-1">Admin Panel</p>
          </div>
          <nav className="flex flex-col gap-2 flex-1">
            {SECTIONS.map((s) => (
              <button
                key={s}
                onClick={() => {
                  setActive(s);
                  setSidebarOpen(false);
                }}
                className={`flex items-center z-80 gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-left w-full ${active === s ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg shadow-purple-500/20" : "hover:bg-white/5 text-gray-300"}`}
              >
                <span>{ICON[s]}</span> {s}
              </button>
            ))}
          </nav>
          {/* Mobile Bottom Area */}
          <div className="mt-6 border-t border-white/10 pt-5">
            <button
              onClick={() => window.open("/", "_target")}
              className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-pink-500/10 px-4 py-3 text-sm font-semibold text-purple-300 backdrop-blur-xl transition-all duration-300 hover:border-purple-500/40 hover:from-purple-500/20 hover:to-pink-500/20 hover:text-white"
            >
              <span className="relative z-10 text-base transition-transform duration-300 group-hover:scale-110">
                👁
              </span>

              {/* Text */}
              <span className="relative z-10">Preview Portfolio</span>
            </button>
          </div>
          <div className=" border-white/10 pt-5">
            <button
              onClick={handleLogout}
              className="flex w-full items-center justify-center gap-3 rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm font-semibold text-red-400 transition-all duration-300 hover:bg-red-500/20 hover:text-red-300"
            >
              <span>↩</span>
              Logout
            </button>
          </div>
        </aside>

        {/* Main */}
        <main className="lg:ml-60 flex-1 min-w-0 p-4 sm:p-6 lg:p-8">
          {/* Mobile topbar */}
          <div className="flex items-center justify-between lg:hidden mb-5">
            <button
              onClick={() => {
                setSidebarOpen(true);
              }}
              className="bg-white/10 border border-white/10 rounded-xl px-4 py-2 text-lg"
            >
              ☰
            </button>
            <span className="font-semibold text-sm">{active}</span>
            <button
              onClick={handleSave}
              disabled={saving}
              className="bg-gradient-to-r from-purple-600 to-pink-500 px-4 py-2 rounded-xl text-sm font-semibold disabled:opacity-60"
            >
              {saving ? "Saving..." : "💾 Save"}
            </button>
          </div>

          {/* Desktop header */}
          <div className="hidden lg:flex items-center justify-between gap-5 mb-8">
            <div>
              <h2 className="text-3xl font-bold">{active} Section</h2>
              <p className="text-gray-400 mt-1 text-sm">
                Manage your {active.toLowerCase()} content
              </p>
            </div>

            <button
              onClick={handleSave}
              disabled={saving}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-105 transition-all shadow-lg shadow-purple-500/20 font-semibold disabled:opacity-60"
            >
              {saving ? "Saving..." : "💾 Save Changes"}
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-7">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-xl text-center"
              >
                <div className="text-2xl font-bold text-purple-400">
                  {s.val}
                </div>
                <div className="text-gray-400 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Content panel */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-4 sm:p-6 lg:p-8 backdrop-blur-xl shadow-2xl">
            <div className="flex items-center gap-3 mb-7">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center text-lg flex-shrink-0">
                {ICON[active]}
              </div>
              <div>
                <h3 className="text-xl font-semibold">{active}</h3>
                <p className="text-sm text-gray-400">
                  Update your {active.toLowerCase()} section
                </p>
              </div>
            </div>

            {active === "Hero" && (
              <HeroSection
                data={data?.hero}
                onChange={(v) => setData({ ...data, hero: v })}
              />
            )}
            {active === "Skills" && (
              <SkillsSection
                data={data?.skills}
                onChange={(v) => setData({ ...data, skills: v })}
              />
            )}
            {active === "Experience" && (
              <ExperienceSection
                data={data?.experience}
                onChange={(v) => setData({ ...data, experience: v })}
              />
            )}
            {active === "Projects" && (
              <ProjectsSection
                data={data?.projects}
                onChange={(v) => setData({ ...data, projects: v })}
              />
            )}
            {active === "Education" && (
              <EducationSection
                data={data?.education}
                onChange={(v) => setData({ ...data, education: v })}
              />
            )}
            {active === "Contact" && (
              <ContactSection
                data={data?.contact}
                onChange={(v) => setData({ ...data, contact: v })}
              />
            )}
            {active === "Stats" && (
              <div className="space-y-8">
                {/* Usernames */}
                <div>
                  <h3 className="text-white font-semibold mb-4">
                    Platform Usernames
                  </h3>
                  <p className="text-xs text-gray-500 mb-4">
                    These are used to auto-fetch live stats from APIs.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "leetcode",
                      "gfg",
                      "github",
                      "hackerrank",
                      "codechef",
                    ].map((platform) => (
                      <div key={platform}>
                        <label className="block text-xs text-gray-400 mb-1 capitalize">
                          {platform} username
                        </label>
                        <input
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-purple-500/50"
                          value={data.codingStats?.usernames?.[platform] || ""}
                          onChange={(e) =>
                            setData((prev) => ({
                              ...prev,
                              codingStats: {
                                ...prev.codingStats,
                                usernames: {
                                  ...prev.codingStats?.usernames,
                                  [platform]: e.target.value,
                                },
                              },
                            }))
                          }
                          placeholder={`your ${platform} username`}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Manual Overrides */}
                <div>
                  <h3 className="text-white font-semibold mb-1">
                    Manual Overrides
                  </h3>
                  <p className="text-xs text-gray-500 mb-4">
                    Used as fallback if live API fails.
                  </p>

                  {/* LeetCode */}
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">
                    LeetCode
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5">
                    {[
                      ["totalSolved", "Total"],
                      ["easySolved", "Easy"],
                      ["mediumSolved", "Medium"],
                      ["hardSolved", "Hard"],
                      ["rating", "Rating"],
                      ["attended", "Contests"],
                    ].map(([key, label]) => (
                      <div key={key}>
                        <label className="block text-[10px] text-gray-500 mb-1">
                          {label}
                        </label>
                        <input
                          type="number"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white text-sm focus:outline-none focus:border-purple-500/50"
                          value={
                            data.codingStats?.manual?.leetcode?.[key] || ""
                          }
                          onChange={(e) =>
                            setData((prev) => ({
                              ...prev,
                              codingStats: {
                                ...prev.codingStats,
                                manual: {
                                  ...prev.codingStats?.manual,
                                  leetcode: {
                                    ...prev.codingStats?.manual?.leetcode,
                                    [key]: Number(e.target.value),
                                  },
                                },
                              },
                            }))
                          }
                        />
                      </div>
                    ))}
                  </div>

                  {/* GFG */}
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">
                    GeeksForGeeks
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5">
                    {[
                      ["totalSolved", "Total"],
                      ["easy", "Easy"],
                      ["medium", "Medium"],
                      ["hard", "Hard"],
                      ["score", "Score"],
                      ["streak", "Streak"],
                      ["maxStreak", "Max Streak"],
                    ].map(([key, label]) => (
                      <div key={key}>
                        <label className="block text-[10px] text-gray-500 mb-1">
                          {label}
                        </label>
                        <input
                          type="number"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white text-sm focus:outline-none focus:border-purple-500/50"
                          value={data.codingStats?.manual?.gfg?.[key] || ""}
                          onChange={(e) =>
                            setData((prev) => ({
                              ...prev,
                              codingStats: {
                                ...prev.codingStats,
                                manual: {
                                  ...prev.codingStats?.manual,
                                  gfg: {
                                    ...prev.codingStats?.manual?.gfg,
                                    [key]: Number(e.target.value),
                                  },
                                },
                              },
                            }))
                          }
                        />
                      </div>
                    ))}
                  </div>

                  {/* HackerRank */}
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">
                    HackerRank
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    {[
                      ["stars", "Stars"],
                      ["badges", "Badges"],
                    ].map(([key, label]) => (
                      <div key={key}>
                        <label className="block text-[10px] text-gray-500 mb-1">
                          {label}
                        </label>
                        <input
                          type="number"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white text-sm focus:outline-none focus:border-purple-500/50"
                          value={
                            data.codingStats?.manual?.hackerrank?.[key] || ""
                          }
                          onChange={(e) =>
                            setData((prev) => ({
                              ...prev,
                              codingStats: {
                                ...prev.codingStats,
                                manual: {
                                  ...prev.codingStats?.manual,
                                  hackerrank: {
                                    ...prev.codingStats?.manual?.hackerrank,
                                    [key]: Number(e.target.value),
                                  },
                                },
                              },
                            }))
                          }
                        />
                      </div>
                    ))}
                  </div>

                  {/* CodeChef */}
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">
                    CodeChef
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] text-gray-500 mb-1">
                        Rating
                      </label>
                      <input
                        type="number"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white text-sm focus:outline-none focus:border-purple-500/50"
                        value={data.codingStats?.manual?.codechef?.rating || ""}
                        onChange={(e) =>
                          setData((prev) => ({
                            ...prev,
                            codingStats: {
                              ...prev.codingStats,
                              manual: {
                                ...prev.codingStats?.manual,
                                codechef: {
                                  ...prev.codingStats?.manual?.codechef,
                                  rating: Number(e.target.value),
                                },
                              },
                            },
                          }))
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] text-gray-500 mb-1">
                        Stars (e.g. ★★★)
                      </label>
                      <input
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white text-sm focus:outline-none focus:border-purple-500/50"
                        value={data.codingStats?.manual?.codechef?.stars || ""}
                        onChange={(e) =>
                          setData((prev) => ({
                            ...prev,
                            codingStats: {
                              ...prev.codingStats,
                              manual: {
                                ...prev.codingStats?.manual,
                                codechef: {
                                  ...prev.codingStats?.manual?.codechef,
                                  stars: e.target.value,
                                },
                              },
                            },
                          }))
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-8 pt-6 border-t border-white/10 flex justify-end">
              <button
                onClick={handleSave}
                disabled={saving}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-105 transition-all shadow-lg shadow-purple-500/20 font-semibold disabled:opacity-60"
              >
                {saving ? "Saving..." : "💾 Save Changes"}
              </button>
            </div>
          </div>
        </main>
      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 right-4 left-4 sm:left-auto sm:right-6 sm:max-w-xs bg-gradient-to-r from-purple-600 to-pink-500 px-5 py-3 rounded-2xl shadow-2xl z-[100] text-sm font-semibold flex items-center gap-3">
          <span className="flex-1">{toast}</span>
          <button
            onClick={() => setToast(null)}
            className="opacity-70 hover:opacity-100"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
