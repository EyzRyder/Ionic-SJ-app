import './LinkPreview.scss'
import { IonButton } from '@ionic/react';

interface ContainerProps {
    url: string;
    title: string;
    description: string;
    img: string;
    icon: string;
}


const LinkPreview: React.FC<ContainerProps> = ({ url, title, description, img, icon }) => {
    return (
        <div className="linkContainer">
            <img className='w-5 h-5 absolute top-2 left-2' src={icon} alt="" />
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
