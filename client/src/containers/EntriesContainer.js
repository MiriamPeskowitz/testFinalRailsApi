// This will list the index all the entries-- a wall of gried. 
// This is for display?

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux'

import Entries from '../components/Entries'
import Entry from '../components/Entry';
import NewEntryLink from '../components/NewEntryLink'
// import EntryForm from '../components/EntryForm'
import  { fetchAllEntries } from '../actions/entriesActions';
import  { deleteEntry, editEntry} from '../actions/entriesActions';
// import { createBrowserHistory } from 'history';
const red = {
    color: '#cd5c5c'
  }


class EntriesContainer extends Component {
    
  state = ({
      redirect: ''
    })
 
  componentDidMount = () =>  {
    this.props.fetchAllEntries() 
  }

  render() {  
    const { entries } = this.props;

    return (
      <div>
        <h2 style={red}> Entries </h2>

        <NewEntryLink />
    
        { entries.map(entry => 
          <Entry key={entry.id } entry={entry} deleteEntry={deleteEntry}editEntry={editEntry} />) }
          
      
        <NewEntryLink />
       
      </div>
    );
  }
}  

//feature: to make edit work, it needs handleEdit/open up a form/similar to EntryForm -- update. looks like the action/fetch is working 

const mapStateToProps = state => {
  return {
    entries: state.entriesReducer.entries
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchAllEntries,
  deleteEntry, 
  editEntry
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(EntriesContainer); 
