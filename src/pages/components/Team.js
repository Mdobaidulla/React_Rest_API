import React from 'react';
import {Route, Link} from 'react-router-dom';
import Legal from './Legal';
import Engineering from './Engineering'
const Team = ({match}) =>{
    return (
        <>
     <h3>Our Team</h3>
     {match.url}
     <Link to={match.url+'/legal'}> Legal</Link>
      {'  |   '}
     <Link to={match.url+'/engineering'}> Engineering</Link>
     <hr/>
     <Route path={match.url+'/legal'} component ={Legal} />
     <Route path={match.url+'/engineering'} component ={Engineering} />
    
     <p>Our team is composed of the best folks around.</p>
        </>

    )
}
export default Team;