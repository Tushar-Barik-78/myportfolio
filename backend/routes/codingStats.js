// backend/routes/codingStats.js
import express from "express";
import axios from "axios";
import Portfolio from "../models/Portfolio.js";
import auth from "../middleware/auth.js";

const router = express.Router();

const get = (url, timeout = 8000) =>
  axios.get(url, { timeout }).then((r) => r.data).catch(() => null);

// GET /api/stats  — public, live data from APIs
router.get("/", async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne().lean();
    const u = portfolio?.codingStats?.usernames || {};
    const manual = portfolio?.codingStats?.manual || {};

    const [lcSolved, lcContest, gfgData, ghUser, ghRepos] = await Promise.all([
      u.leetcode ? get(`https://alfa-leetcode-api.onrender.com/${u.leetcode}/solved`) : null,
      u.leetcode ? get(`https://alfa-leetcode-api.onrender.com/${u.leetcode}/contest`) : null,
      u.gfg      ? get(`https://geeksforgeeks-api.vercel.app/api/profile/${u.gfg}`) : null,
      u.github   ? get(`https://api.github.com/users/${u.github}`) : null,
      u.github   ? get(`https://api.github.com/users/${u.github}/repos?per_page=100&sort=updated`) : null,
    ]);

    // console.log(gfgData);
    
    // LeetCode
    const leetcode = lcSolved ? {
      totalSolved:   lcSolved.solvedProblem  ?? manual?.leetcode?.totalSolved ?? 0,
      easySolved:    lcSolved.easySolved     ?? manual?.leetcode?.easySolved ?? 0,
      mediumSolved:  lcSolved.mediumSolved   ?? manual?.leetcode?.mediumSolved ?? 0,
      hardSolved:    lcSolved.hardSolved     ?? manual?.leetcode?.hardSolved ?? 0,
      totalQuestions: lcSolved.totalProblem  ?? 3500,
      rating: lcContest?.contestRating ? Math.round(lcContest.contestRating) : manual?.leetcode?.rating,
      attended: lcContest?.contestAttend ?? manual?.leetcode?.attended ?? 0,
    } : manual?.leetcode ?? null;

    // GFG
    const gfg = gfgData ? {
      totalSolved: gfgData.totalProblemsSolved ?? manual?.gfg?.totalSolved ?? 0,
      easy:        gfgData.Easy   ?? 0,
      medium:      gfgData.Medium ?? 0,
      hard:        gfgData.Hard   ?? 0,
      score:       gfgData.codingScore ?? manual?.gfg?.score ?? 0,
      streak:      gfgData.currentStreak ?? manual?.gfg?.streak ?? 0,
      maxStreak:   gfgData.maxStreak     ?? manual?.gfg?.maxStreak ?? 0,
    } : manual?.gfg ?? null;

    // GitHub
    let github = null;

    // console.log(ghUser);
    
    if (ghUser) {
      const stars = Array.isArray(ghRepos)
        ? ghRepos.reduce((s, r) => s + r.stargazers_count, 0) : 0;
      const langMap = {};
      if (Array.isArray(ghRepos))
        ghRepos.forEach((r) => r.language && (langMap[r.language] = (langMap[r.language] || 0) + 1));
      const topLanguages = Object.entries(langMap).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([l, c]) => ({ lang: l, count: c }));
      github = {
        publicRepos: ghUser.public_repos,
        followers:   ghUser.followers,
        totalStars:  stars,
        topLanguages,
        username:    u.github,
      };
    } else {
      github = manual?.github ?? null;
    }




    // console.log("Stats response:", {
    //   leetcode,
    //   gfg,
    //   github,
    //     hackerrank: manual?.hackerrank ?? null,
    //     codechef:   manual?.codechef   ?? null,
    //     summary:    manual?.summary    ?? {},
    //     usernames:  u,
    // });
    

    res.json({
      leetcode,
      gfg,
      github,
      hackerrank: manual?.hackerrank ?? null,
      codechef:   manual?.codechef   ?? null,
      summary:    manual?.summary    ?? {},
      usernames:  u,
    });
  } catch (e) {
    console.error("Stats error:", e.message);
    res.status(500).json({ message: "Failed to fetch stats" });
  }
});

// PUT /api/stats  — protected, save usernames + manual data
router.put("/", auth, async (req, res) => {
  try {
    const updated = await Portfolio.findOneAndUpdate(
      {},
      { $set: { codingStats: req.body } },
      { new: true, upsert: true }
    );
    res.json({ message: "Stats saved!", data: updated.codingStats });
  } catch (e) {
    res.status(500).json({ message: "Failed to save stats" });
  }
});

export default router;