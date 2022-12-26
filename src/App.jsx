import { Routes, Route } from "@solidjs/router";
import { Layout } from "./components/Layout/Layout";
import { Info } from "./components/Info/Info";
import { User } from "./components/User/User";
import { Destillation } from "./components/Content/Technologie/content/Destillation";
import { NotFound } from "./components/NotFound/NotFound";
import { Technologie } from "./components/Content/Technologie/Technologie";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" component={Layout}>
          <Route path="home" component={Info}>
            <Route path="technologie" component={Technologie}>
              <Route path="destillation" element={Destillation} />
            </Route>
            <Route path="*" component={NotFound} />
          </Route>
          <Route path="user" component={User} />
          <Route
            path="admin"
            element={<div className="container">Admin</div>}
          />
          <Route
            path="about"
            element={<div className="container">About</div>}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;

