export function isEmptyOrSpaces(str: string): boolean {
  return str === null || str === undefined || str === "" || str.match(/^ *$/) !== null;
}

export const getUrl = (text: string) => {
  if (!text) return null;
  var content = text.trim();
  content = content.replace("http://", "");
  content = content.replace("https://", "");
  content = content.replace("www.", "");
  if (!content.includes(".com")) {
    content = content.replace(".com", "");
    content = content.replace(".com/", "");
    content = content + ".com/";

  }
  content = "https://www." + content;

  const a = document.createElement('a');
  a.href = content;
  const { protocol, host, pathname, search, hash } = a;
  const url = `${protocol}//${host}${pathname}${search}${hash}`;
  const isSameHost = (host === window.location.host);
  if (isSameHost) return null;

  return url;
};

export const handleGetAge = (idade: string) => {
  if (idade === undefined || idade === null) { return "Couldn't find" }
  const date = new Date();
  let valorIdades = idade.split("-");
  valorIdades = [valorIdades[0], valorIdades[1], ...valorIdades[2].split(" ")];

  const madeYear: number = parseInt(valorIdades[0])
  const currentYear: number = parseInt(date.getFullYear().toString());
  const age = currentYear - madeYear
  if (age > 1) {
    return age + " anos"
  }
  if (age === 1) {
    return age + " ano"
  }

  const madeMonth: number = parseInt(valorIdades[1])
  const currentMonth: number = parseInt(date.getMonth().toString()) + 1;
  const months = currentMonth - madeMonth;

  if (months > 1) {
    return months + ' meses';
  }
  if (months === 1) {
    return months + ' mes';
  }
  return "Menos de um mes"
}

export function verificarSeguranca(birth: string,risk:string) {
  const riskData = checkRisk(risk)
  const ageData = checkAge(birth)
  if (riskData.status == "BAD" || ageData.status == "BAD") return { status: "BAD", msg: "risco alto" }
  if (riskData.status == "MID" || ageData.status == "MID") return { status: "MID", msg: "suspeita de risco" }
  if (riskData.status == "OK" && ageData.status == "OK") return { status: "OK", msg: "risco bem baixo" }
    return { status: "ERROR", msg: "Algum informacao esta errado" };
}
function checkAge(birth: string) {
  const age = handleGetAge(birth);

  if (age.includes("anos")) return { status: "OK", msg: "risco bem baixo" }
  if (age == "1 ano") return { status: "OK", msg: "risco baixo" }
  if (age.includes("meses")) return { status: "MID", msg: "suspeita de risco" }
  if (age.includes("mes") || age.includes("Menos de um mes")) return { status: "BAD", msg: "risco alto" }
  return { status: "ERROR", msg: "Algum informacao esta errado" };
}

function checkRisk(risk: string) {
  let riskData=risk;
  const riskIndex = riskData.lastIndexOf("/");
  const riskLevel = parseInt(riskData.slice(0, riskIndex + 1));
  if (riskLevel==0)return {status:"OK",msg:"risco baixo"}
  if (riskLevel<=3)return {status:"MID",msg:"suspeita de risco"}
  if (riskLevel >= 5) return { status: "BAD", msg: "risco alto" }
  return { status: "ERROR", msg: "Algum informacao esta errado" };
}