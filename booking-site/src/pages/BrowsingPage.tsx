import axios from "axios";
import { useLocation } from "react-router";

// TODO: Make props of type SearchOptionsForm (?)
const BrowsingPage: React.FC<{}> = () => {
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);

  if (process.env.REACT_APP_ARTIST_SEARCH_URL) {
    axios
      .get(process.env.REACT_APP_ARTIST_SEARCH_URL, {
        params: {
          genre: searchParams.get("genre"),
          bpmRange: [searchParams.get("bpm_low"), searchParams.get("bpm_high")],
          eventType: searchParams.get("event_type"),
        },
      })
      .then((filteredUsers) => {
        console.log("Filtered users from db:", filteredUsers);
      })
      .catch((error) => {
        console.error(
          "Encountered the following error while sending data to backend: ",
          error
        );
      });
  }

  return <></>; // TODO
};

export default BrowsingPage;
