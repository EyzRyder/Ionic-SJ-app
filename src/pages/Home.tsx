import { IonContent, IonPage, IonSearchbar } from '@ionic/react';
import { useState } from 'react';
import Header from '../components/Header/Header';
import LinkPreview from '../components/LinkPreview/LinkPreview';
import LinkReview from '../components/LinkReview/LinkReview';
import './Home.scss';
import useGet from '../hook/useGet';

const Home: React.FC = () => {
  const [urlSearch, setUrlSearch] = useState<string>("")
  const { metaData, dataWho, isPending, error } = useGet(urlSearch);

  console.log(error)

  return (
    <IonPage>
      <Header name={"SJ App"} />

      <IonContent class='mainPage' fullscreen scrollEvents={true}>
        <IonSearchbar value={urlSearch} animated={true} placeholder="Digite ou cole o url aqui" class='custom' onIonBlur={(e) => { setUrlSearch(e.target.value || ""); }}></IonSearchbar>
        {isPending && <div>Carregando ...</div>}
        {error && <div> {error.message}</div>}

        {metaData && <LinkPreview url={urlSearch} title={metaData.title} description={metaData.description} img={metaData.img} icon={metaData.favicon} />}
        {dataWho && <LinkReview nome={dataWho.whoRegistered} risk={dataWho.detectionsCounts} idade={dataWho.registeredOn} status={dataWho.status} />}
      </IonContent>
    </IonPage>
  );
};

export default Home;
