import { IonContent, IonPopover } from '@ionic/react';
import './LinkReview.scss';

interface ContainerProps {
    nome:string
    risk: number;
    idade: string;
    selo: boolean;
    status: string;

}

const LinkReview: React.FC<ContainerProps> = ({ nome, risk, idade, selo, status }) => {
    return (
        <div className="reviewContainer">
            <div id="click-triggerNome" className='row'>
                <label>Nome</label>
                <p>{nome}</p>
            </div>
            <IonPopover side="top" alignment="center" trigger="click-triggerNome" triggerAction="click">
                <IonContent class="ion-padding">fique atento quantos coisas suspeitas no site</IonContent>
            </IonPopover>


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

            <div id="click-triggerStatus" className='row'>
                <label>Status</label>
                <p>{status}</p>
            </div>
            <IonPopover side="top" alignment="center" trigger="click-triggerStatus" triggerAction="click">
                <IonContent class="ion-padding">O selo é o que protege seu computador do site </IonContent>
            </IonPopover>
        </div>
    );
};

export default LinkReview;
