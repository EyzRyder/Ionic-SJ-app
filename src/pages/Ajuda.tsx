import { IonContent, IonLabel, IonPage, IonSegment, IonSegmentButton } from '@ionic/react';
import Header from '../components/Header/Header';
import './Ajuda.scss';

const Ajuda: React.FC = () => {


    return (
        <IonPage>
            <Header name={"Milabag"} />

            <IonContent fullscreen >
                <div className='mainPage'>
                    <IonSegment value="default">
                        <IonSegmentButton value="default">
                            <IonLabel>Default</IonLabel>
                        </IonSegmentButton>
                        <IonSegmentButton value="segment">
                            <IonLabel>Segment</IonLabel>
                        </IonSegmentButton>
                    </IonSegment>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Ajuda;
