// src/components/CodingStats/CodingStats.jsx
import { useCodingStats } from "../../hooks/useCodingStats";
import {
  SiLeetcode,
  SiGeeksforgeeks,
  SiGithub,
  SiHackerrank,
  SiCodechef,
} from "react-icons/si";
import {
  FiRefreshCw,
  FiCode,
  FiGitBranch,
  FiStar,
  FiUsers,
} from "react-icons/fi";
import { motion } from "framer-motion";
import CountUp from "react-countup";

// ── Circular Ring ─────────────────────────────────────────────────────────────
// const Ring = ({ solved, total, color, size = 80, stroke = 7, label }) => {
//   const r = (size - stroke * 2) / 2;
//   const circ = 2 * Math.PI * r;
//   const pct = total ? Math.min(solved / total, 1) : 0;
//   return (
//     <div
//       className="relative flex items-center justify-center"
//       style={{ width: size, height: size }}
//     >
//       <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
//         <circle
//           cx={size / 2}
//           cy={size / 2}
//           r={r}
//           fill="none"
//           stroke="#1e1633"
//           strokeWidth={stroke}
//         />
//         <circle
//           cx={size / 2}
//           cy={size / 2}
//           r={r}
//           fill="none"
//           stroke={color}
//           strokeWidth={stroke}
//           strokeLinecap="round"
//           strokeDasharray={circ}
//           strokeDashoffset={circ * (1 - pct)}
//           style={{ transition: "stroke-dashoffset 1s ease" }}
//         />
//       </svg>
//       <div className="absolute inset-0 flex flex-col items-center justify-center">
//         <span className="text-sm font-bold text-white leading-none">
//           {solved ?? "—"}
//         </span>
//         {label && (
//           <span className="text-[9px] text-gray-500 mt-0.5">{label}</span>
//         )}
//       </div>
//     </div>
//   );
// };

const Ring = ({ solved, total, size = 90, stroke = 8, label }) => {
  const r = (size - stroke * 2) / 2;
  const circ = 2 * Math.PI * r;
  const pct = total ? Math.min(solved / total, 1) : 0;

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} className="-rotate-90">
        <defs>
          <linearGradient id="ringGradient">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>

        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="#1e293b"
          strokeWidth={stroke}
        />

        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="url(#ringGradient)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={circ * (1 - pct)}
          style={{
            transition: "stroke-dashoffset 1.5s ease",
            filter: "drop-shadow(0px 0px 10px rgba(59,130,246,0.8))",
          }}
        />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-lg font-extrabold text-white">
          {solved ?? "—"}
        </span>

        <span className="text-[10px] text-slate-400 uppercase">{label}</span>
      </div>
    </div>
  );
};

// ── Difficulty Row ────────────────────────────────────────────────────────────
const DiffRow = ({ label, value, color }) => (
  <div className="flex items-center justify-between py-1.5 border-b border-white/5 last:border-0">
    <span className="text-xs font-medium" style={{ color }}>
      {label}
    </span>
    <span className="text-sm font-bold text-white">{value ?? "—"}</span>
  </div>
);

// ── Stat Mini Card ────────────────────────────────────────────────────────────
// const MiniCard = ({ icon: Icon, label, value, color }) => (
//   <div className="flex flex-col items-center gap-1 rounded-2xl border border-white/5 bg-white/[0.03] p-3 text-center">
//     <Icon size={14} style={{ color }} />
//     <span className="text-lg font-bold text-white">{value ?? "—"}</span>
//     <span className="text-[10px] text-gray-500 uppercase tracking-wide">
//       {label}
//     </span>
//   </div>
// );
const MiniCard = ({ icon: Icon, label, value }) => {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border border-blue-500/20
      bg-white/5
      backdrop-blur-xl
      p-5
      text-center
      "
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />

      <Icon size={26} className="mx-auto mb-3 text-blue-400 relative z-10" />

      <h3 className="text-3xl font-bold text-white relative z-10">
        <CountUp end={value || 0} duration={2} />
      </h3>

      <p className="text-sm text-slate-400 mt-1 relative z-10">{label}</p>
    </motion.div>
  );
};

// ── Platform Link ─────────────────────────────────────────────────────────────
const PlatformLink = ({ icon: Icon, color, href, label }) =>
  href ? (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-sm text-gray-300 hover:text-white transition-all"
    >
      <Icon size={16} style={{ color }} />
      {label}
    </a>
  ) : null;

// ── Loading Skeleton ──────────────────────────────────────────────────────────
const Skeleton = () => (
  <section className="py-28 px-[7vw] lg:px-[10vw] animate-pulse">
    <div className="h-10 w-52 bg-[#1a1230] rounded-xl mx-auto mb-12" />
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="h-56 bg-[#120d25] rounded-3xl" />
      ))}
    </div>
  </section>
);

// ── Main Component ────────────────────────────────────────────────────────────
const CodingStats = () => {
  const { stats, loading, refetch } = useCodingStats();

  if (loading) return <Skeleton />;
  console.log("Stats:", stats);

  const lc = stats?.leetcode || {};
  const gfg = stats?.gfg || {};
  const gh = stats?.github || {};
  const hk = stats?.hackerrank || {};
  const cc = stats?.codechef || {};
  const u = stats?.usernames || {};

  const totalSolved = (lc.totalSolved || 0) + (gfg.totalSolved || 0);
  const LANG_COLORS = ["#8245ec", "#f97316", "#22d3ee", "#a3e635", "#fb7185"];

  return (
    <section
      id="coding-stats"
      className="relative overflow-hidden py-28 px-[7vw] lg:px-[10vw] bg-[#030712]"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 h-[400px] w-[400px] rounded-full bg-blue-500/20 blur-[150px] animate-pulse"></div>

        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-cyan-500/20 blur-[150px] animate-pulse"></div>

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
      linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)
    `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>
      {/* bg glows */}
      <div className="pointer-events-none absolute top-0 right-0 w-80 h-80 rounded-full bg-[#8245ec]/10 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-80 h-80 rounded-full bg-cyan-500/5 blur-[100px]" />

      {/* Header */}
      <div className="relative z-10 text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-black">
            <span className="text-white">Coding</span>{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-white bg-clip-text text-transparent">
              Analytics
            </span>
          </h2>

          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            Real-time coding performance, GitHub activity and contest rankings.
          </p>
        </motion.div>

        {/* Platform badges */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          <PlatformLink
            icon={SiLeetcode}
            color="#f89f1b"
            href={u.leetcode && `https://leetcode.com/${u.leetcode}`}
            label="LeetCode"
          />
          <PlatformLink
            icon={SiGeeksforgeeks}
            color="#2f8d46"
            href={u.gfg && `https://geeksforgeeks.org/user/${u.gfg}`}
            label="GFG"
          />
          <PlatformLink
            icon={SiGithub}
            color="#fff"
            href={u.github && `https://github.com/${u.github}`}
            label="GitHub"
          />
          <PlatformLink
            icon={SiHackerrank}
            color="#2ec866"
            href={
              u.hackerrank && `https://hackerrank.com/profile/${u.hackerrank}`
            }
            label="HackerRank"
          />
          <PlatformLink
            icon={SiCodechef}
            color="#b97c2c"
            href={u.codechef && `https://codechef.com/users/${u.codechef}`}
            label="CodeChef"
          />
        </div>

        <button
          onClick={refetch}
          className="
inline-flex
items-center
gap-2
px-5
py-2
rounded-full
border
border-blue-500/30
bg-blue-500/10
backdrop-blur-lg
text-blue-300
hover:text-white
hover:bg-blue-500/20
hover:border-blue-400
transition-all
duration-300
"
        >
          <FiRefreshCw size={11} /> Refresh
        </button>
      </div>

      {/* Summary Row */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        // animate={{ opacity: 1, y: 0 }}
        className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8"
      >
        <MiniCard
          icon={FiCode}
          label="Total Solved"
          value={totalSolved || "—"}
          color="#8245ec"
        />
        <MiniCard
          icon={FiGitBranch}
          label="Repos"
          value={gh.publicRepos}
          color="#a3e635"
        />
        <MiniCard
          icon={FiStar}
          label="GitHub Stars"
          value={gh.totalStars}
          color="#facc15"
        />
        <MiniCard
          icon={FiUsers}
          label="Followers"
          value={gh.followers}
          color="#22d3ee"
        />
      </motion.div>

      {/* Main Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* LeetCode Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className=" group relative overflow-hidden rounded-[30px] border border-blue-500/20 bg-white/[0.03] backdrop-blur-xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.25)] "
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#f89f1b]/10 flex items-center justify-center">
                <SiLeetcode size={24} color="#f89f1b" />
              </div>
              <div>
                <p className="text-white font-semibold">LeetCode</p>
                {lc.rating && (
                  <p className="text-sm text-gray-500">Rating: {lc.rating}</p>
                )}
              </div>
            </div>
            <Ring
              solved={lc.totalSolved}
              total={lc.totalQuestions || 3500}
              color="#f89f1b"
              label="solved"
            />
          </div>
          <div className="space-y-0">
            <DiffRow label="Easy" value={lc.easySolved} color="#22d3ee" />
            <DiffRow label="Medium" value={lc.mediumSolved} color="#f97316" />
            <DiffRow label="Hard" value={lc.hardSolved} color="#fb7185" />
          </div>
          {lc.attended != null && (
            <p className="text-xs text-gray-600 mt-3">
              {lc.attended} contests attended
            </p>
          )}
        </motion.div>

        {/* GFG Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className=" group relative overflow-hidden rounded-[30px] border border-blue-500/20 bg-white/[0.03] backdrop-blur-xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.25)] "
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#2f8d46]/10 flex items-center justify-center">
                <SiGeeksforgeeks size={20} color="#2f8d46" />
              </div>
              <div>
                <p className="text-white font-semibold">GeeksForGeeks</p>
                {gfg.score != null && (
                  <p className="text-sm text-gray-500">Score: {gfg.score}</p>
                )}
              </div>
            </div>
            <Ring
              solved={gfg.totalSolved}
              total={Math.max(gfg.totalSolved || 0, 500)}
              color="#2f8d46"
              label="solved"
            />
          </div>
          <div className="space-y-0">
            <DiffRow label="Easy" value={gfg.easy} color="#22d3ee" />
            <DiffRow label="Medium" value={gfg.medium} color="#f97316" />
            <DiffRow label="Hard" value={gfg.hard} color="#fb7185" />
          </div>
          {(gfg.streak != null || gfg.maxStreak != null) && (
            <div className="flex gap-4 mt-3">
              <p className="text-sm text-gray-500">
                🔥 Streak: <span className="text-gray-300">{gfg.streak}</span>
              </p>
              <p className="text-sm text-gray-500">
                Max: <span className="text-gray-300">{gfg.maxStreak}</span>
              </p>
            </div>
          )}
        </motion.div>

        {/* Contest Rankings / Other Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className=" group relative overflow-hidden rounded-[30px] border border-blue-500/20 bg-white/[0.03] backdrop-blur-xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.25)] "
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
          <p className="text-white font-semibold mb-5">Contest Rankings</p>

          <div className="space-y-3 mb-5">
            {lc.rating && (
              <div className="flex items-center justify-between rounded-2xl bg-white/[0.03] border border-white/5 px-4 py-3">
                <div className="flex items-center gap-2">
                  <SiLeetcode size={16} color="#f89f1b" />
                  <span className="text-sm text-gray-300">LeetCode</span>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-white">{lc.rating}</p>
                  <p className="text-[10px] text-gray-500">rating</p>
                </div>
              </div>
            )}
            {cc.rating && (
              <div className="flex items-center justify-between rounded-2xl bg-white/[0.03] border border-white/5 px-4 py-3">
                <div className="flex items-center gap-2">
                  <SiCodechef size={16} color="#b97c2c" />
                  <span className="text-sm text-gray-300">CodeChef</span>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-white">{cc.rating}</p>
                  <p className="text-[10px] text-gray-500">
                    {cc.stars || "rating"}
                  </p>
                </div>
              </div>
            )}
            {hk.stars && (
              <div className="flex items-center justify-between rounded-2xl bg-white/[0.03] border border-white/5 px-4 py-3">
                <div className="flex items-center gap-2">
                  <SiHackerrank size={16} color="#2ec866" />
                  <span className="text-sm text-gray-300">HackerRank</span>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-white">{hk.stars}⭐</p>
                  <p className="text-[10px] text-gray-500">
                    {hk.badges ? `${hk.badges} badges` : ""}
                  </p>
                </div>
              </div>
            )}
          </div>

          
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className=" group relative overflow-hidden rounded-[30px] border border-blue-500/20 bg-white/[0.03] backdrop-blur-xl p-2 md:p-6 transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.25)] "
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
          <p className="text-white font-semibold mb-5 pl-4 mt-4">GitHub Stats</p>

          {/* GitHub readme stats image */}
          {u.github && (
            <div className="rounded-xl overflow-hidden border border-white/5">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${u.github}&show_icons=true&theme=dark&hide_border=true&title_color=8245ec&icon_color=8245ec&bg_color=0d0b1a`}
                onError={(e) => {
                  e.target.parentElement.style.display = "none";
                }}
                alt="GitHub stats"
                className="w-full"
              />
            </div>
          )}

          
        </motion.div>



        {/* GitHub Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className=" group relative overflow-hidden rounded-[30px] border border-blue-500/20 bg-white/[0.03] backdrop-blur-xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.25)] col-span-1 lg:col-span-2"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
              <SiGithub size={24} color="#fff" />
            </div>
            <div>
              <p className="text-white font-semibold text-xl">GitHub</p>
              {u.github && <p className="text-sm text-gray-500">@{u.github}</p>}
            </div>
          </div>

          {/* Top Languages */}
          {gh.topLanguages?.length > 0 && (
            <div className="space-y-2 mb-5">
              <p className="text-[17px] text-gray-600 uppercase tracking-widest mb-2">
                Top Languages
              </p>
              {gh.topLanguages.map(({ lang, count }, i) => (
                <div key={lang} className="flex items-center gap-3">
                  <span className="text-sm text-gray-400 w-20 shrink-0">
                    {lang}
                  </span>
                  <div className="flex-1 h-2 rounded-full bg-slate-800 overflow-hidden">
                   
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{
                        width: `${(count / gh.topLanguages[0].count) * 100}%`,
                        background: LANG_COLORS[i],
                      }}
                      transition={{
                        duration: 1.5,
                      }}
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-300"
                    />
                  </div>
                  <span className="text-[10px] text-gray-600 w-5 text-right">
                    {count}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* GitHub contribution chart */}
          {u.github && (
            <div className="rounded-xl overflow-hidden border flex justify-center md:p-4 border-white/5">
              <img
                src={`https://ghchart.rshah.org/0abab5/${u.github}`}
                alt="GitHub contributions"
                className="w-full  h-full object-cover"
              />
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default CodingStats;
