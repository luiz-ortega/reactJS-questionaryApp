import React from 'react';
import {
  Card,
  Typography,
  Box,
  createStyles,
  withStyles,
} from '@material-ui/core';
import { useQuestionary } from '../../hooks/questionary';
import { useAuth } from '../../hooks/auth';

import BackgroundGradient from '../../components/BackgroundGradient';
import BarChart from '../../components/BarChart';
import Button from '../../components/Button';

const styles = createStyles({
  container: {
    paddingTop: 42,
    margin: '0px 30px',
  },
  title: {
    color: 'white',
    fontWeight: 600,
    fontSize: 34,
    marginBottom: 42,
  },
  card: {
    marginBottom: 60,
  },
  barChartContainer: {
    margin: '30px 30px 0px',
  },
  buttonContainer: {
    height: 80,
    paddingBottom: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

interface IResultsProps {
  classes: any;
}

const Results: React.FC<IResultsProps> = ({ classes }) => {
  const { signOut } = useAuth();

  const handleSignOut = () => {
    signOut();
  };

  return (
    <BackgroundGradient>
      <Box className={classes.container}>
        <Typography className={classes.title} color="secondary" variant="h5">
          Resultados
        </Typography>
        <Card className={classes.card}>
          <Box className={classes.barChartContainer}>
            <Typography
              color="primary"
              className={classes.question}
              variant="h5"
            >
              Quantos funcionários tem a sua empresa?
            </Typography>
            <BarChart />
          </Box>
        </Card>

        <Card className={classes.card}>
          <Box className={classes.barChartContainer}>
            <Typography
              color="primary"
              className={classes.question}
              variant="h5"
            >
              Quantos funcionários tem a sua empresa?
            </Typography>
            <BarChart />
          </Box>
        </Card>

        <Card className={classes.card}>
          <Box className={classes.barChartContainer}>
            <Typography
              color="primary"
              className={classes.question}
              variant="h5"
            >
              Quantos funcionários tem a sua empresa?
            </Typography>
            <BarChart />
          </Box>
        </Card>

        <Card className={classes.card}>
          <Box className={classes.barChartContainer}>
            <Typography
              color="primary"
              className={classes.question}
              variant="h5"
            >
              Quantos funcionários tem a sua empresa?
            </Typography>
            <BarChart />
          </Box>
        </Card>

        <Box className={classes.buttonContainer}>
          <Button onClick={handleSignOut} color="secondary">
            Sair
          </Button>
        </Box>
      </Box>
    </BackgroundGradient>
  );
};

export default withStyles(styles)(Results);
