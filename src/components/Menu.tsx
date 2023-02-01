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
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, heartOutline, heartSharp, helpCircleOutline, helpCircleSharp, homeOutline, homeSharp, mailOutline, mailSharp} from 'ionicons/icons';
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
    title: 'Denuncia',
    url: '/ajuda/denuncia',
    iosIcon: archiveOutline,
    mdIcon: archiveSharp
  },
  {
    title: 'Ajuda',
    url: '/ajuda',
    iosIcon: heartOutline,
    mdIcon: heartSharp
  },
  {
    title: 'Perguntas',
    url: '/ajuda/perguntas',
    iosIcon: helpCircleOutline,
    mdIcon: helpCircleSharp
  },
  {
    title: 'Contato',
    url: '/ajuda/contato',
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
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
