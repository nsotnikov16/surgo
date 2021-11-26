import "./App.scss";
import Main from "../Main/Main";
import { PageContext } from "../../contexts/PageContext";

function App() {
  return (
    <PageContext.Provider value={{}}>
      <div className="page">
        <Main></Main>
      </div>
    </PageContext.Provider>
  );
}

export default App;
