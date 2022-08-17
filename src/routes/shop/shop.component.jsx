import { useContext } from "react";
import ProductCard from "../../components/product-cards/product-card-component";
import { ProductsContex } from "../../contexts/products.context";
import './shop.styles.scss';

const Shop = () => {
    const {products} = useContext(ProductsContex);
    return (
        <div className="products-container">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export default Shop;