import { IonContent, IonPopover } from '@ionic/react';
import './LinkReview.scss';

interface ContainerProps {
    nome?: string
    risk: string;
    idade: string;
    serverLocal: string;

}

const LinkReview: React.FC<ContainerProps> = ({ nome, risk, idade, serverLocal }) => {

    const handleGetAge = (idade: string) => {
        if (idade === undefined || idade === null) { return "Couldn't find" }
        const date = new Date();
        let valorIdades = idade.split("-");
        valorIdades = [valorIdades[0], valorIdades[1], ...valorIdades[2].split(" ")];

        const madeYear: number = parseInt(valorIdades[0])
        const currentYear: number = parseInt(date.getFullYear().toString());
        const age = currentYear - madeYear
        if (age > 1) {
            return age + " anos"
        }
        if (age === 1) {
            return age + " ano"
        }

        const madeMonth: number = parseInt(valorIdades[1])
        const currentMonth: number = parseInt(date.getMonth().toString()) + 1;
        const months = currentMonth - madeMonth;

        if (months > 1) {
            return months + ' meses';
        }
        if (months === 1) {
            return months + ' mes';
        }
        return "Menos de um mes"
    }
    return (
        <div className="reviewContainer">
            {nome && (
                <>
                    <div id="click-triggerNome" className='row'>
                        <label>Nome</label>
                        <p>{nome}</p>
                    </div>
                    <IonPopover side="top" alignment="center" trigger="click-triggerNome" triggerAction="click">
                        <IonContent class="ion-padding">Aqui voce pode verificar se é uma pessoa ou empresa confiável</IonContent>
                    </IonPopover>
                </>
            )}



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
                <IonContent class="ion-padding">
                    {handleGetAge(idade).includes("meses") ? (<>Fique atento que esse site é bem jovem</>) : (<>Fique atento na idade do site, se for muito jovem tome cuidado</>)}
                </IonContent>
            </IonPopover>

            <div id="click-triggerStatus" className='row'>
                <label>Local do Server</label>
                <p>{serverLocal}</p>
            </div>
            <IonPopover side="top" alignment="center" trigger="click-triggerStatus" triggerAction="click">
                <IonContent class="ion-padding">Site está ativo e vivo</IonContent>
            </IonPopover>
        </div>
    );
};

export default LinkReview;
