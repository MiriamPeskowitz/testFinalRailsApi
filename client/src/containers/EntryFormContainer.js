import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
// import { Link } from 'react-router-dom';

// import Entries from '../components/Entries'
import EntryForm from '../components/EntryForm'
// import  { fetchAllEntries } from '../actions/entriesActions';



// const red = {
//     color: '#cd5c5c'
//   }

class EntryFormContainer extends Component {
  constructor() {
    super();
    //state
    this.onClick = this.onClick.bind(this);
 }
  //need this? No -- on submit 
  componentWillMount() {
  
    this.props.fetchAllEntries()
    console.log('Entries', this.props.entries)
  }
//add onChange and onSubmit 

  render() {  
    // const { entries } = this.props;
    // return (
    //   <div>
    //     <h2 style={red}> Entries </h2>
    //     <Link to='/entries/new' style={red}> New Entry </Link>
    //     <Entries entries={entries}/>
    //   </div>
    // );
  }
 }  

const mapStateToProps = state => {
  return {
    // entries: state.entryFormReducer.entries
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  // fetchAllEntries
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(EntryFormContainer);