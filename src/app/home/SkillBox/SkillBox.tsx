import { TbHomeBolt } from 'react-icons/tb';
import styles from './skillBox.module.css';
import { MdOutlineBuild, MdOutlinePsychology } from 'react-icons/md';

const SkillBox = () => {
  return (
    <section className={styles.skillBox} id='hor'>
      <div className={styles.skill}>
        <TbHomeBolt />
        <strong>Integrating Sustainability</strong>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic illum, modi libero
        </p>
      </div>
      <div className={styles.skill}>
        <MdOutlineBuild />
        <strong>Innovation</strong>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic illum, modi libero
        </p>
      </div>
      <div className={styles.skill}>
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