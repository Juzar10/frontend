import { useNavigate } from "react-router-dom";
import * as ROUTES from "../../constant/routes";

export default function SearchResultCard({
  title,
  coverImg,
  price,
  authorName,
  listId,
}) {
  const navigate = useNavigate();
  const onCLickHandler = () => {
    navigate(ROUTES.PRODUCTDETAILS, { state: { id: listId } });
  };
  return (
    <div className="relative group">
      <div className="w-full overflow-hidden bg-gray-200 rounded-md min-h-80 aspect-w-1 aspect-h-1 group-hover:opacity-75 lg:h-80 lg:aspect-none">
        <img
          src={coverImg}
          alt="Front of men&#039;s Basic Tee in black."
          className="object-cover object-center w-full h-full lg:w-full lg:h-full"
        />
      </div>
      <div className="flex justify-between mt-4">
        <div>
          <h3 className="text-sm text-gray-700">
            <div onClick={onCLickHandler} className="cursor-pointer">
              <span aria-hidden="true" className="absolute inset-0"></span>
              {title}
            </div>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{authorName}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">${price}</p>
      </div>
    </div>
  );
}
