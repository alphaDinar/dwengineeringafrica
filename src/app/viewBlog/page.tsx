import TopNav from '../components/TopNav/TopNav';
import styles from './viewBlog.module.css'
import place from '../../../public/workers.jpeg';
import TitleBox from '../components/TitleBox/TitleBox';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';

const ViewBlog = () => {
  return (
    <section id='con'>
      <TopNav />

      <section className={styles.blogBox} id='hor'>
        <TitleBox title='Welcome To DW Engineering Africa.' />

        <section className={styles.conBox}>
          <section className={styles.left}>
            <Image alt='' src={place} fill className='cover' />
          </section>
          <section className={styles.right}>
            <span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae blanditiis, voluptatum, necessitatibus quo rerum exercitationem repellat totam sunt dolores, doloribus quia ab culpa asperiores? Reprehenderit, nobis! Asperiores facere veritatis reiciendis.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, suscipit. Ut, minus libero incidunt, at laboriosam voluptate beatae cumque nobis possimus laudantium neque sunt laborum qui totam tempora. Voluptatem, ipsa!
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas perferendis labore temporibus nulla, quos nam unde numquam nihil nemo esse, quisquam doloribus laborum repudiandae ducimus, repellat nostrum harum impedit assumenda?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, possimus sunt illo nesciunt, obcaecati at quae expedita impedit aliquam minima natus laborum autem. Illum debitis aut pariatur, sunt et porro!
            </span>
            <hr />
            <small className='cash'>23rd March, 2024</small>

            <p>
              <Link href={''}> <FaFacebookF /> </Link>
              <Link href={''}> <FaLinkedin /> </Link>
              <Link href={''}> <FaInstagram /> </Link>
            </p>
          </section>
        </section>
      </section>
    </section>
  );
}

export default ViewBlog;