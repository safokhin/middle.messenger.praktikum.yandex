const METHODS = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};

type requestProps = (
  url: string,
  options: {
    [key: string]: any;
  }
) => void;

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
class HTTPTransport {
  get: requestProps = (url: string, options) => {
    const query = queryStringify(options.data);
    return this.request(
      url,
      { ...options, data: query, method: METHODS.GET },
      options.timeout
    );
  };

  post: requestProps = (url, options) => {
    const query = queryStringify(options.data);
    return this.request(
      url,
      { ...options, data: query, method: METHODS.POST },
      options.timeout
    );
  };

  put: requestProps = (url, options) => {
    const query = queryStringify(options.data);
    return this.request(
      url,
      { ...options, data: query, method: METHODS.POST },
      options.timeout
    );
  };

  delete: requestProps = (url, options) => {
    const query = queryStringify(options.data);
    return this.request(
      url,
      { ...options, data: query, method: METHODS.POST },
      options.timeout
    );
  };

  request = (
    url: string,
    options: { [key: string]: string },
    timeout = 5000
  ) => {
    const { method, data, headers } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url + data);
      if (headers) xhr.setRequestHeader(headers, "");

      xhr.onload = () => resolve(xhr);
      xhr.onabort = reject;
      xhr.onerror = reject;
      if (timeout) {
        // @ts-ignore
        xhr.ontimeout = setTimeout(() => {
          reject;
        }, timeout);
      }

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  };
}
