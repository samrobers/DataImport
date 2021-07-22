import React from "react";
import { DIVISION } from "../../utils/queries";
import { useQuery } from "@apollo/client";

const NLEList = () => {
  const { loading, data, error } = useQuery(DIVISION, {
    variables: { division_abbrev: "NLE" },
  });
  const dataList = data?.division || [];

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : data ? (
        <div>
          <div>NL East: </div>
          <div className="col-12 col-md-10 mb-5">
            {dataList.map((ballparks) => (
              <div className="card mb-3">
                <div className="card-header">
                  <h4>Name:{ballparks.name_display_long}</h4>
                </div>
                <div className="card-body">
                  <h4>Stadium: {ballparks.venue_name}</h4>
                  <h4>Phone: {ballparks.phone_number}</h4>
                  <h4>Address: {ballparks.address_line1}</h4>
                  <h4>City: {ballparks.address_city}</h4>
                  <h4>State: {ballparks.address_state}</h4>
                  <h4>State: {ballparks.address_state}</h4>
                  <h4>Web Site: {ballparks.website_url}</h4>
                </div>
              </div>
            ))}
            ;
          </div>
        </div>
      ) : null}
      {error ? `ERROR ${JSON.stringify(error)}` : null}
    </>
  );
};

export default NLEList;
