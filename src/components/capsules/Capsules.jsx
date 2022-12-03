/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import moment from "moment";
import Capsule from "./Capsule";
import Pagination from "../pagination/Pagination";
import "./capsules.css";

function Capsules() {
  let d; //used in converting Original Launch Date
  const [capsules, setCapsules] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [capsulesPerPage, setCapsulesPerPage] = useState(12);
  const [year, setYear] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  let [matches, setMatches] = useState([]);

  //API URL
  let [url, setUrl] = useState("https://api.spacexdata.com/v3/capsules");

  //Filters
  function resetFilter() {
    const tempUrl = "https://api.spacexdata.com/v3/capsules";
    setUrl(tempUrl);
  }
  //Status Filter
  function getByStatus(e) {
    e.preventDefault();
    let status = e.target.innerHTML;
    const tempUrl = "https://api.spacexdata.com/v3/capsules?status=";
    setUrl(tempUrl + status);
    status = "";
  }

  //Type Filter
  function getByType(e) {
    e.preventDefault();
    let type = e.target.innerHTML;
    let newType = type.slice(7, 10);
    const tempUrl = "https://api.spacexdata.com/v3/capsules?type=Dragon%20";
    setUrl(tempUrl + newType);
    type = "";
  }

  //Year Filter
  const getByYear = (year) => {
    if (year.length > 0) {
      matches = capsules.filter(function (capsule) {
        const regex = new RegExp(`${year}`, "gi");
        if (typeof capsule.original_launch === "string")
          return capsule.original_launch.match(regex);
      });
    }
    setSuggestions(matches);
    setYear(year);
    setUrl("https://api.spacexdata.com/v3/capsules");
    console.log(url);
  };
  function suggestionHandler(year) {
    setYear(year);
    setSuggestions([]);
    const tempUrl = "https://api.spacexdata.com/v3/capsules?original_launch=";
    setUrl(tempUrl + year);
  }

  //API Call
  useEffect(() => {
    const fetchCapsules = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setCapsules(data);
    };
    fetchCapsules();
  }, [url]);

  //Capsules per Page
  const indexOfLastCapsule = currentPage * capsulesPerPage;
  const indexOfFirstCapsule = indexOfLastCapsule - capsulesPerPage;
  const currentCapsules = capsules.slice(
    indexOfFirstCapsule,
    indexOfLastCapsule
  );

  //Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="mt-8">
        <h1 className="text-6xl font-bold text-center">
          <a name="capsules">CAPSULES</a>
        </h1>

        {/* Filters */}
        <div className="lg:grid-cols-3 md:grid-cols-3 md:grid-flow-row lg:gap-2 md:gap-4 grid">
          {/* Status */}
          <div
            id="status"
            className="dropdown"
            onClick={() => {
              document.querySelector("#status").classList.toggle("active");
              document.querySelector(".textInput2").value = "";
              document.querySelector(".textInput3").value = "";
              document.querySelector("#type").classList.remove("active");
            }}
          >
            <input
              placeholder="STATUS"
              type="text"
              className="textInput1 uppercase"
              readOnly
            />
            <div className="option uppercase">
              <div
                onMouseOver={(e) => {
                  document.querySelector(".textInput1").value =
                    e.target.innerHTML;
                }}
                onClick={resetFilter}
              >
                all
              </div>
              <div
                onMouseOver={(e) => {
                  document.querySelector(".textInput1").value =
                    e.target.innerHTML;
                }}
                onClick={getByStatus}
              >
                active
              </div>
              <div
                onMouseOver={(e) => {
                  document.querySelector(".textInput1").value =
                    e.target.innerHTML;
                }}
                onClick={getByStatus}
              >
                retired
              </div>
              <div
                onMouseOver={(e) => {
                  document.querySelector(".textInput1").value =
                    e.target.innerHTML;
                }}
                onClick={getByStatus}
              >
                unknown
              </div>
              <div
                onMouseOver={(e) => {
                  document.querySelector(".textInput1").value =
                    e.target.innerHTML;
                }}
                onClick={getByStatus}
              >
                destroyed
              </div>
            </div>
          </div>

          {/* Type */}
          <div
            id="type"
            className="dropdown"
            onClick={() => {
              document.querySelector("#type").classList.toggle("active");
              document.querySelector(".textInput1").value = "";
              document.querySelector(".textInput3").value = "";
              document.querySelector("#status").classList.remove("active");
            }}
          >
            <input
              placeholder="TYPE"
              type="text"
              className="textInput2 uppercase"
              readOnly
            />
            <div className="option uppercase">
              <div
                onMouseOver={(e) => {
                  document.querySelector(".textInput2").value =
                    e.target.innerHTML;
                }}
                onClick={resetFilter}
              >
                all
              </div>
              <div
                value="Dragon%201.0"
                onMouseOver={(e) => {
                  document.querySelector(".textInput2").value =
                    e.target.innerHTML;
                }}
                onClick={getByType}
              >
                Dragon 1.0
              </div>
              <div
                name="Dragon%201.1"
                onMouseOver={(e) => {
                  document.querySelector(".textInput2").value =
                    e.target.innerHTML;
                }}
                onClick={getByType}
              >
                Dragon 1.1
              </div>
              <div
                name="Dragon%202.0"
                onMouseOver={(e) => {
                  document.querySelector(".textInput2").value =
                    e.target.innerHTML;
                }}
                onClick={getByType}
              >
                Dragon 2.0
              </div>
            </div>
          </div>

          {/* Origin Launch */}
          <div className="year">
            <input
              id="year"
              placeholder="ENTER YEAR"
              className="textInput3"
              type="text"
              value={year}
              onClick={() => {
                document.querySelector(".textInput1").value = "";
                document.querySelector(".textInput2").value = "";
                document.querySelector("#status").classList.remove("active");
                document.querySelector("#type").classList.remove("active");
              }}
              onChange={(e) => {
                getByYear(e.target.value);
              }}
            />

            <div className="year-option cursor-pointer">
              {suggestions &&
                suggestions.map((suggestion, i) => (
                  <div
                    key={i}
                    onClick={() =>
                      suggestionHandler(suggestion.original_launch)
                    }
                  >
                    {moment(suggestion.original_launch).format("MMM Do YYYY")}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Capsule Grids */}
      <div className="md:-mt-8">
        <div className="md:grid md:grid-cols-3 lg:grid-cols-4 md:grid-flow-row md:gap-4 lg:gap-2 grid grid-cols-1 grid-flow-row gap-4 p-10 md:p-20 h-1/2">
          {currentCapsules.map(
            ({
              capsule_serial,
              type,
              details,
              status,
              original_launch,
              landings,
            }) => (
              <div key={capsule_serial}>
                <Capsule
                  title={type}
                  id={capsule_serial}
                  details={details}
                  status={status}
                  landings={landings}
                  date={
                    original_launch
                      ? (d = moment(original_launch).format("MMM Do YYYY"))
                      : "TBA"
                  }
                  time={
                    original_launch
                      ? (d = moment(original_launch).format("h:mm a"))
                      : "TBA"
                  }
                />
              </div>
            )
          )}
        </div>
      </div>
      <Pagination
        capsulesPerPage={capsulesPerPage}
        totalCapsules={capsules.length}
        paginate={paginate}
      />
    </>
  );
}

export default Capsules;
