import React from "react";
import { FiSearch } from "react-icons/fi";
import SponsorCard from "../../components/SponsorCard/SponsorCard";
import "./style.css";
import Navbar from "../../components/NavBar/Navbar";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";

function Sponsor({ cards, index }) {
  const url = "https://planetbase-api.onrender.com/api/events/all-events";

  const [events, setEvents] = useState([]);

  useEffect(() => {
    Axios.get(url)
      .then((res) => {
        setEvents(res.data);
        console.log(res.data.events);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Navbar />
      <div className="sponsors">
        <h2>Discover Events Where Your Target Audience Is</h2>
        <div className="search-events sponsorship-search">
          <span>
            <FiSearch />
          </span>
          <input type="text" placeholder="Search for your event" />
        </div>
        <div>
          <Link to="/sponsored-events">
            <button className="btn-primary">
              <span>Listed Events</span>
            </button>
          </Link>
        </div>
        <br />
        {events.length > 0 ? (
          <div>
            {events.map((events, index) => (
              <SponsorCard key={events?._id} {...events} />
            ))}
          </div>
        ) : (
          <SponsorCard />
        )}

        {/* <div className="sponsor-btn-continue">
          <button className="btn-primary" type="submit">
            <span>Continue</span>
          </button>
        </div> */}
      </div>
    </>
  );
}

export default Sponsor;
