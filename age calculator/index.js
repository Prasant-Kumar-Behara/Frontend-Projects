function calculate(){
    let year;
    let month;
    let day;
    let cuurentDay = parseInt(cd.value.slice(8,10),10); //it is used to convert string into integer, decimal
    let cuurentMonth = parseInt(cd.value.slice(5,7),10);
    let cuurentYear = parseInt(cd.value.slice(0,4),10);
    console.log("current date:- " ,cuurentYear, cuurentMonth , cuurentDay);

    let birthDay = parseInt(bd.value.slice(8,10),10); //it is used to convert string into integer, decimal
    let birthMonth = parseInt(bd.value.slice(5,7),10);
    let birthYear = parseInt(bd.value.slice(0,4),10);
    console.log("DOB:- ", birthYear, birthMonth , birthDay);

    if(cuurentDay>=birthDay){
        day= cuurentDay - birthDay;
    }
    else{
      day = cuurentDay+ new Date(cuurentYear, cuurentMonth).getUTCDate() - birthDay;
      cuurentMonth--;
    }
    if(cuurentMonth>=birthMonth){
        month= cuurentMonth - birthMonth;
    }
    else{
      month=  cuurentMonth + 12 - birthMonth;
      cuurentYear--;
    }
 year = cuurentYear - birthYear;
 if(year<0){
    ageText.innerHTML = "kya re alag duniya k admi ho ka, sahi date dalo";
 }
 else{
    ageText.innerHTML = year + "Years," + month + "Months," + day + "Days Old ";
 }
}