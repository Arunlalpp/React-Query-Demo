import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import "./App.css";
import { Homepage } from "./components/Homepage";
import { RQSuperHeroesPage } from "./components/RQSuperHeroesPage";
import { SuperHeroes } from "./components/SuperHeroes";
import { ReactQueryDevtools } from "react-query/devtools";
import { RQSuperHeroPage } from "./components/RQSuperHeroPage";
import { ParallelQueriesPage } from "./components/ParallelQueriesPage";
import { DynamicParallelPage } from "./components/DynamicParallelPage";
import { DependentQueriesPage } from "./components/DependentQueriesPage";
import { PaginatedQueriesPage } from "./components/PaginatedQueriesPage";
import { InfiniteQueriesPage } from "./components/InfiniteQueriesPage";

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
          <Route path="/InfiniteQueriesPage" element={<InfiniteQueriesPage />}></Route>
          <Route path="/PaginatedQueriesPage" element={<PaginatedQueriesPage />}></Route>
          <Route path="/DependentQueriesPage" element={<DependentQueriesPage email='email@email.com' />}></Route>
            <Route path="DynamicParallelPage" element={<DynamicParallelPage heroIds={[1,3]}/>}></Route>
            <Route path="/ParallelQueriesPage" element={<ParallelQueriesPage />}></Route>
            <Route
              path="/RQSuperHeroesPage/:heroId"
              element={<RQSuperHeroPage />}
            ></Route>
            <Route path="/SuperHeroes" element={<SuperHeroes />}></Route>
            <Route
              path="/RQSuperHeroesPage"
              element={<RQSuperHeroesPage />}
            ></Route>
            <Route path="/Homepage" element={<Homepage />}></Route>
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpem={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
