import { IonContent, IonPopover } from '@ionic/react';
import './LinkReview.scss';

interface ContainerProps {
    risk: number;
    idade: number;
    selo: boolean;

}

const LinkReview: React.FC<ContainerProps> = ({ risk, idade, selo }) => {
    return (
        <div className="reviewContainer">
            <div id="click-triggerRisk" className='row'>
                <label>Risk</label>
                <p>{risk}/100</p>
            </div>
            <IonPopover side="top" alignment="center" trigger="click-triggerRisk" triggerAction="click">
                <IonContent class="ion-padding">fique atento quantos coisas suspeitas no site</IonContent>
            </IonPopover>

            <div id="click-triggerIdade" className='row'>
                <label>Tempo de Registro</label>
                <p>Anos de idade {idade}</p>
            </div>
            <IonPopover side="top" alignment="center" trigger="click-triggerIdade" triggerAction="click">
                <IonContent class="ion-padding">Fique atento na idade do site, se for muito jovem cuidado</IonContent>
            </IonPopover>
            <div id="click-triggerS" className='row'>
                <label>HTTPS (selo de segurança)</label>
                <p>{selo ? "Valido":"Invalido"}</p>
            </div>
            <IonPopover side="top" alignment="center" trigger="click-triggerS" triggerAction="click">
                <IonContent class="ion-padding">O selo é o que protege seu computador do site </IonContent>
            </IonPopover>
        </div>
    );
};

export default LinkReview;
