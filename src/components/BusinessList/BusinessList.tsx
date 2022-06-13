import axios from "axios";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { BusinessType } from "../../types/business";

import "./BusinessList.scss";

const BusinessList = () => {
  const navigate = useNavigate();

  const redirectToBussinesItem = (businessItem: BusinessType) => {
    navigate("/businessItem", {
      state: {
        businessItem,
      },
    });
  };

  const { isLoading, data } = useQuery("businesses", () => {
    return axios.get(
      "https://feinterviewtask.azurewebsites.net/b/6231abada703bb67492d2b8f"
    );
  });

  if (isLoading) {
    return <h2>..Loading</h2>;
  }

  return (
    <div className="container">
      <div className="listHeader">
        <h5 className="businessName">NAME</h5>
        <h5 className="businessDescription">DESCRIPTION</h5>
      </div>
      <ul>
        {data?.data.map((business: BusinessType) => {
          return (
            <li
              className="business"
              key={business.id}
              onClick={() => redirectToBussinesItem(business)}
            >
              <div className="info">
                <p className="businessName">{business.name}</p>
                <p className="businessDescription">{business.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default BusinessList;
