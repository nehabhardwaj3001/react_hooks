import React, { useState } from 'react';
import './App.css';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';

function App() {
  const items = [
    {
      title: 'What is React?',
      content: 'React is  a front end javascript framework'
    },
    {
      title: 'Why use React?',
      content: 'React is a favourite JS library among engineers'
    },
    {
      title: 'How do you use React?',
      content: 'You use React by creating components'
    },
  ]

  const options = [
    {
      label: "The Color Red",
      value: "red"
    },
    {
      label: "The Color Blue",
      value: "blue"
    },
    {
      label: "The Color Green",
      value: "green"
    },
  ]

  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      {/* <Accordion items = {items}/> */}
      {/* <Search /> */}
      <button onClick={() => {setShowDropdown(!showDropdown)}}>Toggle Dropdown</button>
      { showDropdown ? 
        <Dropdown 
          options={options} 
          selected={selected}
          onSelectedChange={setSelected}
        /> : null
      }
    </div>
  );
}

export default App;

