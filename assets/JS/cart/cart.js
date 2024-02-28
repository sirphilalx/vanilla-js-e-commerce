document.addEventListener("DOMContentLoaded", function () {
  // Your existing code for displaying cart items on the cart page
  // ...
});

document.addEventListener("DOMContentLoaded", function () {
  const cartItemsContainer = document.querySelector(".main_content");
  const clearAllButton = document.getElementById("clearAll");

  // Add event listener for the "Clear All" button
  clearAllButton.addEventListener("click", function () {
    // Clear all items in the cart (localStorage)
    clearCart();
    // Refresh the page to reflect the changes
    location.reload();
  });

  const storedCartItems = localStorage.getItem("cartItems");

  if (storedCartItems) {
    const cartItems = JSON.parse(storedCartItems);

    cartItems.forEach((item, index) => {
      const cartItemElement = document.createElement("div");
      cartItemElement.classList.add("sec_2");

      cartItemElement.innerHTML = `
                <div class="image_cont">
                    <img src="${item.image}" alt="${item.name}">
                    <p>${item.name}</p>
                </div>
                <p class="first">$${item.price}</p>
                <div class="Num">
                    <input type="number" value="${item.quantity}">
                </div>
                <p class="third">$${item.price * item.quantity}</p>
                
            `;

      cartItemsContainer.appendChild(cartItemElement);
    });
  }

  // Add event listener for the "Remove" buttons
  const removeButtons = document.querySelectorAll(".removeItem");
  removeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const indexToRemove = parseInt(button.getAttribute("data-index"));
      removeItemFromCart(indexToRemove);
      // Refresh the page to reflect the changes
      location.reload();
    });
  });
});

function removeItemFromCart(indexToRemove) {
  // Retrieve existing cart items from localStorage
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  // Remove the item at the specified index
  cartItems.splice(indexToRemove, 1);

  // Store the updated cart items back to localStorage
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

function clearCart() {
  // Clear all items in the cart (localStorage)
  localStorage.removeItem("cartItems");
}

document.addEventListener("input", function (event) {
  if (event.target.type === "number") {
    updateSubtotal(event.target);
  }
});

function updateSubtotal(input) {
  const parentSec = input.closest(".sec_2, .sec_3");
  const price = parseFloat(
    parentSec.querySelector(".first").textContent.replace("$", "")
  );
  const quantity = parseFloat(input.value);
  const subtotal = price * quantity;

  parentSec.querySelector(".third").textContent = `$${subtotal.toFixed(2)}`;
}

document.addEventListener("input", function (event) {
  if (event.target.type === "number") {
    updateCartTotal();
  }
});

function updateCartTotal() {
  const quantityInputs = document.querySelectorAll(".Num input");
  let total = 0;

  quantityInputs.forEach((input) => {
    const priceElement = input.parentNode.previousElementSibling;
    const quantity = input.value;
    const price = parseFloat(priceElement.textContent.replace("$", ""));
    const subtotal = quantity * price;
    total += subtotal;
  });

  const subtotalElement = document.getElementById("subtotal");
  subtotalElement.textContent = `$${total.toFixed(2)}`;

  const totalElement = document.getElementById("total");
  totalElement.textContent = `$${total.toFixed(2)}`;
}
