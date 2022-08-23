// import { useState } from "react";

// function Header() {
//   //books
//   const books = [
//     {
//       name: "Herry Potter",
//       summary:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo omnis officiis numquam adipisci placeat in nihil? Cupiditate voluptatum quibusdam animi tenetur in similique officiis ipsum reprehenderit, inventore ratione minima? Eum.",
//       pageNumber: "500",
//     },
//     {
//       name: "My Orange Tree",
//       summary:
//         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam a assumenda provident inventore sequi excepturi, perspiciatis animi, veniam illum accusantium ea sunt eos ut nulla quia possimus quae cum est.",
//       pageNumber: "300",
//     },
//   ];
//   return (
//     <div>
//       {books.map((book) => {
//         return (
//           <div key={book.name}>
//             <h6>{book.name}</h6>
//             <p>{book.summary}</p>
//             <span>{book.pageNumber}</span>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

const Search = () => {
  return (
    <div className="search-div">
      <label className="search-label">
        Search
        <input
          className="search-input"
          onChange={() => {
            console.log("change");
          }}
        ></input>
      </label>
    </div>
  );
};

export default Search;
