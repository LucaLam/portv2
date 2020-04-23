import React, { Component } from 'react'
import './nav.scss';
import {Link} from 'react-router-dom';

export default class Nav extends Component {
    
    render() {
        return (
            <>
            <div className='nav'>
                <div className='nav__logo-container'>
                <p>L</p> 
                </div>
                <ul className='nav__nav-list'>
                    <Link className='nav__nav-list--item' to='/'>Portfolio</Link>
                    <Link className='nav__nav-list--item' to='/about'>about</Link>
                </ul>
            </div>
            </>
        )
    }
}
