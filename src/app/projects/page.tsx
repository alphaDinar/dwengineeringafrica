import styles from './projects.module.css';
import TopNav from "../components/TopNav/TopNav";
import Image from 'next/image';
import { IoImageOutline } from 'react-icons/io5';
import Footer from '../components/Footer/Footer';
import Link from 'next/link';
import TitleBox from '../components/TitleBox/TitleBox';

const Projects = () => {
  const place = 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705999984/RGV/IMG_0097_1_lrdrzi.jpg';

  return (
    <section id='con'>
      <TopNav />

      <section className={styles.projectBox} id='hor'>
        <header>
          <TitleBox title={'Project Gallery'} />

          <nav>
            <Link href={'/timeline'}>Project Timeline</Link>
            <Link href={'/portfolio'}>Project Portfolio</Link>
          </nav>
        </header>

        <section className={styles.projects}>
          {Array(10).fill('a').map((el, i) => (
            <Link href={'/viewProject'} className={styles.project} key={i}>
              <Image alt='' src={place} fill className='cover' />
              <legend>
                <IoImageOutline />
                <span className='cash'>5</span>
              </legend>

              <p>
                <strong>Royal Golf Views</strong>
                <span className='cash'>23rd March, 2021</span>
                <small>Civil</small>
              </p>
            </Link>
          ))}
        </section>
      </section>

      <Footer />
    </section>
  );
}

export default Projects;