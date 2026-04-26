import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import Projects from "../../Pages/Projects/Projects";
import ProjectDetail from "../../Pages/ProjectDetail/ProjectDetail";

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
        </Routes>
     </div>
    );
};

export default AppRouter;