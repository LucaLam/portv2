import React, { Component } from 'react'
import './detail.scss';
import Nav from '../Header/Nav';

export default class Detail extends Component {
    
    render() {
        //Retrieve the saved ID
        let selectedProject = localStorage.getItem('selectedProject');
        //Change Id from string to an int.
        let projectId = parseInt(selectedProject);
        //Get all the project Ids
        let ids = this.props.data.map(i => i.id);
        //Get the specific Id that matched our saved ID
        let found = ids.find(id => id === projectId)

        //Compare our project ID to our foundId and show data according to the match
        if(projectId === found){
            let projectFound = this.props.data.find(project => project.id === projectId)
            return (
              <>
                <Nav />
                <div className="detail__container">
                  <h1 className="header-1 detail__title">
                    {projectFound.name}
                  </h1>
                  <p className="detail__description">
                    {projectFound.description}
                  </p>
                  <div className="button-container">
                    <a
                      href={projectFound.gitUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div
                        className={
                          !projectFound.gitUrl ? "blank-out" : "button"
                        }
                      >
                        See Code
                      </div>
                    </a>
                    <a
                      href={projectFound.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div
                        className={
                          !projectFound.projectUrl ? "blank-out" : "button"
                        }
                      >
                        Online
                      </div>
                    </a>
                  </div>
                </div>
              </>
            );     
        } else{
            console.log('No Project Found')
        }
    }
}
