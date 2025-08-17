import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
    return (
      <div>
        <Link to="/some-route">Go to Some Route</Link>
        {/* Other code related to the Products component */}
      </div>
    );
  };

  useEffect(() => {
    setLoading(true);

    const customData = [
        {
            "id": 1,
            "title": "Wooden Plate",
            "price": 10,
            "description": "Experience the natural beauty and durability of our wooden plates. Crafted from sustainable wood like bamboo and acacia, these eco-friendly plates come in various sizes—ideal for appetizers (6-8 inches) or dinner courses (9-12 inches). Add a touch of rustic charm to your table while serving food safely and stylishly",
            "category": "Wooden Utensils",
            "image": "https://5.imimg.com/data5/SELLER/Default/2023/2/WS/HA/JF/35657532/acacia-wooden-plates-500x500.jpg",
            "rating": {
                "rate": 3.9,
                "count": 120
            }
        },
        {
            "id": 2,
            "title": "Wooden Glass ",
            "price": 5,
            "description": "Experience the unique fusion of modern style and natural charm. Crafted with a sleek glass interior and a durable wooden base, these eco-friendly glasses are available in 8 oz sizes, offering a stylish touch to your beverages. Enjoy the distinctive warmth and eco-conscious design of our wooden-based glasses",
            "category": "Wooden Utensils",
            "image": "https://m.media-amazon.com/images/I/710JFqgnrqL._AC_UL480_FMwebp_QL65_.jpg",
            "rating": {
                "rate": 4.1,
                "count": 259
            }
        },
        {
            "id": 3,
            "title": "Wooden Bowl",
            "price": 5,
            "description": "Discover the rustic elegance of our wooden bowls. Crafted from sustainable wood like bamboo or acacia, these bowls offer a natural and durable option for serving salads, soups, or snacks. Available in various sizes, these eco-friendly bowls bring a touch of warmth and organic beauty to your table setting.",
            "category": "Wooden Utensils",
            "image": "https://m.media-amazon.com/images/I/71p+Y0D9-ZL._AC_UL480_FMwebp_QL65_.jpg",
            "rating": {
                "rate": 4.7,
                "count": 500
            }
        },
        {
            "id": 4,
            "title": "Wooden Spoon",
            "price": 2,
            "description": "Experience the traditional craftsmanship of our wooden spoons. Hand-carved from quality wood, these spoons offer a natural and eco-friendly option for your kitchen. Perfect for stirring, serving, or cooking, these sturdy utensils bring a touch of rustic charm to your culinary experience.",
            "category": "Wooden Utensils",
            "image": "https://m.media-amazon.com/images/I/813qvDpAoGL._AC_UL480_FMwebp_QL65_.jpg",
            "rating": {
                "rate": 2.1,
                "count": 430
            }
        },
        {
            "id": 5,
            "title": "Copper Plates",
            "price": 20,
            "description": "Celebrate culinary elegance with our copper plates. Crafted from high-quality, food-grade copper, these plates offer a sophisticated way to present your meals. The lustrous finish and exceptional heat conductivity of copper elevate your dining experience, making them a stylish and functional addition to your tableware collection.",
            "category": "Copper Utensils",
            "image": "https://m.media-amazon.com/images/I/31gh24XcsYS._AC_UL480_FMwebp_QL65_.jpg",
            "rating": {
                "rate": 4.6,
                "count": 400
            }
        },
        {
            "id": 6,
            "title": "Copper Spoon ",
            "price": 5,
            "description": "Indulge in culinary finesse with our copper spoons. Meticulously crafted from high-quality copper, these spoons offer a touch of elegance to your kitchen. Ideal for stirring, serving, or adding a touch of sophistication to your dining experience, these durable and lustrous utensils are a must-have addition to your culinary tools",
            "category": "Copper Utensils",
            "image": "https://m.media-amazon.com/images/I/519swo-r86L._AC_UL480_FMwebp_QL65_.jpg",
            "rating": {
                "rate": 3.9,
                "count": 70
            }
        },
        {
            "id": 7,
            "title": "Copper Bowl",
            "price": 15,
            "description": "Experience culinary luxury with our copper bowls. Crafted from premium, food-safe copper, these bowls bring a touch of elegance to your kitchen. Ideal for serving salads, mixing ingredients, or presenting dishes, these durable and lustrous bowls add a sophisticated charm to your culinary collection.",
            "category": "Copper Utensils",
            "image": "https://m.media-amazon.com/images/I/71T4Qv8LZxL._AC_UL480_FMwebp_QL65_.jpg",
            "rating": {
                "rate": 3,
                "count": 400
            }
        },
        {
            "id": 8,
            "title": "Copper Jug",
            "price": 20,
            "description": "Elevate your serving experience with our copper jug. Meticulously crafted from high-quality, food-grade copper, this jug adds a touch of sophistication to your table. Ideal for serving beverages or as a decorative piece, its lustrous finish and durable build make it a stylish and functional addition to your home.",
            "category": "Copper Utensils",
            "image": "https://m.media-amazon.com/images/I/519AwJrjuzL._AC_UL480_FMwebp_QL65_.jpg",
            "rating": {
                "rate": 1.9,
                "count": 100
            }
        },
        {
            "id": 9,
            "title": "Clay Cooker",
            "price": 10,
            "description": "Unlock the essence of traditional cooking with our clay cooker. Handcrafted from natural, porous clay, this versatile kitchen essential tenderly infuses flavors into your dishes. Ideal for slow-cooking stews, soups, and roasts, our clay cooker ensures every meal is a masterpiece of rich taste and tender textures.",
            "category": "Clay Utensils",
            "image": "https://m.media-amazon.com/images/I/41tx2cBTViL._AC_UL480_FMwebp_QL65_.jpg",
            "rating": {
                "rate": 3.3,
                "count": 203
            }
        },
        {
            "id": 10,
            "title": "Clay Bowl",
            "price": 3,
            "description": "Discover the rustic charm of our clay bowls. Handcrafted from natural clay, these versatile bowls offer a unique way to present your meals. Perfect for serving salads, soups, or snacks, these earthy and textured bowls bring a touch of natural beauty to your dining experience.",
            "category": "Clay Utensils",
            "image": "https://m.media-amazon.com/images/I/61HXt-U1LmL._AC_UL480_FMwebp_QL65_.jpg",
            "rating": {
                "rate": 2.9,
                "count": 470
            }
        },
        {
            "id": 11,
            "title": "Clay kadai",
            "price": 8,
            "description": "Experience authentic cooking with our clay kadai. Crafted from natural clay, this traditional cooking vessel is designed to infuse rich flavors into your dishes. Ideal for sautéing, frying, or slow-cooking, our clay kadai ensures each dish is imbued with a taste of heritage and authenticity.",
            "category": "Clay Utensils",
            "image": "https://m.media-amazon.com/images/I/51n0K4YTWSL._AC_UL480_FMwebp_QL65_.jpg",
            "rating": {
                "rate": 4.8,
                "count": 319
            }
        },
        {
            "id": 12,
            "title": "Clay Plate",
            "price": 4,
            "description": "Embrace the simplicity and natural beauty of our clay plates. Handcrafted from natural clay, these plates offer a unique way to serve your favorite dishes. Ideal for presenting appetizers, salads, or main courses, these earthy and textured plates add a touch of rustic charm to your dining table",
            "category": "Clay Utensils",
            "image": "https://m.media-amazon.com/images/I/31afF5BPLWL._AC_UL480_FMwebp_QL65_.jpg",
            "rating": {
                "rate": 4.8,
                "count": 400
            }
        },
        {
            "id": 13,
            "title": "Clay glass",
            "price": 2,
            "description": "Discover our distinct clay-enhanced drinking glasses, blending modern style with a hint of natural charm. The smooth glass interior combined with a clay exterior adds a unique touch to your beverage enjoyment",
            "category": "Clay Utensils",
            "image": "https://m.media-amazon.com/images/I/31dPiZnSxWL._AC_SR320,320_.jpg",
            "rating": {
                "rate": 2.9,
                "count": 250
            }
        },
        {
            "id": 14,
            "title": "Clay POt ",
            "price": 5,
            "description": "Discover our clay water storage pots, a traditional and eco-friendly way to keep water fresh. Handcrafted from porous clay, these pots maintain cool temperatures, providing a refreshing drinking experience.",
            "category": "Clay Utensils",
            "image": "https://m.media-amazon.com/images/I/71sgFKauRtL._AC_UL480_FMwebp_QL65_.jpg",
            "rating": {
                "rate": 2.2,
                "count": 140
            }
        },
        {
            "id": 15,
            "title": "Iron Jug",
            "price": 15,
            "description": "Experience timeless sophistication with our iron jug. Crafted from high-quality iron, this jug is both elegant and functional, perfect for serving beverages or as a striking decor piece. The durable build and classic design make it an ideal addition to your table setting.",
            "category": "Iron Utensils",
            "image": "https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-jug/x/n/g/steel-jug-2-litre-farque-original-imagg79h4zbgm38d.jpeg?q=70",
            "rating": {
                "rate": 2.6,
                "count": 235
            }
        },
        {
            "id": 16,
            "title": "Iron Pan",
            "price": 20,
            "description": "Unleash the culinary artist in you with our iron pan. Crafted from high-quality iron, this versatile pan is a kitchen essential, ideal for searing, frying, and cooking your favorite dishes. Its durable construction and even heat distribution make it a reliable choice for every cooking adventure.",
            "category": "Iron Utensils",
            "image": "https://m.media-amazon.com/images/I/81J3SEAX32L._AC_UL480_FMwebp_QL65_.jpg",
            "rating": {
                "rate": 2.9,
                "count": 340
            }
        },
        {
            "id": 17,
            "title": "Iron Motar and Pastel",
            "price": 25,
            "description": "Discover our iron mortar and pestle set, perfect for crafting aromatic masalas. Precision-crafted from high-quality iron, this set efficiently grinds spices, preserving their rich flavors and aromas for your culinary creations.",
            "category": "Iron Utensils",
            "image": "https://m.media-amazon.com/images/I/41nyw7MyKML._AC_UL480_FMwebp_QL65_.jpg",
            "rating": {
                "rate": 3.8,
                "count": 679
            }
        },
        {
            "id": 18,
            "title": "Iron Kadai ",
            "price": 15,
            "description": "Experience culinary excellence with our iron kadai. Crafted from high-quality iron, this versatile cooking vessel is perfect for frying, sautéing, and preparing delicious dishes. Its robust build and even heat distribution make it an indispensable tool for every cooking enthusiast",
            "category": "Iron Utensils",
            "image": "https://m.media-amazon.com/images/I/21DsERlY3-L._AC_UL480_FMwebp_QL65_.jpg",
            "rating": {
                "rate": 4.7,
                "count": 130
            }
        },
        {
            "id": 19,
            "title": "Iron Knife",
            "price": 7,
            "description": "Discover our durable iron knife, crafted for precision and lasting sharpness. An essential tool for your kitchen, this sturdy knife, made from high-quality iron, ensures reliable performance for your everyday cooking needs.",
            "category": "Iron Utensils",
            "image": "https://m.media-amazon.com/images/I/519tnEUPhyL._AC_UL480_FMwebp_QL65_.jpg",
            "rating": {
                "rate": 4.5,
                "count": 146
            }
        },
        {
            "id": 20,
            "title": "Iron Pot",
            "price": 12,
            "description": "Indulge in the timeless charm of our iron tea pot. Crafted from high-quality iron, this elegant pot is designed to enhance your tea experience. With its classic design and durable build, it promises both style and functionality, offering a delightful brewing experience.",
            "category": "Iron Utensils",
            "image": "https://m.media-amazon.com/images/I/4135BZXr11L._AC_UL480_FMwebp_QL65_.jpg",
            "rating": {
                "rate": 3.6,
                "count": 145
            }
        }
    
    
      // Your provided custom data goes here
    ];

    setProducts(customData);
    setFilteredProducts(customData);
    setLoading(false);
  }, []);

  const filterProduct = (category) => {
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      const updatedList = products.filter((item) => item.category === category);
      setFilteredProducts(updatedList);
    }
  };

  const Loading = () => {
    return (
      <div>
        Loading...
      </div>
    );
  };

  const ShowProducts = () => {
  // Split the products into arrays of 3 items each
  const rows = [];
  for (let i = 0; i < filteredProducts.length; i += 5) {
    rows.push(filteredProducts.slice(i, i + 5));
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {filteredProducts.map((product) => (
        <div key={product.id} style={{ flex: '0 0 250px', margin: '10px', padding: '20px', border: '1px solid #ccc' }}>
          <div style={{ textAlign: 'center' }}>
            <h2>{product.title}</h2>
            <img
              src={product.image}
              alt={product.title}
              style={{
                width: '100%',
                height: 'auto',
                marginBottom: '10px',
              }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Description:</strong> {product.description}</p>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Rating:</strong> {product.rating.rate} ({product.rating.count} reviews)</p>
            <button onClick={() => addProduct(product)}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

  

  return (
    <div>
      <div>
        {/* Filter buttons */}
        <button onClick={() => filterProduct("All")}>All</button>
        <button onClick={() => filterProduct("Wooden Utensils")}>Wooden Utensils</button>
        <button onClick={() => filterProduct("Copper Utensils")}>Copper Utensils</button>
        <button onClick={() => filterProduct("Clay Utensils")}>Clay Utensils</button>
        <button onClick={() => filterProduct("Iron Utensils")}>Iron Utensils</button>
      </div>

      {loading ? <Loading /> : <ShowProducts />}
    </div>
  );
};

export default Products;
