"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { MessageCircle, Send, X } from "lucide-react"

const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY || ""
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${GEMINI_API_KEY}`

const PORTFOLIO_CONTEXT = `You are Ak David's AI portfolio assistant. Answer naturally without markdown formatting (no *, -, bullets). Use plain text with line breaks.

Ak David - Full-Stack Developer & Software Engineer

Skills:
Frontend: React, Next.js 14, TypeScript, Tailwind CSS, Framer Motion
Backend: Node.js, Express.js, REST API, Socket.io
Database: MongoDB, PostgreSQL, SQLite

Projects:

1. DevSocial
Description: Dev-focused social platform with real-time chat, gamification, and XP system for developers to connect and share knowledge
Frontend: Next.js 14, TypeScript, TailwindCSS
Backend: Node.js, Socket.io for real-time features
Database: MongoDB
Live: techdevsocial.vercel.app

2. Newhope Hospital
Description: Hospital management dashboard with patient records, appointment scheduling, and staff coordination
Frontend: Next.js 14, TypeScript, TailwindCSS
Backend: Node.js, Express.js
Database: PostgreSQL
Live: niit-newhope-hospital-project.vercel.app

3. Nest Church Website
Description: Church Management System for The Nest Church Lagos with event management and content delivery
Frontend: Next.js, TypeScript, TailwindCSS
Backend: Node.js, Express.js
Database: MongoDB
Live: the-church-management-system-aojs.vercel.app

4. Educeptis
Description: EdTech platform transforming education in Africa (in development)
Frontend: Next.js, TypeScript, TailwindCSS
Backend: Node.js, Express.js
Database: MongoDB
Live: eduresumebuilder.netlify.app

5. UniHub
Description: Student social network with anonymous posts and academic engagement for university students
Frontend: JavaScript, HTML5, TailwindCSS
Backend: Node.js, Express.js
Database: MongoDB
Live: unihubsocial.netlify.app

6. ProCare Hotel
Description: Hotel website with room booking system and guest services management
Frontend: Next.js, TypeScript, TailwindCSS
Backend: Node.js, Express.js
Database: MongoDB
Live: procare-hotel-suites.vercel.app

Contact: GitHub (shadowless16), LinkedIn (david-akinwumi-tech), Twitter (@ak_david_)

Answer conversationally in plain text. When listing tech stacks, separate Frontend/Backend/Database clearly.`

interface Message {
  role: "user" | "assistant"
  content: string
}

export function AIChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const saved = localStorage.getItem("chat-history")
    if (saved) {
      setMessages(JSON.parse(saved))
    }
  }, [])

  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem("chat-history", JSON.stringify(messages))
    }
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return

    const userMessage: Message = { role: "user", content: input }
    const currentInput = input
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      const conversationHistory = messages.map(m => `${m.role === "user" ? "User" : "Assistant"}: ${m.content}`).join("\n")
      const fullPrompt = `${PORTFOLIO_CONTEXT}\n\nConversation History:\n${conversationHistory}\n\nUser: ${currentInput}\n\nAssistant:`

      const response = await fetch(GEMINI_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: fullPrompt }] }],
        }),
      })

      const data = await response.json()
      
      if (!response.ok) {
        console.error("API Error:", data)
        throw new Error(data.error?.message || "API request failed")
      }

      const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text
      
      if (!aiResponse) {
        console.error("No AI response:", data)
        throw new Error("No response from AI")
      }

      setMessages((prev) => [...prev, { role: "assistant", content: aiResponse }])
    } catch (error) {
      console.error("Chat error:", error)
      setMessages((prev) => [...prev, { role: "assistant", content: "Error: " + (error instanceof Error ? error.message : "Please try again.") }])
    } finally {
      setIsLoading(false)
    }
  }

  const clearChat = () => {
    setMessages([])
    localStorage.removeItem("chat-history")
  }

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        size="lg"
        className="fixed bottom-6 right-6 rounded-full h-14 w-14 shadow-lg z-50"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[500px] h-[600px] flex flex-col p-0">
          <DialogHeader className="p-6 pb-4 border-b">
            <div className="flex items-center justify-between">
              <DialogTitle>Ask about my portfolio</DialogTitle>
              <Button variant="ghost" size="sm" onClick={clearChat}>
                Clear
              </Button>
            </div>
          </DialogHeader>

          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.length === 0 && (
              <div className="text-center text-muted-foreground text-sm">
                Ask me anything about Ak David's skills, projects, or experience!
              </div>
            )}
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    msg.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted rounded-lg p-3">
                  <p className="text-sm">Thinking...</p>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Ask a question..."
                disabled={isLoading}
              />
              <Button onClick={sendMessage} disabled={isLoading || !input.trim()}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
