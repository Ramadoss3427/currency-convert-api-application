//exchange rate api key 
let API_Key = "7b43fdd693f245eb14643b40";

//exchange rate api to get details
let API = `https://v6.exchangerate-api.com/v6/${API_Key}/latest/USD`;

//Data copied from API
let API_Data = {
    "result": "success",
    "documentation": "https://www.exchangerate-api.com/docs",
    "terms_of_use": "https://www.exchangerate-api.com/terms",
    "time_last_update_unix": 1686009601,
    "time_last_update_utc": "Tue, 06 Jun 2023 00:00:01 +0000",
    "time_next_update_unix": 1686096001,
    "time_next_update_utc": "Wed, 07 Jun 2023 00:00:01 +0000",
    "base_code": "USD",
    "conversion_rates": {
        "USD": 1,
        "AED": 3.6725,
        "AFN": 87.4060,
        "ALL": 101.4083,
        "AMD": 386.9512,
        "ANG": 1.7900,
        "AOA": 602.4868,
        "ARS": 240.7994,
        "AUD": 1.5125,
        "AWG": 1.7900,
        "AZN": 1.7000,
        "BAM": 1.8268,
        "BBD": 2.0000,
        "BDT": 108.1996,
        "BGN": 1.8271,
        "BHD": 0.3760,
        "BIF": 2822.7889,
        "BMD": 1.0000,
        "BND": 1.3503,
        "BOB": 6.9366,
        "BRL": 4.9567,
        "BSD": 1.0000,
        "BTN": 82.5825,
        "BWP": 13.7177,
        "BYN": 2.7288,
        "BZD": 2.0000,
        "CAD": 1.3439,
        "CDF": 2188.3910,
        "CHF": 0.9071,
        "CLP": 798.6984,
        "CNY": 7.1136,
        "COP": 4341.7156,
        "CRC": 539.6068,
        "CUP": 24.0000,
        "CVE": 102.9911,
        "CZK": 22.0219,
        "DJF": 177.7210,
        "DKK": 6.9682,
        "DOP": 54.9268,
        "DZD": 136.6306,
        "EGP": 30.9011,
        "ERN": 15.0000,
        "ETB": 54.8596,
        "EUR": 0.9340,
        "FJD": 2.2431,
        "FKP": 0.8048,
        "FOK": 6.9682,
        "GBP": 0.8048,
        "GEL": 2.6162,
        "GGP": 0.8048,
        "GHS": 11.4229,
        "GIP": 0.8048,
        "GMD": 62.4910,
        "GNF": 8539.9377,
        "GTQ": 7.8440,
        "GYD": 211.5110,
        "HKD": 7.8381,
        "HNL": 24.6528,
        "HRK": 7.0375,
        "HTG": 140.2708,
        "HUF": 344.8530,
        "IDR": 14880.6989,
        "ILS": 3.7370,
        "IMP": 0.8048,
        "INR": 82.5826,
        "IQD": 1307.8698,
        "IRR": 42047.9406,
        "ISK": 141.1288,
        "JEP": 0.8048,
        "JMD": 154.9725,
        "JOD": 0.7090,
        "JPY": 139.5880,
        "KES": 138.6872,
        "KGS": 87.6365,
        "KHR": 4151.3169,
        "KID": 1.5125,
        "KMF": 459.5137,
        "KRW": 1304.1834,
        "KWD": 0.3077,
        "KYD": 0.8333,
        "KZT": 448.1998,
        "LAK": 18047.3070,
        "LBP": 15000.0000,
        "LKR": 290.3242,
        "LRD": 171.3342,
        "LSL": 19.2947,
        "LYD": 4.8309,
        "MAD": 10.2014,
        "MDL": 17.8234,
        "MGA": 4390.5846,
        "MKD": 57.5427,
        "MMK": 2106.8341,
        "MNT": 3491.5817,
        "MOP": 8.0732,
        "MRU": 34.4434,
        "MUR": 45.5369,
        "MVR": 15.4248,
        "MWK": 1029.7046,
        "MXN": 17.4791,
        "MYR": 4.5773,
        "MZN": 63.9690,
        "NAD": 19.2947,
        "NGN": 461.4445,
        "NIO": 36.6557,
        "NOK": 11.0386,
        "NPR": 132.1320,
        "NZD": 1.6474,
        "OMR": 0.3845,
        "PAB": 1.0000,
        "PEN": 3.6815,
        "PGK": 3.5471,
        "PHP": 56.2325,
        "PKR": 285.9800,
        "PLN": 4.1820,
        "PYG": 7208.0279,
        "QAR": 3.6400,
        "RON": 4.6444,
        "RSD": 109.6238,
        "RUB": 81.1716,
        "RWF": 1171.2461,
        "SAR": 3.7500,
        "SBD": 8.5058,
        "SCR": 13.3978,
        "SDG": 538.2381,
        "SEK": 10.8610,
        "SGD": 1.3503,
        "SHP": 0.8048,
        "SLE": 22.6581,
        "SLL": 22658.1090,
        "SOS": 569.0945,
        "SRD": 37.3351,
        "SSP": 984.2997,
        "STN": 22.8838,
        "SYP": 2515.6068,
        "SZL": 19.2947,
        "THB": 34.7968,
        "TJS": 10.9066,
        "TMT": 3.4999,
        "TND": 3.1178,
        "TOP": 2.3597,
        "TRY": 21.3153,
        "TTD": 5.9786,
        "TVD": 1.5125,
        "TWD": 30.6837,
        "TZS": 2368.0956,
        "UAH": 36.9267,
        "UGX": 3744.6835,
        "UYU": 38.9216,
        "UZS": 11387.2340,
        "VES": 26.4625,
        "VND": 23463.0956,
        "VUV": 119.7301,
        "WST": 2.7422,
        "XAF": 612.6849,
        "XCD": 2.7000,
        "XDR": 0.7524,
        "XOF": 612.6849,
        "XPF": 111.4599,
        "YER": 250.3134,
        "ZAR": 19.2816,
        "ZMW": 19.7747,
        "ZWL": 2722.0593
    }
}

//Get currency (Keys from object)
let KeysfromCurrencyrates = Object.keys(API_Data.conversion_rates);

//Get rates (values from object)
let ValuesfromCurrencyrates = Object.values(API_Data.conversion_rates);

//Access base currency 
let Basecurrency = document.querySelector(".base");

//add all currency and needed details to dropdown list
KeysfromCurrencyrates.forEach((currency,index) => {
    let Droplist = document.createElement("option");
    Droplist.innerText = `${currency}`;
    Droplist.value=`${ValuesfromCurrencyrates[index]}`
    Basecurrency.appendChild(Droplist);
})

//Access Target currency
let Targetcurrency = document.querySelector(".target");

//add all currency and needed details to target dropdown list
KeysfromCurrencyrates.forEach((currency,index) => {
    let Droplist = document.createElement("option");
    Droplist.innerText = `${currency}`
    Droplist.setAttribute("name",`${currency}`)
    Droplist.setAttribute("value1",`${currency}`)
    Droplist.value=`${ValuesfromCurrencyrates[index]}`
    Targetcurrency.appendChild(Droplist);
})

//function to convert currency
async function ConvertCurrency(){
    
    //Access Base currency
    let Base=document.querySelector(".base");

    //Access target currency
    let Target=document.querySelector(".target");
  
    //Access rate value to check
    let BaseNumber=document.querySelector(".basenumber");

    //Access output box
    let Amount=document.querySelector(".targetnumber");

    //calculation for output box
    Amount.value= ((BaseNumber.value/Base.value)*Target.value).toFixed(4)

    //Access currency to show
    let currency=document.querySelector(".currency");

    //target Currency 
    currency.innerText=`${Target.options[Target.selectedIndex].text}`
    
}

//Change currency - Convert amount changed to 1 and show converted amount
function Default(){
    let BaseNumber=document.querySelector(".basenumber");
    BaseNumber.value="1";
    ConvertCurrency();
}

//add enter key event
document.addEventListener("keyup", (event) => {
    if (event.key == "Enter") {
      ConvertCurrency();
    }
  });