
export default function GetData (name) {

    return JSON.parse(localStorage.getItem(name))

}