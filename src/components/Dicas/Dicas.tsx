import { IonContent } from '@ionic/react';
import certificadoSeloSegurança  from "../../assets/ssh.png"
import faceBookClone from "../../assets/faceboockClone.png"

const Dicas: React.FC = () => {

    return (
        <IonContent class='dicasPage' >
            <div className='flex flex-col justify-center items-center gap-5'>
                <h1 className='font-bold text-2xl text-center'>
                    Confira o Domínio e a URL e Busque por Selos de Segurança
                </h1>
                <img src={certificadoSeloSegurança} alt="certificado de selo de segurança" />
                <p className='text-justify'>
                    Confira o cadeado apertando nele e veja se esta escrita “Conexão é segura” e confira também  depois do http se tiver um “s”.
                </p>
                <p className='text-justify'>
                    Sempre confire o Link no Url, pois os golpistas não podem usar o link orginal então fazem de tudo para aparecer colocando o nome e coisas em lugares onde não focaria normalmente como neste  exemplo do facebook falso, e ja de cara no lugar do cadeado esta um “não seguro”, mas as vezes pode parecer dizendo seguro pq compraram o direito do nome falso.
                </p>

                <img src={faceBookClone} alt="faceBook clone" />
            </div>
        </IonContent>
    );
};

export default Dicas;
