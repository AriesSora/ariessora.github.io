import 'bootstrap/dist/css/bootstrap.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Footer() {

    const footers = [
        {}
    ];

    return (
        <>
            <div style={{backgroundColor: "grey", color: "white"}} className={'row text-center'}>
                <div className={'col-4'}>
                    Eco-mmerce
                </div>
                <div className={'col-4'}>
                    Our Story
                </div>
                <div className={'col-4'}>
                    <p style={{textDecoration: "underline"}}>Discover</p>
                    <p>About Us</p>
                    <p>Our Sustainability</p>
                </div>
            </div>
            <div className={'row flex-start'}>
                {/*<FontAwesomeIcon icon={} />*/}
            </div>
        </>
    )
}