"use client"

import { motion } from "framer-motion"

export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        className="w-16 h-16 relative"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        <motion.span
          className="absolute top-0 left-0 w-full h-full border-t-2 border-primary rounded-full"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        ></motion.span>
        <motion.span
          className="absolute top-0 left-0 w-full h-full border-l-2 border-white/30 rounded-full"
          animate={{ rotate: -360 }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        ></motion.span>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-gray-400"
      >
        Loading...
      </motion.p>
    </div>
  )
}

