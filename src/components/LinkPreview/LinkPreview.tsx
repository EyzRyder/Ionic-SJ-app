import { verificarSeguranca } from '../../helpers';
import './LinkPreview.scss'
import { IonButton, IonLabel } from '@ionic/react';

interface ContainerProps {
    url: string;
    title: string;
    description: string;
    img: string;
    birth: string;
    risk: string;
}


const LinkPreview: React.FC<ContainerProps> = ({ url, title, description, img, birth, risk }) => {
    const btnMsg = verificarSeguranca(birth, risk)
    return (
        <div className="linkContainer">
            <img className='previewImg' src={img} alt="Imagem" />
            <div className='previewText'>
                <h5 className='url'>{url}</h5>
                <h1 className='title'>{title}</h1>
                <p className='description'>{description}</p>
            </div>
            <a className='w-full' href={btnMsg.status == 'BAD'?"#":"http://"+url}>
            <IonButton
                color={btnMsg.status == 'BAD' ? 'danger' : btnMsg.status == 'MID' ? 'warning' : 'primary'
                }
                disabled={btnMsg.status == 'BAD'}
                class='btn'

            >
                    Ver
            </IonButton>
                </a>
            {btnMsg && <p className={btnMsg.status == 'BAD' ? 'text-red-400' : btnMsg.status == 'MID' ? 'text-orange-400' : 'text-green-400'
            }>
                {btnMsg.msg}
            </p>
            }
        </div>
    );
};

export default LinkPreview;
