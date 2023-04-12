import { IonContent, IonIcon } from '@ionic/react';
import { caretDown } from 'ionicons/icons';
import { perguntas } from '../../dadosAjuda';
import './Perguntas.scss';

const Perguntas: React.FC = () => {

    return (
        <IonContent class='PerguntasPage' style={{ '--background': 'var(--main-BG)' }} scrollEvents={true}>
            <div className='flex flex-col gap-5'>
                <h1 className='font-bold text-2xl text-center'>
                    Aqui algumas perguntas frequentes
                </h1>
                <div className='bg-gray-200 p-6 rounded-xl flex flex-col gap-3'>
                    {perguntas?.map(pergunta => {
                        return (
                            <details key={pergunta._id} className='bg-gray-400 text-white flex flex-col justify-center items-center px-2 py-3 rounded-lg gap-3'>
                                <summary className=' text-lg font-bold'>
                                    {pergunta.pergunta}
                                </summary>
                                <p>{pergunta.resposta}</p>
                            </details>
                        )
                    })}
                </div>

            </div>
        </IonContent>
    );
};

export default Perguntas;
