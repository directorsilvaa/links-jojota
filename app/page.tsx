"use client";

import { Instagram, MessageCircle } from "lucide-react";
import Image from "next/image";
import { motion, LazyMotion, domAnimation, Variants } from "framer-motion";

export default function Home() {
  const links = [
    {
      title: "WhatsApp",
      icon: <MessageCircle className="h-8 w-8" />,
      url: "https://api.whatsapp.com/send/?phone=557581048463&text=Olá,%20Vim%20através%20do%20site.%20Poderia%20me%20ajudar?&type=phone_number&app_absent=0",
      category: "contact",
    },
    {
      title: "Instagram",
      icon: <Instagram className="w-6 h-6" />,
      url: "https://www.instagram.com/cfcjotajota",
      category: "social",
    }
  ];

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
    initial: { 
      scale: 1,
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      boxShadow: "0 0 0 rgba(255, 255, 255, 0)"
    },
    hover: { 
      scale: 1.02,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    tap: { 
      scale: 0.98,
      backgroundColor: "rgba(255, 255, 255, 0.15)",
      transition: {
        duration: 0.1,
        ease: "easeIn"
      }
    }
  };

  const iconVariants: Variants = {
    initial: { 
      scale: 1,
      rotate: 0 
    },
    hover: { 
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const arrowVariants: Variants = {
    initial: { 
      x: 0,
      opacity: 0.5
    },
    hover: { 
      x: 5,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        repeat: Infinity,
        repeatType: "mirror" as const
      }
    }
  };

  return (
    <LazyMotion features={domAnimation}>
      <main className="min-h-screen bg-gradient-to-br from-black to-zinc-900 text-white">
        <div className="max-w-md mx-auto px-4 py-8 sm:py-16">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center mb-8"
          >
            <motion.div 
              className="relative w-32 h-32 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div className="absolute inset-1 rounded-full overflow-hidden border-2 border-white/20 bg-black">
                <Image
                  src="/100.png"
                  alt="Autoescola RM Logo"
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </motion.div>
            <motion.h1 
              className="text-2xl sm:text-3xl font-bold mb-3 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              Autoescola RM
            </motion.h1>
            <motion.p 
              className="text-zinc-400 text-center text-sm sm:text-base max-w-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Sua melhor escolha para habilitação
            </motion.p>
          </motion.div>

          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-4"
          >
            <div className="grid gap-4">
              {links.map((link, index) => (
                <motion.a
                  key={index}
                  variants={item}
                  href={link.url}
                  className="flex items-center gap-4 p-4 rounded-xl border border-white/5 backdrop-blur-sm overflow-hidden"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <motion.span 
                    className="text-zinc-300"
                    variants={iconVariants}
                  >
                    {link.icon}
                  </motion.span>
                  <span className="flex-1 font-medium">{link.title}</span>
                  <motion.span 
                    className="w-6 h-6 flex items-center justify-center text-zinc-400"
                    variants={arrowVariants}
                  >
                    →
                  </motion.span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.footer 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center text-zinc-500 text-sm"
          >
            <p>© 2025 Autoescola RM</p>
          </motion.footer>
        </div>
      </main>
    </LazyMotion>
  );
}
