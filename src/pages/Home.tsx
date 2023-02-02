import { IonContent, IonPage, IonSearchbar } from '@ionic/react';
import { useState } from 'react';
import Header from '../components/Header/Header';
import LinkPreview from '../components/LinkPreview/LinkPreview';
import LinkReview from '../components/LinkReview/LinkReview';
import './Home.scss';
import Axios from 'axios';
import useGet from '../hook/useGet';

const Home: React.FC = () => {
  const [urlSearch, setUrlSearch] = useState<string>("")
  const { dataPage, isPending, error } = useGet("http://localhost:3000/api/previewlink", urlSearch);

  return (
    <IonPage>
      <Header name={"Milabag"} />

      <IonContent class='mainPage' fullscreen scrollEvents={true}>
        <IonSearchbar value={urlSearch} animated={true} placeholder="Digite ou cole o url aqui" class='custom' onIonBlur={(e) => { setUrlSearch(e.target.value || ""); }}></IonSearchbar>
        {isPending && <div>Carregando ...</div>}

        {dataPage && <LinkPreview url={urlSearch} title={dataPage.title} description={dataPage.description} img={dataPage.img} />
        }
        {dataPage && <LinkReview risk={0} idade={24} selo={true} /> 
        }
        {error && <div>{error}</div>}
      </IonContent>
    </IonPage>
  );
};

export default Home;
