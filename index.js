const Notification = (props) => {
  //  Write your code here.
  const { className, messageText } = props;
  return (
    <div>
      <img src={imageUrl} className="icon" />
      <p className={`notification ${className}`}>{messageText}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="notifications-heading">Notifications</h1>
    <div className="notification-container">
      <Notification
        className="message"
        messageText="Information Message"
        imageUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
