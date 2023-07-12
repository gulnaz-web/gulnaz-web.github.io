import React from 'react';

function Form({ setItems }) {
   const [quantity, setQuantity] = React.useState(1);
   const [description, setDescription] = React.useState('');

   function handleItems(item) {
      setItems((items) => [...items, item]);
   }
   function handleSubmit(event) {
      event.preventDefault();

      if (description) {
         const addNewArray = { description, quantity, packed: false, id: Date.now() };
         handleItems(addNewArray);
      }
   }

   return (
      <form className="add-form" onSubmit={handleSubmit}>
         <h3>What do you need for your ✈ trip?</h3>
         <select
            name=""
            id=""
            value={quantity}
            onChange={(event) => setQuantity(Number(event.target.value))}>
            {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
               <option value={num} key={num}>
                  {num}
               </option>
            ))}
         </select>
         <input
            type="text"
            name="item"
            placeholder="Item..."
            value={description}
            onChange={(event) => setDescription(event.target.value)}
         />
         <button type="submit">Add</button>
      </form>
   );
}
export default Form;