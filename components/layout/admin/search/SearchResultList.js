"use client";

const SearchResultList = ({ data }) => {
  console.log(data);
  return <div>{data[0].title}</div>;
};

export default SearchResultList;
