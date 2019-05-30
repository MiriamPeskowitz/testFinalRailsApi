// This will list the index all the entries-- a wall of gried. 
// This is for display?

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

// import Entries from '../components/Entries';
import Entry from '../components/Entry';
import NewEntryLink from '../components/NewEntryLink'
// import EntryForm from '../components/EntryForm'

import  { fetchAllEntries, deleteEntry, editEntry } from '../actions/entriesActions';


const red = {
    color: '#cd5c5c'
  }


class EntriesContainer extends Component {
 
  componentDidMount = () => {
    this.props.fetchAllEntries(); 
    console.log("entries fetched", this.props.entries)
  }
  
  renderEntries = this.props.entries.map(entry => (
       
    <Entry 
      key={entry.id } 
      entry={entry} 
      deleteEntry={this.props.deleteEntry} 
      editEntry={this.props.editEntry} />

    )
  ) 
    
  render() {  
    return (
      <div>
        <h2 style={red}> Entries </h2>

        <NewEntryLink />
      
       {this.renderEntries}

      <NewEntryLink />
       
      </div>
    )
  };
} 


//feature: to make edit work, it needs handleEdit/open up a form/similar to EntryForm -- update. looks like the action/fetch is working 

const mapStateToProps = state => {
  return {
    entries: state.entries
  }
}

const mapDispatchToProps = dispatch => {
  bindActionCreators({
    fetchAllEntries: fetchAllEntries,
    deleteEntry, 
    editEntry
  }, dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(EntriesContainer); 
