import Product from '../../../tp2-copy/src/components copy/Product'

const Products = ({ products }) => {
  return (
		<ul className="container py-1 d-flex flex-column gap-5 w-50">
			{products.map((product) => (
				<li className="no-bullets">
					<Product key={product.id} product={product} />
				</li>
			))}
		</ul>
  )
}

export default Products
