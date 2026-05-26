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
      skills: [{ name: String, logo: String }],
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
}, { timestamps: true });

export default mongoose.model("Portfolio", portfolioSchema);