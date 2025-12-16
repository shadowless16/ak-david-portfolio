export interface Project {
  title: string
  description: string
  technologies: string[]
  github?: string
  demo?: string
}

export const projects: Project[] = [
  {
    title: "DevSocial",
    description:
      "A dev-focused social platform with real-time chat, gamification, and XP system. Built for developers to connect, share knowledge, and grow together.",
    technologies: ["Next.js 14", "TypeScript", "Node.js", "Socket.io", "MongoDB", "TailwindCSS"],
    github: "https://github.com/shadowless16/devsocial",
    demo: "https://techdevsocial.vercel.app/",
  },
  {
    title: "Newhope Hospital Project",
    description:
      "Hospital management dashboard with patient records, appointment scheduling, and medical staff coordination for healthcare administration.",
    technologies: ["Next.js 14", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "TailwindCSS"],
    github: "https://github.com/akdavid/gisthub",
    demo: "https://niit-newhope-hospital-project.vercel.app/dashboard/",
  },
  {
    title: "Nest Church Website",
    description:
      "Church Management System for The Nest Church Lagos. Modern, responsive design with event management and content delivery.",
    technologies: ["Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "TailwindCSS"],
    github: "https://github.com/shadowless16/the-church-management-system",
    demo: "https://the-church-management-system-aojs.vercel.app",
  },
  {
    title: "Educeptis",
    description:
      "EdTech platform concept focused on transforming education in Africa through innovative learning solutions. Currently in development.",
    technologies: ["Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "TailwindCSS"],
    github: "https://github.com/shadowless16/resume-builder",
    demo: "https://eduresumebuilder.netlify.app/",
  },
  {
    title: "UniHub",
    description:
      "Student-focused social network featuring anonymous posts, academic engagement, and community building for university students.",
    technologies: ["JavaScript", "HTML5", "Node.js", "Express.js", "MongoDB", "TailwindCSS"],
    demo: "https://unihubsocial.netlify.app/",
    github: "https://github.com/shadowless16/UniHub",
  },
  {
    title: "ProCare Hotel",
    description:
      "Modern hotel website with room booking system, amenities showcase, and guest services management for hospitality business.",
    technologies: ["Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "TailwindCSS"],
    demo: "https://procare-hotel-suites.vercel.app/",
    github: "https://github.com/shadowless16/procare-hotel",
  },
]
