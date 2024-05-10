import Link from 'next/link';
import styles from './aboutBox.module.css';
import Image from 'next/image';
import place from '../../../../public/workers.jpeg';
import { MdTaskAlt } from 'react-icons/md';

const AboutBox = () => {
  // const place = 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1715294788/david%20walter/construction-site-build-construction-work-159358_iu6ks3.jpg'

  return (
    <section className={styles.aboutBox} id='hor'>
      <section className={styles.left}>
        <Image src={place} alt='test' fill className='cover' />
        <article>
          <legend><MdTaskAlt /> <small>Lorem ipsum dolor</small></legend>
          <legend><MdTaskAlt /> <small>Lorem ipsum dolor</small></legend>
          <legend><MdTaskAlt /> <small>Lorem ipsum dolor</small></legend>
        </article>
      </section>
      <section className={styles.right}>
        <span id='liner'>About Us</span>

        <h3>
          Engineering Frontiers: Where Innovation Takes Flight
        </h3>
        <small style={{ fontSize: '1rem' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi dignissimos nobis corporis doloremque illo explicabo soluta repellat neque quas et tenetur assumenda impedit aperiam inventore iste quasi, perspiciatis fugit quidem! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, dolores accusamus facere ad laudantium provident consectetur corporis fugiat laboriosam fugit odio, enim veritatis, labore excepturi! Magnam fuga quia vero quis.</small>

        <Link href={'/'} >Learn More</Link>
      </section>
    </section>
  );
}

export default AboutBox;