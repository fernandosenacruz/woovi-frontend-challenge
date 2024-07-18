import React from 'react';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';
import UncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckedIcon from '@mui/icons-material/CheckCircle';

const CustomRadio = styled(Radio)(({ theme }) => ({
  '& .MuiSvgIcon-root': {
    fontSize: 24,
  },
  '&.Mui-checked': {
    color: theme.palette.success.main,
  },
}));

const CustomRadioButton = ({
  label,
  installment,
}: {
  label: string;
  installment: number;
}) => {
  const parts = label.split('x');
  return (
    <FormControlLabel
      control={
        <CustomRadio icon={<UncheckedIcon />} checkedIcon={<CheckedIcon />} />
      }
      label={
        <p>
          <span id={`bold-text-${installment}`} style={{ fontWeight: 'bold' }}>
            {parts[0]}x
          </span>
          <span id={`normal-text-${installment}`}>{parts[1]}</span>
        </p>
      }
      value={installment}
      sx={{
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        '& .MuiFormControlLabel-label': {
          marginLeft: '18px',
        },
      }}
    />
  );
};

export default CustomRadioButton;
