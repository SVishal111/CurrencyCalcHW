function currencyCalculate(){

    option = document.getElementById("oprOptions").value;

    currency = parseFloat(document.getElementById("num1").value);

    var resultRate;

    if (option=="INRUSD") {
        resultRate = currency * 0.012 + " USD";
    } else if (option=="INRJPY") {
        resultRate = currency * 1.79 + " JPY";
    } else if (option=="INREUR") {
        resultRate = currency * 0.011 + " EUR";
    } else if (option=="INRAED") {
        resultRate = currency * 0.044 + " AED";
    } else if (option=="USDINR") {
        resultRate = currency * 83.33 + " INR";
    } else if (option=="USDJPY") {
        resultRate = currency * 149.18 + " JPY";
    } else if (option=="USDEUR") {
        resultRate = currency * 0.92 + " EUR";
    } else if (option=="USDAED") {
        resultRate = currency * 3.67 + " AED";
    } else if (option=="JPYUSD") {
        resultRate = currency * 0.0067 + " USD";
    } else if (option=="JPYINR") {
        resultRate = currency * 0.56 + " INR";
    } else if (option=="JPYEUR") {
        resultRate = currency * 0.0061 + " EUR";
    } else if (option=="JPYAED") {
        resultRate = currency * 0.025 + " AED";
    } else if (option=="EURUSD") {
        resultRate = currency * 1.09 + " USD";
    } else if (option=="EURJPY") {
        resultRate = currency * 162.86 + " JPY";
    } else if (option=="EURINR") {
        resultRate = currency * 91.00 + " INR";
    } else if (option=="EURAED") {
        resultRate = currency * 4.01 + " AED";
    } else if (option=="AEDUSD") {
        resultRate = currency * 0.27 + " USD";
    } else if (option=="AEDJPY") {
        resultRate = currency * 40.60 + " JPY";
    } else if (option=="AEDEUR") {
        resultRate = currency * 0.25 + " EUR";
    } else if (option=="AEDINR") {
        resultRate = currency * 22.69 + " INR";
    } else {
        alert("Invalid Input!")
    }

    var firstCurrSign;

    if (option=="INRUSD") {
        firstCurrSign = " INR";
    } else if (option=="INRJPY") {
        firstCurrSign = " INR";
    } else if (option=="INREUR") {
        firstCurrSign = " INR";
    } else if (option=="INRAED") {
        firstCurrSign = " INR";
    } else if (option=="USDINR") {
        firstCurrSign = " USD";
    } else if (option=="USDJPY") {
        firstCurrSign = " USD";
    } else if (option=="USDEUR") {
        firstCurrSign = " USD";
    } else if (option=="USDAED") {
        firstCurrSign = " USD";
    } else if (option=="JPYUSD") {
        firstCurrSign = " JPY";
    } else if (option=="JPYINR") {
        firstCurrSign = " JPY";
    } else if (option=="JPYEUR") {
        firstCurrSign = " JPY";
    } else if (option=="JPYAED") {
        firstCurrSign = " JPY";
    } else if (option=="EURUSD") {
        firstCurrSign = " EUR";
    } else if (option=="EURJPY") {
        firstCurrSign = " EUR";
    } else if (option=="EURINR") {
        firstCurrSign = " EUR";
    } else if (option=="EURAED") {
        firstCurrSign = " EUR";
    } else if (option=="AEDUSD") {
        firstCurrSign = " AED";
    } else if (option=="AEDJPY") {
        firstCurrSign = " AED";
    } else if (option=="AEDEUR") {
        firstCurrSign = " AED";
    } else if (option=="AEDINR") {
        firstCurrSign = " AED";
    } else {
        alert("Invalid Input!")
    }    

    document.getElementById("resultShow").value=currency+firstCurrSign+" = "+resultRate ;
}