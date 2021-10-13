var datum = new Date();
var aktuelJahr = datum.getFullYear();
var aktuelMonat = datum.getMonth();
var aktuelTag = datum.getDate();
var aktuelWochentag = datum.getDay();

var kalenderJahr = 2021;

var yearDays = [31,28,31,30,31,30,31,31,30,31,30,31];
var wochenTag = ["Mon","Dien","Mitt","Donn","Frei","Sam","Sonn"];

var oAktuleDatum = document.getElementById("actual-year-month");
var oMontasTagen = document.getElementById("wochentag");
oAktuleDatum.innerText = aktuelJahr + '-' + (aktuelMonat+1) + '-' + aktuelTag + ' ' +wochenTag[aktuelWochentag-1]; 


    var firstDatum = new Date(kalenderJahr,aktuelMonat,1);
    var firstTag =firstDatum.getDay();
    document.write(firstTag);


    
   /* for(var i=0;i<yearDays[9];i++){
        

            var oTdDay = document.createElement("td");
    
            var oTxt = document.createTextNode(i+1);
    
            oTdDay.appendChild(oTxt);
            oMontasTagen.appendChild(oTdDay);
         
        
}*/
var daysNumber = 0;

var oBreak = document.createTextNode("\r");




    for(var row=0;row<5;row++){

        var oTdDay = document.createElement("tr");
        for(var cols=0;cols<7;cols++){
            
            if(daysNumber<yearDays[9]){

                var oGezi = document.createElement("td");
                var oTxt = document.createTextNode(daysNumber+1);
        
                oGezi.appendChild(oTxt);
                oTdDay.appendChild(oGezi);
                oMontasTagen.appendChild(oTdDay);
                daysNumber++;
           
            }
        }
        
       
    }

