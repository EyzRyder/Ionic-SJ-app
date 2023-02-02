import './LinkPreview.scss'
import { IonButton } from '@ionic/react';

interface ContainerProps {
    url: string;
    title: string;
    description: string;
    img: string;
}


const LinkPreview: React.FC<ContainerProps> = ({ url, title, description, img }) => {
    return (
        <div className="linkContainer">
            <img className='previewImg' src={img} alt="Imagem" />
            <div className='previewText'>
                <h5 className='url'>{url}</h5>
                <h1 className='title'>{title}</h1>
                <p className='description'>{description}</p>
            </div>
            <IonButton class='btn'>View</IonButton>
        </div>
    );
};

export default LinkPreview;
