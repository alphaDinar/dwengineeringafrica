'use client'
import styles from './choiceBox.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const ChoiceBox = () => {
  const choiceList = [
    { counter: '01', tag: 'Respect', con: "We value diversity and treat all individuals with dignity, courtesy, and fairness, fostering an inclusive and supportive environment." },
    { counter: '02', tag: 'Openness', con: "We embrace transparency, honesty, and receptiveness to new ideas and feedback, fostering a culture of trust and collaboration." },
    { counter: '03', tag: 'Fairness', con: "We are committed to ensuring equitable treatment and opportunities for all stakeholders, promoting justice and integrity in all our interactions." },
    { counter: '04', tag: 'Safety', con: "We prioritize the health, safety, and well-being of our employees, clients, and communities, maintaining rigorous safety standards and practices in all our operations" },
  ];


  const coreValue = "At the heart of our mission to lead the industry, we embrace a set of core values that define our approach and guide our actions. Integrity, innovation, and excellence form the cornerstone of our operations";

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
              {choice.con}
            </span>
          </div>
        ))}
      </section>
      <section className={styles.right}>
        <span id='liner'>Why Choose Us</span>

        <h3>Our Core Values For Industry Leadership</h3>

        <small style={{ fontSize: '1rem' }}>
          {coreValue}
        </small>

        <img height={200} className='contain' src="https://res.cloudinary.com/dvnemzw0z/image/upload/v1716470707/dwEngineering/worker_vynlbu.png" alt="" />
      </section>
    </section>
  );
}

export default ChoiceBox;