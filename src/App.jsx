import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayouts from './layouts/MainLayouts';
import AllJobsPage from './pages/AllJobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, {JobLoader} from './pages/JobPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayouts />}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<AllJobsPage />} />
      <Route path="/job/:id" element={<JobPage />} loader={JobLoader} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
)

const App = () => {
  return <RouterProvider router={router} />;
}

export default App