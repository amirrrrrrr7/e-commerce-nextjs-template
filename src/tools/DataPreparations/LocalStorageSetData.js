
export default function SetData (name, value){
    localStorage.setItem(
        name, JSON.stringify(value)
    );
}