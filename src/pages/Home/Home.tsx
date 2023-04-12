import { useEffect, useState } from 'react';
import { IonContent, IonPage, IonSearchbar } from '@ionic/react';

//dependencies
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

import { getUrl, isEmptyOrSpaces } from '../../helpers';

const api = Axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URL
});

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

  { error && console.log(error) }

  return (
    <IonPage>
      <Header name={"SJ App"} loading={isFetching} />

      <IonContent class='mainPage' fullscreen scrollEvents={true}>
        <IonSearchbar value={urlSearch} animated={true} placeholder="Digite ou cole o url aqui" class='custom' onIonBlur={(e) => {
          setUrlSearch(getUrl(e.target.value || "") || "");
        }}></IonSearchbar>
        {isFetching && <Loading />}
        {data ? <div>
          <LinkPreview
            url={urlSearch}
            title={data.title}
            description={data.description}
            img={data.img}
          />
          <LinkReview
            nome={data.whoRegistered}
            risk={data.detectionsCounts}
            idade={data.domainAge}
            serverLocal={data.serverLocal}
            registerData={data.registerData}
          />
        </div>
          :
          <div>
            <LinkPreview
        url={""}
        title={"Titulo"}
        description={"Descricao e informa;oes do site oferecida pelo por eles vao ser colocados aqui, as vezes nao esta disponivels, a imagem e uma descricao"}
              img={"https://github.com/EyzRyder/EyzRyder/raw/main/img/thumbnail.png"}
      />
            <LinkReview
              nome={"Theme SJ"}
              risk={"0"}
              idade={"2004-12-19"}
              serverLocal={"(SP) BRASIL"}
      />
          </div>
        }
      </IonContent>
    </IonPage>
  );
};

export default Home;
