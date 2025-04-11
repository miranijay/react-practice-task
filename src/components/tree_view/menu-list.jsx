import React from 'react';
import MenuItem from './menu-item.jsx';

const MenuList = ({list = []}) => {
  return (
    <ul className='menu-list-container'>
        {
            list && list.length 
            ? list.map((listItem) => <MenuItem item={listItem}/>)
            : null
        }
    </ul>
  )
}

export default MenuList;
