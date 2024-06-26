import Image from 'next/image';
import styles from './headBox.module.css';
import { MdEast } from 'react-icons/md';
import Link from 'next/link';
// import place from '../../../../public/headBoxImg.jpeg';

const HeadBox = () => {
  const place = 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1715287021/david%20walter/pexels-photo-224924_fnmzge.jpg';
  // const place = 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1715294788/david%20walter/construction-site-build-construction-work-159358_iu6ks3.jpg'

  return (
    <section className={styles.headBox} style={{ backgroundImage: `url(${place})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <section className={styles.sheet} id='hor'>
        <article>
          <span id='liner'>Innovative Technology </span>

          <h3>
            Engineering Excellence: Uniting Vision and Ingenuity
          </h3>

          <small>
            DW Engineering Africa (DWEA) is a premier construction firm with nearly five decades of experience, specializing in Civil Engineering, General Building, Electrical and Mechanical, Master Planning, and Construction Innovation.
          </small>

          <Link href={'/contact'}>Contact Us <MdEast /></Link>
        </article>
      </section>
    </section>
  );
}

export default HeadBox;