import {FaChevronLeft, FaChevronRight} from "react-icons/fa";

const Pagination = ({ profilesPerPage, totalProfiles, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProfiles / profilesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="flex justify-center mt-4">
            <ul className="pagination flex items-center space-x-1">
                <li>
                    <button
                        onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                        className="w-8 flex items-center py-1 border rounded-l justify-center bg-gray-200 hover:bg-gray-300"
                        disabled={currentPage === 1}
                    >
                        <FaChevronLeft />
                    </button>
                </li>
                {pageNumbers.map(number => (
                    <li key={number} className={currentPage === number ? 'active' : ''}>
                        <button
                            onClick={() => paginate(number)}
                            className={`w-8 rounded-lg border ${
                                currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'
                            }`}
                        >
                            {number}
                        </button>
                    </li>
                ))}
                <li>
                    <button
                        onClick={() => currentPage < pageNumbers.length && paginate(currentPage + 1)}
                        className="w-8 flex items-center py-1 border rounded-r justify-center bg-gray-200 hover:bg-gray-300"
                        disabled={currentPage === pageNumbers.length}
                    >
                        <FaChevronRight />
                    </button>
                </li>
            </ul>
        </nav>
    );
};
export default Pagination;