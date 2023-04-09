export function isEmptyOrSpaces(str: string) {
  return str === null || str === undefined || str === "" || str.match(/^ *$/) !== null;
}

export const getUrl = (text: string) => {
  if (!text) return null;
  var content = text.trim();
  content = content.replace("http://", "");
  content = content.replace("https://", "");
  content = content.replace("www.", "");
  content = content.replace(".com", "");
  content = content.replace("/", "");
  content = "https://www."+content+".com/";

  const a = document.createElement('a');
  a.href = content;
  const { protocol, host, pathname, search, hash } = a;
  const url = `${protocol}//${host}${pathname}${search}${hash}`;
  const isSameHost = (host === window.location.host);
  if (isSameHost) return null;

  return url;
};
