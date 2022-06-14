import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { AxiosResponse } from "axios";
import { BusinessType } from "../../types/business";
import { getBusinessesData } from "../../api/getBusinessesData";

import "./BusinessList.scss";

const BusinessList = () => {
  const navigate = useNavigate();

  const { isLoading, data } = useQuery("businesses", getBusinessesData);

  const redirectToBussinesItem = (
    businessItem: BusinessType,
    businessesList: AxiosResponse
  ) => {
    navigate("/businessItem", {
      state: {
        businessItem,
        businessesList,
      },
    });
  };

  const displayBusinessList = () => {
    return data?.data.map((business: BusinessType) => (
      <li
        className="business"
        key={business.id}
        onClick={() => redirectToBussinesItem(business, data.data)}
      >
        <div className="info">
          <p className="businessName">{business.name}</p>
          <p className="businessDescription">{business.description}</p>
        </div>
      </li>
    ));
  };

  if (isLoading) {
    return <h2>..Loading</h2>;
  }

  return (
    <div className="container">
      <div className="listHeader">
        <h5 className="businessName">NAME</h5>
        <h5 className="businessDescription">DESCRIPTION</h5>
      </div>
      <ul>{displayBusinessList()}</ul>
    </div>
  );
};
export default BusinessList;
