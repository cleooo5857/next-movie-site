"use client";

import Featch from "@/apis/SearchApi";
import { useDebounce } from "@/hooks/useDebounce";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function SearchList() {
  const router = useRouter();
  const { type, search } = router.query;
  const [searchResults, setSearchResults] = useState<any>([]);
  const debouncedSearchTerm = useDebounce(search, 1500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchSearchMovie(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  const fetchSearchMovie = async (searchTerm: any) => {
    try {
      const res = await Featch.SearchFeatchData(searchTerm);
      setSearchResults(res.results);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <section>
      <div className="Movie_Wrap py-12 px-4">
        <ul className="flex flex-wrap justify-center ">
          {searchResults.map((item: any, i: any) => (
            <li className="w-30 relative rounded-md m-1" key={`movie-${i}`}>
              <Image
                className="hover:scale-125"
                src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                alt="test"
                fill
                sizes="(min-width: 768px) 10vw, (max-width: 1280px) 50vw, 33vw"
                priority // Preload images
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
