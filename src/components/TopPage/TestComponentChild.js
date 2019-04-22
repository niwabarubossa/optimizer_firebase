import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import React from 'react';
//子供
const TestComponentChild = ({props}) => {
  return (
    <div>
      { props.state_posts && props.state_posts.map(project => {
        return (
            <div key={project.tweet_id} style={{color: 'black'}}>
              <h1 style={{color: 'black'}}>test component child </h1>
              title<h1 style={{color: 'black'}}>{project.title}</h1>
              body<h1 style={{color: 'black'}}>{project.body}</h1>
              tweet_id<h1 style={{color: 'black'}}>{project.tweet_id}</h1>
              author_id<h1 style={{color: 'black'}}>{project.author_id}</h1>
            </div>
        )
      })}  
    </div>
  )
}

export default TestComponentChild
