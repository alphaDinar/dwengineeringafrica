import Image from 'next/image';
import styles from './globalBox.module.css';

const GlobalBox = () => {
  const countryList = [
    { tag: 'Ghana', url: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1716807960/dwEngineering/ghana_vhfid3.png' },
    { tag: 'Sierra Leone', url: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1716808003/dwEngineering/sierra_qvehuu.png' },
    { tag: 'Kenya', url: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1716808155/dwEngineering/kenya_wf11ni.png' },
    { tag: 'Burkina Faso', url: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1716808243/dwEngineering/burkina_ajhuir.png' },
    { tag: 'Gambia', url: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1716808313/dwEngineering/gambia_ufurfg.png' }
  ]

  return (
    <section className={styles.globalBox} id='hor'>
      <span id='liner'>Global Footprints</span>

      <section className={styles.items}>
        {countryList.map((country, i) => (
          <div key={i}>
            <Image alt='' src={country.url} width={150} height={150} />
          </div>
        ))}
      </section>
    </section>
  );
}

export default GlobalBox;