import React from 'react';

const Header = (props) => {
  return(
    <header className="top">
      <h1>
        Catch
        <span className="ofThe">
          <span className="of">of</span>
          <span className="the">the</span>
        </span>
        Day
      </h1>
      <h3 className="tagline"><span>{props.tagline}</span></h3>
    </header>
  )
}

// We can use too 

// function Header(props) {
// }

// var Header = function(props) {  
// }


export default Header;
