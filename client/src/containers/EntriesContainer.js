// This will list the index all the entries-- a wall of gried. 
// This is for display?

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom';
import EntryFormContainer from './EntryFormContainer'
import Entries from '../components/Entries'
// import EntryForm from '../components/EntryForm'
import  { fetchAllEntries } from '../actions/entriesActions';



const red = {
    color: '#cd5c5c'
  }

class EntriesContainer extends Component {
  constructor() {
    super();
    //state
    this.onClick = this.onClick.bind(this);
 }
  
  componentWillMount() {
    // console.log('in CWM')
    this.props.fetchAllEntries()
    // console.log('Entries', this.props.entries)
  }

  onClick(e) {
    e.preventDefault();
  }

  render() {  
    const { entries } = this.props;
    return (
      <div>
        <h2 style={red}> Entries </h2>
        <Link to='/entries/new' style={red}> New Entry </Link>
        <Entries entries={entries}/>
        <Link to='/entries/new' style={red}> Add a New Entry </Link>
      </div>
    );
  }
 }  

const mapStateToProps = state => {
  return {
    entries: state.entriesReducer.entries
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchAllEntries
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(EntriesContainer); 
