import React from "react";
import { useLocation } from "react-router-dom";
import SearchResultCard from "../../components/searchResultCard";
import { useGetSearchResultQuery } from "../../reduxStore/api-slice";

function SearchResult() {
  const location = useLocation();
  let arrayofData;

  const { data, isFetching } = useGetSearchResultQuery(
    location.state.searchTerm
  );

  if (data) {
    arrayofData = data.data[0].data;
  }

  return (
    <>
      {isFetching && <p>Loading</p>}
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
          </div>
        </div>
      )}
    </>
  );
}

export default SearchResult;
