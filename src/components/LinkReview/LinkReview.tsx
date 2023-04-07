import { IonContent, IonPopover } from '@ionic/react';
import './LinkReview.scss';

interface ContainerProps {
    nome: string
    risk: string;
    idade: string;
    status: string;

}

const LinkReview: React.FC<ContainerProps> = ({ nome, risk, idade, status }) => {
    const handleGetAge = (idade: string) => {
        const madeYear: number = parseInt(idade.slice(0, 4))
        const currentYear: number = parseInt(new Date().getFullYear().toString());
        const age = currentYear - madeYear
        if (age > 1) {
            return age + " anos"
        }
        if (age === 1) {
            return age + " ano"
        }

        const madeMonth: number = parseInt(idade.slice(4, 7))
        const currentMonth: number = parseInt(new Date().getMonth().toString());
        const months = currentMonth - madeMonth

        return months + " meses"
    }
    return (
        <div className="reviewContainer">
            <div id="click-triggerNome" className='row'>
                <label>Nome</label>
                <p>{nome}</p>
            </div>
            <IonPopover side="top" alignment="center" trigger="click-triggerNome" triggerAction="click">
                <IonContent class="ion-padding">Aqui voce pode verificar se é uma pessoa ou empresa confiável</IonContent>
            </IonPopover>


            <div id="click-triggerRisk" className='row'>
                <label>Risk</label>
                <p>{risk}</p>
            </div>
            <IonPopover side="top" alignment="center" trigger="click-triggerRisk" triggerAction="click">
                <IonContent class="ion-padding">Aqui voce pode ver o número de site da lista negra de sites presente </IonContent>
            </IonPopover>

            <div id="click-triggerIdade" className='row'>
                <label>Tempo de Registro</label>
                <p>{handleGetAge(idade)}</p>
            </div>
            <IonPopover side="top" alignment="center" trigger="click-triggerIdade" triggerAction="click">
                <IonContent class="ion-padding">Fique atento na idade do site, se for muito jovem tome cuidado</IonContent>
            </IonPopover>

            <div id="click-triggerStatus" className='row'>
                <label>Status</label>
                <p>{status}</p>
            </div>
            <IonPopover side="top" alignment="center" trigger="click-triggerStatus" triggerAction="click">
                <IonContent class="ion-padding">Site está ativo e vivo</IonContent>
            </IonPopover>
        </div>
    );
};

export default LinkReview;
