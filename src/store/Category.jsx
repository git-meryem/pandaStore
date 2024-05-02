import { useEffect, useState } from "react";
export default function Category({ cat , handleSearch }) {

  return (
    <>
      <button type="button" className="btn btn-secondary" name={cat} onClick={handleSearch}>
        {cat}
      </button>
    </>
  );
}
