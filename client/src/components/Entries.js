import React, { Component } from 'react';
import Entry from './Entry';

class Entries extends Component {
  render() {
    const {entries} = this.props;

    const entriesList = entries.map((entry) => {
      return (
        <Entry
          key={entry.id}
          title={entry.title}
          content={entry.content}
          />
        )
    });
    return(
      <div>
        <ul>
          {entriesList}
        </ul>
      </div>
    );
  }  
};

export default Entries;