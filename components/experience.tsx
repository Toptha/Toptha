"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react"
import SectionHeading from "./section-heading"

type Experience = {
  title: string
  company: string
  location: string
  period: string
  description: string[]
}

const experiences: Experience[] = [
  {
    title: "Media & PR Volunteer",
    company: "Centre for Academic & Professional Support",
    location: "Bengaluru",
    period: "June 2024 - Current",
    description: [
      "Assisted with special events and programs.",
      "Supported engaging, fun, and smooth-running events by helping with organization and planning.",
      "Used strong interpersonal communication skills to convey information to others.",
      "Maintained clean, neat and operational facilities to serve program needs.",
      "Represented organisation positively and professionally while providing community with much-needed services.",
      "Facilitated community outreach to expand participation and support.",
    ],
  },
  {
    title: "Core Committee Member - AI Guild",
    company: "Christ University, Center for AI",
    location: "Bengaluru",
    period: "March 2025",
    description: [
      "Supported engaging, fun, and smooth-running events by helping with organization and planning.",
      "Used strong interpersonal communication skills to convey information to others.",
      "Maintained clean, neat, and operational facilities to serve program needs.",
      "Represented organization positively and professionally while providing community with much-needed services.",
      "Facilitated community outreach to expand participation and support.",
    ],
  },
  {
    title: "Frontend Developer - Hacktober Fest",
    company: "Chairanya Bharathi Institute Of Technology",
    location: "Hyderabad (Remote)",
    period: "October 2024",
    description: [
      "Designed and developed a cyberpunk themed e-commerce website using HTML, CSS, and JavaScript.",
      "Built and managed an Express.js server to fetch and serve product data.",
      "Collaborated with the ML team to integrate their machine learning algorithm into the frontend.",
      "Ensured seamless API communication between the frontend and backend, optimizing performance and user experience.",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-black relative">
      <div className="container mx-auto px-4">
        <SectionHeading title="Experience" subtitle="My professional journey" />

        <div className="mt-12 relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-800 transform md:translate-x-[-0.5px]"></div>

          {experiences.map((exp, index) => (
            <TimelineItem key={index} experience={exp} index={index} isLeft={index % 2 === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TimelineItem({
  experience,
  index,
  isLeft,
}: {
  experience: Experience
  index: number
  isLeft: boolean
}) {
  return (
    <div className={`relative mb-12 md:mb-8 ${isLeft ? "md:pr-8" : "md:pl-8"} md:w-1/2 ${isLeft ? "md:ml-auto" : ""}`}>
      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className={`absolute ${isLeft ? "right-[-8px] md:right-[-16px]" : "left-[-8px] md:left-[-16px]"} top-0 w-4 h-4 md:w-8 md:h-8 rounded-full bg-primary z-10 flex items-center justify-center`}
      >
        <div className="w-2 h-2 md:w-4 md:h-4 rounded-full bg-black"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-primary/50 transition-all duration-300 relative z-0"
      >
        <div className="flex items-center mb-4">
          <div className="p-2 bg-primary/10 rounded-full mr-4">
            <Briefcase className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">{experience.title}</h3>
            <p className="text-gray-400">{experience.company}</p>
          </div>
        </div>

        <div className="flex items-center mb-4 text-sm text-gray-400">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{experience.period}</span>
          <span className="mx-2">•</span>
          <span>{experience.location}</span>
        </div>

        <ul className="space-y-2 text-gray-300">
          {experience.description.map((item, i) => (
            <li key={i} className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  )
}

