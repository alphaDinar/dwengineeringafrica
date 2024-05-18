import styles from './blog.module.css';
import Footer from "../components/Footer/Footer";
import TopNav from "../components/TopNav/TopNav";
import TitleBox from '../components/TitleBox/TitleBox';
import Link from 'next/link';
import place from '../../../public/workers.jpeg';
import Image from 'next/image';
import { MdArrowForward } from 'react-icons/md';

const Blog = () => {
  return (
    <section id="con">
      <TopNav />

      <section className={styles.blogBox} id='hor'>
        <TitleBox title='Our Blog' />

        <section className={styles.blogs}>

          {Array(10).fill('a').map((el, i) => (
            <Link href={'/viewBlog'} className={styles.blog} key={i}>
              <div className={styles.imgBox}>
                <Image alt='' src={place} fill className='cover' />
              </div>

              <div className={styles.infoBox}>
                <article>
                  <strong>Welcome to DW Engineering Africa.</strong>
                  <span id='cut2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, itaque blanditiis repellat dolores cupiditate praesentium voluptates libero aut animi exercitationem minus sed possimus qui inventore quod at nemo repellendus? Eligendi?
                  </span>
                  <small>30 mins ago</small>
                </article>

                <MdArrowForward />
              </div>
            </Link>
          ))}
        </section>
      </section>

      <Footer />
    </section>
  );
}

export default Blog;