import { IonContent, IonLabel, IonPage, IonSegment, IonSegmentButton } from '@ionic/react';
import { useState } from 'react';
import Denuncia from '../components/Denuncia/Denuncia';
import Dicas from '../components/Dicas/Dicas';
import Header from '../components/Header/Header';
import Perguntas from '../components/Perguntas/Perguntas';
import './Ajuda.scss';

const Ajuda: React.FC = () => {

    const [segment, setSegment] = useState<string | any>("denuncia")


    return (
        <IonPage>
            <Header name={"Milabag"} />

            <IonContent fullscreen class='ajudaPage' scrollEvents={true}>
                <IonSegment value={segment} onIonChange={(e) => {
                    setSegment(e.target.value);
                }}>
                        <IonSegmentButton value="denuncia">
                            <IonLabel>Denuncia</IonLabel>
                        </IonSegmentButton>
                        <IonSegmentButton value="dicas">
                            <IonLabel>Dicas</IonLabel>
                        </IonSegmentButton>
                        <IonSegmentButton value="perguntas">
                            <IonLabel>Perguntas</IonLabel>
                        </IonSegmentButton>
                </IonSegment>
                {segment == 'denuncia' && <Denuncia/>}
                {segment == 'dicas' && <Dicas/>}
                {segment == 'perguntas' && <Perguntas/>}

            </IonContent>
        </IonPage>
    );
};

export default Ajuda;
