import "./Home.css";
import MatchItem from "./components/MatchItem/MatchItem";
import NotificationEach from "./components/NotificationEach/NotificationEach";
const Home = () => {
  return (
    <div className="grid grid-cols-4 gap-4 mx-5	my-2">
      <div className="grid grid-cols-2 gap-4 col-span-3">
        <div className="bg-blue-200 ">
          <div>
            <div>
              <button>Introducing</button>
              <h1>saadilive</h1>
              <p>5 minutes meetings</p>
            </div>
            <img src="/images/mockup.webp" alt="" />
          </div>
          <div>
            <p>
              A first of its kind online event where you can have Video call with up to 10 Matches
              for 5 minutes each
            </p>
            <button>Tell me more</button>
          </div>
        </div>
        <div className="bg-blue-200 ">
          <img src="/images/logo.webp" alt="" />
          <h1>Exclusive & Personalized Matchmaking</h1>
          <h3>-Free VIP consultation-</h3>
          <button>Get Invited</button>
        </div>

        <div className="bg-blue-200 ">
          <h6>My Matches</h6>
          <MatchItem />
        </div>

        <div className="bg-blue-200">
          <h6>New Matches For You</h6>
          <MatchItem />
        </div>
      </div>
      <NotificationEach />
    </div>
  );
};

export default Home;
