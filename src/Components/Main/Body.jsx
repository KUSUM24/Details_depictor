import React, { useContext, useState } from "react";
import { Button, Card } from "react-bootstrap";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import { ThumbDownAlt } from "@material-ui/icons";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import {
  DeleteContext,
  DislikedContext,
  LikedContext,
  PostsContext,
  UpdateContext,
  UserContext,
} from "../../App";
import { useHistory } from "react-router-dom";

export const Body = ({ statusDisplay }) => {
  const postList = useContext(PostsContext);
  const userList = useContext(UserContext);
  const handleDelete = useContext(DeleteContext);
  const { updateName, updatePost, handleUpdate } = useContext(UpdateContext);
  const { likedList, handleLiked } = useContext(LikedContext);
  const { dislikedList, handleDisliked } = useContext(DislikedContext);

  const history = useHistory();

  const [moreClicked, setMoreClicked] = useState(false);
  const [btnText, setBtnText] = useState("More");

  const handleMore = () => {
    if (moreClicked) {
      setMoreClicked(false);
      setBtnText("More");
    } else {
      setMoreClicked(true);
      setBtnText("Hide");
    }
  };
  const createPost = (data) => {
    const changeLiked = (postId) => {
      handleLiked(postId);
    };
    const changeDisliked = (postId) => {
      handleDisliked(postId);
    };
    const getUpdate = (postId) => {
      handleUpdate(postId);
      history.push("/update");
    };
    return (
      <>
        <Card
          style={{ boxShadow: "5px 5px 10px rgb(131, 130, 130)" }}
          className="text-center m-4 w-75"
        >
          <Card.Header className="card-header bg-dark text-white">
            <b>{data.title} </b>
          </Card.Header>
          <Card.Body>
            {data.body} <hr />
            <div className="d-flex justify-content-between align-items-center">
              <b className="d-flex">
                By{" "}
                <div className="mx-2" style={{ textDecoration: "underline" }}>
                  {userList.map((user) => {
                    if (user.id == data.userId) {
                      return user.name;
                    }
                  })}
                </div>
              </b>
              <Button onClick={() => handleMore()}>{btnText}</Button>
            </div>
            {moreClicked && (
              <div>
                {userList.map((user) => {
                  if (user.id == data.userId) {
                    return (
                      <div style={{ textAlign: "start" }}>
                        <div>
                          {" "}
                          Email: <b>{user.email}</b>
                        </div>
                        <div>
                          {" "}
                          Website: <b>{user.website}</b>
                        </div>
                        <div>
                          {" "}
                          Username: <b>{user.username}</b>
                        </div>
                        <div>
                          {" "}
                          Company Name: <b>{user.company.name}</b>
                        </div>
                        <div>
                          {" "}
                          Address:{" "}
                          <b>
                            {user.address.street}, {user.address.city}
                          </b>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            )}
          </Card.Body>
          <Card.Footer className="d-flex justify-content-between align-items-center">
            <div className="d-flex">
              <div
                className={`${
                  likedList.includes(data) ? "btn btn-success" : "btn btn-light"
                } `}
                onClick={() => changeLiked(data.id)}
              >
                <ThumbUpIcon />
              </div>
              <div
                className={`${
                  dislikedList.includes(data)
                    ? "btn btn-danger"
                    : "btn btn-light"
                }`}
                onClick={() => changeDisliked(data.id)}
              >
                <ThumbDownAlt />
              </div>
            </div>

            <div className="d-flex">
              <div
                className="btn text-white d-flex align-items-center"
                style={{ backgroundColor: "#5567ff" }}
                onClick={() => getUpdate(data.id)}
              >
                <EditIcon />
              </div>
              <div
                className="btn text-white d-flex align-items-center mx-2"
                style={{ backgroundColor: "#ed0b4c" }}
                onClick={() => handleDelete(data.id)}
              >
                <DeleteForeverIcon />
              </div>
            </div>
          </Card.Footer>
        </Card>
      </>
    );
  };
  return (
    <div className="d-flex flex-column align-items-center">
      {statusDisplay == "Disliked" ? (
        <>{dislikedList.map(createPost)}</>
      ) : (
        <>
          {statusDisplay == "Liked" ? (
            <>{likedList.map(createPost)}</>
          ) : (
            <>{postList.map(createPost)}</>
          )}
        </>
      )}
    </div>
  );
};
