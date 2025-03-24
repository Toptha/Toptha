"use client"

import React from "react"

import { motion } from "framer-motion"
import SectionHeading from "./section-heading"

type Skill = {
  name: string
  level: number
  category: "frontend" | "backend" | "language" | "database" | "other"
}

const skills: Skill[] = [
  { name: "HTML/CSS", level: 90, category: "frontend" },
  { name: "JavaScript", level: 85, category: "language" },
  { name: "React", level: 80, category: "frontend" },
  { name: "TailwindCSS", level: 85, category: "frontend" },
  { name: "NextJS", level: 75, category: "frontend" },
  { name: "NodeJS", level: 70, category: "backend" },
  { name: "ExpressJS", level: 70, category: "backend" },
  { name: "AngularJS", level: 65, category: "frontend" },
  { name: "PHP", level: 75, category: "backend" },
  { name: "C/C++", level: 80, category: "language" },
  { name: "Python", level: 85, category: "language" },
  { name: "Java", level: 80, category: "language" },
  { name: "Kotlin", level: 70, category: "language" },
  { name: "MySQL", level: 75, category: "database" },
  { name: "MongoDB", level: 70, category: "database" },
]

const categories = [
  { id: "all", name: "All Skills" },
  { id: "frontend", name: "Frontend" },
  { id: "backend", name: "Backend" },
  { id: "language", name: "Languages" },
  { id: "database", name: "Databases" },
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = React.useState("all")

  const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory)

  return (
    <section id="skills" className="py-20 bg-black/95 relative">
      <div className="container mx-auto px-4">
        <SectionHeading title="My Skills" subtitle="Technologies I work with" />

        <div className="flex flex-wrap justify-center gap-2 mt-8 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                activeCategory === category.id
                  ? "bg-primary text-black font-medium"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">{skill.name}</h3>
                <span className="text-primary">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <motion.div
                  className="bg-primary h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                  viewport={{ once: true }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          <SkillCard title="Languages" count="6+" />
          <SkillCard title="Frameworks" count="5+" />
          <SkillCard title="Projects" count="10+" />
          <SkillCard title="Certifications" count="10+" />
        </motion.div>
      </div>
    </section>
  )
}

function SkillCard({ title, count }: { title: string; count: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-primary/50 transition-all duration-300 text-center group hover:-translate-y-2"
    >
      <h3 className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">{count}</h3>
      <p className="text-gray-300">{title}</p>
    </motion.div>
  )
}

