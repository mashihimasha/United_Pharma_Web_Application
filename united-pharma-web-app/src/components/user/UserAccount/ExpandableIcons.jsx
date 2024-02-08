import React, { useState } from 'react';

const ExpandableIcons = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <div
    className={`${expanded ? 'expanded' : ''}`}
    onClick={handleToggle}
    >
    {expanded ? (
        <>
        <button className='btn btn-white text-black border-0 p-0'><i className="fa fa-chevron-left"></i></button>
        <button className='btn btn-white text-dark border-0 p-0 mx-2'><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
        <button className='btn btn-white text-dark border-0 p-0 ml-2'><i className="fa fa-trash-o" aria-hidden="true"></i></button>
        </>
    ) : (
        <button className='btn btn-white text-black border-0 p-0'><i className="fa fa-chevron-right"></i></button>
    )}
    </div>
  );
};

export default ExpandableIcons;
