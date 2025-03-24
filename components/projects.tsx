"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import SectionHeading from "./section-heading"

type Project = {
  title: string
  description: string
  image: string
  tags: string[]
  details: string
  link?: string
  github?: string
}

const projects: Project[] = [
  {
    title: "Pincrest - Pinterest Clone",
    description: "A full-featured Pinterest-inspired platform",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["HTML", "CSS", "JavaScript", "MySQL", "PHP"],
    details:
      "Developed a full-featured Pinterest-inspired platform using HTML, CSS, JavaScript, MySQL, and PHP. Implemented user authentication, image uploads, dynamic content rendering, and a responsive UI. Designed a database schema to efficiently store and retrieve user-generated content. Optimized frontend performance to ensure smooth scrolling and fast loading times.",
    github: "https://github.com/Toptha",
  },
  {
    title: "Complex Calculators",
    description: "CLI-based Calculator Program",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["C++", "CLI", "OOP"],
    details:
      "Built a multi-functional CLI calculator in C++ that integrates multiple types of calculations (basic arithmetic, scientific, financial, unit conversion, etc.). Designed an intuitive command-line interface with error handling and input validation. Optimized computational efficiency by structuring the program using object-oriented principles.",
    github: "https://github.com/Toptha",
  },
  {
    title: "Glichware",
    description: "Halloween-Themed E-commerce Website",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["HTML", "CSS", "JavaScript", "Express.js", "Node.js"],
    details:
      "Developed a cyberpunk-themed e-commerce website using HTML, CSS, and JavaScript, featuring an immersive and visually engaging UI. Designed and built an Express.js server to fetch and serve product data via APIs. Integrated a dynamic product recommendation system developed by the ML team into the frontend. Ensured cross-device responsiveness, making the website accessible on desktops, tablets, and mobiles. Enhanced user experience with interactive elements, smooth animations, and seamless navigation.",
    github: "https://github.com/Toptha",
  },
  {
    title: "Mori Woodworkers",
    description: "Craftsman Website",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB", "AngularJS"],
    details:
      "Designed and developed a craftsman-themed website using HTML, CSS, JavaScript, Node.js, Express.js, MongoDB, AngularJS, AJAX, and SwiperJS. Implemented an e-commerce-like experience with a product showcase, categories, and detailed descriptions. Used MongoDB to store and manage product details, ensuring efficient data retrieval. Designed a visually engaging and interactive UI, incorporating smooth scrolling and carousel.",
    github: "https://github.com/Toptha",
  },
  {
    title: "Carbon Emissions Tester",
    description: "Environmental Impact Assessment Tool",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Java", "OOP", "Data Analysis"],
    details:
      "Built a Java-based application to assess carbon footprint and environmental impact using real-world emission factors. Designed an interactive interface where users can input their energy consumption and receive detailed analysis. Implemented data processing algorithms to analyze carbon emissions based on transportation, energy usage, and lifestyle factors. Provided detailed reports and recommendations to help users reduce their carbon footprint.",
    github: "https://github.com/Toptha",
  },
  {
    title: "Bangalore Metro Fare Calculator",
    description: "Transportation Cost Optimization Tool",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["C++", "Algorithms", "Data Structures"],
    details:
      "Developed a C++ program to calculate optimal metro fares and route selection for Bangalore's metro system. Implemented real-time fare estimation by considering distance, number of stations, and fare slabs. Designed an efficient route-finding algorithm to suggest the shortest or cheapest metro path. Provided an easy-to-use CLI interface with input validation for seamless user interaction.",
    github: "https://github.com/Toptha",
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="py-20 bg-black/95 relative">
      <div className="container mx-auto px-4">
        <SectionHeading title="Projects" subtitle="My recent work" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
        </AnimatePresence>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: Project
  index: number
  onClick: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 overflow-hidden group hover:border-primary/50 transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="flex space-x-2">
            {project.github && (
              <Button size="icon" variant="ghost" className="bg-black/50 hover:bg-black/80 rounded-full">
                <Github className="h-4 w-4" />
              </Button>
            )}
            {project.link && (
              <Button size="icon" variant="ghost" className="bg-black/50 hover:bg-black/80 rounded-full">
                <ExternalLink className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 20 }}
        className="bg-gray-900 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-64 md:h-80">
          <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
          <Button
            size="icon"
            variant="ghost"
            className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 rounded-full"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
          <p className="text-gray-400 mb-4">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Project Details</h3>
            <p className="text-gray-300 leading-relaxed">{project.details}</p>
          </div>

          <div className="flex space-x-4">
            {project.github && (
              <Button asChild className="rounded-full">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" /> View on GitHub
                </a>
              </Button>
            )}
            {project.link && (
              <Button asChild variant="outline" className="rounded-full">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" /> Visit Project
                </a>
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

