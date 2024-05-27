import Footer from '../components/Footer/Footer';
import TitleBox from '../components/TitleBox/TitleBox';
import TopNav from '../components/TopNav/TopNav';
import styles from './about.module.css';
import place from '../../../public/workers.jpeg';
import Image from 'next/image';
import { MdTaskAlt } from 'react-icons/md';

const About = () => {
  const place2 = 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1715285538/david%20walter/working-housing-project_1098-17511_jjjnlk.jpg';
  const aboutText = "DW Engineering Africa is a renowned leader in the construction industry, boasting nearly five decades of excellence and innovation. With a diverse portfolio valued at over USD 129 million in completed projects and USD 93 million in ongoing endeavors, DWEA consistently exceeds client expectations while leaving a lasting impact on infrastructure development. Our commitment to quality, integrity, and client satisfaction is evident in every project we undertake, from residential apartments to critical infrastructure such as railways and educational institutions. Beyond project completion, DWEA's focus on sustainability drives positive change in communities across multiple countries. As a trusted partner, DWEA distinguishes itself through dedication to safety, compliance, and innovation. Our global presence, combined with local expertise, ensures efficient project execution regardless of scale or complexity. In summary, DWEA's unwavering pursuit of excellence positions us as leaders in the industry. With a proven track record and a vision for the future, we remain committed to delivering value to clients, communities, and stakeholders worldwide."

  return (
    <section id='con'>
      <TopNav />

      <section className={styles.aboutBox} id='hor'>
        <TitleBox title='About Us' />

        <section className={styles.conBox}>
          <section className={styles.left}>
            <Image alt='' src={place} className='cover' fill />
          </section>
          <section className={styles.right}>
            <p>{aboutText}</p>

            <article>
              <legend><MdTaskAlt /> <small>Experience</small></legend>
              <legend><MdTaskAlt /> <small>Efficiency</small></legend>
              <legend><MdTaskAlt /> <small>Excellence</small></legend>
            </article>

            <img src={place2} alt="" height={150} className='cover' />
          </section>
        </section>
      </section>

      <Footer />
    </section>
  );
}

export default About;