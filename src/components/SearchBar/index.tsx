import SearchIcon from "../Icons/SearchIcon";

const SearchBar = () => {
  return (
    <form className="relative">
      <input
        type="text"
        placeholder="Search your products..."
        className="w-full block pl-[22px] outline-none font-roboto pr-14 h-11 rounded-full bg-[#F3F3F3] text-sm placeholder:text-[#838383]"
      />

      <div className="absolute top-0 right-0 h-full aspect-square p-[3.85px]">
        <button
          type="submit"
          className="h-full aspect-square rounded-full flex items-center justify-center bg-[#9B20AF]"
        >
          <div className="-translate-y-px">
            <SearchIcon />
          </div>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
