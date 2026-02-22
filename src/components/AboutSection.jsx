import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 25, label: 'Projects Completed', suffix: '+' },
  { value: 12, label: 'Technologies Mastered', suffix: '+' },
  { value: 3, label: 'Years of Learning', suffix: '+' },
];

function AnimatedCounter({ value, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    const stepDuration = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8 md:p-12 lg:p-16"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative w-64 h-64 mx-auto lg:mx-0">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 blur-xl opacity-50 animate-pulse" />
                <motion.div
                  className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-cyan-400/20 to-purple-500/20 flex items-center justify-center">
                    <span className="text-8xl font-bold text-white/80">FK</span>
                  </div>
                </motion.div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">About Me</h2>
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                I'm <strong className="text-cyan-400">Farhan Khan</strong>, a passionate Frontend & React Developer 
                specializing in building <strong>responsive</strong>, <strong>secure</strong>, and <strong>scalable</strong> web applications. 
                I focus on clean code, performance optimization, and creating user-centric interfaces 
                that deliver exceptional experiences across all devices.
              </p>
              <p className="text-white/80 text-base leading-relaxed mb-8">
                My development approach emphasizes <span className="text-cyan-400">security-focused development</span>, 
                <span className="text-blue-400"> responsive architecture</span>, and 
                <span className="text-purple-400"> performance optimization</span>. I believe in writing 
                maintainable code that scales with your business needs.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="glass rounded-2xl p-4 text-center"
                  >
                    <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-white/80 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
