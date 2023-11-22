let numSign;
let wDay;
let typeAuto;
let hour;
let typeStreet;
document.getElementById("myButton").onclick = function () {
    numSign = document.getElementById("myInput").value;
    wDay = document.getElementById("myInput2").value;
   typeAuto = document.getElementById("myInput3").value;
    hour = document.getElementById("myInput4").value;
    typeStreet = document.getElementById("myInput5").value;

    if ((numSign == 1 || numSign == 2) && (wDay == "Segunda-feira") && (typeAuto == "Carro" || typeAuto == "Moto") && ((hour >= 7 && hour <= 10) || (hour >= 17 && hour <= 20)) && (typeStreet == "Áreas vermelhas" || typeStreet == "Vias limítrofes")) {
        document.getElementById("myH1").textContent = `Não pode passar :(`
    }

    else if ((numSign == 3 || numSign == 4) && (wDay == "Segunda-feira") && (typeAuto == "Carro" || typeAuto == "Moto") && ((hour >= 7 && hour <= 10) || (hour >= 17 && hour <= 20)) && (typeStreet == "Áreas vermelhas" || typeStreet == "Vias limítrofes")) {
        document.getElementById("myH1").textContent = `Não pode passar :(`
    }

    else if ((numSign == 5 || numSign == 6) && (wDay == "Segunda-feira") && (typeAuto == "Carro" || typeAuto == "Moto") && ((hour >= 7 && hour <= 10) || (hour >= 17 && hour <= 20)) && (typeStreet == "Áreas vermelhas" || typeStreet == "Vias limítrofes")) {
        document.getElementById("myH1").textContent = `Não pode passar :(`
    }

    else if ((numSign == 7 || numSign == 8) && (wDay == "Segunda-feira") && (typeAuto == "Carro" || typeAuto == "Moto") && ((hour >= 7 && hour <= 10) || (hour >= 17 && hour <= 20)) && (typeStreet == "Áreas vermelhas" || typeStreet == "Vias limítrofes")) {
        document.getElementById("myH1").textContent = `Não pode passar :(`
    }
   
    else if ((numSign == 9 || numSign == 0) && (wDay == "Segunda-feira") && (typeAuto == "Carro" || typeAuto == "Moto") && ((hour >= 7 && hour <= 10) || (hour >= 17 && hour <= 20)) && (typeStreet == "Áreas vermelhas" || typeStreet == "Vias limítrofes")) {
        document.getElementById("myH1").textContent = `Não pode passar :(`
    }

    else if ((typeAuto == "Caminhão") && ((hour >= 7 && hour <= 10) || (hour >= 17 && hour <= 20)) && (typeStreet == "Áreas vermelhas")) {
        document.getElementById("myH1").textContent = `Não pode passar :(`
    }

    else{
        document.getElementById("myH1").textContent = `Pode passar :)`
    }
}
