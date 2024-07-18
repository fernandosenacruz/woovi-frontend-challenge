'use client';
import { Box, Card, InputLabel, Typography } from '@mui/material';
import CustomRadioButton from '../custon-radio/custonRadio';
import TotalPrice from '../total-price/totalPrice';
import calculateTotalPrice from '@/app/utils/calculateTotalPrice';

type CardPixProps = {
  numInstallments: number;
  totalInstalments: number;
  price: string;
  discount: string;
  installment: number;
  cet?: number;
  styles?: { [cssProperty: string]: string };
};

const CardPix = ({
  numInstallments,
  totalInstalments,
  price,
  discount,
  installment,
  cet,
  styles,
}: CardPixProps) => {
  const scapedDiscount = discount.replace(/\D/g, '');
  const scapedPrice = parseFloat(price.replace(/\./g, '').replace(',', '.'));
  const priceWithDiscount = (
    (parseFloat(price.replace(/\./g, '').replace(',', '.')) * +scapedDiscount) /
    100
  )
    .toFixed(2)
    .toString()
    .replace('.', ',');

  const { totalAmount, installmentValue } = calculateTotalPrice(
    scapedPrice,
    numInstallments,
    cet || 0
  );

  return (
    <Card sx={styles}>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1 },
          position: 'relative',
        }}
        noValidate
        autoComplete="off"
      >
        {(numInstallments === 1 || numInstallments === 2) && (
          <InputLabel
            sx={{
              color: '#4D4D4D',
              backgroundColor: '#E5E5E5',
              borderRadius: '100px',
              fontFamily: 'Nunito',
              fontWeight: 'bold',
              fontSize: '18px',
              lineHeight: '24px',
              width: totalInstalments > 1 ? '157px' : '67px',
              height: '27px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              position: 'absolute',
              top: -10,
              left: 18,
              transform: 'translateY(-50%)',
              zIndex: 1,
            }}
          >
            {totalInstalments > 1 ? 'Pix Parcelado' : 'Pix'}
          </InputLabel>
        )}

        <CustomRadioButton
          label={`${numInstallments}x R$ ${installmentValue}`}
          installment={installment}
        />

        <TotalPrice
          price={totalAmount}
          discount={discount}
          priceWithDiscount={priceWithDiscount}
          numInstallments={numInstallments}
          style={{ color: '#AFAFAF' }}
        />

        {(numInstallments === 1 || numInstallments === 3) && (
          <Box
            component="div"
            sx={{
              display: 'flex',
              backgroundImage: "url('/rectangle_77.png')",
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              height: '33px',
              alignItems: 'center',
            }}
          >
            <Typography
              sx={{
                color: '#FFFFFF',
                marginLeft: '20px',
                fontWeight: 'bold',
              }}
            >
              {numInstallments !== 1
                ? ` - ${discount} de juros:`
                : `🤑 R$ ${priceWithDiscount}`}
            </Typography>
            <Typography
              sx={{
                color: '#FFFFFF',
                marginLeft: '2px',
                fontSize: '14px',
              }}
            >
              {numInstallments !== 1
                ? 'Melhor opção de parcelamento'
                : 'de volta no seu Pix na hora'}
            </Typography>
          </Box>
        )}
      </Box>
    </Card>
  );
};

export default CardPix;
