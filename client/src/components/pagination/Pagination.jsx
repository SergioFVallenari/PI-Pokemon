import React from 'react';
import style from './pagination.module.css'

const Pagination = ({ totalPages, actualPage, handlePage }) => {
    return (
        <>
            <div className={style.pagContainer}>
                <button onClick={() => handlePage(1)} disabled={actualPage === 1}>
                    ⏮
                </button>
                <button onClick={() => handlePage(actualPage - 1)} disabled={actualPage === 1}>
                    ⏪
                </button>
                <span>{actualPage}/{totalPages}</span>
                <button onClick={() => handlePage(actualPage + 1)} disabled={actualPage === totalPages}>
                    ⏩
                </button>
                <button onClick={() => handlePage(totalPages)} disabled={actualPage === totalPages}>
                    ⏭
                </button>
            </div>
        </>
    )
}

export default Pagination