import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  
  render(){
    return (
      <div>

        <div className="card mb-3" style={{maxWidth:'540px'}}>
       <div className="row no-gutters">
        <div className="col-md-4">
       <img src="https://apluspetsitting.com/wp-content/uploads/2016/03/cats-150x150.jpg" className="card-img" alt=''/>
       </div>
       <div className="col-md-8">
       <div className="card-body">
        <h5 className="card-title">rahma sandoqa</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
      </div>
    )
  };