import Image from 'next/image';
import styles from './visionBox.module.css';

const VisionBox = () => {
  const vision = {
    tag: 'Vision',
    header: "Empowering Dreams, Building Futures: Redefining Construction Excellence and Inspiring Growth Worldwide.",
    con: "Our vision at DW Engineering Africa is to be the global leader in construction, setting the benchmark for excellence and innovation. We aspire to create iconic structures, inspire industry transformation, and positively impact lives worldwide. Through our unwavering commitment to quality, integrity, and sustainability, we aim to shape the world's infrastructure and leave a lasting legacy of progress."
  }

  const mission = {
    tag: 'Mission',
    header: "To be the global leader in construction, setting the benchmark for excellence and innovation, and positively impacting lives worldwide.",
    con: "At DW Engineering Africa, our mission is to redefine the construction landscape by consistently exceeding expectations, fostering innovation, and creating sustainable value for all stakeholders. We are committed to pre-eminence by delivering excellence in every project, empowering communities, and shaping a brighter future for generations to come."
  }

  return (
    <section className={styles.visionBoxHolder} id='hor'>
      <span id='liner'>Our Vision And Mission</span>
      <section className={styles.visionBox} >
        <section className={styles.left}>
          <h3>{vision.tag}</h3>
          <p>
            {vision.header}
          </p>
          <hr />
          <small>
            {vision.con}
          </small>
        </section>
        <section className={styles.mid}>
          <Image alt='' className='cover' src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1716807084/dwEngineering/residential-house-process-building_23-2147694705_lqprrc.jpg'} fill />
        </section>
        <section className={styles.right}>
          <h3>{mission.tag}</h3>
          <p>
            {mission.header}
          </p>
          <hr />
          <small>
            {mission.con}
          </small>
        </section>
      </section>
    </section>
  );
}

export default VisionBox;