const co2Data = [
    { 
        country: 'Japan', 
        emission: 9.13,
        flag: "https://www.worldometers.info/img/flags/ja-flag.gif"
    },
    { 
        country: 'United States', 
        emission: 17.74,
        flag: "https://www.worldometers.info/img/flags/us-flag.gif"
    },
    { 
        country: 'Brasil', 
        emission: 6.78,
        flag: "https://www.worldometers.info/img/flags/br-flag.gif"
    },
    { 
        country: 'China', 
        emission: 8.4,
        flag: "https://www.worldometers.info/img/flags/ch-flag.gif"
    },
    { 
        country: 'Russia', 
        emission: 13.79,
        flag: "https://www.worldometers.info/img/flags/rs-flag.gif"
    },
    { 
        country: 'Germany', 
        emission: 9.37,
        flag: "https://www.worldometers.info/img/flags/gm-flag.gif"
    },
    { 
        country: 'Iran', 
        emission: 10.13,
        flag: "https://www.worldometers.info/img/flags/ir-flag.gif"
    },
    { 
        country: 'Canada', 
        emission: 20.6,
        flag: "https://www.worldometers.info/img/flags/ca-flag.gif"
    },
    { 
        country: 'European Union', 
        emission: 7.46,
        flag: "https://www.nationsonline.org/flags_big/EU_lgflag.gif"
    }
];


co2Data.sort( function (a, b){
    if(a.emission < b.emission) return 1;
    if(a.emission > b.emission) return -1;
    return 0;
});
document.addEventListener("DOMContentLoaded", function lista(){
    for(let i = 0; i < co2Data.length; i++){
    const lista = document.querySelector("#emission");
    let li = document.createElement("li");
    li.innerHTML = co2Data[i].emission + "t de CO2";
    lista.appendChild(li);
    }
    for(let i = 0; i < co2Data.length; i++){
        const lista = document.querySelector("#pais");
        let li = document.createElement("li");
        li.innerHTML = co2Data[i].country;
        li.className = "Pais"
        lista.appendChild(li);
    }
    for(let i = 0; i < co2Data.length; i++){
        const lista = document.querySelector("#img");
        let li = document.createElement("li");
        let img = document.createElement("img")
        img.src = co2Data[i].flag;
        lista.appendChild(img);
        }
});
