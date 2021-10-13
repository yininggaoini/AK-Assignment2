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
/*document.write(firstTag);*/
  
var daysNumber = 0;

var runCondition = 1;

for(var row=0;row<5;row++){
    var oTdDay = document.createElement("tr");

    if(firstTag==1){
        
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
        
    else if(firstTag>1 && firstTag<7){
        if(runCondition){

            for(var emptyPlace=1;emptyPlace<firstTag;emptyPlace++){
    
                var oGezi = document.createElement("td");
                var oEmpty = document.createTextNode("");
    
                oGezi.appendChild(oEmpty);                     
                oTdDay.appendChild(oGezi);
                oMontasTagen.appendChild(oTdDay);
                
            }
            runCondition= 0;
        }
        if(row==0){
            for(var cols=firstTag-1;cols<7;cols++){  
                    
                if(daysNumber<yearDays[9]){
                      
                    var oGezi = document.createElement("td");
                    var oTxt = document.createTextNode(daysNumber+1);
    
                    oGezi.appendChild(oTxt);
                    oTdDay.appendChild(oGezi);
                    oMontasTagen.appendChild(oTdDay);
                    daysNumber++;
            
                }
            }

        }else{

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
    }
   
}

