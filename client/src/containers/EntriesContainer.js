// This will list the index all the entries-- a wall of gried. 
// This is for display?

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import Entry from '../components/Entry';
import NewEntryLink from '../components/NewEntryLink'

import  { fetchAllEntries, deleteEntry, editEntry } from '../actions/index';

// const red = { color: '#cd5c5c'};

class EntriesContainer extends Component {
//DO I NEED STATE HERE? ALL CONFUSED. SEEMS LIKE NO? 
  // state = {
  //   entries: []
  // }

  componentDidMount(){
    fetchAllEntries();  
  }  
 
  render() { 
    const {entries, fetchAllEntries, deleteEntry, editEntry} = this.props;
    // const Entries = Array.from(this.props.entries)
    if (entries.length) {
      return (
         <div> 
            <h4>Entries</h4>
            <NewEntryLink />
            {entries.map(entry => {
              return (
                <div key={entry.id}>
                
                  <p>{entry.content}</p>
                </div>
                )
            })}
          </div>
      )
    } else {
      return <div> no Entries <br/> </div>  
    } 
     // <NewEntryLink />
  }
}
 

const mapStateToProps = state => {
  return {
    entries: state.entries
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchAllEntries,
    deleteEntry,
    editEntry,
    }, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(EntriesContainer); 


// <div>
//         <h2 style={red}> Entries </h2>
        
//         <NewEntryLink />
     
     
//         {this.props.entries.map(entry => 
//           <Entry 
//             key={entry.id } 
//             entry={entry}
//             deleteEntry={this.props.deleteEntry} 
//             editEntry={this.props.editEntry} />) }

//         <NewEntryLink />
       
//       </div>