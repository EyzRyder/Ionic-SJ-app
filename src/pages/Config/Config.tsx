import { IonContent, IonItem, IonLabel, IonPage, IonRadio, IonRadioGroup } from "@ionic/react"
import Header from "../../components/Header/Header"
import './Config.scss'
import { Link } from "react-router-dom"
export const Config = () => {
  return (
    <IonPage>
      <Header name={"Configuração"} />

      <IonContent fullscreen class='configPage' scrollEvents={true} >
        <IonItem className="flex justify-center items-center">
          <IonRadioGroup value="custom-checked" class="radioGroup">
          <IonRadio className='night' value="custom">Dark</IonRadio>
          <IonRadio className='day' value="custom-checked">Light</IonRadio>
        </IonRadioGroup>
        </IonItem>
        <IonItem>
          <IonLabel>Sites usados</IonLabel>
          <Link to={"reference"}>Ver reference</Link>
        </IonItem>
        <IonItem>
          <IonLabel>Desenvolvido por</IonLabel>
          <p>Gabriel Bessi</p>
        </IonItem>
      </IonContent>
    </IonPage>
  )
}
