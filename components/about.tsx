"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { User, Code, Lightbulb, GraduationCap } from "lucide-react"
import SectionHeading from "./section-heading"

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="py-20 bg-black relative">
      <div className="container mx-auto px-4">
        <SectionHeading title="About Me" subtitle="Get to know me better" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-6"
          >
            <motion.p variants={itemVariants} className="text-gray-300 leading-relaxed">
              As a passionate and versatile software developer with experience across full-stack development, AI/ML and
              software engineering, I am driven by a desire to create innovative solutions that blend technology and
              real-world applications.
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-300 leading-relaxed">
              Currently pursuing a Computer Science degree at Christ University, I have honed my skills in programming
              languages such as C++, Java, Python, JavaScript, and PHP, with hands-on expertise in frameworks like
              React, Next.js, and Tailwind CSS.
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-300 leading-relaxed">
              I specialize in building user-centric web applications and have a solid understanding of database
              management, system integration, and web development practices. My experience includes working on projects
              in diverse domains, such as predictive health analysis, financial calculators, and predictive machine
              learning models, with a focus on delivering scalable and efficient solutions.
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-300 leading-relaxed">
              Whether it's crafting seamless user experiences, implementing robust back-end architectures, or exploring
              the potential of AI, I am constantly learning and staying updated with the latest industry trends. I'm
              excited to connect with professionals and explore opportunities to collaborate on impactful projects.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                <User className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Personal Info</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Name: Preetham S</li>
                <li>Age: {new Date().getFullYear() - 2006}</li>
                <li>Location: Bengaluru, India</li>
                <li>Nationality: Indian</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Development</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Full-Stack Development</li>
                <li>Web Applications</li>
                <li>Mobile Applications</li>
                <li>Database Management</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Interests</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Artificial Intelligence</li>
                <li>Machine Learning</li>
                <li>Web Development</li>
                <li>Software Engineering</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <ul className="space-y-2 text-gray-300">
                <li>B.Sc. Computer Science</li>
                <li>Christ University</li>
                <li>Expected: May 2027</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

