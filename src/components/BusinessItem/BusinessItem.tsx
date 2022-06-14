import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { BusinessType } from "../../types/business";

import "./BusinessItem.scss";

const BusinessItem = () => {
  const { state } = useLocation();
  const cachedData = useQuery("state", () => {
    return state;
  });
  const [businessesData, setBusinessesData] = useState(state.businessesList);
  const [businessItemData, setBusinessItemData] = useState(state.businessItem);

  useEffect(() => {
    if (cachedData.data) {
      setBusinessesData(cachedData.data.businessesList);
      setBusinessItemData(cachedData.data.businessItem);
    }
  }, []);

  const displayNearbyPlaces = (businessData: BusinessType) => {
    return businessData
      .filter(
        (business: BusinessType) =>
          businessItemData.address.city == business.address.city
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
      {businessItemData && businessesData && (
        <div>
          <img src={businessItemData.image} />
          <div className="information">
            <div className="address">
              <h2>Address</h2>
              <p>
                {businessItemData.address.number}
                {businessItemData.address.street}
              </p>
              <p>
                {businessItemData.address.city}
                {businessItemData.address.country}
              </p>
            </div>
            <div className="contact">
              <h2>Contact</h2>
              <p>{businessItemData.phone}</p>
              <p>{businessItemData.email}</p>
            </div>

            <div className="nearbyPlaces">
              <h2>Nearby Places</h2>
              <ul>{displayNearbyPlaces(businessesData)}</ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default BusinessItem;
