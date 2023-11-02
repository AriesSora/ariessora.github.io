import Benefit from "../component/Benefit";
import 'bootstrap/dist/css/bootstrap.css';
import BestSelling from "../component/BestSelling";
import Banner from "../img/banner.jpeg"

export default function (){
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col text-center position-relative">
                        <img src={Banner} alt={'Product'} style={{ width: "1200px", height: "400px" }} className="rounded img-fluid" />

                        {/*<div className="position-absolute">*/}
                        {/*    Your Text Goes Here*/}
                        {/*</div>*/}
                    </div>

                </div>
            </div>

            <BestSelling />
            <Benefit />
        </>
    )
}