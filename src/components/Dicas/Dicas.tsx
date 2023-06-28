import { IonContent } from '@ionic/react';
import certificadoSeloSegurança from "../../assets/ssh.png"
import faceBookClone from "../../assets/faceboockClone.png"

const Dicas: React.FC = () => {

    return (
        <IonContent class='dicasPage' style={{ '--background': 'var(--main-BG)' }} >
            <div className='flex flex-col justify-center items-center gap-5 mb-12'>
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
                <p>Verifique a conexão segura (SSL): Verifique se o site possui um certificado SSL válido. Procure por "https://" no início do URL e um ícone de cadeado na barra de endereços do navegador. Isso indica que a conexão entre você e o site é criptografada e mais segura.</p>
                <p>Pesquise informações sobre o site: Faça uma pesquisa online sobre o site em questão. Verifique se há algum histórico de problemas de segurança relatados por outros usuários. Procure por avaliações ou reclamações que possam indicar atividades fraudulentas ou suspeitas.</p>
                <p>Analise o design e o conteúdo do site: Observe a qualidade geral do design do site. Sites maliciosos ou fraudulentos podem ter uma aparência amadora ou desorganizada. Verifique também a qualidade e a precisão do conteúdo. Erros gramaticais, ortográficos ou informações inconsistentes podem ser indicadores de um site não confiável.</p>
                <p>Use ferramentas de verificação de reputação: Existem várias ferramentas online gratuitas que fornecem informações sobre a reputação de um site. Essas ferramentas podem indicar se o site está associado a atividades maliciosas, spam, phishing ou malware. Exemplos de ferramentas populares incluem o Google Safe Browsing e o Norton Safe Web.</p>
                <p>Considere a legitimidade do domínio: Verifique se o domínio do site é consistente com o conteúdo e o propósito do site. Tenha cuidado com sites que usam domínios semelhantes a marcas conhecidas, mas com erros ortográficos ou pequenas alterações. Esses sites podem tentar enganar os usuários e roubar informações.</p>
                <p>Avalie a política de privacidade: Verifique se o site possui uma política de privacidade clara e acessível. A política de privacidade deve informar como as informações dos usuários são coletadas, usadas e protegidas. Se o site não tiver uma política de privacidade ou se ela parecer inadequada, isso pode ser um sinal de alerta.</p>
                <p>Confie no seu instinto: Se algo parecer suspeito ou se você tiver dúvidas sobre a segurança do site, confie em seu instinto e evite compartilhar informações pessoais ou financeiras. É melhor prevenir do que remediar problemas de segurança mais tarde.</p>
                <p>Lembre-se de que essas dicas não garantem 100% de segurança, mas podem ajudar a reduzir o risco ao navegar na web. É importante manter-se atualizado sobre as melhores práticas de segurança online e utilizar software antivírus confiável em seu dispositivo.




                </p>
            </div>
        </IonContent>
    );
};

export default Dicas;
