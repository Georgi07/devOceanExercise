import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BusinessType } from "../../types/business";
import { queryClient } from "../../queryProvider";

import "./BusinessItem.scss";

const BusinessItem = () => {
  const { businessItem } = useLocation().state;
  const data = queryClient.getQueryData("businesses");

  const displayNearbyPlaces = (businessData: BusinessType) => {
    return businessData
      .filter(
        (business: BusinessType) =>
          businessItem.address.city == business.address.city
      )
      .map((nearbyPlace: BusinessType) => (
        <li className="nearbyPlace" key={nearbyPlace.id}>
          <span style={{ marginRight: "50px" }}>{nearbyPlace.name}</span>
          {nearbyPlace.address.number}, {nearbyPlace.address.street},
          {nearbyPlace.address.city}, {nearbyPlace.address.country}
        </li>
      ));
  };

  return (
    <div className="container">
      <img src={businessItem.image} />
      <div className="information">
        <div className="address">
          <h2>Address</h2>
          <p>
            {businessItem.address.number}, {businessItem.address.street}
          </p>
          <p>
            {businessItem.address.city}, {businessItem.address.country}
          </p>
        </div>
        <div className="contact">
          <h2>Contact</h2>
          <p>{businessItem.phone}</p>
          <p>{businessItem.email}</p>
        </div>

        <div className="nearbyPlaces">
          <h2>Nearby Places</h2>
          <ul>{displayNearbyPlaces(data?.data)}</ul>
        </div>
      </div>
    </div>
  );
};
export default BusinessItem;
