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