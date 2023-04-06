import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './pages/Home';
import Help from './pages/Help';
import Contato from './pages/Contato';
import MainRootLayout from './layouts/MainRootLayout';

export const router = createBrowserRouter(
createRoutesFromElements(
  <Route path='/' element={<MainRootLayout />}>
    <Route index element={ <Home/>} />
    <Route path='home' element={ <Home/>} />
    <Route path='help' element={ <Help/>} />
    <Route path='contato' element={<Contato />} />
  </Route>
));