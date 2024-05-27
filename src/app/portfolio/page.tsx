import { IoConstructOutline } from 'react-icons/io5';
import TitleBox from '../components/TitleBox/TitleBox';
import TopNav from '../components/TopNav/TopNav';
import styles from './portfolio.module.css';

const Portfolio = () => {
  const text = "The total value of completed projects in the company portfolio is USD 129,059,882.51. Additionally, there are ongoing projects valued at USD 93,574,676 and awarded projects yet to start with a total value of USD 25,000,000. This showcases the substantial value and diverse scope of projects undertaken by the company, solidifying its position as a leading construction firm in the industry."

  const cList = [
    "Construction of Jubilee (Flagstaff) House",
    "Office Fit-Out Tullow Ghana Limited",
    "Resettlement projects for Adamus Resources",
    "Construction of Golden Bean Hotel"
  ]

  const hList = [
    { tag: 'Roads & Highways', count: 5, type: 'Projects' },
    { tag: "Bridges", count: 3, type: 'Projects' },
    { tag: "Building Construction", count: 45, type: 'Projects' },
    { tag: "Railways", count: 2, type: 'Major Projects' }
  ]

  return (
    <section id='con'>
      <TopNav />

      <section className={styles.portfolioBox} id='hor'>
        <TitleBox title='Project Portfolio Highlights (2016 to Date)' />

        <span>{text}</span>

        <section className={styles.cBoxes}>
          {cList.map((el, i) => (
            <div key={i}>
              <IoConstructOutline />
              {el}
            </div>
          ))}
        </section>

        <hr />

        <section className={styles.hBoxes}>
          {hList.map((el, i) => (
            <div key={i}>
              <strong className='big'>{el.count}</strong>
              <p>
                <span>{el.type}</span>
                <legend>{el.tag}</legend>
              </p>
            </div>
          ))}
        </section>
      </section>
    </section>
  );
}

export default Portfolio;