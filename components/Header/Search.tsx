// HeaderSearch.tsx
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import SearchIcon from "../../public/Searchicon.svg";

const HeaderSearch = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [isSearchOpen, setisSearchOpen] = useState(false);

  //	값이 변할때마다 새롭게 요청
  useEffect(() => {
    try {
      if (search) {
        router.push(
          {
            pathname: "/search",
            query: {
              search: search,
            },
          }
          //  undefined,
          //  { shallow: true }
        );
      }
    } catch (e: any) {
      console.error(e.response);
    }
  }, [search]);

  const onSearchInputOpen = () => setisSearchOpen(!isSearchOpen);

  const handleSearchValue = useCallback(
    (e: any) => {
      setSearch(e.target.value);
    },
    [search]
  );
  console.log(search);

  return (
    <div
      className={`flex items-center justify-center ${
        isSearchOpen ? "border-b-2 border-red-500" : ""
      } 
          ${isSearchOpen ? "mr-5" : "mr-0"}`}
    >
      <div onClick={onSearchInputOpen}>
        <SearchIcon />
      </div>
      <input
        className={`transition-width duration-300 ease-linear ${
          isSearchOpen ? "w-40" : "w-0"
        } ${
          isSearchOpen ? "bg-black" : ""
        } text-white border-none outline-none ${
          isSearchOpen ? "opacity-100" : "opacity-0"
        } ml-2 p-1`}
        type="text"
        placeholder="제목을 입력해주세요"
        autoFocus
        autoComplete="off"
        value={search}
        onChange={handleSearchValue}
      />
    </div>
  );
};

export default HeaderSearch;
