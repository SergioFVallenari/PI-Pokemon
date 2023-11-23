import React from 'react';
import style from './pagination.module.css';

const Pagination = ({ totalPages, actualPage, handlePage }) => {
    const pagesToShow = 10;
    const totalPagesArray = []

    for (let i = 1; i <= totalPages; i++) {
        totalPagesArray.push(i);
    }

    const startPage = Math.floor((actualPage - 1) / pagesToShow) * pagesToShow + 1;
    const endPage = Math.min(startPage + pagesToShow - 1, totalPages);

    const handlePageInRange = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            handlePage(pageNumber);
        }
    };

    return (
        <>
            <div className={style.pagContainer}>
                <button onClick={() => handlePage(1)} disabled={actualPage === 1}>
                    ⏮
                </button>
                <button onClick={() => handlePage(actualPage - 1)} disabled={actualPage === 1}>
                    ⏪
                </button>

                {totalPagesArray.slice(startPage - 1, endPage).map((pageNumber) => (
                    <button
                        key={pageNumber}
                        onClick={() => handlePageInRange(pageNumber)}
                        className={pageNumber === actualPage ? `${style.currentPage} ${style.pagButton}` : style.pagButton}
                    >
                        {pageNumber}
                    </button>
                ))}

                <button onClick={() => handlePage(actualPage + 1)} disabled={actualPage === totalPages}>
                    ⏩
                </button>
                <button onClick={() => handlePage(totalPages)} disabled={actualPage === totalPages}>
                    ⏭
                </button>
            </div>
        </>
    );
};

export default Pagination;