import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import "./App.css";
import { Homepage } from "./components/Homepage";
import { RQSuperHeroesPage } from "./components/RQSuperHeroesPage";
import { SuperHeroes } from "./components/SuperHeroes";
import { ReactQueryDevtools} from 'react-query/devtools';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/Homepage">Home</Link>
              </li>
              <li>
                <Link to="/SuperHeroes">Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to="/RQSuperHeroesPage">RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/SuperHeroes" element={<SuperHeroes />}></Route>
            <Route
              path="/RQSuperHeroesPage"
              element={<RQSuperHeroesPage />}
            ></Route>
            <Route path="/Homepage" element={<Homepage />}></Route>
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpem={false} position='bottom-right' />
    </QueryClientProvider>
  );
}

export default App;
