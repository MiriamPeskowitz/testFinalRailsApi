// This will list the index all the entries-- a wall of gried. 
// This is for display?

import React, { Component } from 'react';
import Entry from './Entry';
import  { fetchAllEntries } from '../actions/entriesActions';


class AllEntries extends Component {

 const red = {
    color: '#cd5c5c'
  }
 const onClick(e) {
  e.preventDefault()
  this.fetchAllEntries()
  console.log("got to fetchallentries")
 }

  listEntries = () => this.props.entries.map((entry, id, content, title) => <Entry key={id}  title = {title}  content = {content} />)
    render() {     
      return(
        <div>
          <h2 style={red} onCLick ={ this.onClick } > Entries</h2>
          <ul>
            { this.listEntries }
          </ul>
        </div> 
    )
  }
}

export default AllEntries;