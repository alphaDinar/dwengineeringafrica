'use client'
import { useState } from 'react';
import Footer from '../components/Footer/Footer';
import TitleBox from '../components/TitleBox/TitleBox';
import TopNav from '../components/TopNav/TopNav';
import styles from './contact.module.css';
import { PiPhoneCall } from 'react-icons/pi';
import { BiMailSend } from 'react-icons/bi';
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');

  return (
    <section id='con'>
      <TopNav />

      <section className={styles.contactBox} id='hor'>
        <TitleBox title='Contact Us' />

        <section className={styles.conBox}>
          <section className={styles.left}>
            <form>
              <p>
                <span>Your Name</span>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
              </p>
              <p>
                <span>Email</span>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </p>
              <p>
                <span>Message</span>
                <textarea value={notes} onChange={(e) => setNotes(e.target.value)} required></textarea>
              </p>

              <button>Send Message</button>
            </form>
          </section>
          <section className={styles.right}>
            <h3>Get In Touch</h3>

            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas pariatur ipsam aspernatur dolore a maiores deserunt nisi id nesciunt unde, tempore numquam quos ab atque laboriosam nulla minus, error voluptas.
            </span>

            <article>
              <legend>
                <PiPhoneCall />
                <p>
                  <strong>Call Us</strong>
                  <span className='cash'>+233 55 000 0000</span>
                </p>
              </legend>
              <legend>
                <BiMailSend />
                <p>
                  <strong>Email Us</strong>
                  <span className='cash'>sales@dwengineeringafrica.com</span>
                </p>
              </legend>
            </article>

            <div>
              <Link href={''}> <FaFacebookF /> </Link>
              <Link href={''}> <FaLinkedin /> </Link>
              <Link href={''}> <FaInstagram /> </Link>
            </div>
          </section>
        </section>


      </section>

      <section>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.039531574266!2d-0.2127994259245494!3d5.561159433599683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf90a0ad388495%3A0x3637a94eff4ed377!2sDavid%20Walter%20Ghana%20Limited!5e0!3m2!1sen!2sgh!4v1708681404756!5m2!1sen!2sgh"
          width="100%" height="300"
          loading="lazy" referrerPolicy="no-referrer-when-downgrade">
        </iframe>

        <Footer />
      </section>
    </section>
  );
}

export default Contact;