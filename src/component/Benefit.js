import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faUndo, faCreditCard, faLeaf } from "@fortawesome/free-solid-svg-icons";

export default function () {

    const benefits = [
        { text: 'Carbon Neutral Delivery', icon: faTruck },
        { text: '30 Days Return Policy', icon: faUndo },
        { text: 'Secure Payment', icon: faCreditCard },
        { text: 'Sustainability Ensurance', icon: faLeaf },
    ];

    return (
        <div className="row text-center">
            {benefits.map((benefit, index) => (
                <div className="col" key={index}>
                    <FontAwesomeIcon icon={benefit.icon} />
                    <p>{benefit.text}</p>
                </div>
            ))}
        </div>
    );
}
