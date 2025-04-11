import React from "react";
import MenuList from "./menu-list";
import './style.css'

export default function TreeView({menus =[]}) {

    return(
        <>
            <div className="tree-view-container">
                <h1 style={{
                    textAlign: 'center',
                    marginTop: '100px',
                    fontSize: '40px',
                    textDecoration:'underline',
                    color:'white'
                }}>
                    Tree-View
                </h1>
                <MenuList list={menus}/>
            </div>
        </>
    )
}
