'use client'
import styles from './choiceBox.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const ChoiceBox = () => {
  const choiceList = [
    { counter: '01', tag: 'Collaborative' },
    { counter: '02', tag: 'Efficient' },
    { counter: '03', tag: 'Progressive' },
    { counter: '04', tag: 'Respectful' },
  ]

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, [])
  return (
    <section className={styles.choiceBox} id='hor'>
      <section className={styles.left} >
        {choiceList.map((choice, i) => (
          <div className={styles.choice} data-aos="fade-up" data-aos-delay={50 * (i + 1)} key={i}>
            <sup>{choice.counter}</sup>
            <strong>{choice.tag}</strong>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. adipisicing elit.
            </span>
          </div>
        ))}
      </section>
      <section className={styles.right}>
        <span id='liner'>Why Choose Us</span>

        <h3>Our Core Values For Industry Leadership</h3>

        <small style={{ fontSize: '1rem' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, aliquam suscipit fugit, quibusdam commodi cupiditate non asperiores, illum consequuntur nisi neque animi quia reprehenderit possimus fugiat officiis delectus minus error.</small>

        <img height={200} className='contain' src="https://res.cloudinary.com/dvnemzw0z/image/upload/v1715304248/david%20walter/smiling-young-builder-man-uniform-with-safety-helmet-standing-with-crossed-arms-isolated-orange-wall-with-copy-space_141793-119957-removebg-preview_1_gu0cn6.png" alt="" />
      </section>
    </section>
  );
}

export default ChoiceBox;