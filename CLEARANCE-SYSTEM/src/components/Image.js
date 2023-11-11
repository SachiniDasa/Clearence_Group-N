import Carousel from "react-bootstrap/Carousel";

import Img1 from "../Images/ed01.png";
import Img2 from "../Images/ed02.png";
import Img3 from "../Images/ed03.png";

function DarkVariantExample() {
  return (
    <div>
      
      <br />
      <br />
      
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img className="d-block w-100" src={Img1} alt="Image 1" 
          style={{ width: '120px', height: '400px' }}/>
          
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100" src={Img2} alt="Image 2"
            style={{ width: '120px', height: '400px' }}/>
                    
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" src={Img3}
             alt="Image 3"
            style={{ width: '120px', height: '400px' }}
            />
            
          
          
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default DarkVariantExample;
