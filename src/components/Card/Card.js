import React, { Component } from 'react'
import {withRouter} from 'react-router';
import './card.scss';



class Card extends Component{
    //get ID from function in the onClick
    goToCardDetail=(id)=>{
    localStorage.setItem('selectedProject', JSON.stringify(id)); //Saves Id to local storage to be used in Details component.
    this.props.history.push('/project-details') //redirects the page to the details page
    }
    render() {
    const{video, image} = this.props.project;
    return (
        <>
        <div className='card-container' onClick={()=> this.goToCardDetail(this.props.project.id)}> 
            {
                video ? <video className ='video' autoPlay muted loop>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
                </video> : <img src={image} alt="project" className ='video' />
            }
        </div>
        </>
        )
    }
}

export default withRouter(Card);