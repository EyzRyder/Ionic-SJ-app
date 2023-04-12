import { IonContent } from '@ionic/react';
import { denuncia as passos, Idenuncia } from '../../dadosAjuda';

export function Denuncia() {
    return (
        <IonContent className='DenunciaPage' style={{  '--background': 'var(--main-BG)'}} scrollEvents={true}>
            <div className='flex flex-col gap-5'>
                <h1 className='font-bold text-2xl text-center'>Caso tenha sofrido um golpe ou alguma transação</h1>
                {passos?.map((passo: Idenuncia) => {
                    return (
                        <div key={passo.number} className='grid items-center justify-center gap-3 grid-cols-[50px,1fr]'>
                            <div className=' rounded-full bg-primary-default w-12 h-12 flex justify-center items-center text-white'>
                                {passo.number}
                            </div>
                            <div className='bg-gray-400 p-2 rounded-lg text-white text-base font-normal'>
                                <span>{passo.text} </span>
                                <span>
                                    <a className='underline text-tertiary-default' href={passo.link}>
                                        {passo.link}
                                    </a>
                                </span>
                            </div>

                        </div>)
                })}
            </div>
        </IonContent>
    );
};


