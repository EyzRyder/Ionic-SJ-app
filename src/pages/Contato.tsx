import { IonContent, IonInput, IonItem, IonLabel, IonPage, IonButton, IonTextarea } from '@ionic/react';
import Header from '../components/Header/Header';
import './Contato.scss';

const Contato: React.FC = () => {


    return (
        <IonPage>
            <Header name={"Contato"} />

            <IonContent fullscreen class='contatoPage' scrollEvents={true} >
                <div className='bg-gray-200 rounded-xl relative py-4 px-6 h-[calc(100%-20px)]'>
                    <IonItem>
                        <IonLabel>Nome</IonLabel>
                        <IonInput placeholder="Digite seu nome"></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Email</IonLabel>
                        <IonInput placeholder="Digite seu email"></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Sujeito</IonLabel>
                        <IonInput placeholder="Digite o sujeito"></IonInput>
                    </IonItem>
                    <IonItem className="">
                        <IonLabel position="stacked">Messagem</IonLabel>
                        <IonTextarea className="custom-textarea" placeholder="Sua Messagem" autoGrow={true}></IonTextarea>
                    </IonItem>
                    <IonButton className="" expand="block">Block</IonButton>

                </div>
            </IonContent>
        </IonPage>
    );
};

export default Contato;
