import React, { useState, useRef } from "react";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";
import { TagsInput } from "react-tag-input-component";
import { storage } from "../../firebase";
import JoditEditor from "jodit-react";
import api from "../../services/api";
import { toast } from "react-toastify";

const News = () => {
  const editor = useRef(null);
  const [metaDes, setMetaDes] = useState("");
  const [foucKW, setFoucKW] = useState("");
  const [slug, setSlug] = useState("");
  const [seoTitle, setSeoTitle] = useState([]);
  const [image, setImage] = useState();
  const [seoTitleError, setSeoTitleError] = useState(false);
  const [title, setTitle] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (image == null) return;
    storage
      .ref("/usshapeNewsImages/" + image.name)
      .put(image)
      .on("state update", () => {
        storage
          .ref("usshapeNewsImages")
          .child(image.name)
          .getDownloadURL()
          .then(async (urls) => {
            let finalData = {
              title: title,
              metaDes: metaDes,
              foucKW: foucKW,
              slug: slug,
              seoTitle: seoTitle,
              image: urls,
            };
            if (seoTitle.toString().length <= 70) {
              setSeoTitleError(false);

              let res = await api.post("/news/createNews/", finalData);
              if (res.status === 200) {
                toast("News created successfully", {
                  position: toast.POSITION.TOP_RIGHT,
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
              }
            } else {
              setSeoTitleError(true);
            }
          });
      });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="exampleEmail">Content Description</Label>
          <JoditEditor
            ref={editor}
            value={title}
            tabIndex={1} // tabIndex of textarea
            onChange={(newContent) => {
              setTitle(newContent);
            }}
          />
        </FormGroup>
        <Row>
          <Col xs="6">
            <FormGroup>
              <Label for="exampleEmail">Focus Key word</Label>
              <Input
                id="foucKW"
                name="foucKW"
                value={foucKW}
                placeholder="fouc key word"
                onChange={(event) => {
                  setFoucKW(event.target.value);
                }}
              />
            </FormGroup>
          </Col>

          <Col xs="6">
            <FormGroup>
              <Label for="exampleEmail">Slug</Label>
              <Input
                id="slug"
                name="slug"
                value={slug}
                placeholder="slug"
                onChange={(event) => {
                  setSlug(event.target.value);
                }}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs="6">
            <FormGroup>
              <Label for="exampleEmail">Seo Title</Label>
              <TagsInput
                value={seoTitle}
                onChange={setSeoTitle}
                name="seoTitle"
                placeHolder="enter seo title"
              />
              <small className="text-danger">
                {seoTitleError ? `Max. 70 characters are allowed only.` : ""}
              </small>
            </FormGroup>
          </Col>
          <Col xs="6">
            <FormGroup>
              <Label for="exampleEmail">Meta Description</Label>
              <Input
                id="metaDes"
                name="metaDes"
                value={metaDes}
                placeholder="Meta Description"
                onChange={(event) => {
                  setMetaDes(event.target.value);
                }}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs="6">
            <FormGroup>
              <Label for="exampleFile">File</Label>
              <Input
                type="file"
                name="file"
                id="exampleFile"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </FormGroup>
          </Col>
        </Row>

        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default News;
