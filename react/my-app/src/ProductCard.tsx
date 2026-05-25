import "./ProductCard.css";
type ProductProps = {
  name: string
  price: number
  description: string
  image: string
}

function ProductCard({
  name,
  price,
  description,
  image
}: ProductProps) {

  return (
    <div className="card h-100 shadow-sm"> 

      <img
        src={image}
        className="card-img-top"
        alt={name}
        height="220"
      />

      <div className="card-body">

        <h5 className="c-title">
          {name}
        </h5>

        <h6 className="text-primary">
          ₹ {price}
        </h6>

        <p className="card-text">
          {description}
        </p>

        <button className="btn btn-dark">
          Buy Now
        </button>

      </div>

    </div>
  )
}

export default ProductCard