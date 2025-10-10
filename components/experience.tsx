"use client"

import { useEffect, useRef, useState } from "react"

const experiences = [
  {
    title: "Freelance Frontend Developer",
    company: "Self-Employed",
    location: "Lagos, Nigeria",
    period: "2023 — Early 2024",
    description:
      "Designed and developed responsive websites and landing pages for small businesses using React, Tailwind CSS, and JavaScript. Focused on clean UI, accessibility, and mobile optimization.",
  },
  {
    title: "Frontend Developer",
    company: "Educeptis",
    location: "Lagos, Nigeria",
    period: "Jan 2024 — May 2024",
    description:
      "Built an education-focused web platform aimed at improving digital learning experiences. Implemented dynamic components, form workflows, and dashboard interfaces using Next.js and TypeScript.",
  },
  {
    title: "Frontend Developer",
    company: "The Nest Church",
    location: "Lagos, Nigeria",
    period: "Jun 2024 — Aug 2024",
    description:
      "Developed and deployed a modern church management website with Next.js, TypeScript, and Tailwind CSS. Focused on responsive design, motion-based interactivity, and seamless content updates.",
  },
  {
    title: "Frontend Developer",
    company: "DevSocial",
    location: "Remote",
    period: "Aug 2024 — Present",
    description:
      "Leading the frontend development of a real-time developer social platform. Built with Next.js 14, TypeScript, and Tailwind CSS, featuring dynamic feeds, gamification, and responsive UI systems.",
  },
]


export function Experience() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="max-w-4xl w-full">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 flex items-center gap-4">
            <span className="text-primary font-mono text-xl sm:text-2xl">03.</span>
            <span className="text-foreground">Experience</span>
            <span className="flex-1 h-px bg-border ml-4"></span>
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className="border-l-2 border-primary pl-6 pb-8 relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary"></div>
                <div className="space-y-2">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                    <span className="text-sm font-mono text-primary">{exp.period}</span>
                  </div>
                  <p className="text-lg text-muted-foreground">
                    {exp.company} • {exp.location}
                  </p>
                  <p className="text-muted-foreground leading-relaxed pt-2">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
