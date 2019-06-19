// This will list the index all the entries-- a wall of gried. 
// This is for display?

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom';

import Entry from '../components/Entry';
import NewEntryLink from '../components/NewEntryLink'

import  { fetchAllEntries, deleteEntry, editEntry } from '../actions';

// const red = { color: '#cd5c5c'};

class EntriesContainer extends Component {
//DO I NEED STATE HERE? ALL CONFUSED. SEEMS LIKE NO? 
  // state = {
  //   entries: []
  // }

  componentDidMount(){
    console.log("got here1")
    fetchAllEntries();  
  }  
 
  render() {
    if (this.props.entries.length) {
      return (
        <div> 
          <h4>Articles</h4>
          {this.props.entries.map(entry => {
            return ( <p>{entry.content}</p>
              // <div key={ entry.id }>
              // <hr/>
              // <h4><Link to={`/entries/${entry.id}`}>{entry.id}: {entry.title}</Link></h4>
              //   <p>{entry.content}</p>
              // </div>
              )
          })}
        </div>
        )
    } else {
      return (<div> No Entries </div>)
    }
  }
     // <NewEntryLink />
}
 

const mapStateToProps = state => {
  return {
    entries: state.entries
  }
}

const mapDispatchToProps = { fetchAllEntries, deleteEntry, editEntry };

// const mapDispatchToProps = dispatch => bindActionCreators({
//     fetchAllEntries,
//     deleteEntry,
//     editEntry,
//     }, dispatch)


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