import React from 'react';
import './Header.css';
import './HeaderTitle.js'
import './HeaderContent.js'

function HeaderContainer() {
    return (
        <div className='header'>
            <img src="../../../public/img/LSlogo.jpg"></img>
            <HeaderTitle />
            <HeaderContent />
        </div>
    )
}


export default HeaderContainer
