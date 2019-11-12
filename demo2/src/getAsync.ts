import { get } from "http";

const getAsync = (url: string): Promise<any> => {
    return new Promise<any>((resolve, reject) => {
        get(url, (resp) => {
            let data = '';
    
            resp.on('data', (chunk) => {
                data += chunk;
            });
    
            resp.on('end', () => {
                resolve(data);
            });
        }).on("error", (err) => {
            reject(err);
        });
    });
}

export { getAsync };