import React from 'react';
import { MdOutlineNavigateNext } from "react-icons/md";
import { MdOutlineSkipNext } from "react-icons/md";
import { MdOutlineSkipPrevious } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";




const Pagination = ({ totalPages, actualPage, handlePage }) => {
    const pagesToShow = 4;
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
            <div className="flex flex-wrap items-center justify-center space-x-2 mt-2 mb-2">
                <button onClick={() => handlePage(1)} disabled={actualPage === 1} className='bg-[#8B0000] py-1 px-2 rounded-full'>
                    <MdOutlineSkipPrevious />
                </button>
                <button onClick={() => handlePage(actualPage - 1)} disabled={actualPage === 1} className='bg-[#8B0000] py-1 px-2 rounded-full'>
                    <GrFormPrevious />
                </button>

                {totalPagesArray.slice(startPage - 1, endPage).map((pageNumber) => (
                    <button
                        key={pageNumber}
                        onClick={() => handlePageInRange(pageNumber)}
                        className={pageNumber === actualPage ? `bg-[#DC143C] text-sm text-black py-1 px-2 rounded-full` : ` bg-[#8B0000] py-1 px-2 rounded-full text-sm`}
                    >
                        {pageNumber}
                    </button>
                ))}

                <button onClick={() => handlePage(actualPage + 1)} disabled={actualPage === totalPages} className='bg-[#8B0000] py-1 px-2 rounded-full'>
                    <MdOutlineNavigateNext />
                </button>
                <button onClick={() => handlePage(totalPages)} disabled={actualPage === totalPages} className='bg-[#8B0000] py-1 px-2 rounded-full'>
                    <MdOutlineSkipNext />
                </button>
            </div>
        </>
    );
};

export default Pagination;