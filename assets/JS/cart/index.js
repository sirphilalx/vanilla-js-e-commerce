document.addEventListener("DOMContentLoaded", function () {
  // Your existing code for adding items to the cart and showing notifications
  // ...

  // Click event for the cart notification to navigate to the cart page
  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("notification-circle")) {
      // Navigate to the cart page
      window.location.href = "cart.html";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const addToCartButtons = document.querySelectorAll(".addToCart");
  const cartIcon = document.querySelector(
    '.navRightItemsImages img[src="./assets/images/Cart1.png"]'
  );
  let notificationCount = 0;

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Increment the notification count
      notificationCount++;

      // Create a circular notification element with count
      const notification = document.createElement("div");
      notification.classList.add("notification-circle");
      notification.textContent = notificationCount;

      // Append the circular notification above the cart icon
      cartIcon.insertAdjacentElement("beforebegin", notification);

      // Get item details from the clicked product card
      const card = button.closest(".card");
      const itemName = card.querySelector(".cardTitle").innerText;
      const itemImage = card
        .querySelector(".cardImage img")
        .getAttribute("src");
      const itemPrice = parseFloat(
        card.querySelector(".newPrice").innerText.replace("$", "")
      );

      // Create an item object
      const item = {
        name: itemName,
        image: itemImage,
        price: itemPrice,
        quantity: 1,
      };

      // Add item to localStorage
      addItemToCart(item);

      // Remove the notification after a few seconds (you can customize the duration)
      setTimeout(() => {
        notification.remove();
      }, 99999);
    });
  });

  // Click event for the cart notification to navigate to the cart page
  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("notification-circle")) {
      // Navigate to the cart page
      window.location.href = "cart.html";
    }
  });

  function addItemToCart(item) {
    // Retrieve existing cart items from localStorage or initialize an empty array
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Add the new item to the cart
    cartItems.push(item);

    // Store the updated cart items back to localStorage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }
});
