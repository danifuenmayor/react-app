import React from 'react';
import PropTypes from 'prop-types';

const Action = props => {
    return (
        <>
            <div className="row mb-4">
                <div className="col-md-8">
                    <p>{props.info.description}</p>
                </div>
                <div className="col-md-4">
                    <a className="btn btn-lg btn-secondary btn-block" href={props.info.button.url}>{props.info.button.title}</a>
                </div>
            </div>
        </>
    )
}
Action.propTypes = {
    info: PropTypes.object.isRequired,
}
export default Action;