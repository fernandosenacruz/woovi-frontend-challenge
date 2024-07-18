import { Typography } from '@mui/material';

const TotalPrice = ({
  price,
  discount,
  priceWithDiscount,
  numInstallments,
  style,
}: {
  price: string;
  discount: string;
  priceWithDiscount: string;
  numInstallments: number;
  style?: { [cssProperty: string]: string };
}) => {
  return numInstallments !== 1 ? (
    <Typography sx={{ color: style?.color || '#4D4D4D' }}>
      Total: R$ {price}
    </Typography>
  ) : (
    <Typography sx={{ color: '#03D69D' }}>
      <span>Ganhe</span>
      <span style={{ fontWeight: 'bold', marginLeft: '4px' }}>{discount}</span>
      <span style={{ marginLeft: '4px' }}>de Cashback</span>
    </Typography>
  );
};

export default TotalPrice;
