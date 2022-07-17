import { useNavigate } from "react-router-dom";
import { ReactComponent as IconStar } from "../../../assets/starIcon.svg";
import * as ROUTES from "../../../constant/routes";
export default function AutoCompleteItem({
  title,
  authorName,
  imageUIR,
  rating,
  isActive,
  listId,
  setSuggestionList,
}) {
  const navigate = useNavigate();
  const onClickHandler = () => {
    setSuggestionList([]);
    navigate(ROUTES.PRODUCTDETAILS, { state: { id: listId } });
  };
  
  return (
    <div
      className={`flex h-24 pb-2 m-2 border-b-2 hover:bg-blue-100 ${
        isActive && `bg-blue-100`
      } border-b-lightpurple`}
      onClick={onClickHandler}
    >
      <div className="flex justify-center w-1/4 h-full ">
        <img className="h-full " src={imageUIR} alt="" />
      </div>
      <div className="w-2/4 h-full ">
        <p className="overflow-hidden font-bold whitespace-nowrap text-purple text-para text-ellipsis">
          {title}
        </p>
        <p className="text-lightpurple text-menu">{authorName}</p>
      </div>
      <div className="flex items-center w-1/4 h-full">
        <p className="font-bold text-para text-purple">{rating}</p>
        <IconStar className="w-6 h-6 fill-orange stroke-orange" />
      </div>
    </div>
  );
}
