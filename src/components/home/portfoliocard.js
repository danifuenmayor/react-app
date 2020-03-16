import React from 'react';

const PortfolioCard = props => {
    return (
        <>
            <div className="col-lg-4 col-sm-6 portfolio-item">
                <div className="card h-100">
                    <a href="/#"><img className="card-img-top" src={props.datos.url} alt="" /></a>
                    <div className="card-body">
                        <h4 className="card-title">
                            <a href="#">{props.datos.title}</a>
                        </h4>
                        <p className="card-text">{props.datos.description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PortfolioCard;