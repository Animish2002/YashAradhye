import React from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { ArrowRight, BookOpen, Compass, Users, Calendar } from "lucide-react";

const HeroSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-white dark:from-zinc-900 dark:via-indigo-950/30 dark:to-zinc-950 pt-16 pb-24">
      {/* Abstract geometric background elements */}
      {/* <div className="absolute inset-0 z-0">
        <svg className="absolute top-0 left-0 w-full h-full opacity-20" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#6366F1" stopOpacity="0.7" />
            </linearGradient>
          </defs>
          <path d="M0,800 Q250,700 500,800 T1000,800 L1000,0 L0,0 Z" fill="url(#grad1)" />
          <circle cx="900" cy="300" r="100" fill="#3B82F6" opacity="0.3" />
          <circle cx="150" cy="500" r="70" fill="#6366F1" opacity="0.3" />
        </svg>
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left column - Text content (spans 7 columns on large screens) */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div variants={itemVariants} className="inline-flex">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium px-4 py-1.5 rounded-full shadow-md shadow-blue-500/20">
                <span className="mr-2">✦</span>
                Maharashtra's Premier Academic Guidance
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white leading-tight hero">
              Guiding Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">Academic Journey</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg text-zinc-700 dark:text-zinc-300 max-w-2xl">
              Helping 10th-grade students from across Maharashtra navigate their path through JEE, NEET, MHT-CET, and board exams with expert guidance and resources.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-600/40 transition-all duration-300">
                Explore Our Services
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300">
                Get Started Today
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 max-w-2xl">
              {[
                { 
                  icon: BookOpen, 
                  title: "Exam Preparation", 
                  description: "Strategic guidance for JEE, NEET, MHT-CET and board exams" 
                },
                { 
                  icon: Compass, 
                  title: "Career Counseling", 
                  description: "Personalized advice to align your interests with career paths" 
                }
              ].map((feature, i) => (
                <div key={i} className="bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm rounded-xl p-4 border border-blue-100 dark:border-blue-900 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-md shadow-blue-500/20">
                      <feature.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-900 dark:text-white">{feature.title}</h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right column - Visual elements (spans 5 columns on large screens) */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-5 relative"
          >
            <div className="relative">
              {/* Main illustration/image container */}
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 shadow-2xl shadow-blue-500/30 border border-white/20">
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  {/* Simplified illustration of students and educational elements */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="absolute top-4 left-4 w-16 h-16 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Calendar className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute bottom-4 right-4 w-16 h-16 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-center">
                      <span className="font-bold text-2xl text-white block mb-2">Success Starts Here</span>
                      <span className="text-blue-100 text-sm">Join 10,000+ students across Maharashtra</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating stats card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute -bottom-6 -left-12 bg-white dark:bg-zinc-800 rounded-xl shadow-xl p-4 border border-blue-100 dark:border-blue-900/50"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-3">
                    {[...Array(3)].map((_, i) => (
                      <div 
                        key={i} 
                        className="w-10 h-10 rounded-full border-2 border-white dark:border-zinc-800 shadow-sm flex items-center justify-center text-white font-medium text-xs"
                        style={{ 
                          backgroundColor: i === 0 ? '#3B82F6' : i === 1 ? '#6366F1' : '#4F46E5',
                          zIndex: 3 - i
                        }}
                      >
                        {['JEE', 'NEET', 'CET'][i]}
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">Success Rate</p>
                    <p className="text-sm font-bold text-zinc-900 dark:text-white">92% Above-Average Results</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, x: 30, rotate: 5 }}
                animate={{ opacity: 1, x: 0, rotate: 5 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute -top-4 -right-4 bg-gradient-to-br from-amber-400 to-amber-600 text-white rounded-lg py-2 px-3 shadow-lg shadow-amber-500/30 transform rotate-6"
              >
                <p className="text-sm font-bold">10+ Years</p>
                <p className="text-xs">Excellence</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative dots pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-blue-500/10 flex items-center justify-center space-x-2">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="w-1 h-1 rounded-full bg-blue-500/40" />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;