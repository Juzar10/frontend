import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as IconSearch } from "../../../assets/searchIcon.svg";
import AutoCompleteItem from "./autoCompleteItem";
import * as ROUTES from "../../../constant/routes";
import { useGetAutoCompleteSuggestionQuery } from "../../../reduxStore/api-slice";

export default function SearchBar() {
  const [searchquery, setSearchquery] = useState("");
  const [suggestionList, setSuggestionList] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
  const [skip, setSkip] = useState(true);

  const navigate = useNavigate();

  const { data } = useGetAutoCompleteSuggestionQuery(searchquery, {
    skip: skip,
  });

  const HandleAutoComplete = (e) => {
    setSkip(false);
    setSearchquery(e.target.value);
    if (data) {
      if (e.target.value.length === 0) {
        setSuggestionList([]);
        return;
      } else {
        setSuggestionList(data.data);
      }
    }
    // axios
    //   .get(`${BASE_URI}books/autocomplete`, {
    //     params: { search: e.target.value },
    //   })
    //   .then((response) => {
    //     setSuggestionList(response.data.data);
    //     console.log(response.data.data);
    //   })
    //   .catch((err) => console.log(err.response));
  };

  const KeyDownHandler = (e) => {
    // User pressed the enter key
    if (e.keyCode === 13) {
      //Logic to get into another Page
      if (activeSuggestionIndex === -1) {
        setSearchquery("");
        setSuggestionList([]);
        navigate(ROUTES.SEARCH, { state: { searchTerm: searchquery } });
      } else {
        let id = suggestionList[activeSuggestionIndex]._id;
        setSearchquery("");
        setActiveSuggestionIndex(-1);
        setSuggestionList([]);
        navigate(ROUTES.PRODUCTDETAILS, { state: { id: id } });
      }
    }
    // User pressed the up arrow
    else if (e.keyCode === 38) {
      if (activeSuggestionIndex === -1) {
        return;
      }

      setActiveSuggestionIndex(activeSuggestionIndex - 1);
    }
    // User pressed the down arrow
    else if (e.keyCode === 40) {
      if (activeSuggestionIndex - 1 === suggestionList.length) {
        return;
      }
      setActiveSuggestionIndex(activeSuggestionIndex + 1);
    }
  };
  return (
    <>
      <div className="flex items-center w-6/12 h-full ">
        <div className="w-full">
          <div className="relative flex items-center w-full h-12 bg-gray-200 rounded-lg">
            {/* <form className="w-full pl-40"> */}
            <input
              className="w-full pl-40 bg-gray-200 outline-none text-lightpurple"
              placeholder="Search here"
              onChange={HandleAutoComplete}
              value={searchquery}
              onKeyDown={KeyDownHandler}
            />
            {/* </form> */}
            <select className="absolute left-0 ml-2 font-bold bg-gray-200 border-none outline-none text-purple">
              <option value="Menus">Menus</option>
              <option value="Option 2">Romance</option>
              <option value="Option 3">Adventure</option>
            </select>
            <IconSearch className="w-6 h-6 mr-6 stroke-lightpurple" />
          </div>
          {!(suggestionList.length === 0) && (
            <div className="absolute z-10 w-1/2 pl-40 transition-all ease-in-out">
              <div className="bg-offwhite py-3.5 rounded-md ">
                {suggestionList.map((items, index) => {
                  let isActive = false;
                  if (index === activeSuggestionIndex) {
                    isActive = true;
                  }
                  return (
                    <AutoCompleteItem
                      key={items._id}
                      listId={items._id}
                      isActive={isActive}
                      title={items.title}
                      authorName={items.author[0]}
                      imageUIR={items.coverImg}
                      rating={items.rating}
                      setSuggestionList={setSuggestionList}
                    />
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
