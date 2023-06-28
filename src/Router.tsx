import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
//pages
import Home from './pages/Home/Home';
import Help from './pages/Help/Help';
import Contato from './pages/Contato/Contato';
import { Error } from './pages/Error/Error';
import { Config } from './pages/Config/Config';
//layouts
import MainRootLayout from './layouts/MainRootLayout';
import { Referencias } from './pages/reference/Referencias';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainRootLayout />} errorElement={<Error />}>
      <Route index element={<Home />} errorElement={<Error />} />
      <Route path='home' element={<Home />} errorElement={<Error />} />
      <Route path='help' element={<Help />} errorElement={<Error />} />
      <Route path='contato' element={<Contato />} errorElement={<Error />} />
      <Route path='config' errorElement={<Error />}>
        <Route index element={<Config />} />
        <Route path='reference' element={<Referencias />} />
      </Route>
    </Route>
  ));