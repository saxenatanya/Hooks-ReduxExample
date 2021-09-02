import React, { useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';
import Button from '../UI/Button/Button';
import AuthConext from '../../store/auth-context';
const Home = (props) => {
  const autthCtx = useContext(AuthConext);
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={autthCtx.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
