import React from "react";

export default function SearchBar({ value, onChange }){
  return (
    <div className="search">
      <input
        value={value}
        onChange={(e)=>onChange(e.target.value)}
        placeholder="Search events by keyword..."
        aria-label="Search events"
      />
    </div>
  );
}
