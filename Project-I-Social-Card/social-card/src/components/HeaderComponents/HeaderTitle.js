import React from 'react';
import './Header.css';

function HeaderTitle() {
    return (
        <div className="headerTitle">
            <h2>Lambda School</h2>
            <a href="#">@LambdaSchool - 26 jan</a>
        </div>
    )
}

import React from 'react';
import HeaderContent from './HeaderContent';
import './Header.css';
import moment from 'moment';
const time = moment();

const HeaderTitle = () => {
  return (
    <div className="header-title-wrapper">
      <div className="header-title">
        Lambda School
        <span className="time-stamp">{time.format('MMM Do ')}</span>
        <HeaderContent />
      </div>
    </div>
  );
};

export default HeaderTitle;



export default HeaderTitle