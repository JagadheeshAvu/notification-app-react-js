const Notification = (props) => {
  const { imgUrl, messageText } = props;
  return (
    <div>
      <img src={imgUrl} className="icon" />
      <p className="message">{messageText}</p>
    </div>
  );
  //  Write your code here.
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="notifications-heading">Notifications</h1>
    <div className="primary-container">
      <notification
        messageText="Information Message"
        imgUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      />
    </div>
    <div className="success-container">
      <notification
        messageText="Success Message"
        imgUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />
    </div>
    <div className="warning-container">
      <notification
        messageText="Warning Message"
        imgUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      />
    </div>
    <div className="danger-container">
      <notification
        messageText="Error Message"
        imgUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
