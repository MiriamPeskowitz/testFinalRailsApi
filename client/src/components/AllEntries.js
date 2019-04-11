// This will list the index all the entries-- a wall of gried. 
// This is for display?

import React, { Component } from 'react';
import Entry from './Entry';
import  { fetchAllEntries } from '../actions/entriesActions';


class AllEntries extends Component {
  componentWillMount() {
    console.log('in CWM')
    fetchAllEntries()
  }

  // this.onClick = this.onClick.bind(this);

  // onClick {
  //   fetchAllEntries()
  //   console.log("got to fetchallentries")
  // }
  render() {  
    const { entries } = this.props;

   // < AddEntry onClick=>
  const listEntries = () => this.props.entries.map((entry, id, content, title) => <Entry key={id}  title = {title}  content = {content} />)
    
  
     const red = {
      color: '#cd5c5c'
    }   
      return(
        <div>
          <h2 style={red} > Entries</h2>
          <ul>
            { listEntries }
          </ul>
        </div> 
    )
  }
}

export default AllEntries;