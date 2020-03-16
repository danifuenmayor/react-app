import React from 'react';
import PropTypes from 'prop-types';

const Info = props => {
    return (
        <>
            <div className="row">
                <div className="col-lg-6">
                    <h2>{props.info.title}</h2>
                    <p>{props.info.description}</p>
                    <ul>
                        {
                            props.info.list.length > 0 &&
                        props.info.list.map((elem,i) => <li key={i}>{elem}</li>)
                        }
                    </ul>
                    <p>{props.info.description2}</p>
                </div>
                <div className="col-lg-6">
                    <img className="img-fluid rounded" src={props.info.url} alt="" />
                </div>
            </div>
        </>
    )
}
Info.propTypes = {
    info: PropTypes.object.isRequired,
}
export default Info;