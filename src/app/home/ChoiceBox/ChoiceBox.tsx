import styles from './choiceBox.module.css';

const ChoiceBox = () => {
  return (
    <section className={styles.choiceBox} id='hor'>
      <section className={styles.left}>
        <div className={styles.choice}>
          <sup>01</sup>
          <strong>Collaborative</strong>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. adipisicing elit.
          </span>
        </div>
        <div className={styles.choice}>
          <sup>02</sup>
          <strong>Efficient</strong>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. adipisicing elit.
          </span>
        </div>
        <div className={styles.choice}>
          <sup>03</sup>
          <strong>Progressive</strong>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. adipisicing elit.
          </span>
        </div>
        <div className={styles.choice}>
          <sup>04</sup>
          <strong>Respectful</strong>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. adipisicing elit.
          </span>
        </div>
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