import { clientList, paymentMethodList } from '@/External/lists';
import styles from './clientBox.module.css';
import Image from 'next/image';

const ClientBox = () => {
  return (
    <section className={styles.payBox}>
      <span id='liner'>Our Clients</span>
      <div>
        {Array(10).fill('a').map((counter, ci) => (
          <article key={ci}>
            {clientList.map((client, i) => (
              <img alt='' width={100} height={100} src={client} key={i} />
            ))}
          </article>
        ))}
      </div>
    </section>
  );
}

export default ClientBox;