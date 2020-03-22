export const main = async () => {
    await new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.onload = (e) => {
            resolve();
        };
        script.onerror = (e) => {
            reject(e);
        };
        script.onabort = (e) => {
            reject(e);
        };
        script.src = '{{BASE_URL}}dist/js/jquery.2.1.4.js';
        document.getElementsByTagName('head')[0].appendChild(script);
    });
    await new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.onload = (e) => {
            resolve();
        };
        script.onerror = (e) => {
            reject(e);
        };
        script.onabort = (e) => {
            reject(e);
        };
        script.src = '{{BASE_URL}}dist/js/blowup.js';
        document.getElementsByTagName('head')[0].appendChild(script);
    });
    await new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.onload = (e) => {
            resolve();
        };
        script.onerror = (e) => {
            reject(e);
        };
        script.onabort = (e) => {
            reject(e);
        };
        script.src = '{{BASE_URL}}dist/js/blowrun.js';
        document.getElementsByTagName('head')[0].appendChild(script);
    });


};
