'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FormControl, RadioGroup, FormControlLabel } from '@mui/material';
import Header, { HeaderStyles } from './components/header/header';
import CardPix from './components/card-pix/cardPix';

import styles from './page.module.css';
import Footer from './components/footer/footer';

export default function Home() {
  const router = useRouter();

  const [installment, setInstallment] = useState(0);

  const NUMBER_INSTALLMENTS = [2, 3, 4, 5, 6, 7];
  const BORDER_COLOR = '#E5E5E5';
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(event, event.target.form?.innerText);
    const value = (event.target as HTMLInputElement).value;
    setInstallment(parseInt(value));
    const installment =
      value > '1'
        ? event.target.form?.innerText.split('R$')[2].split('-')[0].trim()
        : event.target.form?.innerText.split('R$')[1].split('\n')[0].trim();

    console.log(installment, value);

    router.push(`/payment/${installment}/${value}`);
  };

  return (
    <>
      <Header text={'João, como você quer pagar?'} styles={headerStyles} />
      <main className={styles.main}>
        <FormControl>
          <RadioGroup
            aria-labelledby="radio-buttons-group-label"
            name="radio-buttons-group"
            value={installment}
            onChange={(e) => handleChange(e)}
          >
            <FormControlLabel
              value={1}
              label=""
              sx={{
                margin: '0',
                padding: '0',
                color: '#4D4D4D',
              }}
              control={
                <CardPix
                  numInstallments={1}
                  totalInstalments={1}
                  price={'30.500,00'}
                  discount={'3%'}
                  installment={1}
                  styles={{
                    margiTop: '24px',
                    minWidth: '360px',
                    maxWidth: '429px',
                    minHeight: '137px',
                    marginTop: '24px',
                    border: `2px solid ${BORDER_COLOR}`,
                    boxShadow: 'none',
                    borderRadius: '10px',
                  }}
                />
              }
            />

            {NUMBER_INSTALLMENTS.map((item) => (
              <FormControlLabel
                key={`radio-${item}`}
                value={item}
                label=""
                sx={{
                  margin: '0',
                  padding: '0',
                  marginTop: item === NUMBER_INSTALLMENTS[0] ? '24px' : '0',
                  border: `2px solid ${BORDER_COLOR}`,
                  boxShadow: 'none',
                  borderRadius: '10px',
                }}
                control={
                  <CardPix
                    numInstallments={item}
                    totalInstalments={NUMBER_INSTALLMENTS.length}
                    price={'30.500,00'}
                    discount={'3%'}
                    cet={0.005}
                    installment={item}
                    styles={{
                      minWidth: '360px',
                      maxWidth: '429px',
                      minHeight: 'fit-content',
                    }}
                  />
                }
              ></FormControlLabel>
            ))}
          </RadioGroup>
        </FormControl>
      </main>
      <Footer />
    </>
  );
}
