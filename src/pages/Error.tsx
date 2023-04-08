import { IonContent, IonIcon, IonPage } from "@ionic/react"
import Header from "../components/Header/Header"
import { useNavigate, useRouteError } from "react-router";
import { Link } from "react-router-dom";
import { arrowBackOutline, homeOutline } from "ionicons/icons";
import './Error.scss'

export const Error: React.FC = () => {
  const error:any = useRouteError();
  const navigate = useNavigate();

  console.log("Error ~ ", error)
  return (
    <IonPage>
      <Header name={"Error"} />

      <IonContent fullscreen class='errorPage' scrollEvents={true} >
        <div className='place-self-center grid place-items-center place-content-center text-center gap-8'>
          <h1>
            Uh oh! Parece que temos um problema.
          </h1>
          <p>{error.message || error.statusText}</p>
          <div className="flex flex-wrap items-center gap-6">
            <button className=' m-auto disabled:opacity-50 hover:text-[hsl(0,0%,100%)] text-[hsl(183_74%_44%)] border-[2px_solid_hsl(183_74%_44%)] hover:outline-[0px_solid_blue] hover:bg-primary-default px-3 py-2 rounded-md btn btn--dark flex justify-center items-center gap-2  btn btn--dark' onClick={() => navigate(-1)}>
              <IonIcon icon={arrowBackOutline} size="md" color="primary"></IonIcon>

              <span>Volte para a pagina anterior</span>
            </button>
            <Link
              to="/"
              className='m-auto disabled:opacity-50 hover:text-[hsl(0,0%,100%)] text-[hsl(183_74%_44%)] border-[2px_solid_hsl(183_74%_44%)] hover:outline-[0px_solid_blue] hover:bg-primary-default px-3 py-2 rounded-md btn btn--dark flex justify-center items-center gap-2 '
            >
              <IonIcon icon={homeOutline} size="md" color="primary"></IonIcon>
              <span>Volte para a pagina inicial</span>
            </Link>
          </div>
        </div>
        </IonContent>
    </IonPage>
  )
}