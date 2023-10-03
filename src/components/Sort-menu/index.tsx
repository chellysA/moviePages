import React from "react";
import { useHistory } from "react-router-dom";

interface ISortMenu {
  filmType: string;
}

const SortMenu = ({ filmType }: ISortMenu) => {
  const history = useHistory();

  const handleDate = () => {
    const newLocation = {
      pathname: `/${filmType}`,
      search: "?sort_by=primary_release_date.desc",
    };
    history.push(newLocation);
  };

  const handleMostVoted = () => {
    const newLocation = {
      pathname: `/${filmType}`,
      search: "?sort_by=vote_average.desc",
    };

    history.push(newLocation);
  };

  const handleYear = (e: any) => {
    document.addEventListener("keyup", function (event) {
      if (event.keyCode === 13 && e.target.value.length === 4) {
        const newLocation = {
          pathname: `/${filmType}`,
          search: `?primary_release_year=${e.target.value}`,
        };

        history.push(newLocation);
      }
    });
  };
  return (
    <div className="flex flex-wrap justify-end mt-4 mb-10">
      <div className="bg-gray-10 w-max h-[39px] rounded-sm px-3 mr-2 py-2 text-gray-100 text-[15px]">
        Sort by
        <span>
          <a
            href=""
            className="no-underline text-principal-200 px-3 hover:text-white"
            onClick={handleDate}
          >
            Date
          </a>
          ·
          <a
            href=""
            className="no-underline text-principal-200 px-3 hover:text-white"
            onClick={handleMostVoted}
          >
            Most Voted
          </a>
        </span>
      </div>
      <p className="text-principal-200 pt-1 px-2">Year</p>
      <input
        type="text"
        className="bg-gray-10 h-[39px] w-[100px]  text-center rounded-sm text-gray-100 py-2"
        onChange={handleYear}
      />
    </div>
  );
};

export default SortMenu;
