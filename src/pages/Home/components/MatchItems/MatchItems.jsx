import { FaRegCircleCheck } from "react-icons/fa6";

const MatchItems = ({ data }) => {
  return (
    <div className="bg-white shadow-xl p-4 rounded-md">
      {data?.map((item, ind) => (
        <div
          key={ind}
          className={`flex justify-between align-center	py-3 ${ind !== data.length - 1 ? "border-b" : ""}`}
        >
          <div className="sm:flex block w-full">
            <div className="me-5">
              <img src={`/public/images/${item?.image}.webp`} alt="" className="w-[80px]" />
            </div>
            <div>
              <h1>{item?.name}</h1>
              <p>{item?.description}</p>
              <p>{item?.employmentHistory}</p>
            </div>
          </div>
          <div className="flex flex-col items-center  justify-center">
            <div className="sm:text-5xl text-3xl text-emerald-400">
              <FaRegCircleCheck />
            </div>
            <button className="text-nowrap">Connect Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MatchItems;
