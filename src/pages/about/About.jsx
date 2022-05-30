import "./about.css";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import DevCard from "../../components/developerCard/DevCard";
import axios from "axios";
const devsData = ["Devansh-Walia"];

export default function About() {
  const [developers, setDevelopers] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchDevelopers = async () => {
      const devS = await axios.post("/devs", { devs: devsData });
      setDevelopers(devS.data);
    };
    fetchDevelopers();
  }, [search]);
  console.log(developers);

  return (
    <>
      <div className="about-body">
        <div className="about-body-title">
          <h1>About</h1>
        </div>
        <div className="about-body-content">
          <div className="about-body-content-text">
            <p>
              This is a simple app that allows you to search for developers and
              see their profile.
            </p>
            <p>The app is built using React, Redux, React Router, and Axios.</p>
            <p>The app is hosted on Heroku.</p>
          </div>
        </div>
      </div>
      <h1 className="headding">Developers</h1>
      <div className="about-devs">
        {developers.map((dev) => (
          <DevCard key={dev.id} dev={dev} />
        ))}
      </div>
    </>
  );
}
