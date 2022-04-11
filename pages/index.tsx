import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 dark xl:place-content-center py-20 px-20 grid gap-10 lg:grid-cols-2 xl:grid-cols-3 min-h-screen">
      <div className="bg-[url('/vercel.svg')]"></div>
     <h2 className="text-[1000px] text-[#000]">Hello</h2>
    </div>
  );
};

export default Home;
