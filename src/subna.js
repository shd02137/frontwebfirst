import React from 'react';
import ReactDOM from 'react-dom';


/* 
const title2 = 'is it work?yes';
 //https://blog.cordelia273.space/m/35
 //https://velopert.com/3626

ReactDOM.render(
  <div>{title2}</div>,
  document.getElementById('subnav')
);
*/
/*작동안됨
const MenuItem = ({active, children, to}) => (
    <div className="menu-item">
            {children}
    </div>
)

const Header = () => {
    return (
        <div>
            <div className="logo">
                velopert
            </div>
            <div className="menu">
                <MenuItem>홈</MenuItem>
                <MenuItem>소개</MenuItem>
                <MenuItem>포스트</MenuItem>
            </div>
        </div>
    );
};
*/
class Subnav extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <h2>subnavtest</h2>
                    <nav class="navmenu navbar-default" role="navigation">
                        <a class="navbar-brand" href="#">Brand</a>

                        <ul class="nav navbar-nav">
                            <li class="active"><a href="#">Link</a></li>
                            <li><a href="#">Link</a></li>
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <b class="caret"></b></a>
                                <ul class="dropdown-menu navbar-nav" role="menu">
                                    <li><a href="#">Action</a></li>
                                    <li><a href="#">Another action</a></li>
                                    <li><a href="#">Something else here</a></li>
                                    <li><a href="#">Separated link</a></li>
                                    <li><a href="#">One more separated link</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                <button type="button" class="btn">Basic</button>
            </div>
        );
    }
}


ReactDOM.render(
    <div>
        <Subnav />
        
    </div>,
    document.getElementById('Subnav')
);

