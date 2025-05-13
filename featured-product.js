const featuredImages = [
    "Forebollar-BallMarkers/1.jpg",
    "Forebollar-BallMarkers/2.jpg",
    "Forebollar-BallMarkers/3.jpg",
  ];
  
  const featuredProduct = {
    name: "Golfboll Marker/Line",
    price: 35,
    description: "Enkel bollmarkör och linesystem för bättre sikte och puttning. Perfekt för att markera din boll och linjera upp dina slag på greenen.",
  };
  
  const section = document.getElementById("featured-product-section");
  
  section.innerHTML = `
    <div style="display: flex; flex-wrap: wrap; justify-content: center; align-items: center; max-width: 1000px; margin: 40px auto;">
      <div style="flex: 1 1 300px; max-width: 400px; position: relative;">
        <img id="featured-img" src="${featuredImages[0]}" alt="Utvald produkt" style="width: 100%; border-radius: 10px;">
      </div>
      <div style="flex: 1 1 300px; padding: 20px;">
        <h2>${featuredProduct.name}</h2>
        <p style="font-size: 24px; color: green; font-weight: bold;">${featuredProduct.price} kr</p>
        <p>${featuredProduct.description}</p>
        <button onclick="addFeaturedToCart()" style="padding: 10px 20px; border: 2px solid black; background: transparent; cursor: pointer;">
          Lägg till i varukorg
        </button>
      </div>
    </div>
  `;
  
  let currentFeaturedIndex = 0;
  setInterval(() => {
    currentFeaturedIndex = (currentFeaturedIndex + 1) % featuredImages.length;
    document.getElementById("featured-img").src = featuredImages[currentFeaturedIndex];
  }, 3000);
  
  function addFeaturedToCart() {
    const product = {
      name: featuredProduct.name,
      price: featuredProduct.price.toFixed(2),
      quality: "Utvald"
    };
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartDisplay();
    alert(`${product.name} har lagts till i varukorgen!`);
  }  