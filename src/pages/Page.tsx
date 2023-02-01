import { IonContent, IonPage, IonSearchbar } from '@ionic/react';
import Header from '../components/Header/Header';
import LinkPreview from '../components/LinkPreview/LinkPreview';
import './Page.scss';

const Page: React.FC = () => {


  return (
    <IonPage>
      <Header name={"Milabag"} />

      <IonContent fullscreen >
        <div className='mainPage'>
          <IonSearchbar animated={true} placeholder="Digite ou cole o url aqui" class='custom' onIonBlur={(e)=>{console.log(e.target.value)}}></IonSearchbar>

          <LinkPreview url={"https://www.figma.com"} title={"Titulo"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eros arcu, luctus sit amet nibh ac, tristique faucibus tellus. Quisque libero justo, cursus at urna sit amet, dictum lobortis ligula. Cras"} />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Page;
