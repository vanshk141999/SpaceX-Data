/* eslint-disable jsx-a11y/anchor-is-valid */

function Pagination({ capsulesPerPage, totalCapsules, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCapsules / capsulesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="flex justify-center md:-mt-14">
        <nav aria-label="Page navigation example">
          <ul className="flex list-style-none">
            {pageNumbers.map((number) => (
              <li key={number} className="page-item active">
                <a
                  onClick={() => {
                    paginate(number);
                  }}
                  className="page-link relative block py-1.5 px-3 mx-1.5 border-0 bg-white outline-none transition-all duration-300 rounded-full text-black hover:text-white hover:bg-black shadow-md focus:shadow-m cursor-pointer"
                >
                  {number}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Pagination;
