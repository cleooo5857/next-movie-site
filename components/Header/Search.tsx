// HeaderSearch.tsx
import { useCallback, useEffect, useState } from "react";

import { useRouter } from "next/router";

const HeaderSearch = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

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

  const backPage = () => {
    router.replace("/");
    setSearch("");
  };

  const handleSearchValue = useCallback(
    (e: any) => {
      setSearch(e.target.value);
    },
    [search]
  );
  console.log(search);

  return (
    <div>
      <button />
      <input
        className="text-black"
        type="text"
        placeholder="제목, 사람"
        autoFocus
        autoComplete="off"
        value={search}
        onChange={handleSearchValue}
      />
      {search && <button onClick={backPage} />}
    </div>
  );
};

export default HeaderSearch;
