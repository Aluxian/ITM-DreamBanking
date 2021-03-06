var fx = require('money');

var oxr = {
  "disclaimer": "Exchange rates are provided for informational purposes only, and do not constitute financial advice of any kind. Although every attempt is made to ensure quality, NO guarantees are given whatsoever of accuracy, validity, availability, or fitness for any purpose - please use at your own risk. All usage is subject to your acceptance of the Terms and Conditions of Service, available at: https://openexchangerates.org/terms/",
  "license": "Data sourced from various providers with public-facing APIs; copyright may apply; resale is prohibited; no warranties given of any kind. Bitcoin data provided by http://coindesk.com. All usage is subject to your acceptance of the License Agreement available at: https://openexchangerates.org/license/",
  "timestamp": 1401199803,
  "base": "USD",
  "rates": {
    "AED": 3.673034,
    "AFN": 57.093925,
    "ALL": 102.562801,
    "AMD": 416.005999,
    "ANG": 1.78706,
    "AOA": 97.657726,
    "ARS": 8.064858,
    "AUD": 1.079938,
    "AWG": 1.7875,
    "AZN": 0.7842,
    "BAM": 1.434954,
    "BBD": 2,
    "BDT": 77.490081,
    "BGN": 1.435324,
    "BHD": 0.377006,
    "BIF": 1547.590833,
    "BMD": 1,
    "BND": 1.255772,
    "BOB": 6.910426,
    "BRL": 2.23037,
    "BSD": 1,
    "BTC": 0.00179105,
    "BTN": 58.920601,
    "BWP": 8.715913,
    "BYR": 10082.016667,
    "BZD": 1.998099,
    "CAD": 1.085117,
    "CDF": 923.84,
    "CHF": 0.896229,
    "CLF": 0.023255,
    "CLP": 555.583102,
    "CNY": 6.227305,
    "COP": 1910.986667,
    "CRC": 552.531102,
    "CUP": 1.0003,
    "CVE": 80.46924,
    "CZK": 20.11629,
    "DJF": 178.65364,
    "DKK": 5.473776,
    "DOP": 43.1599,
    "DZD": 79.19165,
    "EEK": 11.66845,
    "EGP": 7.144463,
    "ERN": 14.952575,
    "ETB": 19.55489,
    "EUR": 0.733361,
    "FJD": 1.840554,
    "FKP": 0.594614,
    "GBP": 0.594614,
    "GEL": 1.76886,
    "GHS": 2.979842,
    "GIP": 0.594614,
    "GMD": 39.76,
    "GNF": 7036.91,
    "GTQ": 7.752583,
    "GYD": 204.631249,
    "HKD": 7.753102,
    "HNL": 19.103689,
    "HRK": 5.57065,
    "HTG": 45.12066,
    "HUF": 222.4713,
    "IDR": 11594.866667,
    "ILS": 3.479887,
    "INR": 58.82982,
    "IQD": 1177.2434,
    "IRR": 25527,
    "ISK": 113.18,
    "JEP": 0.594614,
    "JMD": 110.7154,
    "JOD": 0.708416,
    "JPY": 101.9427,
    "KES": 87.907489,
    "KGS": 52.5055,
    "KHR": 4039.382067,
    "KMF": 360.889962,
    "KPW": 900,
    "KRW": 1023.783341,
    "KWD": 0.281922,
    "KYD": 0.826715,
    "KZT": 184.405001,
    "LAK": 8050.983333,
    "LBP": 1511.75,
    "LKR": 130.400499,
    "LRD": 83.8861,
    "LSL": 10.35903,
    "LTL": 2.532048,
    "LVL": 0.5157,
    "LYD": 1.233881,
    "MAD": 8.219964,
    "MDL": 13.55566,
    "MGA": 2413.991667,
    "MKD": 45.18668,
    "MMK": 965.3636,
    "MNT": 1811.333333,
    "MOP": 7.986263,
    "MRO": 292.95098,
    "MTL": 0.683602,
    "MUR": 30.25473,
    "MVR": 15.44228,
    "MWK": 393.9161,
    "MXN": 12.86174,
    "MYR": 3.216115,
    "MZN": 31.478275,
    "NAD": 10.38173,
    "NGN": 162.515801,
    "NIO": 25.83093,
    "NOK": 5.958193,
    "NPR": 94.47239,
    "NZD": 1.170547,
    "OMR": 0.385032,
    "PAB": 1,
    "PEN": 2.789382,
    "PGK": 2.843658,
    "PHP": 43.78767,
    "PKR": 98.7933,
    "PLN": 3.050292,
    "PYG": 4425.656602,
    "QAR": 3.640959,
    "RON": 3.224418,
    "RSD": 84.77886,
    "RUB": 34.332,
    "RWF": 681.60464,
    "SAR": 3.750523,
    "SBD": 7.319527,
    "SCR": 12.24473,
    "SDG": 5.696965,
    "SEK": 6.630812,
    "SGD": 1.255596,
    "SHP": 0.594614,
    "SLL": 4323.666667,
    "SOS": 970.6968,
    "SRD": 3.308567,
    "STD": 17979.866667,
    "SVC": 8.74961,
    "SYP": 149.324998,
    "SZL": 10.38175,
    "THB": 32.61686,
    "TJS": 4.9041,
    "TMT": 2.85,
    "TND": 1.629104,
    "TOP": 1.859338,
    "TRY": 2.094762,
    "TTD": 6.454302,
    "TWD": 30.14246,
    "TZS": 1660.528333,
    "UAH": 11.89323,
    "UGX": 2533.221667,
    "USD": 1,
    "UYU": 23.06257,
    "UZS": 2285.663343,
    "VEF": 6.290975,
    "VND": 21135.216667,
    "VUV": 94.692501,
    "WST": 2.299661,
    "XAF": 481.378362,
    "XAG": 0.05190998,
    "XAU": 0.00078353,
    "XCD": 2.7015,
    "XDR": 0.648293,
    "XOF": 481.708201,
    "XPF": 87.565439,
    "YER": 214.987999,
    "ZAR": 10.39647,
    "ZMK": 5253.075255,
    "ZMW": 6.913286,
    "ZWL": 322.355006
  }
};

fx.base = oxr.base;
fx.rates = oxr.rates;

module.exports = fx;
