// This will list the index all the entries-- a wall of gried. 
// This is for display?

import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

// import Entry from '../components/Entry';
import Entries from '../components/Entries'
// import EntryInput from '../components/EntryInput'
import  { fetchAllEntries } from '../actions/entriesActions';


class EntriesContainer extends Component {
  // constructor() {
  //   super();

  //   // this.onClick = this.onClick.bind(this);
  // }
  
  componentWillMount() {
    console.log('in CWM')
    this.props.fetchAllEntries()
    console.log('Entries', this.props.entries)
  }

  render() {  
    const { entries } = this.props;
    return (
      <div>
        <h2> Entries </h2>
    {/*    <EntryInput/>*/}
        <Entries
          entries={entries}
        />
      </div>
    );
  }
 }  

const mapStateToProps = state => {
  return {
    entries: state.entriesReducer.entries
  }
}

const mapDispatchToProps = dispatch => ({
  fetchAllEntries
})

export default connect(mapStateToProps, mapDispatchToProps)(EntriesContainer); 

         //to EntryInput will add addEntry={this.props.addEntry}

    // const red = {
    //   color: '#cd5c5c'
    // }   
//     return(
//       <div>
//         <h2 style={red} > Entries</h2>
//         <ul>
//            <EntryList/>
//         </ul>
//       </div> 
//     )
//   }
// }

// onClick={this.onClick}
