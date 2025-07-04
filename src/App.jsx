import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayouts from './layouts/MainLayouts';
import AllJobsPage from './pages/AllJobsPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayouts />}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<AllJobsPage />} />
    </Route>
  )
)

const App = () => {
  return <RouterProvider router={router} />;
}

export default App