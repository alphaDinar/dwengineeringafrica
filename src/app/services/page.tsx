// 'use client'
import styles from './services.module.css';
import Footer from "../components/Footer/Footer";
import TopNav from "../components/TopNav/TopNav";
import TitleBox from '../components/TitleBox/TitleBox';
import Image from 'next/image';


const Services = () => {
  const place = 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1715907826/RGV/mining-industry-1024x683_x5lf8f.jpg';


  return (
    <section id="con">
      <TopNav />

      <section className={styles.serviceBox} id='hor'>
        <TitleBox title='Services We Offer' />

        <section className={styles.services}>
          {Array(6).fill('a').map((el, i) => (
            <div className={styles.service} key={i}>
              <div className={styles.imgBox}>
                <Image alt='' src={place} fill className='cover' />
              </div>
              <p>
                <strong>Mining</strong>
                <small>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor quod assumenda expedita nobis provident ex est dolores tenetur quibusdam dignissimos. Eligendi reprehenderit dolorem perspiciatis earum aperiam suscipit porro eum praesentium!</small>
              </p>
            </div>
          ))}
        </section>
      </section>

      <Footer />
    </section>
  );
}

export default Services;