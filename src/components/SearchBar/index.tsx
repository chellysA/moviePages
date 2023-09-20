import useQueryParams from '../../hooks/useQueryParams';
import useGetSearcher from '../../hooks/api/useGetSearcher';
import React, { useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

const SearchBar = () => {
  const queries = useQueryParams();
  const movieTitle = queries.get('q');
  const page = queries.get('page');
  const history = useHistory();
  const { getSearcher } = useGetSearcher(movieTitle, page ?? '1');
  console.log(queries);
  useEffect(() => {
    if (movieTitle) {
      getSearcher();
    }
  }, [movieTitle]);

  const handleSearch = (e: any) => {
    if (e.keyCode === 13 && e.target.value) {
      const newLocation = {
        pathname: '/search',
        search: `?q=${e.target.value}`,
      };

      history.push(newLocation);
    }
  };

  return (
    <>
      <div
        id="search-bar"
        className="flex w-[150px] lg:w-[300px] h-[44px] rounded-2xl backdrop-contrast-50 "
      >
        <div className="w-[55px] p-2 md:p-0 flex items-center justify-center">
          <FaSearch className="text-white align-middle" />
        </div>
        <input
          type="text"
          placeholder="Enter keywords..."
          className="border-none bg-transparent text-white w-full text-[14px]"
          onKeyDown={handleSearch}
        />
      </div>
    </>
  );
};

export default SearchBar;
