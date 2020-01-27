import React,  {Component} from 'react';
import ReactDOM from 'react-dom';

//import Subnav from './subna';

 
const title = 'now main start';


ReactDOM.render(
  <div>{title}
  	<div id = "skip-to-content">
  		<div class = "container ">
  			<div class ="row">
  				<div class = "column-6 tablet-hide">
  					<h4>hi,world</h4>
            <div id="subnav">
            

            </div>

  				</div>
  				<div class="column-17 tablet-column-12 pre-1 content-face">
  					<h4>now we can work</h4>
  				</div>


  			</div>
  		</div>
  	</div>

  </div>,
  document.getElementById('mainContent')
);