import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import LinkPreview from '../components/LinkPreview/LinkPreview';
import './Page.scss';

const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Millabag</IonTitle>
          </IonToolbar>
        </IonHeader>
        <LinkPreview url={"https://www.figma.com"} title={"Titulo"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eros arcu, luctus sit amet nibh ac, tristique faucibus tellus. Quisque libero justo, cursus at urna sit amet, dictum lobortis ligula. Cras"} />
      </IonContent>
    </IonPage>
  );
};

export default Page;
