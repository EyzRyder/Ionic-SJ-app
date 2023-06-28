export interface Idenuncia {
  number: number;
  text: string;
  link?: string;
}


export const denuncia:Idenuncia[] = [
  {
    "number": 1,
    "text": "Registre imediatamente a reclamação no site"
  },
  {
    "number": 2,
    "text": "Recupere os registros e protocolos para entrar em contato com a empresa"
  },
  {
    "number": 3,
    "text": "Registre as reclamações em sites de consumidores",
    "link":"http://www.reclameaqui.com.br/"
  },
  {
    "number": 4,
    "text": "Registre a reclamação no site do Procon / Ministério da Justiça",
    "link": "http://consumidor.gov.br/"
  },
  {
    "number": 5,
    "text": "Mantenha seu antivírus sempre atualizado também para bloquear programas maliciosos. Usando Software Livre você pode diminuir sua vulnerabilidade a golpes e ataques"
  },
]

export const perguntas = [
  {
    "_id": 111,
    "pergunta": "Como o aplicativo verifica a segurança de um URL?",
    "resposta": "O aplicativo utiliza uma combinação de técnicas de análise de ameaças, verificação de certificados SSL, consulta a bancos de dados de reputação de URLs e verificação de informações de registro do domínio para determinar o nível de segurança de um URL."
  },
  {
    "_id": 112,
    "pergunta": "Quais informações são fornecidas pelo aplicativo sobre um URL?",
    "resposta": "O aplicativo fornece o nível de risco associado ao URL, o tempo de registro do domínio e o nome da pessoa ou organização que registrou o domínio."
  },
  {
    "_id": 113,
    "pergunta": "Como o aplicativo determina o nível de risco de um URL?",
    "resposta": "O aplicativo utiliza uma análise abrangente de vários fatores, incluindo histórico de segurança do site, presença em listas de bloqueio, detecção de malware e phishing, entre outros, para determinar o nível de risco associado a um URL."
  },
  {
    "_id": 114,
    "pergunta": "O aplicativo fornece dicas sobre o que fazer se um URL for considerado perigoso?",
    "resposta": "Sim, o aplicativo fornece orientações sobre as melhores práticas de segurança online, juntamente com dicas específicas sobre o que fazer caso um URL seja considerado perigoso. Isso pode incluir evitar o acesso ao site, informar a ameaça apropriada às autoridades ou tomar medidas adicionais para proteger seus dados e dispositivos."
  },
  {
    "_id": 115,
    "pergunta": "O aplicativo possui uma página de contato para tirar dúvidas?",
    "resposta": "Sim, o aplicativo possui uma página de contato onde os usuários podem enviar suas dúvidas e perguntas relacionadas à segurança de URLs. A equipe de suporte do aplicativo estará disponível para fornecer assistência e esclarecer qualquer dúvida dos usuários."
  },

]