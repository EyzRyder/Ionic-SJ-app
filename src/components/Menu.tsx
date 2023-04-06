import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonRadio,
  IonRadioGroup,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { helpCircleOutline, helpCircleSharp, homeOutline, homeSharp, mailOutline, mailSharp} from 'ionicons/icons';
import './Menu.scss';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  },
  {
    title: 'Ajuda',
    url: '/help',
    iosIcon: helpCircleOutline,
    mdIcon: helpCircleSharp
  },
  {
    title: 'Contato',
    url: '/contato',
    iosIcon: mailOutline,
    mdIcon: mailSharp
  },
];


const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Bem vindo</IonListHeader>
          <IonNote>se sinta seguro aqui</IonNote>

          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
          <IonRadioGroup value="custom-checked">
            <IonRadio className='night' value="custom">Dark</IonRadio>
            <IonRadio className='day' value="custom-checked">Light</IonRadio>
          </IonRadioGroup>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
