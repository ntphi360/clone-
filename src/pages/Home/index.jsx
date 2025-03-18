import Banner from "../../component/Slides/Banner";
import useFetch from "../../Utilities/Fetch";
import MoviePoster from "../../component/MoviePoster";

function Home() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const { data, loading, error } = useFetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message || "Something went wrong!"}</p>;

  return (
    <div className="max-w-full">
      <div className="container mx-auto">
        <Banner />
        <h1 className="text-white text-2xl text-center font-bold my-2">
          MOVIE SELECTIONS
        </h1>
        <MoviePoster movies={data || []} />
      </div>
    </div>
  );
}

export default Home;
