import { Link } from "react-router-dom";

const MoviePoster = ({ movies }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-3">
      {movies?.results.map((movie) => (
        <div key={movie.id} className="group cursor-pointer">
          <Link to={`/movie/${movie.id}`}>
            <div className="overflow-hidden rounded-lg shadow-md transition duration-300 ">
              <img
                className="w-full transform group-hover:scale-105 group-hover:brightness-75 transition-transform duration-300"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
            <p className="text-white text-center mt-2 font-medium">{movie.title}</p>
          </Link>
        
        </div>
      ))}
    </div>
  );
};

export default MoviePoster;