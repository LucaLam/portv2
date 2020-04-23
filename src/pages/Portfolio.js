import React, { Component } from 'react'
import './portfolio.scss';
import Card from '../components/Card/Card';
// import data from '../data/data';
import Nav from '../components/Header/Nav';


export default class Portfolio extends Component {

   

    render() {
        const{data} = this.props;
        return (
            <>
            <Nav />
            <div className='portfolio'>
            {   
            data.map(project => <Card 
            project={project} 
            key={project.id}/> )
            }
            </div>
            </>
        )
    }
}
