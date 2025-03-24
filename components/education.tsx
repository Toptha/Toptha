"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"
import SectionHeading from "./section-heading"

type Education = {
  school: string
  degree: string
  location: string
  period: string
  grade?: string
  achievements: string[]
}

const educations: Education[] = [
  {
    school: "Christ (Deemed to Be University)",
    degree: "Bachelor of Applied Science in Computer Science",
    location: "Bengaluru, India",
    period: "Expected in May 2027",
    achievements: ["Member of D.R.E.A.M.S, 2024-Current", "Script-Writer, AD-HOC, 2024-Current"],
  },
  {
    school: "AMC Institutions",
    degree: "Pre-University",
    location: "Bengaluru, India",
    period: "April 2024",
    grade: "91%",
    achievements: ["Graduation with Distinction, 2024", "Left Winger for College Football Team, 2022 to 2024"],
  },
  {
    school: "Sri Jnanakshi Vidyaniketan",
    degree: "High School Diploma",
    location: "Bengaluru, India",
    period: "July 2022",
    grade: "83%",
    achievements: [
      "Graduation with Distinction, 2022",
      "Completed Coursework: Robotics, 2019",
      "Completed Coursework: Electronics, 2020",
      "Athlete for School Kho-Kho Team, 2017 to 2020",
      "Front Court Attacker for School Badminton Team, 2017 to 2018",
    ],
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20 bg-black relative">
      <div className="container mx-auto px-4">
        <SectionHeading title="Education" subtitle="My academic journey" />

        <div className="mt-12 space-y-8">
          {educations.map((education, index) => (
            <EducationCard key={education.school} education={education} index={index} />
          ))}
        </div>

        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          <CertificationsCard />
          <LanguagesCard />
        </motion.div>
      </div>
    </section>
  )
}

function EducationCard({
  education,
  index,
}: {
  education: Education
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-primary/50 transition-all duration-300"
    >
      <div className="flex items-start">
        <div className="p-3 bg-primary/10 rounded-full mr-4 mt-1">
          <GraduationCap className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-semibold">{education.degree}</h3>
          <p className="text-gray-400 mb-2">{education.school}</p>

          <div className="flex flex-wrap items-center text-sm text-gray-400 mb-4">
            <div className="flex items-center mr-4 mb-2">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{education.period}</span>
            </div>
            <div className="flex items-center mr-4 mb-2">
              <MapPin className="h-4 w-4 mr-2" />
              <span>{education.location}</span>
            </div>
            {education.grade && (
              <div className="flex items-center mb-2">
                <Award className="h-4 w-4 mr-2" />
                <span>Grade: {education.grade}</span>
              </div>
            )}
          </div>

          <h4 className="font-medium mb-2">Achievements & Activities</h4>
          <ul className="space-y-1 text-gray-300">
            {education.achievements.map((achievement, i) => (
              <li key={i} className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

function CertificationsCard() {
  const certifications = [
    "C programming - Infosys",
    "C++ programming - Infosys",
    "HTMLS: The Language - Infosys",
    "Java EE 8 Microservices - Infosys",
    "JAVA SE FEATURES - Infosys",
    "Java-Beginner - Infosys",
    "JSON with Java EE 8 - Infosys",
    "Learning Java EE 8 - Infosys",
    "Programming in Core Java - Infosys",
    "Learning Full Stack Development - Infosys",
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-primary/50 transition-all duration-300"
    >
      <h3 className="text-xl font-semibold mb-4 flex items-center">
        <Award className="h-5 w-5 text-primary mr-2" />
        Certifications
      </h3>
      <ul className="space-y-2 text-gray-300">
        {certifications.map((cert, i) => (
          <li key={i} className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span>{cert}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

function LanguagesCard() {
  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Kannada", level: "Native" },
    { name: "Malayalam", level: "Fluent" },
    { name: "Telugu", level: "Intermediate" },
    { name: "Hindi", level: "Intermediate" },
    { name: "Tamil", level: "Basic" },
    { name: "Sanskrit", level: "Basic" },
    { name: "German", level: "Basic" },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
      className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-primary/50 transition-all duration-300"
    >
      <h3 className="text-xl font-semibold mb-4 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-primary mr-2"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
        Languages
      </h3>
      <div className="grid grid-cols-2 gap-4">
        {languages.map((lang) => (
          <div key={lang.name} className="flex flex-col">
            <span className="font-medium">{lang.name}</span>
            <span className="text-sm text-gray-400">{lang.level}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

