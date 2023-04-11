import { IonContent, IonItem, IonLabel, IonPage, IonRadio, IonRadioGroup, IonToggle } from "@ionic/react"
import Header from "../../components/Header/Header"
import './Config.scss'
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import  { useStorage } from "../../hook/useStorage"
export const Config = () => {
  const { darkMode, addNewMode } = useStorage();
  
  const isEnabled = typeof enabledState === 'undefined' && darkMode;
  
  useEffect(() => {
    console.log(darkMode)
    const className = 'dark';
    const bodyClass = document.body.classList;

    isEnabled ? bodyClass.add(className) : bodyClass.remove(className);


  }, [darkMode, isEnabled]);
  
  return (
    <IonPage>
      <Header name={"Configuração"} />
      

      <IonContent fullscreen class='configPage' scrollEvents={true} >
        <IonItem className="radioItem">
          <IonToggle enableOnOffLabels={true} checked={darkMode} onIonChange={async() => { await addNewMode(!darkMode)}}>Modo Noturno</IonToggle>

        </IonItem>
        <IonItem>
          <IonLabel>Sites usados</IonLabel>
          <Link to={"reference"}>Ver reference</Link>
        </IonItem>
        <IonItem>
          <IonLabel>Sobre o TCC</IonLabel>
          <p>Ler</p>
        </IonItem>
        <IonItem>
          <IonLabel>Desenvolvido por</IonLabel>
          <p>Gabriel Bessi</p>
        </IonItem>
      </IonContent>
    </IonPage>
  )
}
