import React from 'react';

type CellProps = {
  go: string;
  setGo: React.Dispatch<React.SetStateAction<string>>;
  id: number;
  cells: string[];
  setCells: React.Dispatch<React.SetStateAction<string[]>>;
};

const Cell = ({ go, setGo, id, cells, setCells }: CellProps) => {
  const handleClick = (e) => {
//     if (cells[id] === '') {
//       // If the cell is empty, set its value to 'go'
//       cells[id] = go;

//       setCells([...cells]);
// console.log(cells)
//       // Conditionally update the 'go' state based on 'go' value
//       if (go === 'circle') {
//         setGo('x');
//       } else {
//         setGo('circle');
//       }
//     } else {
//       // If the cell is not empty, you can display a message or handle it as needed
//       console.log('Cell already taken');
//     }
 const taken = !!cells[id]
if (go ==="circle") {
    handleCellChange("circle")

} else if (go === "cross"){
    handleCellChange("cross")
}};
const handleCellChange = (CellTochange: string) =>{
    let copyCells= [...cells]
    copyCells[id] = cellTochange
    if(CellTochange==="circle")

}

  return (
    <div className="square" onClick={handleClick}>
      {cells[id] === '' ? '' : <h1>{go === 'circle' ? 'O' : 'X'}</h1>}
    </div>
  );
};

export default Cell;
