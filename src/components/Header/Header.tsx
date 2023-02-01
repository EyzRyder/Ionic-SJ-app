import './Header.scss'
import { IonButtons, IonHeader, IonMenuButton, IonTitle, IonToolbar } from '@ionic/react';


interface ContainerProps {
    name: string;
}

const Header: React.FC<ContainerProps> = ({ name }) => {
    return (
        <IonHeader class=' ion-no-border'>
            <IonToolbar class='custumToolbar'>
                <IonButtons class='burger' slot="start">
                    <IonMenuButton />
                </IonButtons>
                <IonTitle class='title-large'>{name}</IonTitle>
            </IonToolbar>
        </IonHeader>
    );
};

export default Header;
