"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import SectionHeading from "./section-heading"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-20 bg-black/95 relative">
      <div className="container mx-auto px-4">
        <SectionHeading title="Contact Me" subtitle="Get in touch" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold">Let's Talk</h3>
            <p className="text-gray-300 leading-relaxed">
              Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
            </p>

            <div className="space-y-6">
              <ContactInfo
                icon={<Mail className="h-5 w-5 text-primary" />}
                title="Email"
                content="preetham.s@bcah.christuniversity.in"
                link="mailto:preetham.s@bcah.christuniversity.in"
              />

              <ContactInfo
                icon={<Phone className="h-5 w-5 text-primary" />}
                title="Phone"
                content="+91 9019943765"
                link="tel:+919019943765"
              />

              <ContactInfo
                icon={<MapPin className="h-5 w-5 text-primary" />}
                title="Location"
                content="Bengaluru, India"
              />
            </div>

            <div className="flex space-x-4">
              <a href="https://github.com/Toptha" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-gray-700 hover:border-primary hover:bg-primary/10"
                >
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/preetham-s-aacharya-41"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-gray-700 hover:border-primary hover:bg-primary/10"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                    className="bg-gray-900/50 border-gray-700 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="something@example.com"
                    required
                    className="bg-gray-900/50 border-gray-700 focus:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  required
                  className="bg-gray-900/50 border-gray-700 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  required
                  className="min-h-[150px] bg-gray-900/50 border-gray-700 focus:border-primary"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full rounded-full bg-primary hover:bg-primary/80 text-black font-medium"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-black"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : isSubmitted ? (
                  <span className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Message Sent!
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

      <footer className="mt-20 py-6 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Preetham S. All rights reserved.</p>
        </div>
      </footer>
    </section>
  )
}

function ContactInfo({
  icon,
  title,
  content,
  link,
}: {
  icon: React.ReactNode
  title: string
  content: string
  link?: string
}) {
  return (
    <div className="flex items-start">
      <div className="p-2 bg-primary/10 rounded-full mr-4">{icon}</div>
      <div>
        <h4 className="font-medium">{title}</h4>
        {link ? (
          <a href={link} className="text-gray-300 hover:text-primary transition-colors">
            {content}
          </a>
        ) : (
          <p className="text-gray-300">{content}</p>
        )}
      </div>
    </div>
  )
}

