import "bootstrap/dist/css/bootstrap-grid.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import { Routes, Route, Navigate } from "react-router";
import Home from "./Home";
import NewNote from "./NewNote";

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewNote />} />
        <Route path="/:id">
          <Route index element={<h1>Show</h1>} />
          <Route path="edit" element={<h1>Edit</h1>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
}

export default App;
