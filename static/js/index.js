document.getElementById("atalakitogomb").addEventListener("click", function (){
    var adat = "valamidasdasdasd";
    console.log(document.getElementById("exampleInputEmail1"))
    adat = parseInt(document.getElementById("exampleInputEmail1").value);
    let adat2 = adat.toString(2);
    let adat16 = adat.toString(16)
    let adat8 = adat.toString(8)
    document.getElementById("valasz").innerHTML = `Hexadecimális számrendszer: ${adat2}`;
    document.getElementById("valasz8").innerHTML = `Oktális számrendszer: ${adat8}`;
    document.getElementById("valasz16").innerHTML = `Hexadecimális számrendszer: ${adat16}`;
    document.getElementById("exampleInputEmail1").value = "";
})
