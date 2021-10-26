
export default function PrepareAuthData(data){

    const body = {
        "data" : {
            "user" : data
        }
    };
    return JSON.stringify(body)
}