import fetch, {Request, RequestInit} from 'node-fetch';

const getBody = async (request: Request): Promise<string> => {
    try {
        return request.text()
    } catch (e) {
        return "null";
    }
};

async function printRequest(request: Request) {
    return `${request.method} ${request.url} 
        \nHeader: ${JSON.stringify(Object.fromEntries(request.headers.entries()))} 
        \nBody: ${await getBody(request)}`;
}

export const fetchWrapped = async <T>(request: Request): Promise<T> => {
    const requestDetails = await printRequest(request.clone());
    try {
        console.error(`Call API with: ${requestDetails}`);
        const results = await fetch(request);

        const response = await results.text()
        try {
            return JSON.parse(response) as T;
        } catch (e) {
            const errMsg = `Error parsing response for ${requestDetails}: ${response}`;
            console.error(errMsg);
            throw new Error(errMsg);
        }
    } catch (error) {
        const errMsg = `Error fetching API for \nrequest: ${requestDetails} \nerror:${JSON.stringify(error)} ${error}`;
        console.error(errMsg);
        throw new Error(errMsg);
    }
}
