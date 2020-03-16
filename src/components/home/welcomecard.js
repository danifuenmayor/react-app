import React from 'react';

const WelcomeCard = props => {
    return (
        <div className="col-lg-4 mb-4">
            <div className="card h-100">
                <h4 className="card-header">{props.datos.title}</h4>
                <div className="card-body">
                    <p className="card-text">{props.datos.description}</p>
                </div>
                <div className="card-footer">
                    <a href={props.datos.button.url} className="btn btn-primary">{props.datos.button.label}</a>
                </div>
            </div>
        </div>
    )
}
export default WelcomeCard;