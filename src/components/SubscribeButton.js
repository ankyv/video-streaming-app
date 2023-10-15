import "../styles/SubscribeButton.css";

const SubscribeButton = ({
  isSubscribed,
  setIsSubscribed,
  subscriberCount,
  setSubscriberCount,
}) => {
  return (
    <button
      onClick={() => {
        setIsSubscribed(!isSubscribed);
        isSubscribed
          ? setSubscriberCount(subscriberCount - 1)
          : setSubscriberCount(subscriberCount + 1);
        document.querySelector(".subscribe-btn").classList.toggle("subscribed");
      }}
      className="subscribe-btn"
    >
      {isSubscribed ? "Subscribed" : "Subscribe"}
    </button>
  );
};

export default SubscribeButton;
