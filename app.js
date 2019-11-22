console.log(5);
(function calcWeight() {
var get, poundWeight, kiloWeight, convertBtn;

get = document.getElementById.bind(document);

poundWeight = get('Lbs-input');
kiloWeight = get('Kg-input');
convertBtn = get('btn');

convertBtn.addEventListener('click', function(){
kiloWeight.value = (poundWeight.value / 2.205).toFixed(2);
})



})();
