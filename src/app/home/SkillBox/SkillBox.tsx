'use client'
import { TbHomeBolt } from 'react-icons/tb';
import styles from './skillBox.module.css';
import { MdOutlineBuild, MdOutlinePsychology } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const SkillBox = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, [])
  return (
    <section className={styles.skillBox} id='hor'>
      <div className={styles.skill} data-aos="fade-right">
        <TbHomeBolt />
        <strong>Integrating Sustainability</strong>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic illum, modi libero
        </p>
      </div>
      <div className={styles.skill} data-aos="fade-right">
        <MdOutlineBuild />
        <strong>Innovation</strong>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic illum, modi libero
        </p>
      </div>
      <div className={styles.skill} data-aos="fade-right">
        <MdOutlinePsychology />
        <strong>Ingenuity</strong>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic illum, modi libero
        </p>
      </div>
    </section>
  );
}

export default SkillBox;