function Footer({ items }) {
   const numItems = items.length;
   const numPackeds = items.filter((item) => item.packed).length;
   const percentItems = Math.round((numPackeds / numItems) * 100);

   return (
      <footer className="stats">
         <em>
            {percentItems === 100
               ? 'You got everything! Ready to go ✈'
               : `You have ${numItems} items your list, and you already packed ${numPackeds} (${
                    numPackeds === 0 ? '0' : percentItems
                 }%)`}
         </em>
      </footer>
   );
}
export default Footer;
