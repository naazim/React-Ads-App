import React from 'react';

const Pagination = (props) => {
    const { currentPage, data, filteredData } = props;

    /**
     * @description When the pagination page number is clicked, set that as the current page
     * @param {event} e 
     */
    const handleClick = (e) => {
        props.handleClick(parseInt(e.target.value, 10));
    };

    /**
     * @description When the next button is clicked, if it exists, show the next page
     */
    const handleNextClick = () => {
        if (currentPage <= filteredData[0].total_pages) {
            props.handleClick(currentPage + 1);
        }
    };

    /**
     * @description When the previous button is clicked, if it exists, show the previous page
     */
    const handlePreviousClick = () => {
        if (currentPage > 1) {
            props.handleClick(currentPage - 1);
        }
    };

    return (
        <div className="pagination">
            
            {filteredData.length && 
                <input
                    className="button pagination__previous"
                    disabled={filteredData[0].page === 1}
                    onClick={handlePreviousClick}
                    type="button"
                    value="poprzedni"
                />
            }

            {filteredData.length && data.map((ad) => {
                return (
                    <input
                        key={ad.page}
                        className="button"
                        disabled={ad.page === filteredData[0].page}
                        onClick={handleClick}
                        type="button"
                        value={ad.page}
                    />
                )
            })}

            {filteredData.length &&
                <input
                    className="button pagination__next"
                    disabled={filteredData[0].page === filteredData[0].total_pages}
                    onClick={handleNextClick}
                    type="button"
                    value="Następna"
                /> 
            }
        </div>
    );
};

export default Pagination;