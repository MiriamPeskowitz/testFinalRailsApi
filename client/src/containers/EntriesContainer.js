// This will list the index all the entries-- a wall of gried. 
// This is for display?

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import Entry from '../components/Entry';
import NewEntryLink from '../components/NewEntryLink'
import  {  fetchAllEntries, deleteEntry, editEntry } from '../actions/entriesActions';

const red = { color: '#cd5c5c'};

class EntriesContainer extends Component {
 
  componentDidMount () {
    this.props.fetchAllEntries();  
  }  

  render() { 
    return (
      <div>
        <h2 style={red}> Entries </h2>

        <NewEntryLink />
      
    
        { this.props.entries.map(entry => <Entry key={entry.id } entry={entry}deleteEntry={this.props.deleteEntry} editEntry={this.props.editEntry} />) }

      <NewEntryLink />
       
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
    deleteEntry,
    editEntry,
    }, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(EntriesContainer); 

