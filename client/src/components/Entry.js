import React, { Component } from 'react';

class Entry extends Component {

  render() {
    return (
    <div>
      <li key={this.props.entry.id}>
        <h3>{ this.props.entry.title }</h3>
        <p>{ this.props.entry.content }</p>
      </li>  
    </div>
    )
  }
}
export default Entry;

 //if (entry.public === "yes") {
    //<Link to="/user.id">See more </Link>
    // add click button to see the user profile and all their others, if public only 
