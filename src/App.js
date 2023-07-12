import React from 'react';
import Logo from './components/Logo';
import Form from './components/Form';
import PackingList from './components/PackingList';
import Footer from './components/Footer';

function App() {
   const initialItems = [
      { id: 1, description: 'Passports', quantity: 2, packed: false },
      { id: 2, description: 'Socks', quantity: 12, packed: false },
      { id: 3, description: 'Charger', quantity: 1, packed: false },
   ];
   const [items, setItems] = React.useState(initialItems);

   return (
      <div className="app">
         <Logo />
         <Form setItems={setItems} />
         <PackingList items={items} setItems={setItems} />
         <Footer items={items} />
      </div>
   );
}
export default App;
