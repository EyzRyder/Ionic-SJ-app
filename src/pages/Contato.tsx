// ionic react 
import {
    IonContent,
    IonInput,
    IonItem,
    IonLabel,
    IonPage,
    IonTextarea,
    useIonToast
} from '@ionic/react';
// react
import React, { MutableRefObject, useEffect, useRef } from 'react';
//components
import Header from '../components/Header/Header';
//dependencies
import emailjs from '@emailjs/browser';
import { useFetcher } from 'react-router-dom';
//stye
import './Contato.scss';

const Contato: React.FC = () => {
    const [present] = useIonToast();
// color:'success'|'danger'|'warning'|'primary'|'secondary'|'tertiary'
    const presentToast = (message: string, position: 'top' | 'middle' | 'bottom', color: 'success' | 'danger' | 'warning' | 'primary' | 'secondary' | 'tertiary') => {
        present({
            message,
            duration: 1500,
            position: position,
            animated: true,
            color
        });
    };


    const fetcher = useFetcher();
    const isSubmitting = fetcher.state == "submitting";

    const formRef = useRef() as MutableRefObject<HTMLFormElement>

    useEffect(() => {
        if (!isSubmitting) {
            formRef.current.reset();
        }
    }, [isSubmitting]);


    const sendEmail = (e: any) => {
        e.preventDefault();

        emailjs.sendForm(
            import.meta.env.VITE_REACT_APP_SERVICE_ID,
            import.meta.env.VITE_REACT_APP_TEMPLATE_ID,
            formRef.current,
            import.meta.env.VITE_REACT_APP_EmJS_PUBLIC_KEY
        )
            .then((result) => {
                console.log(result.text);
                presentToast(`Mensagem enviado!`, "top",'success');
            }, (error) => {
                console.log(error.text);
                presentToast(`Teve um problema ao enviar seu email`, "top",'danger');
            });
    };

    return (
        <IonPage>
            <Header name={"Contato"} />

            <IonContent fullscreen class='contatoPage' scrollEvents={true} >
                <fetcher.Form method='post' ref={formRef} className='bg-gray-200 rounded-xl relative py-4 px-6 h-[calc(100%-20px)]' onSubmit={sendEmail}>
                    <IonItem>
                        <IonLabel>Nome</IonLabel>
                        <IonInput
                            placeholder="Digite seu nome"
                            name='from_name'
                        ></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Email</IonLabel>
                        <IonInput
                            placeholder="Digite seu email"
                            name='from_email'
                        ></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Assunto</IonLabel>
                        <IonInput
                            placeholder="Digite o assunto"
                            name='assunto'
                        ></IonInput>
                    </IonItem>
                    <IonItem className="">
                        <IonLabel position="stacked">Messagem</IonLabel>
                        <IonTextarea
                            className="custom-textarea"
                            placeholder="Sua Messagem"
                            autoGrow={true}
                            name='message'
                        ></IonTextarea>
                    </IonItem>
                    <input
                        type="submit"
                        value="Enviar"
                        className='bg-primary-default px-3 py-2 w-full mt-5 rounded-lg text-white' />

                    {/* <IonButton className="" expand="block">Enviar</IonButton> */}

                </fetcher.Form>
            </IonContent>

        </IonPage>
    );
};

export default Contato;
