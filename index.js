const datum = new Date();
const aktuelJahr = datum.getFullYear();
const aktuelMonat = datum.getMonth();
const aktuelTag = datum.getDate();
var aktuelWochentag = datum.getDay();

if(aktuelWochentag==0){aktuelWochentag=7;}

const oInputYear = document.getElementById("jahr-input");
const oInputMonth = document.getElementById("monat-input");
const myregex = /^[0-9]*$/;  

const oButton = document.getElementById("search-button");
const oRefresh = document.getElementById("refresh-button");

var yearDays = "";
const normalYearDays = [31,28,31,30,31,30,31,31,30,31,30,31];
const leapYearDays = [31,29,31,30,31,30,31,31,30,31,30,31];
const wochenTag = ["Mon","Dien","Mitt","Donn","Frei","Sam","Sonn"];
const monatsArr = ["Jän","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nom","Dez"];

const oAktuleDatum = document.getElementById("actual-year-month");
const oMonatsTagen = document.getElementById("wochentag");
oAktuleDatum.innerText = 'Heute :'+ aktuelJahr + '-' + monatsArr[aktuelMonat] + '-' + aktuelTag + ' ' +wochenTag[aktuelWochentag-1]; 

var printedDaysNumber = 0;
var runCondition = 1;

var oTdDay;
var oTData;
var oEmpty;
var oTData;
var oTDataTxt;

oButton.onclick = function(){
    var inputMonth = oInputMonth.value;
    /*document.write(typeof(inputMonth));
    document.write(inputMonth);*/
    var inputYear = oInputYear.value;

    // Das Eingaben überprüfen, nur Nummer erlaubt.
    if(myregex.test(oInputYear.value)==false||myregex.test(oInputMonth.value)==false)
    alert("Bitte bei Jahr und Monat nur Nummer tippen");

    inputYear = parseInt(inputYear);
    inputMonth = parseInt(inputMonth);
    
    /*leapYearDetermine anrufen, um zu prüfen, das Jahr leap oder normales Jahr ist. */
    leapYearDetermine(inputYear);

    var firstDatumWeek = new Date(inputYear,inputMonth-1,1);
    var firstDatumWochenTag =firstDatumWeek.getDay();
    /*document.write(firstTag);*/

    oAktuleDatum.innerText = inputYear + '-' + monatsArr[inputMonth-1]; 

    if(firstDatumWochenTag==0) {  
        firstDatumWochenTag=7;   
    }
     
    for(var row=0;row<6;row++){
        
        oTdDay = document.createElement("tr");     
        // Der Fall, dass es keine freie Plätze vom Anfang hat.
        if(firstDatumWochenTag==1){      
            for(let cols=0;cols<7;cols++){      
                if(printedDaysNumber<yearDays[inputMonth-1]){
                    tagenDrucken();
                    printedDaysNumber++;          
                }
            }
        }
        
        else if(firstDatumWochenTag>1 && firstDatumWochenTag<=7){  
            // Leere Plätze vom Anfang des Kalenders drucken.       
            if(runCondition){   
                blankSpaceDruck(firstDatumWochenTag);
                runCondition= 0;
            }
            
            // Die restliche Plätze von 1. Zeile drucken.
            if(row==0){
                for(let cols=firstDatumWochenTag-1;cols<7;cols++){                
                    if(printedDaysNumber<yearDays[inputMonth-1]){             
                        tagenDrucken();  
                        printedDaysNumber++;      
                    }
                }
    
            }else{
                // restliche Zeile drucken.
                for(let cols=0;cols<7;cols++){                   
                    if(printedDaysNumber<yearDays[inputMonth-1]){                     
                        tagenDrucken(); 
                        printedDaysNumber++;        
                    }
                }
                
            }
        }
    }
    
    // Die Tagen drucken.
    function tagenDrucken(){
        oTData = document.createElement("td");
        oTDataTxt = document.createTextNode(printedDaysNumber+1);
        oTData.appendChild(oTDataTxt);
        oTdDay.appendChild(oTData);
        oMonatsTagen.appendChild(oTdDay);  
    }
    
    // Das eingegebene Jahr wird überprüft, ob es leap-year ist,oder nicht.
   function leapYearDetermine(inputYears){
       if((inputYears%100!==0 && inputYears%4==0)||(inputYears%100==0 && inputYears%400==0)){
            yearDays = leapYearDays;
            /*document.write("This is a leap year");*/
        }else{
            yearDays = normalYearDays;
            /*document.write("This is a normal year");*/
        }
    }

    function blankSpaceDruck(firstDatumWochenTag){
        for(let emptyPlace=1;emptyPlace<firstDatumWochenTag;emptyPlace++){
            oTData = document.createElement("td");
            oEmpty = document.createTextNode("");   
            oTData.appendChild(oEmpty);                     
            oTdDay.appendChild(oTData);
            oMonatsTagen.appendChild(oTdDay);            
        }
    }
}

/* Nachdem Button wiedermal geklickt wird, wird diese Seite aktualisiert geworden. */
oRefresh.onclick = function(){
    location.reload();
}