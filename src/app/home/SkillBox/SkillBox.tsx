'use client'
import { TbHomeBolt } from 'react-icons/tb';
import styles from './skillBox.module.css';
import { MdOutlineBuild, MdOutlinePsychology } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const SkillBox = () => {
  const skills = [
    { tag: 'Professionalism', iconEl: <MdOutlineBuild />, con: "We uphold the highest standards of integrity, competence, and accountability in all our endeavors." },
    { tag: 'Innovation', iconEl: <MdOutlinePsychology />, con: "We embrace creativity, forward-thinking, and continuous improvement, driving innovation to solve complex challenges and enhance our services." },
    { tag: 'Teamwork', iconEl: <TbHomeBolt />, con: " We believe in the power of collaboration, cooperation, and mutual support, leveraging the collective expertise and strengths of our team to achieve shared goals." }
  ]

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, [])
  return (
    <section className={styles.skillBox} id='hor'>
      {skills.map((skill, i)=>(
        <div className={styles.skill} data-aos="fade-right" key={i}>
        {skill.iconEl}
        <strong>{skill.tag}</strong>
        <p>
          {skill.con}
        </p>
      </div>
      ))}
    </section>
  );
}

export default SkillBox;