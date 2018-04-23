function setup() {
	var km = milesToKm(26.3);
    print(km);
    
    var km2 = milesToKm(100);
    print(km2);
    
    var inr = dollarToRs(1799);
    print(inr);
}
function milesToKm(miles) {
    var km = miles * 1.6;
    return km;
}

function dollarToRs(dollar) {
    var rs = dollar * 64.90;
    return rs;
}
function draw() {

}