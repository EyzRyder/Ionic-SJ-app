import { IonContent, IonItem, IonLabel, IonPage, IonRadio, IonRadioGroup, IonToggle } from "@ionic/react"
import Header from "../../components/Header/Header"
import { Link } from "react-router-dom"
export const Referencias = () => {

  return (
    <IonPage>
      <Header name={"Referencias"} />


      <IonContent fullscreen class='configPage' scrollEvents={true} >

        <IonItem>
          <IonLabel>Sites usados</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>urlvoid</IonLabel>
          <a className="underline text-primary-default" href="https://www.urlvoid.com">Ver mais</a>
        </IonItem>
        <IonItem>
          <IonLabel>who.is</IonLabel>
          <a className="underline text-primary-default" href="https://who.is">Ver mais</a>
        </IonItem>
        <IonItem>
          <IonLabel>hostinger</IonLabel>
          <a className="underline text-primary-default" href="www.hostinger.com.br">Ver mais</a>
        </IonItem>
      </IonContent>
    </IonPage>
  )
}
