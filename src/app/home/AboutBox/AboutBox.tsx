import Link from 'next/link';
import styles from './aboutBox.module.css';
import Image from 'next/image';
import place from '../../../../public/workers.jpeg';
import { MdTaskAlt } from 'react-icons/md';

const AboutBox = () => {
  // const place = 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1715294788/david%20walter/construction-site-build-construction-work-159358_iu6ks3.jpg'

  const aboutText = "DW Engineering Africa (DWEA) is a renowned leader in the construction industry, boasting nearly five decades of excellence and innovation. With a diverse portfolio valued at over USD 129 million in completed projects and USD 93 million in ongoing endeavors, DWEA consistently exceeds client expectations while leaving a lasting impact on infrastructure development.Our commitment to quality, integrity, and client satisfaction is evident in every project we undertake, from residential apartments to critical infrastructure such as railways and educational institutions. Beyond project completion, DWEA's focus on sustainability drives positive change in communities across multiple countries.";

  return (
    <section className={styles.aboutBox} id='hor'>
      <section className={styles.left}>
        <Image src={place} alt='test' fill className='cover' />
        <article>
          <legend><MdTaskAlt /> <small>Experience</small></legend>
          <legend><MdTaskAlt /> <small>Efficiency</small></legend>
          <legend><MdTaskAlt /> <small>Excellence</small></legend>
        </article>
      </section>
      <section className={styles.right}>
        <span id='liner'>About Us</span>

        <h3>
          Engineering Frontiers: Where Innovation Takes Flight
        </h3>
        <small style={{ fontSize: '1rem' }}>
          {aboutText}
        </small>

        <Link href={'/about'} >Learn More</Link>
      </section>
    </section>
  );
}

export default AboutBox;