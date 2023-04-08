import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
//pages
import Home from './pages/Home';
import Help from './pages/Help';
import Contato from './pages/Contato/Contato';
//layouts
import MainRootLayout from './layouts/MainRootLayout';
import { Error } from './pages/Error';

export const router = createBrowserRouter(
createRoutesFromElements(
  <Route path='/' element={<MainRootLayout />} errorElement={<Error/>}>
    <Route index element={ <Home/>} errorElement={<Error/>} />
    <Route path='home' element={ <Home/>} errorElement={<Error/>} />
    <Route path='help' element={ <Help/>} errorElement={<Error/>} />
    <Route path='contato' element={<Contato />} errorElement={<Error/>} />
  </Route>
));