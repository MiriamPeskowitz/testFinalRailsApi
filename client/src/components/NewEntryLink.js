import React from 'react';
import { Link } from 'react-router-dom';


const red = {
    color: '#cd5c5c'
  }

const NewEntryLink = () => {
  return (
  <Link to='/entries/new' style={red}> Add a new entry </Link>
  )
}

export default NewEntryLink;