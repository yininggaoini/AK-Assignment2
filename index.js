var datum = new Date();
var aktuelJahr = datum.getFullYear();
var aktuelMonat = datum.getMonth();
var aktuelTag = datum.getDate();
var aktuelWochentag = datum.getDay();

var kalenderJahr = 2021;

var yearDays = [31,28,31,30,31,30,31,31,30,31,30,31];

var oAktuleDatum = document.getElementById("actual-year-month");
var oMontasTagen = document.getElementById("monats-tagen");
oAktuleDatum.innerText = aktuelJahr + ' ' + aktuelMonat; 


    var firstDatum = new Date(kalenderJahr,aktuelMonat,1);
    var firstTag =firstDatum.getDay();
    document.write(firstTag);


var oTdDay = document.createElement("td");

/* five rows. */
for(var i=0;i<5;i++){

    /* 7 cols */
    for(var j=0;j<7;j++){
        
    }
}