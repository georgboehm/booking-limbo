import Header from "./Header/Header";
import SearchOptions from "../components/Artist Search/SearchOptions";

const HomePage: React.FC<{}> = () => {
  return (
    <div className="flex flex-col mt-14 h-screen">
      <Header />
      <div className="flex flex-col justify-between items-center h-full bg-gray-400">
        <div className="w-1/3">
          <div className="mt-20 text-white text-[30px] w-full justify-center flex">
            Gear up your next event with local artists.
          </div>
          <div className="mt-10 flex justify-center bg-gray-500 rounded-xl">
            <SearchOptions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
