"use client"

import { useEffect, useRef, useState } from "react"

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "TailwindCSS",
  "JavaScript",
  "Framer Motion",
  "GitHub",
  "UI/UX Design",
]

export function About() {
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
      id="about"
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
            <span className="text-primary font-mono text-xl sm:text-2xl">01.</span>
            <span className="text-foreground">About Me</span>
            <span className="flex-1 h-px bg-border ml-4"></span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm <span className="text-primary font-semibold">Ak David</span>, a frontend developer focused on building
                interactive, responsive, and visually engaging web applications.
              </p>
              <p>
                I specialize in crafting modern user interfaces using{" "}
                <span className="text-primary">Next.js</span>,{" "}
                <span className="text-primary">React</span>, and{" "}
                <span className="text-primary">Tailwind CSS</span>.
              </p>
              <p>
                My current projects include <span className="text-primary">DevSocial</span> and{" "}
                <span className="text-primary">The Nest Church</span>, where I focus on performance, clean design systems,
                and reusable component architecture.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 text-foreground">
                Frontend technologies I work with:
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 text-muted-foreground font-mono text-sm"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="text-primary">▹</span>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
