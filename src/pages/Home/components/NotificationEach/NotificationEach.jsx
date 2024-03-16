import { notificationData } from "../../../../DummyData";

const NotificationEach = () => {
  const data = notificationData;
  return (
    <div>
      {data?.map((item, ind) => (
        <div key={ind}>
          <h1>{item?.status}</h1>
        </div>
      ))}
    </div>
  );
};

export default NotificationEach;
