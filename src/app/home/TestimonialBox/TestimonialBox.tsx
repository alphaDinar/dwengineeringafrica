'use client'
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import 'swiper/css/effect-cube';
import 'swiper/css';
import styles from './testimonialBox.module.css';
import Image from "next/image";
import testImage from '../../../../public/testImage.jpg'

const TestimonialBox = () => {
  const headSwiper = useRef<{ swiper: any }>({ swiper: null });
  const [slideNum, setSlideNum] = useState(3);
  const images = [0, 0, 0, 0, 0];

  const place = 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1715306370/david%20walter/mapHigh_ygytdb.jpg';

  useEffect(() => {
    if (typeof window != 'undefined') {
      if (window.innerWidth > 700) {
        setSlideNum(3);
      } else if (window.innerWidth > 450 && window.innerWidth <= 700) {
        setSlideNum(2);
      } else {
        setSlideNum(1)
      }
    }
  }, [])

  return (
    <section className={styles.testimonialBox} id='hor' style={{ backgroundImage: `url(${place})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <section className={styles.sheet}></section>
      <section className={styles.con}>
        <header>
          <h3>Testimonials</h3>
          <sub></sub>
        </header>
        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={1000}
          slidesPerView={slideNum}
          spaceBetween={20}
          ref={headSwiper}
          autoplay={{ delay: 3500 }}
          className={styles.testimonialSwiper}
        >
          {images.map((el, i) => (
            <SwiperSlide className={styles.testimonialSlide} key={i}>
              <div className={styles.testimonial}>
                <div className={styles.imgBox}>
                  <Image alt="" fill sizes="1" src={testImage} />
                </div>

                <strong>&quot;Great Support&quot;</strong>
                <sub>Lorem ipsum dolor sit, oluptas accusamus omnis quisquam.</sub>
                <span>Chris Paul</span>
                <sub>Business Man</sub>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <article>
          <legend></legend>
          <legend></legend>
          <legend></legend>
        </article>
      </section>
    </section>
  );
}

export default TestimonialBox;