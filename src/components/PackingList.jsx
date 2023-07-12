function PackingList({ items, setItems }) {
   function handleDeleteItem(id) {
      setItems((items) => items.filter((item) => item.id !== id));
   }
   function handleXheckItem(id) {
      setItems((items) =>
         items.map((item) => (item.id === id ? { ...item, packed: !item.packed } : item)),
      );
   }
   function handleClearList() {
      setItems([]);
   }

   return (
      <div className="list">
         <ul>
            {items.map((item) => (
               <li key={item.id}>
                  <input
                     type="checkbox"
                     name=""
                     id=""
                     value={item.packed}
                     onChange={() => handleXheckItem(item.id)}
                  />
                  <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
                     {item.quantity} {item.description}
                  </span>
                  <button onClick={() => handleDeleteItem(item.id)}>❌</button>
               </li>
            ))}
         </ul>
         <button onClick={handleClearList}>Clear list</button>
      </div>
   );
}
export default PackingList;
