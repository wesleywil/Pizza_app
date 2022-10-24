const SearchBar = () => {
  return (
    <>
      <input
        type="text"
        placeholder="Search Pizza"
        className="pl-2 py-1 bg-[#cb0033]/90 text-[#f1f2f2] font-semibold w-full rounded-l-lg"
      />
      <button className="bg-[#f1f2f2] hover:bg-[#f1f2f2]/80 rounded-r-lg px-1 font-bold transition duration-700 ease-in-out">
        Search
      </button>
    </>
  );
};

export default SearchBar;
