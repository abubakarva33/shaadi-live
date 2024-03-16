import { FaDAndD } from "react-icons/fa6";
import { myMatchItems } from "../../DummyData";
import "./Home.css";
import MatchItems from "./components/MatchItems/MatchItems";
import NotificationEach from "./components/NotificationEach/NotificationEach";
const Home = () => {
  const myMatchData = myMatchItems;
  return (
    <div className="md:flex block gap-x-5 mx-5 py-3">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 col-span-3 gap-y-10">
        <div className="rounded-md overflow-hidden">
          <div className="bg-white pb-4">
            <div className="bg-rose-500 p-4 grid grid-cols-2">
              <div className="flex flex-col items-center justify-end text-white">
                <span className="bg-white text-rose-500 font-bold px-3 rounded">Introducing</span>
                <h1 className="text-3xl relative">Saadilive</h1>
                <p className="text-md text-gray-200 capitalize">5 minutes meetings</p>
              </div>
              <img src="/images/mockup.webp" alt="" />
            </div>
            <div className="p-4 text-center">
              <p>
                A first of its kind online event where you can have Video call with up to 10 Matches
                for 5 minutes each
              </p>
              <button className="bg-rose-500 w-3/5 max-w-full py-3 mt-4 shadow-lg shadow-rose-200 rounded-full text-white font-bold">
                Tell me more
              </button>
            </div>
          </div>
        </div>
        <div className="bg-purple-900 text-white p-2 rounded">
          <div className="border h-full rounded-3xl py-4 flex flex-col items-center justify-center border-gray-500 text-center">
            <img src="/images/logo.webp" alt="" />
            <h1 className="text-3xl font-bold">Exclusive & Personalized Matchmaking</h1>
            <h3 className="text-lg">-Free VIP consultation-</h3>
            <button className="bg-[#C8AD76] text-slate-900 font-bold rounded-full text-2xl py-3 w-3/5 max-w-full mt-4">
              Get Invited
            </button>
          </div>
        </div>

        <div>
          <h6 className="mb-3">
            <span className="text-xl font-bold mb-4 text-stone-500">My Matches </span>
            <span className="bg-rose-500 text-white font-bold rounded-full px-2">999+</span>
          </h6>
          <MatchItems data={myMatchData} />
        </div>

        <div>
          <h6 className="mb-3">
            <span className="text-xl font-bold mb-4 text-stone-500">New Matches For You </span>
            <span className="mb-2 bg-rose-500 text-white font-bold rounded-full px-2">14</span>
          </h6>
          <MatchItems data={myMatchData} />
        </div>
      </div>
      <div className="w-[800px] max-w-full">
      <NotificationEach />
      </div>
    </div>
  );
};

export default Home;
