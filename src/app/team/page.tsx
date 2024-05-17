import Image from 'next/image';
import Footer from '../components/Footer/Footer';
import TitleBox from '../components/TitleBox/TitleBox';
import TopNav from '../components/TopNav/TopNav';
import styles from './team.module.css';
import { MdOutlineWorkspacePremium } from 'react-icons/md';

const Team = () => {
  const place = 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1715909566/david%20walter/portrait-african-american-man_23-2149072214_uhhk9k.jpg';
  return (
    <section id='con'>
      <TopNav />

      <section className={styles.teamBox} id='hor'>
        <TitleBox title='Meet The Team' />

        <section className={styles.members}>
          {Array(10).fill('a').map((el, i) => (
            <div className={styles.member} key={i}>
              <div className={styles.imgBox}>
                <Image alt='' src={place} fill className='cover' />
              </div>

              <p>
                <strong>Mr. Emmanuel Quarshie</strong>
                <MdOutlineWorkspacePremium />
                <small>Executive Director</small>
              </p>
            </div>
          ))}
        </section>
      </section>

      <Footer />
    </section>
  );
}

export default Team;