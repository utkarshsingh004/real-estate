import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signup from './verification/Signup/Signup';
import Home from './Home';
import Login from './verification/Login/Login';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/signup', element: <Signup /> },
  { path: '/login', element: <Login /> },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
