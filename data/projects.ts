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
    technologies: ["Next.js 14", "TypeScript", "MongoDB", "TailwindCSS", "Socket.io"],
    github: "https://github.com/shadowless16/devsocial",
    demo: "https://techdevsocial.vercel.app/",
  },
  {
    title: "Newhope Hospital Project",
    description:
      "Student-focused social network featuring anonymous posts, academic engagement, and community building for university students.",
    technologies: ["Next.js 14", "TypeScript", "MongoDB", "TailwindCSS"],
    github: "https://github.com/akdavid/gisthub",
    demo: "https://niit-newhope-hospital-project.vercel.app/dashboard/",
  },
  {
    title: "Nest Church Website",
    description:
      "Church Management System for The Nest Church Lagos. Modern, responsive design with event management and content delivery.",
    technologies: ["Next.js", "TypeScript", "TailwindCSS"],
    demo: "https://the-church-management-system-aojs.vercel.app",
  },
  {
    title: "Educeptis",
    description:
      "EdTech platform concept focused on transforming education in Africa through innovative learning solutions. Currently in development.",
    technologies: ["Next.js", "TypeScript", "MongoDB", "TailwindCSS"],
    github: "https://github.com/shadowless16/resume-builder",
    demo: "https://eduresumebuilder.netlify.app/",
  },
]
