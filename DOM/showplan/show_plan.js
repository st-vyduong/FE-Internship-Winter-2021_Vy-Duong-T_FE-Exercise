
const container = document.createElement("div");
container.style.width = "800px";
container.style.margin = "0 auto";
container.style.textAlign = 'center';
document.body.appendChild(container);

const row = document.createElement("ul");
row.style.display = 'flex';
row.style.listStyle = 'none';
row.style.justifyContent = 'space-between';
container.appendChild(row);

for (var i=0; i<2; i++) {
  const col = document.createElement("li");
  col.className = 'col';
  col.style.width = 'calc(50% - 10px)';
  const card = document.createElement("div");
  card.className = 'card';
  card.style.boxShadow = 'rgba(0, 0, 0, 0.16) 0px 1px 4px';
  const title = document.createElement('h3');
  title.className = 'title';
  title.style.padding = '8px';
  title.style.margin = '0';
  title.style.backgroundColor = '#F8F8F8';
  const card_body = document.createElement("div");
  card_body.className = 'card_body';
  card_body.style.paddingBottom = '16px';
  const price = document.createElement('h3');
  price.className = 'price';
  const user = document.createElement('p');
  user.className = 'user';
  user.style.lineHeight = '10px';
  const gb = document.createElement('p');
  gb.className = 'gb';
  gb.style.lineHeight = '10px';
  const email = document.createElement('p');
  email.className = 'email';
  email.style.lineHeight = '10px';
  const help = document.createElement('p');
  help.className = 'help';
  help.style.lineHeight = '10px';
  const btn = document.createElement('button');
  btn.className = 'btn';
  btn.style.width = '100%';
  btn.style.fontSize = '16px';
  btn.style.padding = '8px 0';
  btn.style.fontWeight = 'bold';
  row.appendChild(col);
  col.appendChild(card);
  card.appendChild(title);
  card.appendChild(card_body);
  card.appendChild(btn);
  card_body.appendChild(price);
  card_body.appendChild(user);
  card_body.appendChild(gb);
  card_body.appendChild(email);
  card_body.appendChild(help);
}

const title = document.querySelectorAll('.card .title');
title[0].innerHTML = 'Basic';
title[1].innerHTML = 'Pro';

const price = document.querySelectorAll('.card .card_body .price');
price[0].innerHTML = '$10 / month';
price[1].innerHTML = '$30 / month';

const user = document.querySelectorAll('.card .card_body .user');
user[0].innerHTML = '10 users included';
user[1].innerHTML = '100 users included';

const gb = document.querySelectorAll('.card .card_body .gb');
gb[0].innerHTML = '2 GB of storage';
gb[1].innerHTML = '20 GB of storage';

const email = document.querySelectorAll('.card .card_body .email');
email[0].innerHTML = 'Email support';
email[1].innerHTML = 'Priority email support';

const help = document.querySelectorAll('.card .card_body .help');
email[0].innerHTML = 'Help center access';
email[1].innerHTML = 'Help center access';

const btn = document.querySelectorAll('.card .btn');
btn[0].innerHTML = 'Get Started';
btn[0].style.border = '2px solid #007bff';
btn[0].style.color = '#007bff';
btn[0].style.backgroundColor = '#FFFFFF';

btn[1].innerHTML = 'Buy Now';
btn[1].style.border = '2px solid #007bff';
btn[1].style.color = '#FFFFFF';
btn[1].style.backgroundColor = '#007bff';
