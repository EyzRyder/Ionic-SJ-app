import { IonContent, IonInput, IonItem, IonLabel, IonPage } from '@ionic/react';
import Header from '../components/Header/Header';
import './Contato.scss';

const Contato: React.FC = () => {


    return (
        <IonPage>
            <Header name={"Milabag"} />

            <IonContent fullscreen class='contatoPage' scrollEvents={true} >
                <div className='bg-gray-200 py-4 px-6'>
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
                    <IonItem>
                        <IonInput placeholder="Messagem"></IonInput>
                    </IonItem>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Contato;
