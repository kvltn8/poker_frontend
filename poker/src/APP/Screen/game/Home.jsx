import { useContext } from "react";
import GlobalContext from "../../GlobalContext";

import axios from "axios";

function Home() {
  const { player, token } = useContext(GlobalContext);

  const test_request = async () => {
    try {
      let res = await axios({
        url: "http://127.0.0.1:5001/auth/test",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (e) {
      const status = e?.response?.status;

      console.log(e);

      if (status == 401) {
        //navigation login:<login again>
      }
    }
  };

  return (
    <div>
      <h1>Home page</h1>
      <h1>Welcome player {player?.name}</h1>

      <button onClick={test_request}>
        <h1>Test Auth</h1>
      </button>
    </div>
  );
}

export default Home;
