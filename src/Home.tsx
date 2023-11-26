import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactSelect from "react-select";
import { Tag } from "./App";
import { useState } from "react";

type NoteListProps = {
  availableTags: Tag[];
};

const Home = ({ availableTags }: NoteListProps) => {
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [title, setTitle] = useState("");

  return (
    <>
      <Row className="align-items-center mb-4">
        <Col>Notes App</Col>
        <Col xs="auto">
          <Stack direction="horizontal" gap={4}>
            <Link to="/new">
              <Button>Create </Button>
            </Link>
            <Button variant="outline-secondary">Edit Tags</Button>
          </Stack>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <Form>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Col>
        <Col>
          <Form.Group controlId="tags">
            <Form.Label>Tags</Form.Label>
            <ReactSelect
              options={availableTags.map((tag) => {
                return { label: tag.label, value: tag.id };
              })}
              isMulti
              value={selectedTags.map((tag) => {
                return { value: tag.id, label: tag.label };
              })}
              onChange={(tags) => {
                setSelectedTags(
                  tags.map((tag) => {
                    return { id: tag.value, label: tag.label };
                  })
                );
              }}
            />
          </Form.Group>
        </Col>
      </Row>
    </>
  );
};

export default Home;
