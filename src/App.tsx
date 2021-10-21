import React, { useState } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

import { Template } from './components/MainComponents';
import Footer from './components/partials/Footer';
import Routes from './Routes';


const Page = (props: any) => {

  return (
      <BrowserRouter>
        <Template>
          <Routes />
          <Footer />
        </Template>
      </BrowserRouter>
  );
}



const mapStateToProps = (state: { user: any; }) => {
  return {
    user:state.user
  };
}

const mapDispatchToProps = (dispatch: any) => {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);