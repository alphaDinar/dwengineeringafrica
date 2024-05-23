'use client'
import Link from 'next/link';
import styles from './topNav.module.css';
import { MdMenu, MdOutlineFacebook, MdPhone } from 'react-icons/md';
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';
import { GiSpellBook } from 'react-icons/gi';
import Image from 'next/image';
import logo from '../../../../public/logo.png';

const TopNav = () => {
  const [navToggled, setNavToggled] = useState(false);
  const toggleNav = () => {
    navToggled ? setNavToggled(false) : setNavToggled(true);
  }


  return (
    <section className={styles.topNav} id='hor'>
      <section className={styles.top}>
        <p>
          <Link href={''}> <MdPhone /> <span className='cash'>+233 (0) 30 222 4517</span>  </Link>
          <Link href={''}> <MdPhone /> <span>dwloffice@davidwalterghana.com</span>  </Link>
        </p>

        <legend>
          <Link href={''}> <FaFacebookF /> </Link>
          <Link href={''}> <FaLinkedin /> </Link>
          <Link href={''}> <FaInstagram /> </Link>
          <a href=""><GiSpellBook />E-Brochure</a>
        </legend>
      </section>
      {/* <hr /> */}
      <section className={styles.low}>
        <Image alt='' src={logo} width={180} height={80} className='contain' />
        {/* <h3 className={styles.logo}>LOGO</h3> */}

        <nav className={navToggled ? styles.change : ''}>
          <Link href={'/'}>Home</Link>
          <Link href={'/about'}>About</Link>
          <Link href={'/services'}>Services</Link>
          <Link href={'/projects'}>Projects</Link>
          <Link href={'/team'}>Team</Link>
          <Link href={'/contact'}>Contact</Link>
          <MdMenu className={styles.menuTab} onClick={toggleNav} />
        </nav>
      </section>
    </section>
  );
}

export default TopNav;