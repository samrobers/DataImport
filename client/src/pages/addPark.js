import React, { useState } from "react";

import { SAVE_VISITED } from "../utils/mutations";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_BALLPARKS } from "../utils/queries";
const AddPark = () => {
  const [formState, setFormState] = useState({ phone_number: "", city: "" });
  const [saveVisited] = useMutation(SAVE_VISITED);

  const { loading, data } = useQuery(QUERY_BALLPARKS);
  const ballParkData = data?.ballparks || [];
  console.log(ballParkData);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await saveVisited({
      variables: {
        phone_number: formState.phone_number,
        city: formState.city,
      },
    });
  };

  return (
    <main className="addVisitArea">
      <div className="col-sm-3 col-md-6 col-lg-9 m-auto">
        <div className="card mx-auto mt-10 bg-light">
          <div className="card-body text-center">
            <h2 className="card-title text-center mb-5">
              Add a Park to Your List
            </h2>
            <div className="row mt-10">
              <h5 className="mt-10">Choose a Park to Add</h5>
              <select name="venue" onChange={handleChange} id="venue">
                {ballParkData.length > 0
                  ? ballParkData.map((ballPark) => {
                      return (
                        <option value={ballPark._id} selected="selected">
                          {ballPark.name_display_full}
                        </option>
                      );
                    })
                  : ""}
              </select>
            </div>
            <button
              type="button"
              className="btn btn-primary btn-lg mt-5"
              id="submitButton"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AddPark;

{
  /* <div className="row">
              <h5 className="text-center mt-5">Pregame Rating</h5>
              <div
                className="btn-group"
                role="group"
                aria-label="Basic radio toggle button group"
              >
                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="PG1"
                  autocomplete="off"
                  value="1"
                />
                <label className="btn btn-outline-primary" for="PG1">
                  1
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="PG2"
                  autocomplete="off"
                  value="2"
                />
                <label className="btn btn-outline-primary" for="PG2">
                  2
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio3"
                  id="PG3"
                  autocomplete="off"
                  value="3"
                />
                <label className="btn btn-outline-primary" HtmlFor="PG3">
                  3
                </label>
                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="PG4"
                  autocomplete="off"
                  value="4"
                />
                <label className="btn btn-outline-primary" HtmlFor="PG4">
                  4
                </label>
                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="PG5"
                  autocomplete="off"
                  value="5"
                />
                <label className="btn btn-outline-primary" HtmlFor="PG5">
                  5
                </label>
              </div>
            </div>
            <div className="row">
              <h5 className="text-center mt-5">Ballpark Rating</h5>
              <div
                className="btn-group"
                role="group"
                aria-label="Basic radio toggle button group"
              >
                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio1"
                  id="BP1"
                  autocomplete="off"
                  value="1"
                />
                <label className="btn btn-outline-primary" HtmlFor="BP1">
                  1
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio1"
                  id="BP2"
                  autocomplete="off"
                  value="2"
                />
                <label className="btn btn-outline-primary" HtmlFor="BP2">
                  2
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio1"
                  id="BP3"
                  autocomplete="off"
                  value="3"
                />
                <label className="btn btn-outline-primary" for="BP3">
                  3
                </label>
                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio1"
                  id="BP4"
                  autocomplete="off"
                  value="4"
                />
                <label className="btn btn-outline-primary" HtmlFor="BP4">
                  4
                </label>
                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio1"
                  id="BP5"
                  autocomplete="off"
                  value="5"
                />
                <label className="btn btn-outline-primary" HtmlFor="BP5">
                  5
                </label>
              </div>
            </div>

            <div className="form-floating">
              <textarea
                className="form-control mt-5"
                placeholder="Leave a comment here"
                id="pregameText"
              ></textarea>
              <label HtmlFor="pregameText">
                How was your experience outside the ballpark?
                <span className="font-size-small">
                  (bars/food/non-stadium fare)
                </span>
              </label>
            </div>
            <div className="form-floating">
              <textarea
                className="form-control mt-5"
                placeholder="Leave a comment here"
                id="ballparkText"
              ></textarea>
              <label HtmlFor="ballparkText">
                How was your experience inside the ballpark?
                <span className="font-size-small">(snacks/prices/vendors)</span>
              </label>
            </div> */
}
