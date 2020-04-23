import React, { Component } from 'react'
import './about.scss';
import Nav from '../components/Header/Nav';

export default class About extends Component {

    state={
        isShowing: false,
        tech: "React, JavaScript (ES5+), HTML, CSS/SCSS/SASS, Redux, Express.js, Git"
    }

    handleClick=e=>{
        e.preventDefault();
        this.setState({
            isShowing: !this.state.isShowing
        })
    }
    render() {
        const {tech, isShowing} = this.state;
        return (
        <>
        <Nav />
        <div className="about" id="about-section">
            <div className="about__about-container">
            <div className="headshot"></div>
            <div className="contact-container">
                {/* <p>download my resume</p>
                <br /> */}
                <a href="mailto: luca.lamanna@hotmail.com">e-mail</a>
                <a href='https://www.linkedin.com/in/lucalamanna' target='_blank' rel="noopener noreferrer" >linkedin</a>
                <a href='https://github.com/lucalam' target='_blank' rel="noopener noreferrer" >github</a>
                <a href='https://www.instagram.com/lucathehand/' target='_blank' rel="noopener noreferrer">instagram</a>
            </div>
            </div>

            <div className="about__paragraph-container">
            <h1 className="header-1">Luca Lamanna</h1>
            <p className="paragraph">
                I'm a former teacher and I've spent many years teaching in South
                America. I was looking for something that would provide regular
                challenges and that's when I found coding. I graduated from
                BrainStation's full-time web development program and now I'm
                looking to get real world experience.
              </p>
              <br />
              <p className="paragraph">
                My goal is to learn as much as possible and contribute to a
                great team, creating beautiful technology that will help people.
                If that's what you're doing, I would love to be part of your
                team!
              </p>
              <br />
              <p className="paragraph">
                When I'm not coding, you'll find me hiking a trail, snapping a
                picture, inventing a cocktail with Campari, or solving 200lbs
                rubicks cubes.
              </p>
              <div className='expand-btn'
              onClick={this.handleClick}>+</div>
              {isShowing ? 
              <div className='tech-stack'>
              <h2 className='header-2'>Web Technology</h2>
              <p>{tech}</p>
              </div> 
              : null
              }
            </div>
        </div>
        </>
        );
    }
}
