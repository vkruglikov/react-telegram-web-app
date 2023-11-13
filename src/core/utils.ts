export const loadScript = (url: string): Promise<Event | true> => {
  return new Promise((resolve, reject) => {
    try {
      const list: HTMLCollectionOf<HTMLScriptElement> = document.getElementsByTagName('script');
      let i = list.length;
      let wasAlreadyFound = false;
      while (i--) {
        if (list?.[i]?.src === url) {
          wasAlreadyFound = true;
          break;
        }
      }

      if (!wasAlreadyFound) {
        const script = document.createElement('script');
        script.src = url;
        script.onload = resolve;
        script.onerror = reject;
        script.onabort = reject;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
      } else {
        resolve(true);
      }
    } catch (err) {
      reject(err);
    }
  });
};
