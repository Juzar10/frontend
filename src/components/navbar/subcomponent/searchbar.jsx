import axios from "axios";
import { useState } from "react";
import { ReactComponent as IconSearch } from "../../../assets/searchIcon.svg";

export default function SearchBar() {
  const [searchquery, setSearchquery] = useState("");
  const HandleAutoComplete = (e) => {
    setSearchquery(e.target.value);
    axios
      .get("http://localhost:8000/api/v1/books/autocomplete", {
        params: { search: e.target.value },
      })
      .then((response) => console.log(response));
  };
  return (
    <div className="flex items-center w-6/12 h-full ">
      <div className="relative flex items-center w-full h-12 bg-gray-200 rounded-lg">
        <form className="w-full pl-40">
          <input
            className="bg-gray-200 outline-none text-lightpurple"
            placeholder="Search here"
            onChange={HandleAutoComplete}
            value={searchquery}
          />
        </form>
        <select className="absolute left-0 ml-2 font-bold bg-gray-200 border-none outline-none text-purple">
          <option value="Menus">Menus</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
        </select>
        <IconSearch className="w-6 h-6 mr-6 stroke-lightpurple" />
      </div>
    </div>
  );
}
