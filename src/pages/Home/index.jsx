import Banner from "../../component/Slides/Banner";
import useFetch from "../../Utilities/Fetch";

function Home() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const { data, loading, error } = useFetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message || "Something went wrong!"}</p>;

  return (
    <div>
      <Banner />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2">
        {data?.map((movie) => (
          <div key={movie.id}>
            <p>{movie.title}</p>
          </div>
          
          
        ))}
      </div>
    </div>
  );
}

export default Home;