import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col space-y-2 p-5">
      <input
        type="file"
        className="file:cursor-pointer file:hover:text-purple-400 file:hover:bg-white file:hover:border-purple-400 file:hover:border-2 file:transition-colors file:border-0 file:rounded-xl file:px-5 file:text-white file:bg-purple-400"
      />
      <p className="first-letter:text-7xl first-letter:hover:text-purple-400">Hello everybody</p>
    </div>
  );
};

export default Home;
