import Link from 'next/link';
import styles from './blogBox.module.css';
import { MdArrowForward } from 'react-icons/md';
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

const BlogBox = () => {
  const sample = 'https://res.cloudinary.com/dvnemzw0z/video/upload/v1715359991/david%20walter/1109276_1080p_standard_elegant_1920x1080_icnmna.mp4';
  const sample2 = 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1708680863/david%20walter/high-angle-measuring-tools-still-life_23-2150440970_x2lh5y.avif';

  return (
    <section className={styles.blogBox} id='hor'>
      <header>
        <span id='liner'>News & Blog</span>
        {/* <sub></sub> */}
        <Link href={'/projects'}> More <MdArrowForward /></Link>
      </header>

      <section className={styles.con}>
        <section className={styles.left}>
          <div className={styles.imgBox}>
            <video muted autoPlay loop controls src={sample} ></video>
          </div>
          <article>
            <strong>Welcome To DW Engineering Africa</strong>
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa labore recusandae dignissimos facere sit eum hic beatae! Ipsum at aspernatur architecto repellendus velit quod! Officiis ratione nulla mollitia aliquid sunt!
            </span>
            <sub>30 mins ago</sub>
            <div className={styles.socialBox}>
              <p>
                <FaFacebookF />
                <FaInstagram />
                <FaLinkedin />
              </p>
              <Link href={'/blog'}>
                <MdArrowForward className={styles.next} />
              </Link>
            </div>
          </article>
        </section>
        <section className={styles.right}>
          {Array(3).fill('a').map((el, i) => (
            <div className={styles.nextBlog} key={i}>
              <div className={styles.top}>
                <Image alt='' width={80} height={80} src={sample2} />
                <article>
                  <strong>Welcome To DW Engineering Africa</strong>
                  <span>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa labore recusandae dignissimos facere sit eum.
                  </span>
                  <sub>30 mins ago</sub>
                </article>

              </div>
              <div className={styles.socialBox}>
                <p>
                  <FaFacebookF />
                  <FaInstagram />
                  <FaLinkedin />
                </p>
                <Link href={'/blog'}>
                  <MdArrowForward className={styles.next} />
                </Link>
              </div>
            </div>
          ))}
        </section>
      </section>
    </section>
  );
}

export default BlogBox;