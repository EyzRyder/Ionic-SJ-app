import { IonContent, IonPage, IonSearchbar } from '@ionic/react';
import { useState } from 'react';
import Header from '../components/Header/Header';
import LinkPreview from '../components/LinkPreview/LinkPreview';
import LinkReview from '../components/LinkReview/LinkReview';
import './Home.scss';
import useGet from '../hook/useGet';
import Loading from '../components/Loading/Loading';
import Error from '../components/Error/Error';

const Home: React.FC = () => {
  const [urlSearch, setUrlSearch] = useState<string>("")
  const { data, isPending, error } = useGet(urlSearch);

  console.log(error)

  return (
    <IonPage>
      <Header name={"SJ App"} />

      <IonContent class='mainPage' fullscreen scrollEvents={true}>
        <IonSearchbar value={urlSearch} animated={true} placeholder="Digite ou cole o url aqui" class='custom' onIonBlur={(e) => { setUrlSearch(e.target.value || ""); }}></IonSearchbar>
        {isPending && <Loading/>}
        {error && <Error message={error.message} />}

        {data && <div>
          <LinkPreview url={urlSearch} title={data.title} description={data.description} img={data.img} />
        <LinkReview nome={data.whoRegistered} risk={data.detectionsCounts} idade={data.registeredOn} status={data.status} />
        </div>}
      </IonContent>
    </IonPage>
  );
};

export default Home;
