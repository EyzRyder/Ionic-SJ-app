import './LinkPreview.scss'
import { IonButton } from '@ionic/react';

interface ContainerProps {
    url: string;
    title: string;
    description: string;

}


const LinkPreview: React.FC<ContainerProps> = ({ url, title, description }) => {
    return (
        <div className="linkContainer">
            <h5>{ url}</h5>
            <h1>{ title}</h1>
            <p>{ description}</p>
            <IonButton>View</IonButton>
        </div>
    );
};

export default LinkPreview;
