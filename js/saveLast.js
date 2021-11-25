var item = document.getElementById('lastName').value;
sessionStorage.setItem('lastName', item);

console.log(sessionStorage.getItem('lastName'));