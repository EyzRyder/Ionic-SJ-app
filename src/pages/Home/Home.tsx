import { useState } from 'react';
import { IonContent, IonPage, IonIcon } from '@ionic/react';
import { searchOutline } from 'ionicons/icons';
//dependencies
import { useQuery } from 'react-query'
import Axios from "axios"
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

//Components
import Header from '../../components/Header/Header';
import LinkPreview from '../../components/LinkPreview/LinkPreview';
import LinkReview from '../../components/LinkReview/LinkReview';
import Loading from '../../components/Loading/Loading';

//Style
import './Home.scss';
import LOGO from '../../assets/Logo.svg'
// helpers

import { getUrl, isEmptyOrSpaces } from '../../helpers';
import { ILink, UrlForm, UrlFormSchema } from '../../interfaces/interface';
import { environment } from '../../environment_var';

const api = Axios.create({
  baseURL: environment.API_URL
});

const Home: React.FC = () => {
  const [urlSearch, setUrlSearch] = useState<string>("")

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<UrlForm>({
    defaultValues: {
      url: '',
    },
    resolver: zodResolver(UrlFormSchema),
  });
  const onSubmit: SubmitHandler<UrlForm> = async ({ url }) => {
    // console.log(url);
    if (!url || isEmptyOrSpaces(url)) return
    const search = getUrl(url)
    if (!search || search == null) return
    await setUrlSearch(search);
    // console.log(getUrl(url));
    return await refetch()
  };

  const { data, isFetching, error, refetch } = useQuery<ILink>('link', async () => {
    if (isEmptyOrSpaces(urlSearch)) return
    const response = await api.post("linkplusregisterdata", { data: urlSearch })
    return response.data
  }, {
    staleTime: 10000 * 60,
  });

  // { error && console.log(error) }

  return (
    <IonPage>
      <Header name={"SJ App"} loading={isFetching} />

      <IonContent class='mainPage' fullscreen scrollEvents={true}>
        <form
          className='custom flex justify-center items-center gap-2 mt-6 w-full px-3 py-2 outline-transparent focus:outline-transparent shadow-md'
          onSubmit={handleSubmit(onSubmit)}
        >
          <button type="submit">
            <IonIcon
              icon={searchOutline}
              size="large"
            >
            </IonIcon>
          </button>

          <input
            type='search'
            {...register('url')}
            disabled={isFetching || isSubmitting}
            placeholder="Digite ou cole o url aqui"
            className='bg-transparent ring-0 outline-0 focus:ring-0  w-full order-transparent focus:border-0'
          />
        </form>
        {isFetching && <Loading />}
        {data ? <div className='mb-12'>
          <LinkPreview
            url={data.url}
            title={data.title}
            description={data.description}
            img={data.img}
            risk={data.detectionsCounts}
            birth={data.domainAge}
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
          <div className='mb-12'>
            <LinkPreview
              url={"www.site.com"}
              title={"Titulo"}
              description={"Descricao e informa;oes do site oferecida pelo por eles vao ser colocados aqui, as vezes nao esta disponivels, a imagem e uma descricao"}
              img={LOGO}
              risk={"0/40"}
              birth={"2004-12-19"}
            />
            <LinkReview
              nome={"Empresa .ic"}
              risk={"0/40"}
              idade={"2004-12-19"}
              serverLocal={"(SP) BRASIL"}
            />
          </div>
        }
      </IonContent>
    </IonPage >
  );
};

export default Home;
