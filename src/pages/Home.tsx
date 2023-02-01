import { IonContent, IonPage, IonSearchbar } from '@ionic/react';
import Header from '../components/Header/Header';
import LinkPreview from '../components/LinkPreview/LinkPreview';
import LinkReview from '../components/LinkReview/LinkReview';
import './Home.scss';

const Home: React.FC = () => {


  return (
    <IonPage>
      <Header name={"Milabag"} />

      <IonContent class='mainPage' fullscreen scrollEvents={true}>
          <IonSearchbar animated={true} placeholder="Digite ou cole o url aqui" class='custom' onIonBlur={(e)=>{console.log(e.target.value)}}></IonSearchbar>

          <LinkPreview url={"https://www.figma.com"} title={"Titulo"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eros arcu, luctus sit amet nibh ac, tristique faucibus tellus. Quisque libero justo, cursus at urna sit amet, dictum lobortis ligula. Cras"} />

          <LinkReview risk={0} idade={24} selo={true} />
      </IonContent>
    </IonPage>
  );
};

export default Home;
