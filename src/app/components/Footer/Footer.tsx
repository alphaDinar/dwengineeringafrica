import { MdCall, MdLocationPin, MdMail, MdOutlineSmartphone, MdSend } from 'react-icons/md';
import styles from './footer.module.css';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footerBox}>
      <h3 className={styles.logo}>LOGO</h3>
      <hr />
      <section className={styles.low}>
        <div className={styles.left}>
          <h3>Contact</h3>
          <ul>
            <Link href={'/call'}>
              <span>Telephone</span>
              <p><MdCall /> <span className='cash'>+233(0)302-224-517</span></p>
            </Link>
            <Link href={'/call'}>
              <span>Cell</span>
              <p><MdOutlineSmartphone /> <span className='cash'>+233(0)302-224-517</span></p>
            </Link>
            <article>
              <span>Email</span>
              <Link href={'/call'}>
                <p><MdMail /> <span >dwloffice@davidwalterghana.com</span></p>
              </Link>
              <Link href={''}>
                <p><MdMail /> <span >md@davidwalterghana.com</span></p>
              </Link>
              <Link href={''}>
                <p><MdMail /> <span >gm@davidwalterghana.com</span></p>
              </Link>
            </article>
          </ul>
        </div>
        <div className={styles.mid}>
          <h3>Location</h3>
          <article>
            <p><MdLocationPin /> <span >Office Address</span></p>
            <Link href={'/call'}>
              <p><span >AVA House C66/ 2 Kojo Thompson Road, Adabraka, Accra</span></p>
            </Link>
          </article>

          <article>
            <p><MdLocationPin /> <span >Postal Address</span></p>
            <Link href={'/call'}>
              <p><span >P. O. Box OS 01663, Osu - Accra, Ghana</span></p>
            </Link>
          </article>

          <article>
            <p><MdLocationPin /> <span >GPS Address</span></p>
            <Link href={'/call'}>
              <p><span >GA-074-1988</span></p>
            </Link>
          </article>
        </div>
        <div className={styles.right}>
          <h3>Mail Us</h3>
          <form>
            <input type="text" placeholder='Email' />
            <textarea placeholder='Notes'></textarea>
            <button><MdSend /></button>
          </form>
        </div>
      </section>
      <hr />
      <section className={styles.socialBox}>
        <FaFacebookF />
        <FaInstagram />
        <FaLinkedin />
      </section>
    </footer>
  );
}

export default Footer;