import React, {memo} from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn' aria-label={`Navigate to ${btnText}`}>
            {btnText}
            <img src={arrow} alt="Navigate" />
        </Link>
    </div>
);

InfoBox.propTypes = {
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    btnText: PropTypes.string.isRequired,
};

const renderContent = {
    1: (<h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>Hi, I am <span className='font-semibold'>Erik</span> 👋<br/>A Full-Stack Engineer from Slovakia.</h1>),
    2: (<InfoBox text='Worked with many companies and picked up many skills along the way.' link='/about' btnText='Learn more' />),
    3: (<InfoBox text='Led multiple projects to success over the years. Curious about the impact?' link='/projects' btnText='Visit my portfolio!' />),
    4: (<InfoBox text="Need a project done or looking for a dev? I'm just a few keystrokes away." link='/contact' btnText="Let's talk" />)
};

const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null;
};

export default memo(HomeInfo);
