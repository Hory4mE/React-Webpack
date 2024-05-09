import { FC } from "react";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import Home from "./pages/Home";
import Test from "./pages/Test";

const StoreApp: FC = () => {
  return (
    <>
      <div className="flex space-x-10">
        <Link to={"/"}>Home</Link>
        <Link to={"/test"}>Test</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/test" element={<Test />}></Route>
      </Routes>
    </>
  );
};

export default StoreApp;
