// React + Tailwind + React Three Fiber + Framer Motion boilerplate
// Portfolio 3D UI - Minimal Glossmorphism Theme

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

import './index.css'; // Tailwind base

export default function App() {
  return (
    <main className="min-h-screen bg-[#1e1e2f] text-white font-sans overflow-hidden">
      {/* Navigation Bar */}
      <header className="flex justify-between items-center px-8 py-4 backdrop-blur-md bg-white/5 shadow-md">
        <h1 className="text-2xl font-bold tracking-wide">Raja Yaswanth</h1>
        <nav className="space-x-6">
          <a href="#about" className="hover:text-cyan-400">About</a>
          <a href="#projects" className="hover:text-cyan-400">Projects</a>
          <a href="#contact" className="hover:text-cyan-400">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-[80vh] text-center px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }} 
          className="text-4xl md:text-6xl font-semibold mb-6"
        >
          Crafting Clean Code & Cinematic Stories
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg max-w-xl text-gray-300"
        >
          Integrated M.Tech student fusing UI, Python & screenwriting
        </motion.p>
      </section>

      {/* 3D Canvas Placeholder */}
      <section className="h-[400px] w-full">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <mesh>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="#00ffff" transparent opacity={0.6} />
          </mesh>
        </Canvas>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 max-w-4xl mx-auto">
        <h3 className="text-3xl font-semibold mb-4">About Me</h3>
        <p className="text-gray-300 leading-relaxed">
          I’m Raja Yaswanth Dutta, an Integrated M.Tech (IT) student with a passion for creating functional, elegant web solutions and writing emotionally gripping Telugu screenplays. From building secure platforms to scripting non-linear crime dramas, I combine logic and creativity to bring ideas to life.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 text-center bg-white/5 backdrop-blur-md mt-20">
        <h3 className="text-3xl font-semibold mb-2">Let’s Connect</h3>
        <p className="text-gray-300">rajayeswanth1239@gmail.com</p>
        <a href="https://www.linkedin.com/in/dutta-raja-yashwanth-253669285" target="_blank" className="text-cyan-400 mt-2 block">LinkedIn</a>
      </section>
    </main>
  );
}

