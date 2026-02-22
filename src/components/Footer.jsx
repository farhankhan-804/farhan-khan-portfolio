import { motion } from 'framer-motion';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/60 text-sm">
          © {year} Farhan Khan. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#hero" className="text-white/60 hover:text-cyan-400 text-sm transition-colors">Home</a>
          <a href="#projects" className="text-white/60 hover:text-cyan-400 text-sm transition-colors">Projects</a>
          <a href="#contact" className="text-white/60 hover:text-cyan-400 text-sm transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
