import { MdCall, MdLocationPin, MdMail, MdOutlineSmartphone, MdSend } from 'react-icons/md';
import styles from './footer.module.css';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../../../../public/logo.png';
import Image from 'next/image';

const Footer = () => {
  return (
    <section className={styles.footerBoxHolder}>
      <section className={styles.logoBox}>
        {/* <h3 className={styles.logo}>LOGO</h3> */}
        <Image alt='' src={logo} width={190} height={90} className='contain' />
      </section>
      <footer className={styles.footerBox}>
        {/* <hr /> */}
        <section className={styles.low}>
          <div className={styles.left}>
            <h3>Contact</h3>
            <ul>
              <Link href={'/call'}>
                <span>Telephone</span>
                <p><MdCall /> <span className='cash'>+233 (0) 30 222 4517</span></p>
              </Link>
              <Link href={'/call'}>
                <span>Cell</span>
                <p><MdOutlineSmartphone /> <span className='cash'>+233(0)302-224-517</span></p>
              </Link>
              <article>
                <span>Email</span>
                <Link href={'/call'}>
                  <p><MdMail /> <span >info@dwengineeringafrica.com</span></p>
                </Link>
                {/* <Link href={''}>
                <p><MdMail /> <span >md@davidwalterghana.com</span></p>
              </Link>
              <Link href={''}>
                <p><MdMail /> <span >gm@davidwalterghana.com</span></p>
              </Link> */}
              </article>
            </ul>
          </div>
          <div className={styles.mid}>
            <h3>Location</h3>
            <article>
              <p><MdLocationPin /> <span >Office Address</span></p>
              <Link href={'/call'}>
                <p><span >C66/2 Kojo Thompson Road, Adabraka-Accra</span></p>
              </Link>
            </article>

            <article>
              <p><MdLocationPin /> <span >Postal Address</span></p>
              <Link href={'/call'}>
                <p><span >C66/2 Kojo Thompson Road, Adabraka-Accra</span></p>
              </Link>
            </article>

            {/* <article>
            <p><MdLocationPin /> <span >GPS Address</span></p>
            <Link href={'/call'}>
              <p><span >GA-074-1988</span></p>
            </Link>
          </article> */}
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
    </section>
  );
}

export default Footer;