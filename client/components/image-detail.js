import React from 'react';

const ImageDetail = (props) => {
	// props.image => this is the image object
	// props.image.title
	// props.image.link
	
	
	return (
		<li className="collection-item">
			<div className="row">
        <div className="col s12 m7">
          <div className="card horizontal">
            <div className="card-image">
              <img src={props.image.link} />
            </div>
            <div className="card-stacked">
              <span className="card-title">{props.image.title}</span>
            </div>
            <div className="card-content">
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>
			
		</li>
		
	);
};


export default ImageDetail;



      
      
            
            