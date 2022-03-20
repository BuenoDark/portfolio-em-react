import "./prodlist.css"
import Product from "../product/product"
import {product} from "../../data"

const Prodlist = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title"> Criar & Renovar. </h1>
                <p className="pl-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus distinctio ex nostrum ipsum maiores 
                harum rerum deleniti similique expedita? Reiciendis ex</p>
            </div>
            <div className="pl-list">
            {product.map(item =>(<Product key={item.id} img={item.img} link={item.link}/>))}                
            </div>
        </div>
    )

} 

export default Prodlist