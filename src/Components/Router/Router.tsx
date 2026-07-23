import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import Projects from "../../Pages/Projects/Projects";
import ProjectDetail from "../../Pages/ProjectDetail/ProjectDetail";
import Posts from "../../Pages/Posts/Posts";
import PostDetail from "../../Pages/PostDetail/PostDetail";

import "./Router.scss";

type Props = {};

const AppRouter: React.FC<Props> = () => {
    return (
     <div className="app-content">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:projectId" element={<ProjectDetail />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:postId" element={<PostDetail />} />
        </Routes>
     </div>
    );
};

export default AppRouter;