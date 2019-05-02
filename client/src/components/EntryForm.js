//I tried to refactor part of the EntryForm Container here, but need some help

import React from 'react';
import { Link } from 'react-router-dom';

const EntryForm = (props) => {
  const red = {color: '#cd5c5c'}
  return (
    <form onSubmit={ (e) => props.onSubmit(e) }>
        <fieldset>

          <legend style={red}> New Entry</legend>
          
          <label htmlFor="Title">Title: <textarea rows="1" cols= "40" name="title" value={ props.title }  onChange={ (e) => props.onChange(e) }></textarea></label>
    
          <br/>

          <label htmlFor="content">Entry: <textarea rows="5" cols= "50" name="content" onChange={ (e) => props.onChange(e) } value= { props.content } ></textarea></label>
      
          <br/>
{/*
           <label htmlFor="name">Name: <textarea rows="1" cols= "50" name="name" onChange={ (e) => props.onChange(e) } value= { props.user.name } ></textarea></label>
      
          <br/>*/}
          <button type="submit">Add </button>

        </fieldset>

      <Link to='/entries' style={red}>Cancel/Return to Entries</Link>
    
    </form>
  ) 
}   
export default EntryForm;

