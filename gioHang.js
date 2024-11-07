function increment() {
  let quantityInput = document.getElementById("quantity");
  let currentValue = parseInt(quantityInput.value);
  quantityInput.value = currentValue + 1;
}

function decrement() {
  let quantityInput = document.getElementById("quantity");
  let currentValue = parseInt(quantityInput.value);
  if (currentValue > 1) {  // Giới hạn số lượng không nhỏ hơn 1
    quantityInput.value = currentValue - 1;
  }
}