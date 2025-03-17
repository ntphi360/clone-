function Navbar() {
  return (
    <div className="p-4 bg-black flex items-center justify-between">
    <div className="flex items-center space-x-4">
      <div className="text-[40px] uppercase font-bold text-red-700">CGV</div>
      <nav className="flex items-center space-x-4">
        <a href="#" className="text-white">
          PHIM
        </a>
        <a href="#" className="text-white">
          RẠP CGV
        </a>
        <a href="#" className="text-white">
          THÀNH VIÊN
        </a>
        <a href="#" className="text-white">
          CULTUREPLEX
        </a>
      </nav>
    </div>
    <div className="flex items-center space-x-4">
      <button className="bg-red-600 text-white px-4 py-3 rounded">
        MUA VÉ NGAY
      </button>
    </div>
  </div>
  );
}

export default Navbar;
