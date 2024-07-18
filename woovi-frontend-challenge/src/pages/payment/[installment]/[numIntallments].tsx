import { useRouter } from 'next/router';
import Header, { HeaderStyles } from '../../../app/components/header/header';

import styles from '../page.module.css';
import Footer from '@/app/components/footer/footer';
import Loading from '@/app/components/loading/loading';

export default function Payment() {
  const router = useRouter();
  const { installment, numInstallments } = router.query;

  if (!installment || !numInstallments) {
    return <Loading />;
  }

  const text =
    numInstallments > '1'
      ? `João, pague a entrada de R$ ${installment} pelo Pix`
      : `João, pague R$ ${installment} pelo Pix`;
  
  const headerStyles: HeaderStyles = {
    cardStyle: {
      maxWidth: '345px',
      marginTop: '36px',
      boxShadow: 'none',
      border: 'none',
    },
    boxStyle: { marginTop: '40.35px', height: '33px' },
    typographyStyle: {
      color: '#4D4D4D',
      fontFamily: 'Nunito',
      fontWeight: '800',
      size: '24px',
      lineHeight: '32.74px',
    },
  };

  return (
    <>
      <Header text={text} styles={headerStyles} />
      <main className={styles.main}>

      </main>
      <Footer />
    </>
  );
}
