import React,  {Component} from 'react';
import ReactDOM from 'react-dom';

//import Subnav from './subna';

 
const title = 'now main start';


ReactDOM.render(
  <div>{title}
  	<div id = "skip-to-content">
  		<div class ="row">
  			<div class = "column-6 tablet-hide">
  				<h4>hi,world</h4>
          <div id="Subnav"></div>
  			</div>
  			<div class="column-17 tablet-column-12 pre-1 content-face">
  				<h4>now we can work</h4>
          <iframe src="./right.html" width = "100%" height = "100%"frameborder="0" framespacing="0" marginheight="0" marginwidth="0" vspace="0"></iframe>
          
  			</div>
  		
  		</div>
  	</div>

  </div>,
  document.getElementById('mainContent')
);