import Image from "next/image";

import styles from '../../page.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <Image
          src="/footer_woovi.png"
          alt="Woovi Logo"
          height={22}
          width={269.52}
        />
      </footer>
  );
}