'use client';
import { MdArrowBack, MdClose } from 'react-icons/md';
import TopNav from '../components/TopNav/TopNav';
import styles from './viewProject.module.css';
import TitleBox from '../components/TitleBox/TitleBox';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper as swiperType } from 'swiper';
import { useWinSize } from '../contexts/winSizeContext';

const ViewProject = () => {
  const pid = 'Royal Golf Views';
  const place = 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705999984/RGV/IMG_0097_1_lrdrzi.jpg';
  const set = [
    'https://res.cloudinary.com/dvnemzw0z/image/upload/v1706000920/RGV/IMG_0026_naknxg.jpg',
    'https://res.cloudinary.com/dvnemzw0z/image/upload/v1706000621/RGV/IMG_0079_collcm.jpg',
    'https://res.cloudinary.com/dvnemzw0z/image/upload/v1706000350/RGV/IMG_0054_fexs0p.jpg',
    'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695728/RGV/balcony_fyfudq.jpg',
    'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695727/RGV/poolView1_srgrq0.jpg',
    'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695724/RGV/gardenView_od3wq7.jpg',
    'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695724/RGV/bath2_frtrru.jpg',
    'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695723/RGV/floorView_bxkfmw.jpg',
    'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695723/RGV/bed3_vr4nfh.jpg'
  ]

  const { winSize } = useWinSize();
  const [thumbsSwiper, setThumbsSwiper] = useState<swiperType | null>(null);
  const [slideMode, setSlideMode] = useState(false);

  const toggleSlideMode = () => {
    slideMode ? setSlideMode(false) : setSlideMode(true);
  }

  const fixBox = (url: string) => {
    return <div className={styles.imgBox} onClick={toggleSlideMode}>
      <Image alt='' src={url} fill className='cover' />
    </div>
  }

  return (
    <section id='con'>
      <TopNav />

      <section className={styles.project} id='hor'>
        <TitleBox title={pid} />

        <section className={styles.gallery}>
          <section className={styles.top}>
            <section className={styles.left}>
              {fixBox(place)}
              <Image alt='' src={place} fill className='cover' />
            </section>
            <section className={styles.right}>
              {fixBox(set[0])}
              {fixBox(set[1])}
            </section>
          </section>

          <section className={styles.mid}>
            {fixBox(set[2])}
            {fixBox(set[3])}
            {fixBox(set[4])}
          </section>

          <section className={styles.low}>
            <section className={styles.left}>
              {fixBox(set[5])}
              {fixBox(set[6])}
            </section>
            <section className={styles.right}>
              {fixBox(set[7])}
              <Image alt='' src={set[8]} fill className='cover' />
            </section>
          </section>
        </section>
      </section>


      <section className={styles.slideSheet} style={slideMode ? { display: 'flex' } : { display: 'none' }}>
        <section className={styles.slideBox}>
          <MdClose onClick={toggleSlideMode} />
          <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className={styles.swiperBox}
          >
            {Array(8).fill('a').map((el, i) => (
              <SwiperSlide key={i}>
                <Image alt='' src={set[i]} fill className='cover' />
                {/* <img src="https://swiperjs.com/demos/images/nature-1.jpg" /> */}
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            // ref={thumbsSwiper}
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={winSize > 500 ? 4 : 3}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className={styles.thumbBox}
          >
            {Array(8).fill('a').map((el, i) => (
              <SwiperSlide key={i}>
                <Image alt='' src={set[i]} fill className='cover' />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </section>

    </section>
  );
}

export default ViewProject;