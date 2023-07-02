import Link from "next/link";
import { genres } from "./Genrefilter";

type props = {
  currentTarget: any;
  e: React.MouseEvent<HTMLLIElement, MouseEvent>;
};

export default function Filter({ filterItem, setFilterItem }: any) {
  const onClickTargetName = (e: any, genreId: number) => {
    if (filterItem.includes(genreId)) {
      setFilterItem(filterItem.filter((item: number) => item !== genreId));
      return;
    }
    setFilterItem([...filterItem, genreId]);
  };

  return (
    <div className="w-8/12 mx-auto">
      <ul className="flex flex-wrap gap-3.5">
        {genres.map((item) => (
          <li
            className={` ${
              filterItem.includes(item.id) ? "Genreitem active" : "Genreitem"
            }`}
            onClick={(e) => onClickTargetName(e, item.id)}
            key={item.id}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
