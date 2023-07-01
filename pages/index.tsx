import instance from "@/apis";
import MovieModal from "@/components/MovieModal/modal";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, useSession, signOut } from "next-auth/react";
import Filter from "@/components/filter/filter";

interface MovieInfoProps {
  // userInfo : InAuthUser | null;
}

export default function Home({ results, movieDetail }: any) {
  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelected] = useState({});
  const { data: session } = useSession();
  const [filterItem, setFilterItem] = useState<number[]>([]);

  const test = [18, 80];
  const onClickModalOpen = (movie: any) => {
    setModalOpen(true);
    setMovieSelected(movie);
  };

  return (
    <section>
      <div className="Banner_wrap">
        <div className="Banner_inner">
          {movieDetail.videos.results[0] ? (
            <>
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${movieDetail.videos.results[0].key}?playlist=${movieDetail.videos.results[0].key}&showinfo=0&modestbranding=1&controls=0&&autohide=0&autoplay=1&loop=1&mute=1&`}
              ></iframe>
              <div className="Banner_info">
                <h2>{movieDetail.title}</h2>
                <p>{movieDetail.overview}</p>
              </div>
            </>
          ) : (
            <>
              <Image
                className="Banner_image"
                src={`https://image.tmdb.org/t/p/original/${results[1].backdrop_path}`}
                alt={results[1].title}
                fill={true}
              />
              <div className="Banner_info">
                <h2>{results[1].title}</h2>
                <p>{results[1].overview}</p>
              </div>
            </>
          )}
        </div>
        <div className="banner-fadeBottom "></div>
      </div>
      <div className="Movie_Wrap px-4">
        <Filter filterItem={filterItem} setFilterItem={setFilterItem} />
        <h2>인기 영화</h2>
        <ul className="flex flex-wrap justify-between ">
          {/* {results.map((movie: any, i: number) => (
            <li
              onClick={() => onClickModalOpen(movie)}
              className="w-60 relative rounded-md m-1 "
              key={i}
            >
              <Image
                className="hover:scale-125"
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path} `}
                alt={movie.name}
                fill={true}
              />
              <h2 className="Movie_Rank">{i + 1}</h2>
              
            </li>
          ))} */}
          {filterItem.length === 0
            ? results.map((movie: any, i: any) => (
                <li
                  onClick={() => onClickModalOpen(movie)}
                  className="w-60 relative rounded-md m-1 "
                  key={i}
                >
                  <Image
                    className="hover:scale-125"
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path} `}
                    alt={movie.name}
                    fill={true}
                  />
                  <h2 className="Movie_Rank">{i + 1}</h2>
                </li>
              ))
            : results.map((movie: any, i: any) =>
                movie.genre_ids.includes(...filterItem) ? (
                  <li
                    onClick={() => onClickModalOpen(movie)}
                    className="w-60 relative rounded-md m-1 "
                    key={`movie-${i}`}
                  >
                    <Image
                      className="hover:scale-125"
                      src={`https://image.tmdb.org/t/p/original/${movie.poster_path} `}
                      alt={movie.name}
                      fill={true}
                    />
                    <h2 className="Movie_Rank">{i + 1}</h2>
                  </li>
                ) : null
              )}
        </ul>
      </div>
      {modalOpen && (
        <MovieModal {...movieSelected} setModalOpen={setModalOpen} />
      )}
    </section>
  );
}

export async function getStaticProps() {
  try {
    const response = await instance.get("/movie/top_rated");
    const { results } = response.data;
    const movieId = results[Math.floor(Math.random() * results.length)].id;
    const { data: movieDetail } = await instance.get(`movie/${movieId}`, {
      params: { append_to_response: "videos" },
    });
    return {
      props: {
        results,
        movieDetail,
      },
    };
  } catch (error) {
    return {
      props: {
        results: [],
      },
    };
  }
}
