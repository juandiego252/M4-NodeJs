const IP = "192.168.100.212";
const PORT = 3000;
const URL = `http://${IP}:${PORT}/laptops`;

export const getAllLaptos = (fnRefreshList) =>{
    console.log("..laptops");
    fetch(URL).then((response)=>{
        return response.json();
    }).then((body)=>{
        fnRefreshList(body);
    })
}