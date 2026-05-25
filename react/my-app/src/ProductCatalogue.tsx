import ProductCard from "./ProductCard"

function ProductCatalogue() {

  const products = [
    {
      name: "Wireless Headphones",
      price: 2499,
      description: "High quality wireless sound experience.",
      image: "https://www.renderhub.com/geometry/wireless-headphones/wireless-headphones-03.jpg"
    },

    {
      name: "Smart Watch",
      price: 3999,
      description: "Track fitness and notifications easily.",
      image: "https://th.bing.com/th/id/OIP.sguP2V73AJiPPeHq6AIJWwHaEJ?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
    },

    {
      name: "Gaming Mouse",
      price: 1499,
      description: "RGB gaming mouse with fast response.",
      image: "https://img.freepik.com/premium-photo/flat-gaming-mouse-rgb-black-background-generative-ai_849906-5401.jpg"
    },

    {
      name: "Bluetooth Speaker",
      price: 1999,
      description: "Portable speaker with deep bass.",
      image: "https://tse2.mm.bing.net/th/id/OIP.91Yxl9xZIyrTrRm8kDTEbgHaFj?rs=1&pid=ImgDetMain&o=7&rm=3"
    },

    {
      name: "Laptop Bag",
      price: 999,
      description: "Stylish and water-resistant laptop bag.",
      image: "https://tse1.mm.bing.net/th/id/OIP.hw4pMubzrOCF6nCod_yvZAHaHa?pid=ImgDet&w=181&h=181&c=7&dpr=1.5&o=7&rm=3"
    },

    {
      name: "Mechanical Keyboard",
      price: 2999,
      description: "Smooth typing experience for professionals.",
      image: "https://tse3.mm.bing.net/th/id/OIP.A5rk45OhGd-Z7hzNJNPGTwHaH5?rs=1&pid=ImgDetMain&o=7&rm=3"
    }
  ]

  return (
    <div className="container mt-4">

            <h1 className="text-center mb-4 font fw-bold">Product Catalogue</h1>

      <div className="row">

        {products.map((product, index) => (

          <div className="col-lg-4 col-md-6 mb-4" key={index}>

            <ProductCard
              name={product.name}
              price={product.price}
              description={product.description}
              image={product.image}
            />

          </div>

        ))}

      </div>

    </div>
  )
}

export default ProductCatalogue