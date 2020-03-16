import React from 'react';
import WelcomeCard from './welcomecard';
import PropTypes from 'prop-types';

const Welcome = props => {
    
    return (
        <>
            <h1 className="my-4">{props.info.title}</h1>

            <div className="row">
                {
                    props.info.cardInfo.length > 0 &&
                    props.info.cardInfo.map((item,index) => <WelcomeCard key={index} datos={item} />)
                }
            </div>
        </>
    )
}
Welcome.propTypes = {
    info: PropTypes.object.isRequired,
}

export default Welcome;