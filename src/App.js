import React from 'react';
import './App.css';
import Accordion from './components/Accordion';
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

  return (
    <div>
      {/* <Accordion items = {items}/> */}
      <Search />
    </div>
  );
}

export default App;


// en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=SEARCH