import React from 'react'

function ReferCont({ id, title, desc, use }) {
  return (
    <li>
      <a to="/">
        <span className='num'>{id}</span>
        <span className='num'>{title}</span>
        <span className='num'>{desc}</span>
        <span className='num'>{use}</span>
      </a>
    </li>
  );
}

export default ReferCont