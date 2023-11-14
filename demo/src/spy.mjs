// @ts-ignore
const WebView = window.Telegram.WebView;

const postEvent = WebView.postEvent;
const receiveEvent = WebView.postEvent;
const element = document.createElement('div');

WebView.postEvent = (...args) => {
  const [eventType, callback, eventData] = args;

  const asd = document.createElement('div');
  asd.innerHTML = `${eventType} -> ${JSON.stringify(eventData)}`

  element.appendChild(asd)
  element.scrollTop = element.scrollHeight;
  return postEvent(...args);
};
WebView.receiveEvent = (...args) => {
  const [eventType, callback, eventData] = args;

  console.log('--ФЫВ------------', eventType, callback, eventData);
  return receiveEvent(...args);
};

element.setAttribute(
  'style',
  'position:fixed;top:0;left:0;right:0;z-index:1000;background:#fff;height:80px;border-bottom:2px solid red;overflow: auto;',
);

document.body.appendChild(element);
