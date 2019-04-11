//Can I take the content from here and put it in the backend, api it? Or just leave it here? 
//static page

import React from 'react';

const color = {
  color: '#e69500'
}

class About extends React.Component {
  render() {
    return (
      <div >
        <h2 style={color}>You Are Not Alone</h2>
        <p>When my dad died, people surrounded me with love, just as we'd held my dad with love during his last days. Then, slowly, it was just me. Everyone went back to their lives and their routines, my mom to hers, my brother to his. My friends would ask how I was doing, but over the weeks and months that I grieved, I felt lonely.</p>
        <p>Turns out I'm not the only one who experiences this. That's what Mourning/Together is for. Grieve here. Feel the comfort of other mourners. In future phases, you'll be able to create a profile and tell your friends and family -- they can sign up for texts or emails when you post.</p> 
        <p>Mourning/Together. Because grief is a terrible time to be alone.</p>

      </div>
    )
  };
};

export default About;