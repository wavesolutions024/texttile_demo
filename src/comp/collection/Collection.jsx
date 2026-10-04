import Button from "../button/Button";
import "./Collection.scss";
import { FaEye } from "react-icons/fa";
const Collection = () => {
  return (
    <>
      <div class="collection_parent parent">
        <div class="collection_cont cont">
          <div class="left">
            <p className="sec_indi">
              FEATURED COLLECTION
            </p>
            <h1>Premium Fabrics <br/> for Modern Living</h1>
            <p>
              Explore our curated selection of high-quality fabrics, crafted for
              fashion, interiors and everyday elegance.
            </p>
            <Button />
          </div>
          <div class="right">
            <div class="card">
             
              <div class="image bg-img-cover">
                 <div class="eye"><FaEye /></div>
              </div>
              <h4>Cotton Blend Linen</h4>
             <p>
              Breathable | 280GSM
             </p>
            </div>
             <div class="card">
               
              <div class="image image2 bg-img-cover">
                 <div class="eye"><FaEye /></div>
              </div>
              <h4>Premium Cotton Twill</h4>
             <p>
              Soft Touch | 320GSM
             </p>
            </div>
             <div class="card">
               
              <div class="image image3 bg-img-cover">
                 <div class="eye"><FaEye /></div>
              </div>
              <h4>Textured Linen Blend</h4>
             <p>
              Natural Feel | 260GSM
             </p>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Collection;
