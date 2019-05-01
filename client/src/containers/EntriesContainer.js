// This will list the index all the entries-- a wall of gried. 
// This is for display?

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux'

import Entries from '../components/Entries'
// import EntryForm from '../components/EntryForm'
import  { fetchAllEntries } from '../actions/entriesActions';
import  { deleteEntry } from '../actions/entriesActions';

const red = {
    color: '#cd5c5c'
  }


class EntriesContainer extends Component {
  constructor() {
    super();  
    this.state = ({
      redirect: false
    })
 }
  
  componentWillMount() {
    this.props.fetchAllEntries()
    // this.props.fetchUser()  
  }
//how do I add a refresh after something is deleted or edited? similar to entry form container, where done as setState({redirect: true}) import { browserHistory } from 'react-router-dom' when you dispatch the action browserHistory.push()
  render() {  
    const { entries, deleteEntry } = this.props;
    return (
      <div>
        <h2 style={red}> Entries </h2>
        <Link to='/entries/new' style={red}> New Entry </Link>
        <Entries entries={entries} deleteEntry={deleteEntry} />
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
  fetchAllEntries,
  deleteEntry
  // ,
  // editEntry
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(EntriesContainer); 
