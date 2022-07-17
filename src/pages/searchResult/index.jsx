import React from "react";
import { useLocation } from "react-router-dom";
import SearchResultCard from "../../components/searchResultCard";
import { useGetSearchResultQuery } from "../../reduxStore/api-slice";
import { Pagination } from "@mui/material";
import { useState } from "react";
import { CircularProgress } from "@mui/material";
import { LoadinMessages } from "../../constant/funny_loading_messages";

function SearchResult() {
  const location = useLocation();
  const [pageNumber, setPageNumber] = useState(1);
  let arrayofData;
  let count;

  const { data, isFetching } = useGetSearchResultQuery({
    searchTerm: location.state.searchTerm,
    pageNumber: pageNumber,
  });

  const onPageNumberChange = (event, value) => {
    setPageNumber(value);
  };

  if (data) {
    count = Math.round(data.data[0].metadata[0].total / 25);
    arrayofData = data.data[0].data;
  }

  return (
    <>
      {isFetching && (
        <div className="flex items-center justify-center w-full h-screen">
          <div className="text-center ">
            <CircularProgress />
            <p className="text-para text-purple">
              {
                LoadinMessages[
                  Math.floor(Math.random() * LoadinMessages.length)
                ]
              }
            </p>
          </div>
        </div>
      )}
      <br />
      {!isFetching && (
        <div className="bg-offwhite">
          <div className="max-w-2xl px-4 py-4 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
              Search Result are
            </h2>

            <div className="grid grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {arrayofData.map((item) => (
                <SearchResultCard
                  key={item._id}
                  listId={item._id}
                  title={item.title}
                  coverImg={item.coverImg}
                  authorName={item.author[0]}
                  price={item.price}
                />
              ))}
            </div>
            <div className="flex items-center justify-center pt-4">
              <Pagination
                count={count}
                variant="outlined"
                shape="rounded"
                page={pageNumber}
                onChange={onPageNumberChange}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SearchResult;
