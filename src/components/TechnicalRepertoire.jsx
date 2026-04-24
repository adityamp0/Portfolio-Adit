import React from 'react';
import { Brain, Code2, Database, Cpu, Command } from 'lucide-react';

const TechnicalRepertoire = ({ t }) => {
  const repertoire = [
    {
      title: 'Machine Learning',
      icon: <Brain size={24} />,
      skills: [
        { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
        { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
        { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
        { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
        { name: 'Scikit-Learn', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'Matplotlib', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg' },
        { name: 'Keras', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-line.svg' },
        { name: 'OpenCV', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' }
      ]
    },
    {
      title: 'Development',
      icon: <Code2 size={20} />,
      skills: [
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' }
      ]
    },
    {
      title: 'Infrastructure',
      icon: <Database size={20} />,
      skills: [
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' }
      ]
    }
  ];

  return (
    <section id="skills" className="section container">
      <div className="section-header">
        <span className="section-number">05</span>
        <div>
          <h2 className="section-title">{t.title}</h2>
          <span className="section-subtitle"><span className="typing-reveal">{t.subtitle}</span></span>
        </div>
      </div>

      <div className="repertoire-grid">
        {repertoire.map((cat, i) => (
          <div key={i} className="repertoire-card reveal">
            <div className="repertoire-card-header">
              <div className="repertoire-icon-box">
                {cat.icon}
              </div>
              <h4 className="repertoire-card-title">{cat.title}</h4>
            </div>

            <div className="repertoire-card-body">
              <div className="skill-item-grid">
                {cat.skills.map((skill, si) => (
                  <div key={si} className="skill-pill">
                    <div className="skill-logo-wrap">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        loading="lazy"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'block';
                        }}
                      />
                      <Command size={14} style={{ display: 'none' }} />
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalRepertoire;
