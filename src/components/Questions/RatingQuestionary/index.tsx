import React, { ChangeEvent } from 'react';
import {
  Typography,
  Card,
  Box,
  Container,
  withStyles,
  createStyles,
  FormControlLabel,
  FormControl,
  RadioGroup,
  FormLabel,
  Radio,
} from '@material-ui/core';

import Button from '../../Button';

const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const RatingQuestionary: React.FC = () => {
  const [value, setValue] = React.useState(0);

  return (
    <FormControl>
      <pre>{JSON.stringify(value)}</pre>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: 1100,
        }}
      >
        <Typography style={{ fontSize: 18, fontWeight: 600, color: '#0067AC' }}>
          Pouco satisfeito
        </Typography>

        {options.map(option => (
          <Button
            onClick={() => setValue(option)}
            color={option === value ? 'primary' : 'secondary'}
          >
            {option}
          </Button>
        ))}

        <Typography>Muito satisfeito</Typography>
      </Box>
    </FormControl>
  );
};

export default RatingQuestionary;
