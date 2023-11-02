import 'bootstrap/dist/css/bootstrap.css';
import tshirt from '../img/tshirt.avif';
import tshirt2 from '../img/tshirt2.webp';
import tshirt3 from '../img/tshirt3.webp';
import boxer from '../img/boxers.webp';
import underwear from '../img/underwear.png';

export default function () {
    const products = [
        {
            source: underwear, name: "underwear", description: "nothing", price: 10,
        },
        {
            source: tshirt, name: "underwear", description: "nothing", price: 10,
        },
        {
            source: tshirt2, name: "underwear", description: "nothing", price: 10,
        },
        {
            source: tshirt3, name: "underwear", description: "nothing", price: 10,
        },
        {
            source: boxer, name: "underwear", description: "nothing", price: 20,
        }
    ];

    return  (
        <>
            <div className={'container-fluid mt-3 p-2'} style={{backgroundColor: "#d9ead3"}}>
                <h5 className={'text-center'} style={{fontFamily: "sans-serif", fontWeight: "bold"}}>Best Sellers</h5>
                <div className={'row flex-nowrap overflow-x-scroll p-3'}>
                    {products.map((product, index) =>
                        <div className={'col-4 text-center'} key={index}>
                            <img src={product.source} alt={'Products'} style={{width: "300px", height: "300px"}} />
                            <p>{product.name}</p>
                            <p>{product.description}</p>
                            <p>Price: {product.price}</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}