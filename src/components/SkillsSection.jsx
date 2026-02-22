import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const frontendSkills = [
  { name: 'HTML5', level: 95, icon: '📄' },
  { name: 'CSS3', level: 90, icon: '🎨' },
  { name: 'JavaScript (ES6+)', level: 92, icon: '⚡' },
  { name: 'React.js', level: 90, icon: '⚛️' },
  { name: 'Tailwind CSS', level: 88, icon: '🌈' },
];

const otherSkills = [
  { name: 'Git & GitHub', level: 85, icon: '🐙' },
  { name: 'REST APIs', level: 82, icon: '🔌' },
  { name: 'Responsive Design', level: 95, icon: '📱' },
  { name: 'Basic Node.js', level: 70, icon: '🟢' },
];

function SkillCard({ skill, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.02, rotateY: 5 }}
      className="glass rounded-2xl p-6 hover:border-cyan-400/50 hover:shadow-cyan-400/10 hover:shadow-xl transition-all group"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">{skill.icon}</span>
        <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
      </div>
      <div className="h-2 rounded-full bg-white/10 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 + index * 0.05 }}
          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 group-hover:from-cyan-400 group-hover:to-purple-500 transition-colors"
        />
      </div>
      <span className="text-sm text-white/60 mt-1 block">{skill.level}%</span>
    </motion.div>
  );
}

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="skills" className="relative py-24 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Skills & Expertise</h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Technologies I use to build responsive and secure web applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-6">Frontend</h3>
            <div className="space-y-4">
              {frontendSkills.map((skill, i) => (
                <SkillCard key={skill.name} skill={skill} index={i} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-purple-400 mb-6">Other</h3>
            <div className="space-y-4">
              {otherSkills.map((skill, i) => (
                <SkillCard key={skill.name} skill={skill} index={i + 5} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
