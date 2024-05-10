import { paymentMethodList } from '@/External/lists';
import styles from './clientBox.module.css';
import Image from 'next/image';

const ClientBox = () => {
  return (
    <section className={styles.payBox}>
      <span id='liner'>Our Clients</span>
      <div>
        {Array(10).fill('a').map((counter, ci) => (
          <article key={ci}>
            {paymentMethodList.map((el, i) => (
              <img alt='' width={100} height={100} src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1707484303/david%20walter/access-removebg-preview_jjbanz.png'} key={i} />
            ))}
          </article>
        ))}
      </div>
    </section>
  );
}

export default ClientBox;