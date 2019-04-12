 import React from 'react';
import { Link } from 'react-router-dom';
import './EntryForm.css';
//refactor: use sass for all these colors 
const red = {
    color: '#cd5c5c'
  }

const EntryForm = () =>

  <form>
      <fieldset>
        <legend style={red}> New Entry</legend>
        
        <label htmlFor="Title">Title: <textarea rows="1" cols= "40" name="title"> </textarea></label>
  
        <br/>

        <label htmlFor="content">Entry: <textarea rows="5" cols= "50" name="content"></textarea></label>
    
        <br/>
        <input type="submit" value="Submit" />

      </fieldset>

    <Link to='/entries' style={red}>Cancel</Link>
  
  </form>


export default EntryForm;
