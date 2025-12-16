"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-16">
      <div className="max-w-4xl w-full">
        <div
          className={`space-y-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-primary font-mono text-sm sm:text-base mb-2">Hi, my name is</p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-4">Ak David</h1>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-muted-foreground">
            Software Engineer • Full-Stack Developer
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Crafting responsive, accessible, and visually engaging web experiences that connect people and technology.
          </p>


          <div className="flex flex-wrap gap-4 pt-6">
            <Button asChild size="lg" className="group">
              <a href="#projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">Connect</a>
            </Button>
          </div>

          <div className="flex gap-6 pt-8">
            <a
              href="https://github.com/shadowless16"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/david-akinwumi-tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://x.com/ak_david_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
