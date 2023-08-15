import React, { useState, useEffect } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

interface User {
  picture: {
    medium: string;
    large: string;
  };
  name: {
    first: string;
    last: string;
  };
  email: string;
}

export interface ImageListProps {
  apiUrl: string;
}

const ImageList: React.FC<ImageListProps> = ({ apiUrl }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        if (data && data.results) {
          setUsers(data.results);
        }
      } catch (error) {
        if (error instanceof Error) {
          console.error(
            "There was a problem with the fetch operation:",
            error.message
          );
        } else {
          console.error("There was a problem with the fetch operation:", error);
        }
      }
    };

    fetchData();
  }, [apiUrl]);

  return (
    <div style={{ maxHeight: "400px", overflowY: "scroll" }}>
      {users.map((user, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            padding: "10px",
            borderBottom: "1px solid #e0e0e0",
          }}
        >
          <img
            src={user.picture.medium}
            alt={`${user.name.first} ${user.name.last}`}
            onClick={() => {
              setCurrentUser(index);
              setLightboxOpen(true);
            }}
            style={{
              borderRadius: "50%",
              cursor: "pointer",
              marginRight: "15px",
            }}
          />
          <div style={{ textAlign: "left", fontSize: 21 }}>
            <div
              style={{ fontWeight: 700 }}
            >{`${user.name.first} ${user.name.last}`}</div>
            <div style={{ color: "#4bc0de", fontSize: 15 }}>{user.email}</div>
          </div>
        </div>
      ))}

      {lightboxOpen && users[currentUser] && (
        <Lightbox
          mainSrc={users[currentUser].picture.large}
          nextSrc={users[(currentUser + 1) % users.length].picture.large}
          prevSrc={
            users[(currentUser - 1 + users.length) % users.length].picture.large
          }
          onCloseRequest={() => setLightboxOpen(false)}
          onMovePrevRequest={() =>
            setCurrentUser(
              (prevCurrentUser) =>
                (prevCurrentUser - 1 + users.length) % users.length
            )
          }
          onMoveNextRequest={() =>
            setCurrentUser(
              (prevCurrentUser) => (prevCurrentUser + 1) % users.length
            )
          }
          imageCaption={`Name: ${users[currentUser].name.first} ${users[currentUser].name.last}, Email: ${users[currentUser].email}`}
        />
      )}
    </div>
  );
};

export default ImageList;
