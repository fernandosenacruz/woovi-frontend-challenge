import { Box, Card, Typography } from '@mui/material';
import Image from 'next/image';

import style from '../../page.module.css';

export type HeaderStyles = {
  cardStyle?: { [cssProperty: string]: string } | undefined;
  boxStyle?: { [cssProperty: string]: string } | undefined;
  typographyStyle?: { [cssProperty: string]: string } | undefined;
};

type HeaderProps = {
  text: string;
  styles: HeaderStyles;
};

export default function Header({ text, styles }: HeaderProps) {
  return (
    <header className={style.header}>
      <Card sx={styles?.cardStyle}>
        <Image
          src="/woovi_logo.png"
          alt="Woovi Logo"
          height={36.65}
          width={123.51}
        />
      </Card>
      <Box component="div" sx={styles?.boxStyle}>
        <Typography variant="h5" sx={styles?.typographyStyle}>
          {text}
        </Typography>
      </Box>
    </header>
  );
}
