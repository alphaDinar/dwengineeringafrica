'use client'
import Image from "next/image";
import TopNav from "../components/TopNav/TopNav";
import styles from './timeline.module.css';
import TitleBox from "../components/TitleBox/TitleBox";
import { MdArrowForward, MdSouth } from "react-icons/md";
import { MouseEvent, useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from "next/link";
import { useWinSize } from "../contexts/winSizeContext";

const Timeline = () => {
  // const sample = 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1706000421/RGV/IMG_0098_1_ku4o9s.jpg';
  const sample = 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1716471669/dwEngineering/shutterstock_1888885951_xiyugj.jpg'
  const [trackerPos, setTrackerPos] = useState('0%');
  const [statusPos, setStatusPos] = useState('0%')
  const { winSize } = useWinSize();
  const [year, setYear] = useState('2015');

  const projectListA = [
    { tag: "Construction of Jubilee (Flagstaff) house (Subcontractor – Civil Works", year: 2006 },
    { tag: "Construction of Golden Bean Hotel", year: 2015, total: 'USD 6,062,546' },
    { tag: "Resettlement projects for Adamus Resources", year: 2016, total: 'USD 8,650,000' },
    { tag: "Construction of Okuafo Pa project for Eni Ghana", year: 2019, total: 'USD 2,570,108' },
    { tag: "Construction of Kumasi-Kaasi section of the Western Railway line – Phase 1", year: 2021, total: 'USD 48,481,058' },
    { tag: "Construction of Eastern Technical University of Sierra Leone – Bunumbu Campus", year: 2023, total: 'USD 14,066,973.51' }

  ]

  const projectListB = [
    { tag: "Office Fit-Out Tullow Ghana Limited", year: 2015, total: 'USD 17,538,993' },
    { tag: "Construction of Funeral Parlour for Enterprise Life Insurance Company", year: 2016, total: 'USD 4,050,000' },
    { tag: "Construction of 36 No. Residential apartment- - Kumasi Ghana", year: 2019, total: 'USD 5,718,777' },
    { tag: "Construction of 36 No. Residential apartment- - Kumasi Ghana", year: 2020, total: 'USD 6,251,410' },
    { tag: "Construction of Business Resource Centers (BRC – 6 locations – Eastern Region", year: 2022, total: 'USD 5,075,087' },
    { tag: "Construction of National Health Insurance Authority", year: 2024, total: 'USD 10,494,927' }
  ]

  const projectListAB = [
    { tag: "Construction of Jubilee (Flagstaff) house (Subcontractor – Civil Works", year: 2006 },
    { tag: "Construction of Golden Bean Hotel", year: 2015, total: 'USD 6,062,546' },
    { tag: "Office Fit-Out Tullow Ghana Limited", year: 2015, total: 'USD 17,538,993' },
    { tag: "Construction of Funeral Parlour for Enterprise Life Insurance Company", year: 2016, total: 'USD 4,050,000' },
    { tag: "Resettlement projects for Adamus Resources", year: 2016, total: 'USD 8,650,000' },
    { tag: "Construction of Okuafo Pa project for Eni Ghana", year: 2019, total: 'USD 2,570,108' },
    { tag: "Construction of 36 No. Residential apartment- - Kumasi Ghana", year: 2019, total: 'USD 5,718,777' },
    { tag: "Construction of 36 No. Residential apartment- - Kumasi Ghana", year: 2020, total: 'USD 6,251,410' },
    { tag: "Construction of Kumasi-Kaasi section of the Western Railway line – Phase 1", year: 2021, total: 'USD 48,481,058' },
    { tag: "Construction of Business Resource Centers (BRC – 6 locations – Eastern Region", year: 2022, total: 'USD 5,075,087' },
    { tag: "Construction of Eastern Technical University of Sierra Leone – Bunumbu Campus", year: 2023, total: 'USD 14,066,973.51' },
    { tag: "Construction of National Health Insurance Authority", year: 2024, total: 'USD 10,494,927' }
  ]

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const calculatedScrollPercentage = (scrollTop / scrollHeight) * 100;
      setTrackerPos(`${calculatedScrollPercentage}%`);
      setStatusPos(`${Math.round(calculatedScrollPercentage)}%`)
      if (calculatedScrollPercentage > 50) {
        setYear('2022');
      } else {
        setYear('2021');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  const vTour = 'https://dobiison.com/InfinitiView/RoyalGolfViewsApt/';

  return (
    <section id="con">
      <TopNav />
      {/* <TitleBox /> */}
      <section className={styles.con} id="hor">
        <header>
          <strong>The DW Engineering Africa Timeline</strong>
        </header>

        {winSize > 750 ?
          <section className={styles.timeBox}>
            <section className={styles.left}>
              {projectListA.map((event, i) => (
                <a className={styles.event} key={i} data-aos="fade-up">
                  <sub>
                    <MdArrowForward />
                  </sub>
                  <div className={styles.imgBox}>
                    <Image alt="" fill sizes="auto" src={sample} />
                  </div>
                  <article>
                    <strong>{event.tag}</strong>
                    <hr />
                    <legend className="cash">{event.year}</legend>
                    {event.total &&
                      <>
                        <hr />
                        <legend className="cash">{event.total}</legend>
                      </>
                    }
                  </article>
                </a>
              ))}
            </section>
            <div className={styles.timer}>
              <div className={styles.tracker} style={trackerPos > '90%' ? { height: `calc(${trackerPos} - 30px)` } : { height: trackerPos }}>
                <legend>
                  <MdSouth />
                </legend>
              </div>
            </div>
            <section className={styles.right}>
              {projectListB.map((event, i) => (
                <a className={styles.event} key={i} data-aos="fade-up">
                  <sub>
                    <MdArrowForward />
                  </sub>
                  <div className={styles.imgBox}>
                    <Image alt="" fill sizes="auto" src={sample} />
                  </div>
                  <article>
                    <strong>{event.tag}</strong>
                    <hr />
                    <legend className="cash">{event.year}</legend>
                    {event.total &&
                      <>
                        <hr />
                        <legend className="cash">{event.total}</legend>
                      </>
                    }
                  </article>
                </a>
              ))}
            </section>
            <div className={styles.statusBox}>
              <strong className="cash">{statusPos}</strong>
              <small className="cash">{year}</small>
            </div>
          </section>
          :
          <section className={styles.timeBox}>
            <section className={styles.left}>
              {projectListAB.map((event, i) => (
                <a className={styles.event} key={i} data-aos="fade-up">
                  <sub>
                    <MdArrowForward />
                  </sub>
                  <div className={styles.imgBox}>
                    <Image alt="" fill sizes="auto" src={sample} />
                  </div>
                  <article>
                    <strong>{event.tag}</strong>
                    <hr />
                    <legend className="cash">{event.year}</legend>
                    {event.total &&
                      <>
                        <hr />
                        <legend className="cash">{event.total}</legend>
                      </>
                    }
                  </article>
                </a>
              ))}
            </section>
            <div className={styles.timer}>
              <div className={styles.tracker} style={trackerPos > '90%' ? { height: `calc(${trackerPos} - 30px)` } : { height: trackerPos }}>
                <legend>
                  <MdSouth />
                </legend>
              </div>
            </div>
            <div className={styles.statusBox}>
              <strong className="cash">{statusPos}</strong>
              <small className="cash">{year}</small>
            </div>
          </section>
        }

        <section className={styles.totalBox}>
          <span>Grand Total</span>
          <strong className="big">USD 129,059,882.51</strong>
        </section>
      </section>
    </section>
  );
}

export default Timeline;