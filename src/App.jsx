import React from "react";
import HomePage from "./Pages/HomePage";
import { Routes, Route } from "react-router-dom";
import BlogCardPages from "./Pages/BlogCardPages";
import useFetch from "./Hooks/useFetch";

const App = () => {
  let { loading, error, data } = useFetch(
    "http://localhost:1337/api/blogs?populate=*"
  );
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error</p>;
  }
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage blogs={data ? data : ""} />} />
        <Route
          path="/BlogCardPages/:id"
          element={<BlogCardPages blogs={data ? data : ""} />}
        />
      </Routes>
    </div>
  );
};

export default App;
