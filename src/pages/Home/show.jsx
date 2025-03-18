import { useParams } from "react-router-dom";
import { useState } from "react";
import useFetch from "../../Utilities/Fetch";

const ShowDetail = () => {
  const { id } = useParams();
  const apiKey = import.meta.env.VITE_API_KEY;

  // Lấy dữ liệu phim
  const {
    data: movie,
    loading,
    error,
  } = useFetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
  );

  // Lấy danh sách video của phim
  const { data: videos } = useFetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`
  );

  // State để mở modal
  const [isOpen, setIsOpen] = useState(false);

  if (loading) return <p className="text-center text-gray-400">Loading...</p>;
  if (error)
    return <p className="text-center text-red-500">Error: {error.message}</p>;
  if (!movie)
    return <p className="text-center text-gray-400">No data available.</p>;

  // Lọc video trailer (YouTube)
  const trailer = videos?.results?.find(
    (video) => video.type === "Trailer" && video.site === "YouTube"
  );

  return (
    <div>
      {/* Ảnh nền */}
      <div className="w-full">
        <div className="absolute w-full h-[70vh] bg-gradient-to-t from-black-blur"></div>
        <img
          src={`https://image.tmdb.org/t/p/original${
            movie.backdrop_path || movie.poster_path
          }`}
          alt=""
          className="w-full h-[70vh] object-cover"
        />
      </div>

      {/* Nội dung phim */}
      <div className="flex justify-center">
        <div className="flex flex-col items-center md:flex-row md:max-w-2xl lg:max-w-3xl absolute xl:max-w-4xl md:mt-[-300px] mt-[-200px] text-white">
          <div className="lg:w-[30%] h-auto md:h-[400px] w-[70%]">
            <img
              className="w-[100%] h-full md:h-auto object-cover rounded-md"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt=""
            />
          </div>
          <div className="float-left w-[70%] md:pl-12">
            <p className="text-3xl md:text-5xl mb-3 mt-3 md:mt-0">
              {movie.title || movie.original_title}
            </p>
            <p className="text-gray-300 mb-8">{movie.overview}</p>

            {/* Nút mở modal */}
            {trailer && (
              <button
                onClick={() => setIsOpen(true)}
                className="bg-red-600 px-4 py-2 text-white rounded-md hover:bg-red-700"
              >
                Watch Trailer
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Modal Trailer */}
      {isOpen && trailer && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center">
          <div className="bg-black p-4 rounded-lg relative max-w-3xl w-full">
            {/* Nút đóng modal */}
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={() => setIsOpen(false)}
            >
              &times;
            </button>

            {/* Video trailer */}
            <iframe
              className="w-full h-[400px] md:h-[500px] lg:h-[600px]"
              src={`https://www.youtube.com/embed/${trailer.key}`}
              title="Movie Trailer"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowDetail;
