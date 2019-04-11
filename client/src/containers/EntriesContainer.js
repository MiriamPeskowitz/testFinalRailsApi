// This will list the index all the entries-- a wall of gried. 
// This is for display?

import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

// import Entry from '../components/Entry';
import EntryList from '../components/EntryList'
import EntryInput from '../components/EntryInput'
import  { fetchAllEntries } from '../actions/entriesActions';


class EntriesContainer extends Component {
  constructor() {
    super();

    // this.onClick = this.onClick.bind(this);
  }
  
  // componentWillMount() {
  //   console.log('in CWM')
  //   this.props.fetchAllEntries()
  // }

  render() {  
    // const { entries, fetchAllEntries } = this.props;
    return (
      <div>
        <EntryInput/ >
        //to EntryInput will add addEntry={this.props.addEntry}
        <Entries
          entries={this.props.entries}
        />
      </div>
    );
  }
 }  
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
const mapStateToProps = state => {
  return {
    entries: state.entriesReducer.entries
  }
}

const mapDispatchToProps = dispatch => ({
  fetchAllEntries
})

export default connect(mapStateToProps, mapDispatchToProps)(EntriesContainer); 

