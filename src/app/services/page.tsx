'use client'
import styles from './services.module.css';
import Footer from "../components/Footer/Footer";
import TopNav from "../components/TopNav/TopNav";
import TitleBox from '../components/TitleBox/TitleBox';
import Image from 'next/image';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';


const Services = () => {
  const place = 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1715907826/RGV/mining-industry-1024x683_x5lf8f.jpg';


  const services = [
    { tag: 'General Building Construction', con: 'lorem', url: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1716471669/dwEngineering/shutterstock_1888885951_xiyugj.jpg' },
    { tag: 'Civil Engineering Works', con: 'lorem', url: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1716471881/dwEngineering/portrait-person-working-construction-industry_23-2151349704_z0wnlr.jpg' },
    { tag: 'Building Engineering Services (MEP)', con: 'lorem', url: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1716471965/dwEngineering/cropped-shot-dark-skinned-contractor-holding-touch-pad-entering-data-while-working-new-housing-project-sitting-desk-with-drawings-scale-model-house-blueprint-rolls-ruler-helme_xoxuoy.jpg' },
    { tag: 'Pre-Construction Services', con: 'lorem', url: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1716472044/dwEngineering/afro-american-builders-wearing-helmets-face-masks-while-measuring-wall_181624-58281_sd7chv.jpg' },
    { tag: 'Conceptual Budgeting', con: 'lorem', url: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1716472150/dwEngineering/empty-floor-front-modern-building_1127-2893_lvbxvd.jpg' },
    { tag: 'Value Engineering', con: 'lorem', url: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1716472217/dwEngineering/dark-skinned-contractor-using-technical-drawing-instrument-developing-new-building-project_273609-5606_smvdjd.jpg' },
    { tag: 'Scheduling', con: 'lorem', url: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1716472330/dwEngineering/side-view-cropped-man-working-financial-report_1098-18851_u6ztzt.jpg' },
    { tag: 'Phase Analysis', con: 'lorem', url: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1716472380/dwEngineering/black-businessman-using-computer-laptop_53876-24736_te9ufa.jpg' },
    { tag: 'Estimation', con: 'lorem', url: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1716472419/dwEngineering/close-up-house-blueprints_329181-3484_wcahmi.jpg' },
    { tag: 'Design / Build', con: 'lorem', url: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1716472482/dwEngineering/side-view-woman-making-plans-redecorate-home-with-laptop_23-2148814371_rv5ctn.jpg' }
  ]

  const specializations = [
    { tag: 'Residential and Commercial Buildings', url: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1716492363/dwEngineering/residents_up643b.png' },
    { tag: 'Roads and Highways', url: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1716493460/dwEngineering/white-road-icon-243966-removebg-preview_beavx1.png' },
    { tag: 'Bridges', url: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1716492957/dwEngineering/bridges_hudn47.png' },
    { tag: 'Water Supply', url: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1716493085/dwEngineering/waterSupply_iwldrm.png' },
    { tag: 'Railway', url: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1716493168/dwEngineering/railway_wejdkw.png' }
  ]

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, [])

  return (
    <section id="con">
      <TopNav />

      <section className={styles.serviceBox} id='hor'>
        <header>
          <TitleBox title='Services We Offer' />
          <Link href={'#bottomBox'}>Specializations</Link>
        </header>

        <section className={styles.services}>
          {services.map((service, i) => (
            <div className={styles.service} key={i} data-aos="fade-up" data-aos-delay={50 * (i + 1)}>
              <div className={styles.imgBox}>
                <Image alt='' src={service.url} fill className='cover' />
              </div>
              <p>
                <strong>{service.tag}</strong>
                {/* <small>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor quod assumenda expedita nobis provident ex est dolores tenetur quibusdam dignissimos. Eligendi reprehenderit dolorem perspiciatis earum aperiam suscipit porro eum praesentium!</small> */}
              </p>
            </div>
          ))}
        </section>
      </section>


      <section className={styles.serviceBox} id='bottomBox'>
        <TitleBox title='Specializations' />

        <section className={styles.services}>
          {specializations.map((specialization, i) => (
            <div className={styles.specialization} key={i} data-aos="fade-up" data-aos-delay={50 * (i + 1)}>
              <div className={styles.imgBox}>
                <Image alt='' src={specialization.url} width={100} height={100} />
              </div>
              <p>
                <strong>{specialization.tag}</strong>
                {/* <small>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor quod assumenda expedita nobis provident ex est dolores tenetur quibusdam dignissimos. Eligendi reprehenderit dolorem perspiciatis earum aperiam suscipit porro eum praesentium!</small> */}
              </p>
            </div>
          ))}
        </section>
      </section>

      <Footer />
    </section>
  );
}

export default Services;