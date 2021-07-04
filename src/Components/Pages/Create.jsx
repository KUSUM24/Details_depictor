import { Divider } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import React, { useContext, useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { CreateContext } from "../../App";
import { Header } from "../../Common/Header";

export const Create = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [username, setUsername] = useState("");
  const [addressStreet, setAddressStreet] = useState("");
  const [addressCity, setAddressCity] = useState("");
  const [company, setCompany] = useState("");
  const handleCreate = useContext(CreateContext);

  const handlePostDetails = (event) => {
    event.preventDefault();
    history.push("/Details_depictor");
    handleCreate(
      name,
      email,
      website,
      username,
      addressStreet,
      addressCity,
      company,
      title,
      body
    );
  };
  return (
    <div>
      <Header />
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "90vh" }}
      >
        <Card
          className="w-100"
          style={{ maxWidth: "800px", border: "1px solid" }}
        >
          <Card.Header
            className="card-heading text-center text-white bg-dark"
            style={{ fontSize: "130%" }}
          >
            <b>Post Details</b>
          </Card.Header>
          <Card.Body>
            <Form onSubmit={(e) => handlePostDetails(e)}>
              <div className="row">
                <div className="form-group col-md-6 ">
                  <label>Creator Name</label>

                  <Form.Control
                    className="my-2"
                    placeholder="Name"
                    value={name}
                    onChange={(value) => setName(value.target.value)}
                    required
                  />
                </div>
                <div className="form-group col-md-6">
                  <label>Email</label>
                  <Form.Control
                    className="my-2"
                    placeholder="Email"
                    value={email}
                    onChange={(value) => setEmail(value.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6 ">
                  <label>Website</label>

                  <Form.Control
                    className="my-2"
                    placeholder="Website"
                    value={website}
                    onChange={(value) => setWebsite(value.target.value)}
                    required
                  />
                </div>
                <div className="form-group col-md-6">
                  <label>Username</label>
                  <Form.Control
                    className="my-2"
                    placeholder="Username"
                    value={username}
                    onChange={(value) => setUsername(value.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6 ">
                  <label>Address Street</label>

                  <Form.Control
                    className="my-2"
                    placeholder="Address Street"
                    value={addressStreet}
                    onChange={(value) => setAddressStreet(value.target.value)}
                    required
                  />
                </div>
                <div className="form-group col-md-6">
                  <label>Address City</label>
                  <Form.Control
                    className="my-2"
                    placeholder="Address City"
                    value={addressCity}
                    onChange={(value) => setAddressCity(value.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6 ">
                  <label>Company Name</label>

                  <Form.Control
                    className="my-2"
                    placeholder="Company"
                    value={company}
                    onChange={(value) => setCompany(value.target.value)}
                    required
                  />
                </div>
                <div className="form-group col-md-6">
                  <label>Post Title</label>
                  <Form.Control
                    className="my-2"
                    placeholder="Post Title"
                    value={title}
                    onChange={(value) => setTitle(value.target.value)}
                    required
                  />
                </div>
              </div>
              <Form.Group>
                <label>Post Body</label>

                <Form.Control
                  as="textarea"
                  rows={3}
                  className="my-2"
                  placeholder="Post Body"
                  value={body}
                  onChange={(value) => setBody(value.target.value)}
                  required
                />
              </Form.Group>
              <div className="text-center">
                <Button type="submit">CREATE</Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};
