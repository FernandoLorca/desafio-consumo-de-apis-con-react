import { useState } from "react";

import Header from "./components/Header";
import MiApi from "./components/MiApi";
import Footer from "./components/Footer";

function App() {
  const [searchUser, setSearchUser] = useState("");

  return (
    <>
      <Header
        onChange={(e) => setSearchUser(e.target.value)}
        inputValue={searchUser}
      />

      <MiApi searchUser={searchUser} />

      <Footer />
    </>
  );
}

export default App;
