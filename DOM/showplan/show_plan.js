
const $container = document.createElement('div');
$container.className = 'container';
document.body.appendChild($container);

const $row = document.createElement('ul');
$row.className = 'list-plan';
$container.appendChild($row);

for (var i=0; i<2; i++) {
  const $col = document.createElement('li');
  $col.className = 'list-plan-item';
  const $card = document.createElement('div');
  $card.className = 'plan-card';
  const $title = document.createElement('h3');
  $title.className = 'plan-card-title';
  const $cardBody = document.createElement('div');
  $cardBody.className = 'card_body';
  const $price = document.createElement('h3');
  $price.className = 'price';
  const $user = document.createElement('p');
  $user.className = 'user';
  const $gb = document.createElement('p');
  $gb.className = 'gb';
  const $email = document.createElement('p');
  $email.className = 'email';
  const $help = document.createElement('p');
  $help.className = 'help';
  const $btn = document.createElement('button');
  $btn.className = 'btn';
  $row.appendChild($col);
  $col.appendChild($card);
  $card.appendChild($title);
  $card.appendChild($cardBody);
  $card.appendChild($btn);
  $cardBody.appendChild($price);
  $cardBody.appendChild($user);
  $cardBody.appendChild($gb);
  $cardBody.appendChild($email);
  $cardBody.appendChild($help);
}

const $title = document.querySelectorAll('.plan-card .plan-card-title');
$title[0].innerHTML = 'Basic';
$title[1].innerHTML = 'Pro';

const $price = document.querySelectorAll('.plan-card .card_body .price');
$price[0].innerHTML = '$10 / month';
$price[1].innerHTML = '$30 / month';

const $user = document.querySelectorAll('.plan-card .card_body .user');
$user[0].innerHTML = '10 users included';
$user[1].innerHTML = '100 users included';

const $gb = document.querySelectorAll('.plan-card .card_body .gb');
$gb[0].innerHTML = '2 GB of storage';
$gb[1].innerHTML = '20 GB of storage';

const $email = document.querySelectorAll('.plan-card .card_body .email');
$email[0].innerHTML = 'Email support';
$email[1].innerHTML = 'Priority email support';

const $help = document.querySelectorAll('.plan-card .card_body .help');
$help[0].innerHTML = 'Help center access';
$help[1].innerHTML = 'Help center access';

const $btn = document.querySelectorAll('.plan-card .btn');
$btn[0].classList.add('get-btn');
$btn[0].innerHTML = 'Get Started';

$btn[1].classList.add('buy-btn');
$btn[1].innerHTML = 'Buy Now';
