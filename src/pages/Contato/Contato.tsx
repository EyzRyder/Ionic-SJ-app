// ionic react 
import {
    IonContent,
    IonIcon,
    IonInput,
    IonItem,
    IonLabel,
    IonPage,
    IonTextarea,
    useIonToast
} from '@ionic/react';
// react
import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
//components
import Header from '../../components/Header/Header';
//dependencies
import emailjs from '@emailjs/browser';
import { useFetcher } from 'react-router-dom';
import axios from 'axios';
//stye
import './Contato.scss';
import { send } from 'ionicons/icons';


const Contato: React.FC = () => {
    const [present] = useIonToast();
    const presentToast = (message: string, position: 'top' | 'middle' | 'bottom', color: 'success' | 'danger' | 'warning' | 'primary' | 'secondary' | 'tertiary') => {
        present({
            message,
            duration: 1500,
            position: position,
            animated: true,
            color
        });
    };

    //form
    const fetcher = useFetcher();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const formRef = useRef() as MutableRefObject<HTMLFormElement>

    useEffect(() => {
        if (!isSubmitting) {
            formRef.current.reset();
        }
    }, [isSubmitting]);

    async function sendEmail(e: any) {
        e.preventDefault();

        const email = formRef.current.from_email.value
        if (email == undefined || email == null || email.includes(" ") || email === "") {
            return presentToast("preenche com seu email", "top", "warning")
        }

        try {
            setIsSubmitting(true);
            const emailData = await axios.get(`https://emailvalidation.abstractapi.com/v1/?api_key=${import.meta.env.VITE_REACT_APP_abs_emailvery_KEY}&email=${email}`).
                then(response => {
                    return response.data
                }).then(data => {
                    return data
                })
                .catch(error => {
                    setIsSubmitting(false);
                    console.error(error);
                    return presentToast("Não foi possível verificar seu email", "top", "danger")
                });
            if (emailData.deliverability == "UNDELIVERABLE" || emailData.deliverability == "RISKY" || emailData.deliverability == "UNKNOWN") {
                setIsSubmitting(false);
                return presentToast("email não foi aceito por motivos de não estar disponível, suspeita ou desconhecido", "top", "danger")

            }


            await emailjs.sendForm(
                import.meta.env.VITE_REACT_APP_SERVICE_ID,
                import.meta.env.VITE_REACT_APP_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_REACT_APP_EmJS_PUBLIC_KEY
            )
                .then((result) => {
                    console.log(result.text);
                    presentToast("Mensagem enviado!", 'top', 'success');
                }, (error) => {
                    console.log(error.text);
                    setIsSubmitting(false);
                    presentToast('Teve um problema ao enviar seu email', 'top', 'danger');
                });
            setIsSubmitting(false);
        } catch (e: any) {
            setIsSubmitting(false);
            console.log(e);
            throw Error(e.message)
        }

    }

    return (
        <IonPage>
            <Header name={"Contato"} loading={isSubmitting} />

            <IonContent fullscreen class='contatoPage' scrollEvents={true} >
                <fetcher.Form
                    method='post'
                    ref={formRef}
                    onSubmit={sendEmail}
                    className='relative bg-gray-200 dark:bg-[#212121] rounded-xl relative py-4 px-6 h-[calc(100%-20px)]'
                >
                    <IonItem>
                        <IonLabel>Nome</IonLabel>
                        <IonInput
                            placeholder="Digite seu nome"
                            name='from_name'
                            required
                        ></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Email</IonLabel>
                        <IonInput
                            placeholder="Digite seu email"
                            name='from_email'
                            type='email'
                            required
                        ></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Assunto</IonLabel>
                        <IonInput
                            placeholder="Digite o assunto"
                            name='assunto'
                            required
                        ></IonInput>
                    </IonItem>
                    <IonItem className="">
                        <IonLabel position="stacked">Messagem</IonLabel>
                        <IonTextarea
                            className="custom-textarea"
                            placeholder="Sua Messagem"
                            autoGrow={true}
                            name='message'
                            required
                        ></IonTextarea>
                    </IonItem>
                    <input type="hidden" name='_action' value="msgDeContato" />
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className='bg-primary-default px-3 py-2 w-32 mt-5 rounded-lg text-white disabled:bg-primary-shade absolute bottom-4 right-6 flex justify-center items-center gap-6' >
                        {isSubmitting ? "Enviando ..."
                            : <>
                                <span className='font-semibold'>Enviar</span>
                                <IonIcon icon={send}></IonIcon>
                            </>
                        }
                    </button>

                    {/* <IonButton className="" expand="block">Enviar</IonButton> */}

                </fetcher.Form>
            </IonContent>

        </IonPage>
    );
};

export default Contato;
