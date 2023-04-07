import {
    IonContent,
    IonInput,
    IonItem,
    IonLabel,
    IonPage,
    IonButton,
    IonTextarea
} from '@ionic/react';

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import Header from '../components/Header/Header';
import './Contato.scss';

const Contato: React.FC = () => {
    const form = useRef();

    const sendEmail = (e:any) => {
        e.preventDefault();

        emailjs.sendForm(import.meta.env.VITE_REACT_APP_SERVICE_ID, import.meta.env.VITE_REACT_APP_TEMPLATE_ID, form.current, import.meta.env.VITE_REACT_APP_EmJS_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <IonPage>
            <Header name={"Contato"} />

            <IonContent fullscreen class='contatoPage' scrollEvents={true} >
                <form ref={form} className='bg-gray-200 rounded-xl relative py-4 px-6 h-[calc(100%-20px)]' onSubmit={sendEmail}>
                    <IonItem>
                        <IonLabel>Nome</IonLabel>
                        <IonInput placeholder="Digite seu nome" name='from_name'></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Email</IonLabel>
                        <IonInput placeholder="Digite seu email" name='from_email'></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Assunto</IonLabel>
                        <IonInput placeholder="Digite o assunto" name='assunto'></IonInput>
                    </IonItem>
                    <IonItem className="">
                        <IonLabel position="stacked">Messagem</IonLabel>
                        <IonTextarea className="custom-textarea" placeholder="Sua Messagem" autoGrow={true} name='message'></IonTextarea>
                    </IonItem>
                    <input type="submit" value="Enviar" className='bg-primary-default px-3 py-2 w-full mt-5 rounded-lg text-white' />

                    {/* <IonButton className="" expand="block">Enviar</IonButton> */}

                </form>
            </IonContent>
        </IonPage>
    );
};

export default Contato;
