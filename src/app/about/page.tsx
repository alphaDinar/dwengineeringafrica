import Footer from '../components/Footer/Footer';
import TitleBox from '../components/TitleBox/TitleBox';
import TopNav from '../components/TopNav/TopNav';
import styles from './about.module.css';
import place from '../../../public/workers.jpeg';
import Image from 'next/image';
import { MdTaskAlt } from 'react-icons/md';

const About = () => {
  const place2 = 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1715285538/david%20walter/working-housing-project_1098-17511_jjjnlk.jpg';
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
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus porro animi totam id tenetur molestiae accusantium iste doloribus, eum voluptatem sunt perspiciatis. Consectetur dolorum ea sed soluta aliquam dolor similique.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, nostrum dolor. Voluptate vero sunt iste. Modi incidunt culpa illum saepe dolores, libero sunt mollitia, vitae sed debitis, numquam consequatur voluptatibus?
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium quo voluptatibus amet praesentium quibusdam consequatur vel atque corrupti commodi deleniti recusandae, sunt iste facere est numquam ad ut mollitia impedit.
            </p>

            <article>
              <legend><MdTaskAlt /> <small>Lorem ipsum dolor</small></legend>
              <legend><MdTaskAlt /> <small>Lorem ipsum dolor</small></legend>
              <legend><MdTaskAlt /> <small>Lorem ipsum dolor</small></legend>
            </article>

            <img src={place2} alt=""  height={150} className='cover' />
          </section>
        </section>
      </section>

      <Footer />
    </section>
  );
}

export default About;