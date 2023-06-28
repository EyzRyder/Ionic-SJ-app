import { RouterProvider } from 'react-router-dom';
import { IonApp, IonSplitPane, setupIonicReact } from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.scss';
import { router } from './Router';
import { useStorage } from './hook/useStorage';
import { useEffect } from 'react';

setupIonicReact();


const App: React.FC = () => {

  const { darkMode } = useStorage();

  const isEnabled = darkMode;

  useEffect(() => {
    console.log(darkMode)
    const className = 'dark';
    const bodyClass = document.body.classList;

    isEnabled ? bodyClass.add(className) : bodyClass.remove(className);


  }, [darkMode, isEnabled]);
  return(
  <IonApp>
    <RouterProvider router={router} />
  </IonApp>
)};

export default App;
