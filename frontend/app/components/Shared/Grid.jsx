import React from "react";

const Grid = ({ children, cols, justify, gap }) => {
  return (
    <div
      style={{ 
        gap: gap, 
        gridGap: gap,
        gridColumn: cols,
        justifyContent: justify }}
      className={`grid  grid-flow-col  justify-center`}
    >
      {children}
    </div>
  );
};

export default Grid;
