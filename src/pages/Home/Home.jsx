import React from 'react';
import "./Home.scss";
import LoginContainer from '../../Container/LoginContainer/LoginContainer';
import Title from '../../components/Title/Title';

const Home = () => {
 return(
  <section className='container'>
  <Title />
  <LoginContainer />
  </section>
 )
}

export default Home

