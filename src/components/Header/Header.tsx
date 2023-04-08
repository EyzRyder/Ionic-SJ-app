import './Header.scss'
import { IonButtons, IonHeader, IonMenuButton, IonProgressBar, IonTitle, IonToolbar } from '@ionic/react';


interface ContainerProps {
    name: string;
    loading?: boolean;
}

const Header: React.FC<ContainerProps> = ({ name, loading=false }) => {
    return (
        <IonHeader class=' ion-no-border'>
            <IonToolbar class='custumToolbar'>
                <IonButtons class='burger' slot="start">
                    <IonMenuButton />
                </IonButtons>
                <IonTitle class='title-large'>{name}</IonTitle>
                {loading && (<IonProgressBar type="indeterminate"></IonProgressBar>)}
            </IonToolbar>
        </IonHeader>
    );
};

export default Header;
