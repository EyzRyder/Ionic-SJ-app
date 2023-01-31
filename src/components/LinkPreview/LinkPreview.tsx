import './LinkPreview.scss'
import { IonButton } from '@ionic/react';


const LinkPreview: React.FC = () => {
    return (
        <div className="linkContainer">
            <h5>https://www.figma.com</h5>
            <h1>Titulo</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eros arcu, luctus sit amet nibh ac, tristique faucibus tellus. Quisque libero justo, cursus at urna sit amet, dictum lobortis ligula. Cras</p>
            <IonButton>View</IonButton>
        </div>
    );
};

export default LinkPreview;
