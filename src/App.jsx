import React from 'react';
import Home from './pages/Home/index.jsx';
import Appartment from './pages/Appartment.jsx';
import About from './pages/About.jsx';
import Error from './pages/Errorpage.jsx';
import './style/App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/About',
      element: <About />,
    },
    {
      path: 'Appartment/:id',
      element: <Appartment />,
    },
    {
      path: '*',
      element: <Error />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
