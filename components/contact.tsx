"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MessageCircle, Phone } from "lucide-react"

export function Contact() {
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
      id="contact"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="max-w-2xl w-full">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 flex items-center gap-4">
            <span className="text-primary font-mono text-xl sm:text-2xl">04.</span>
            <span className="text-foreground">Get In Touch</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            I'm currently open to new opportunities and collaborations. Whether you have a project in mind or just want
            to connect, feel free to reach out!
          </p>

          <div className="grid gap-4 mb-8">
            <Card className="bg-card hover:border-primary transition-colors">
              <CardContent className="flex items-center gap-4 p-6">
                <Mail className="h-6 w-6 text-primary" />
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">Email</p>
                  <div className="flex flex-col gap-1">
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=akdavid4real@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors cursor-pointer"
                    >
                      akdavid4real@gmail.com
                    </a>
                    <a
                      href="mailto:akdavid4real@gmail.com"
                      className="text-xs text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                    >
                      (or use default email app)
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card hover:border-primary transition-colors">
              <CardContent className="flex items-center gap-4 p-6">
                <Phone className="h-6 w-6 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Phone / WhatsApp</p>
                  <a href="tel:+2348100865582" className="text-foreground hover:text-primary transition-colors">
                    +234 810 086 5582
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* <Card className="bg-card hover:border-primary transition-colors">
              <CardContent className="flex items-center gap-4 p-6">
                <MessageCircle className="h-6 w-6 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Telegram</p>
                  <a
                    href="https://t.me/+2348100865582"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    @akdavid
                  </a>
                </div>
              </CardContent>
            </Card> */}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg" className="flex-1 sm:flex-none">
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=akdavid4real@gmail.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                Send via Gmail
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="flex-1 sm:flex-none">
              <a href="mailto:akdavid4real@gmail.com" className="cursor-pointer">
                Use Default App
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
