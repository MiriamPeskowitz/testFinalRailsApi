// imports NavBar, which imports Button
//passes props down to button, maybe? Or does it all in one? 
//iterates through the props? 
//this is a smart container, because it deals with prps 
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { store } from "./store";
import Button from './components/Button';
import Grid from '@material-ui/core/Grid';
// import { actions as props } from ../actions/
