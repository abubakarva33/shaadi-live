import { notificationData } from "../../../../DummyData";

const NotificationEach = () => {
  const data = notificationData;
  return (
    <div className="">
      <div className="bg-white shadow-xl rounded-lg pt-3">
        {data?.map((item, ind) => (
          <div key={ind} className="flex  border-b mb-4 pe-2">
            <img src={`/images/${item?.logo}.webp`} alt="" className="w-[80px]" />
            <div>
              <h1>{item?.status}</h1>
              <p>{item?.date}</p>
            </div>
          </div>
        ))}
        <p className="text-center border-b pb-4 text-cyan-500 font-bold">View All</p>
      </div>
    </div>
  );
};

export default NotificationEach;
