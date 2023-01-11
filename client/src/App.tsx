import { RouterProvider } from 'react-router-dom';
import router from './router';
import React from 'react';

import './app.less';

function App() {

  return (
    <RouterProvider router={router} />
  )
}
export default App;