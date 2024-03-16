import { notificationData } from "../../../../DummyData";

const NotificationEach = () => {
  const data = notificationData;
  return (
    <div className="pt-3">
      <div className="bg-white shadow-xl rounded-lg">
        {data?.map((item, ind) => (
          <div key={ind} className="flex justify-between border-b mb-4 pe-2">
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
