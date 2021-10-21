const input = document.createElement('input');
const btn = document.createElement('button');
const p = document.createElement('p');

input.placeholder = 'nhập năm sinh';
p.innerHTML = 'Tuổi của bạn là: ';
btn.innerHTML = 'Tính tuổi';
btn.addEventListener('click', calculateAge);
function calculateAge() {
  var x = new Date().getFullYear() - input.value;
  p.innerHTML = 'Tuổi của bạn là: ' + x;
}

document.body.appendChild(input);
document.body.appendChild(btn);
document.body.appendChild(p);
