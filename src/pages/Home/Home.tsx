import { useEffect, useState } from 'react';
import { IonContent, IonPage, IonSearchbar } from '@ionic/react';
import { useQuery } from 'react-query'
import Axios from "axios"
import { ILink } from '../../interfaces/interface';

//Components
import Header from '../../components/Header/Header';
import LinkPreview from '../../components/LinkPreview/LinkPreview';
import LinkReview from '../../components/LinkReview/LinkReview';
import Loading from '../../components/Loading/Loading';

//Style
import './Home.scss';


const api = Axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URL
});

function isEmptyOrSpaces(str: string) {
  return str === null || str === undefined || str === "" || str.match(/^ *$/) !== null;
}

const getUrl = (text: string) => {
  if (!text) return null;
  const a = document.createElement('a');
  a.href = text;
  const { protocol, host, pathname, search, hash } = a;
  const url = `${protocol}//${host}${pathname}${search}${hash}`;
  const isSameHost = (host === window.location.host);
  if (isSameHost) return null;
  return url;
};

const Home: React.FC = () => {
  const [urlSearch, setUrlSearch] = useState<string>("")

  const { data, isFetching, error, refetch } = useQuery<ILink>('link', async () => {
    if (isEmptyOrSpaces(urlSearch)) return
    const response = await api.post("linkplusregisterdata", { data: urlSearch })
    return response.data
  }, {
    staleTime: 10000 * 60,
  });

  useEffect(() => {
    console.log(urlSearch)
    refetch()
  }, [urlSearch])

  { error ?? console.log(error) }

  return (
    <IonPage>
      <Header name={"SJ App"} />

      <IonContent class='mainPage' fullscreen scrollEvents={true}>
        <IonSearchbar value={urlSearch} animated={true} placeholder="Digite ou cole o url aqui" class='custom' onIonBlur={(e) => {
          setUrlSearch(getUrl(e.target.value || "") || "");
        }}></IonSearchbar>
        {isFetching && <Loading />}
        {data && <div>
          <LinkPreview url={urlSearch} title={data.title} description={data.description} img={data.img} />
          <LinkReview nome={data.whoRegistered} risk={data.detectionsCounts} idade={data.registeredOn} status={data.status} />
        </div>}
      </IonContent>
    </IonPage>
  );
};

export default Home;
