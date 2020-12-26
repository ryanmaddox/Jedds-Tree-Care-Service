import React from 'react';
import ContactCard from './Components/ContactCard'
import './App.css';

function App() {
  return (
    <div className="App">
      <ContactCard contact={{
				name: 'Diesel',
				email: 'diesel@yahoo.com',
				phone: '385-222-1234'
			}}			
			/>
    </div>
  );
}

export default App;
