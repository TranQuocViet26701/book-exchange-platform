import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Notification() {
  const [requests, setRequests] = useState([]);
  const userId = useParams();

  const fetchNoti = () => {
    axios
      .get(
        `https://afternoon-brook-19976.herokuapp.com/request/get-request/${userId.id}`
      )
      .then((res) => {
        console.log(res.data.data);
        setRequests(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchNoti();
  }, []);

  const handleAccept = (id) => {
    console.log('id', id);
    axios
      .delete(
        `https://afternoon-brook-19976.herokuapp.com/request/accept-request/${id}`
      )
      .then((res) => {
        fetchNoti();
        console.log('accept res', res.data);
      })
      .catch((err) => {
        console.log('err res', err);
      });
  };

  return (
    <div className="notification">
      <div className="notification-container">
        <h2>Notification</h2>
        {requests.length == 0 ? (
          <p>No notifications found</p>
        ) : (
          <ul>
            {requests.map((item, index) => {
              const { user, bookBuy, bookSell } = item;
              return (
                <li key={index}>
                  <h5>Requester: {user.name}</h5>
                  <div className="book-info">
                    <div className="book-item">
                      <h5>My available book: </h5>
                      <div className="book-item-info">
                        <h6> Title: {bookBuy.name} </h6>
                        <img src={bookBuy.image} />
                      </div>
                    </div>
                    <div>
                      <h5>Book need to exchange: </h5>
                      <div className="book-item-info">
                        <h6> Title: {bookSell.name} </h6>
                        <img src={bookSell.image} />
                      </div>
                    </div>
                  </div>
                  <button
                    className="accept-btn"
                    onClick={() => handleAccept(item._id)}
                  >
                    Accept
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Notification;
