let price = 100; // 塩コショウの価格

function increasePrice() {
  price += 10;
  document.getElementById("price").innerHTML = price + "円";
}

function decreasePrice() {
  price -= 10;
  document.getElementById("price").innerHTML = price + "円";
}
