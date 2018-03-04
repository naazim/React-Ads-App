import React from 'react';
import Ad from './Ad';

const Page = (props) => {
    let { filteredData } = props;
    
    return (
        <div className="tile__wrapper">
            {
                filteredData.length && (filteredData[0].ads.map((ad) => <Ad key={ad.id} ad={ad} />))
            }
        </div>
    );
};

export default Page;
