import axios from "axios";

export const getBusinessesData = () => {
  return axios.get(
    "https://feinterviewtask.azurewebsites.net/b/6231abada703bb67492d2b8f"
  );
};
