const METHODS = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};

type requestProps = (url: string, options: any) => Promise<object>;

function queryStringify(data: object) {
  return Object.entries(data).reduce((acc, curr, index, arr) => {
    const key = curr[0];
    const value = curr[1];

    if (acc.length === 0) acc += "?";
    acc += key + "=" + value;
    if (index !== arr.length - 1) acc += "&";
    return acc;
  }, "");
}

export class HTTPTransport {
  get: requestProps = (url, options) => {
    return this.request(url, { ...options, method: METHODS.GET });
  };

  post: requestProps = (url, options = {}) => {
    return this.request(url, { ...options, method: METHODS.POST });
  };

  put: requestProps = (url, options) => {
    return this.request(url, { ...options, method: METHODS.PUT });
  };

  delete: requestProps = (url, options) => {
    return this.request(url, { ...options, method: METHODS.DELETE });
  };

  request = (
    url: string,
    options: {
      data?: any;
      method: string;
      headers: { [key: string]: string };
    },
    timeout: number = 5000
  ): Promise<object> => {
    const { method, data, headers } = options;

    return new Promise((resolve, reject) => {
      if (!method) {
        reject("No method");
        return;
      }
      let checkJsonContent = false;

      const xhr = new XMLHttpRequest();
      const isGet = method === METHODS.GET;

      xhr.open(method, isGet && !!data ? `${url}${queryStringify(data)}` : url);

      xhr.withCredentials = true;
      Object.keys(headers).forEach((key) => {
        if (key === "Content-type") checkJsonContent = true; // TODO: Переделать
        xhr.setRequestHeader(key, headers[key]);
      });

      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) resolve(xhr);
        else reject(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      if (timeout) {
        // @ts-ignore
        xhr.ontimeout = setTimeout(() => {
          reject(xhr);
        }, timeout);
      }

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        checkJsonContent ? xhr.send(JSON.stringify(data)) : xhr.send(data);
      }
    });
  };
}

export default new HTTPTransport();
