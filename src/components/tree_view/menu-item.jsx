import React, { useState } from 'react';
import MenuList from './menu-list';

const MenuItem = ({item}) => {
    
    const [displayChild, setDisplayChild] = useState({})

    const handleToggleChild = (label) => {
        setDisplayChild({...displayChild,
            [label] : !displayChild[label],
        })
    }

  return (
    <li>
        <div className='menu-item'>
        <p>{item.label}</p>
        {
            item && item.children && item.children.length 
            ? <span onClick={() => handleToggleChild(item.label)} style={{cursor:'pointer'}}>
                {
                    displayChild[item.label] 
                    ? '-'
                    : '+'
                }
              </span> 
            :null
        }
        </div>
        {
            item && item.children && item.children.length > 0 && displayChild[item.label] 
            ? (<MenuList list={item.children} />)
            : null
        }
    </li>
  )
}

export default MenuItem;