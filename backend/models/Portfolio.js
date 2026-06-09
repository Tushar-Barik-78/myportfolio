import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema({
  hero: {
    name: String,
    greeting: String,
    roles: [String],
    bio: String,
    resumeUrl: String,
    profileImage: String,
  },
  skills: [
    {
      title: String,
      skills: [{ name: String }],
    },
  ],
  experience: [
    {
      role: String,
      company: String,
      companyLogo: String,
      date: String,
      desc: String,
      skills: [String],
      mode: String,
    },
  ],
  projects: [
    {
      title: String,
      description: String,
      image: String,
      tags: [String],
      github: String,
      webapp: String,
    },
  ],
  education: [
    {
      school: String,
      schoolLogo: String,
      date: String,
      grade: String,
      degree: String,
      desc: String,
    },
  ],
  contact: {
    email: String,
    phone: String,
    github: String,
    linkedin: String,
    twitter: String,
  },
  codingStats: {
    usernames: {
      leetcode:   { type: String, default: "" },
      gfg:        { type: String, default: "" },
      github:     { type: String, default: "" },
      hackerrank: { type: String, default: "" },
      codechef:   { type: String, default: "" },
    },
    manual: {
      leetcode:   { totalSolved: Number, easySolved: Number, mediumSolved: Number, hardSolved: Number, rating: Number, attended: Number },
      gfg:        { totalSolved: Number, easy: Number, medium: Number, hard: Number, score: Number, streak: Number, maxStreak: Number },
      github:     { publicRepos: Number, totalStars: Number, followers: Number },
      hackerrank: { stars: Number, badges: Number },
      codechef:   { rating: Number, stars: String },
      summary:    { totalSolved: Number, totalContests: Number },
    },
  },
}, { timestamps: true });

export default mongoose.model("Portfolio", portfolioSchema);