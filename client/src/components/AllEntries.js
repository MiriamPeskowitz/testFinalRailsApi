// This will list the index all the entries-- a wall of gried. 
// This is for display?

import React, { Component } from 'react';
import { fetchAllEntries } from '../actions/entriesActions';
import Entry from '.components/Entry';


const color = {
  color: 'IndianRed'
}

class AllEntries extends Component {
  
  componentWillMount() {
      this.props.fetchAllEntries();
  }

  
  render() {
    const {entries} = this.props;

    return (
      entries.map((entry => 
          < Entry 
            key={entry.id}>
            <h3>{entry.title}</h3>
            <h4>{entry.content}</h4>
            {/*<link to user id.*/}
          />
        )
      })
    }
  }

  const listEntries = (props, fetchAllEntries ) => {
      return props.entries && props.entries.map((entry, index) => {
      return (
          <div key={index}>
            <h3>{entry.title}</h3>
            <h4>{entry.content}</h4>
          </div>
        )
      })
    }

    return (
      <div>
        <h1 style={color}>Entries</h1>
        { listEntries() }
      </div>
    )

  }
export default AllEntries;

//component: has a form to list the entries, in batch of ten EntriesList