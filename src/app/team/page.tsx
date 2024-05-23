'use client'
import Image from 'next/image';
import Footer from '../components/Footer/Footer';
import TitleBox from '../components/TitleBox/TitleBox';
import TopNav from '../components/TopNav/TopNav';
import styles from './team.module.css';
import { MdOutlineWorkspacePremium } from 'react-icons/md';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Team = () => {
  const place = 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1715909566/david%20walter/portrait-african-american-man_23-2149072214_uhhk9k.jpg';

  const members = [
    { name: 'R.D Asante', url: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1716468538/dwEngineering/dwTeam1_m9xmx2.png', position: 'Chairman', description: "He holds an M COM from the University of Melbourne, Austrailia and a BSc. Economics from the University of Ghana. He has served as a consultant as well as an external director on the Board of both International and local institutions/ foundations including the financial Intelligence Centre (FIC), UNECA, ADB,ACP and ECOWAS." },
    { name: 'David Osei Amankwah', position: 'Managing Director', description: "He is a member of the Chartered Institute of Builders UK, and has over 30 years experience in Building and Civil Engineering Construction. He holds an MSc. in Construction from Loughborough University, U.K. and a B. Eng. Civil (Structures) from McGill University, Canada.", url: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1716469170/dwEngineering/MD_wgrgf4.png' },
    { name: 'Emmanuel Quarshie', position: 'Executive Director', description: "He is a Chartered Accountant and an astute finance professional with Executive MBA from the University of Ghana Business School. He has been involved in multi-sectorial activities including major operational projects for over 30yrs in industries such as insurance, investment, tourism and hospitality, sports, real estate, construction, production and manufacturing, etc.", url: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1716469327/dwEngineering/ED_upwlhj.png' },
    { name: 'Samuel Bruce', position: 'General Manager', description: "He holds an MBA. in Business Analytics from Guelph University, Canada. A Project Management Professional (PMP) from York University, Canada. His areas of expertise are Project Implementation, Risk Management and Leadership. He has professional experience as project manager at Bombardier Aerospace and as project leader TSM (Territory Sales Manager) at Robert Bosch Ltd.", url: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1716469343/dwEngineering/GM_l7gepe.png' }
  ]

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, [])

  return (
    <section id='con'>
      <TopNav />

      <section className={styles.teamBox} id='hor'>
        <TitleBox title='Meet The Team' />

        <section className={styles.members}>
          {members.map((member, i) => (
            <div className={styles.member} key={i} data-aos="fade-up" data-aos-delay={50 * (i + 1)}>
              <div className={styles.imgBox}>
                <Image alt='' src={member.url} fill className='cover' />
              </div>
              <article>
                <strong>{member.name}</strong>
                <MdOutlineWorkspacePremium />
                <strong>{member.position}</strong>
                <hr />
                <small>
                  {member.description}
                </small>
              </article>
            </div>
          ))}
        </section>
      </section>

      <Footer />
    </section>
  );
}

export default Team;