var datum = new Date();
var aktuelJahr = datum.getFullYear();
var aktuelMonat = datum.getMonth();
var aktuelTag = datum.getDate();
var aktuelWochentag = datum.getDay();

var oInputYear = document.getElementById("jahr-input");
/*var oInputYear = 2021;*/
var oInputMonth = document.getElementById("monat-input");
var oButton = document.getElementById("search-button");
var oRefresh = document.getElementById("refresh-button");

var yearDays = "";
var normalYearDays = [31,28,31,30,31,30,31,31,30,31,30,31];
var leapYearDays = [31,29,31,30,31,30,31,31,30,31,30,31];
var wochenTag = ["Mon","Dien","Mitt","Donn","Frei","Sam","Sonn"];
var monatsArr = ["Jän","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nom","Dez"];

var oAktuleDatum = document.getElementById("actual-year-month");
var oMonatsTagen = document.getElementById("wochentag");
oAktuleDatum.innerText = aktuelJahr + '-' + monatsArr[aktuelMonat] + '-' + aktuelTag + ' ' +wochenTag[aktuelWochentag-1]; 

var printedDaysNumber = 0;
var runCondition = 1;



oButton.onclick = function(){
    var inputMonth = oInputMonth.value;
    inputMonth = parseInt(inputMonth);
    /*document.write(typeof(inputMonth));
    document.write(inputMonth);*/
    var inputYear = oInputYear.value;
    inputYear = parseInt(inputYear);
    
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
        
        var oTdDay = document.createElement("tr");     
        if(firstDatumWochenTag==1){      
            for(var cols=0;cols<7;cols++){      
                if(printedDaysNumber<yearDays[inputMonth-1]){
                    var oTData = document.createElement("td");
                    var oTDataTxt = document.createTextNode(printedDaysNumber+1);
            
                    oTData.appendChild(oTDataTxt);
                    oTdDay.appendChild(oTData);
                    oMonatsTagen.appendChild(oTdDay);
                    printedDaysNumber++;          
                }
            }
        }
            
        else if(firstDatumWochenTag>1 && firstDatumWochenTag<=7){         
            if(runCondition){   
                for(var emptyPlace=1;emptyPlace<firstDatumWochenTag;emptyPlace++){
                    var oTData = document.createElement("td");
                    var oEmpty = document.createTextNode("");   
                    oTData.appendChild(oEmpty);                     
                    oTdDay.appendChild(oTData);
                    oMonatsTagen.appendChild(oTdDay);            
                }
                runCondition= 0;
            }
    
            if(row==0){
                for(var cols=firstDatumWochenTag-1;cols<7;cols++){                
                    if(printedDaysNumber<yearDays[inputMonth-1]){             
                        tagenDrucken();  
                        printedDaysNumber++;      
                    }
                }
    
            }else{
                for(var cols=0;cols<7;cols++){                   
                    if(printedDaysNumber<yearDays[inputMonth-1]){                     
                        tagenDrucken(); 
                        printedDaysNumber++;        
                    }
                }
                
            }
        }
    }
    
    function tagenDrucken(){
        var oTData = document.createElement("td");
        var oTDataTxt = document.createTextNode(printedDaysNumber+1);
        oTData.appendChild(oTDataTxt);
        oTdDay.appendChild(oTData);
        oMonatsTagen.appendChild(oTdDay);  
    }

   function leapYearDetermine(inputYears){
        if((inputYears%100!==0 && inputYears%4==0)||(inputYears%100==0 && inputYears%400==0)){
            yearDays = leapYearDays;
            /*document.write("This is a leap year");*/
        }else{
            yearDays = normalYearDays;
            /*document.write("This is a normal year");*/
        }
    }
}


/* Nachdem Button wiedermal geklickt wird, wird diese Seite aktualisiert geworden. */
oRefresh.onclick = function(){
    location.reload();
}