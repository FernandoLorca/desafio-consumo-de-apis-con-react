const Header = ({ onChange, inputValue }) => {
  return (
    <header className="flex flex-col justify-center items-center bg-slate-200 p-5">
      <h1 className="font-bold text-2xl tracking-wider pb-2 text-blue-500">
        Users list
      </h1>
      <div className="flex justify-center w-full">
        <input
          type="text"
          placeholder="Filter by username, first name or email"
          className="text-center rounded-full w-full border-2 focus:outline-none focus:border-slate-300 shadow-lg shadow-slate-200 hover:shadow-slate-300 focus:shadow-slate-300 tracking-wide text-xs h-9 px-3 hover:scale-105 focus:scale-105 transition-all duration-300 md:w-96"
          onChange={onChange}
          value={inputValue}
        />
      </div>
    </header>
  );
};

export default Header;
