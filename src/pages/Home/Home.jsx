import React from 'react';
import Login from '../../components/Login/Login';
import Layout from '../../components/Layout/Layout'
import LoginTitle from '../../components/LoginTitle/LoginTitle';
import LoginParagraph from '../../components/LoginParagraph/LoginParagraph';

const Home = () => {
 return(
   <Layout>
    <LoginTitle />
    <LoginParagraph />
    <Login/>
   </Layout>
 )
}

export default Home

