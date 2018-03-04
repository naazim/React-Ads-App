import React from 'react';

const Ad = (props) => {
    const {title, created, description, params} = props.ad;
    return (
        <div className="tile">
            <a className="tile__link" href="http://www.olx.com">
                <h3 className="tile__title" title={title}>{title}</h3>
            </a>
            <div className="tile__meta">
                <span>Dodano: {created}</span><br/>
                {
                    params && params.map((param, index) => {
                        let [label, value] = param;
                        return (
                            <span key={index}>{`${label}: ${value}`}</span>
                        )
                    })
                }
            </div>
            <p className="tile__description">{description}</p>
        </div>
    );
};

export default Ad;