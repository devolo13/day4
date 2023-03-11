// VISITOR COUNTER
var visCounter = document.getElementById('visCount');
visCounter = Math.floor(Math.random() * 100) + 1;
visCount.innerText = visCounter;

if (visCounter % 10 == 1 && visCounter % 10000 !== 11) {
  visCount.innerText += 'ST';
} else if (visCounter % 10 == 2 && visCounter % 100 !== 12) {
  visCount.innerText += 'ND';
} else if (visCounter % 10 == 3 && visCounter % 100 !== 13) {
  visCount.innerText += 'RD';
} else {
  visCount.innerText += 'TH';
}
if (visCounter === 69) {
  nice.innerText += ' nice';
}

// DVD LOGO
