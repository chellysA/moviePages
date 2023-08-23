import React from 'react';

const SortMenu: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-end my-4">
      <div className="bg-gray-10 w-max h-[39px] rounded-sm px-3 mr-2 py-2 text-gray-100 text-[15px]">
        Sort by
        <span>
          <a
            href=""
            className="no-underline text-principal-200 px-3 hover:text-white"
          >
            Date
          </a>
          ·
          <a
            href=""
            className="no-underline text-principal-200 px-3 hover:text-white"
          >
            Name
          </a>
          ·
          <a
            href=""
            className="no-underline text-principal-200 px-3 hover:text-white"
          >
            Views
          </a>
        </span>
      </div>
      <select
        name=""
        className="bg-gray-10 w-max h-[39px] text-center rounded-sm text-gray-100 mr-2 py-2"
      >
        <option value="0">- Country -</option>
        <option value="1">United States</option>
        <option value="2">United Kingdom</option>
        <option value="3">Canada</option>
        <option value="4">France</option>
        <option value="5">Euro</option>
        <option value="6">Japan</option>
        <option value="7">Spain</option>
        <option value="8">Australia</option>
        <option value="9">International</option>
        <option value="10">Hong Kong</option>
        <option value="11">China</option>
        <option value="12">South Korea</option>
        <option value="13">India</option>
        <option value="14">Russia</option>
        <option value="15">Thailand</option>
      </select>
      <select
        name=""
        className="bg-gray-10 h-[39px] w-[100px]  text-center rounded-sm text-gray-100 py-2"
      >
        <option value="0">- Year -</option>
        <option value="1">2023</option>
        <option value="2">2022</option>
        <option value="3">2021</option>
        <option value="4">2020</option>
        <option value="5">2019</option>
        <option value="6">2018</option>
        <option value="7">2017</option>
        <option value="8">2016</option>
        <option value="9">2015</option>
        <option value="10">2014</option>
        <option value="11">2013</option>
        <option value="12">2012</option>
      </select>
    </div>
  );
};

export default SortMenu;
