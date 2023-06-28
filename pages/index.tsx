import instance from "@/apis";
import Image from "next/image";

interface MovieInfoProps {
  // userInfo : InAuthUser | null;
}

export default function Home({ results, movieDetail }: any) {
  console.log(results);

  return (
    <section>
      <div className="Banner_wrap">
        <div className="Banner_inner">
          {movieDetail.videos.results[0] ? (
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${movieDetail.videos.results[0].key}?playlist=${movieDetail.videos.results[0].key}&showinfo=0&modestbranding=1&controls=0&&autohide=0&autoplay=1&loop=1&mute=1&`}
            ></iframe>
          ) : (
            <Image
              className="Banner_image"
              src={`https://image.tmdb.org/t/p/original/${results[0].backdrop_path}`}
              alt={results[0].title}
              fill={true}
            />
          )}
        </div>
      </div>
      <div className="Movie_Rank">
        <ul className="flex flex-wrap">
          {results.map((movie: any, i: number) => (
            <li className="w-60 rounded-md m-4 overflow-hidden" key={i}>
              <Image
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path} `}
                alt={"test"}
                fill={true}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export async function getStaticProps() {
  try {
    const response = await instance.get("/movie/now_playing");
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
