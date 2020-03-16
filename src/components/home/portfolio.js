import React from 'react';
import PortfolioCard from './portfoliocard';
import PropTypes from 'prop-types';

const Portfolio = props => {
    return (
        <>
            <h2>{props.info.title}</h2>

            <div className="row">
            {
                    props.info.cardInfo.length > 0 &&
                    props.info.cardInfo.map((item,index) => <PortfolioCard key={index} datos={item} />)
                }
                
            </div>
        </>
    )
}
Portfolio.propTypes = {
    info: PropTypes.object.isRequired,
}
export default Portfolio;