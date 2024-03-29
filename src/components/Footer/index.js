import React from "react";
import "./Footer.css";

const Footer = () => {
  const date = new Date().getFullYear();
  return (<footer>
        <footer class="footer">
          <div class="container bottom_border">
            <div class="row">
              <div class=" col-sm-4 col-md col-sm-4  col-12 col">
                <h5 class="headin5_amrc col_white_amrc pt2">INFOS DE CONTACT</h5>
                <p class="mb10">La Fédération Tunisienne de Wushu Kung-Fu est en charge d’organiser et de développer la pratique du Wushu en Tunisie.</p>
                <p><i class="fa fa-location-arrow"></i> 17, rue Tallyrand - 2ème étage - Lafayette 1002 Tunis </p>
                <p><i class="fa fa-phone"></i>  (+216) 71 280 117  </p>
                <p><i class="fa fa fa-envelope"></i> fed.wushu@yahoo.fr  </p>


              </div>


              <div class=" col-sm-4 col-md  col-6 col">

                <h5 class="headin5_amrc col_white_amrc pt2">Liens rapides</h5>
                <ul class="footer_ul_amrc">
                  <li><a href="http://www.cnot.org.tn" target="_blank">Comité National Olympique</a></li>
                  <li><a href="http://www.sport.tn" target="_blank">Ministere de Jeunesse et de Sport</a></li>
                  <li><a href="http://www.iwuf.org" target="_blank">Fédération internationnale de Wushu Kung Fu</a></li>
                </ul>
              </div>
              <div class=" col-sm-4 col-md  col-12 col">
                <h5 class="headin5_amrc col_white_amrc pt2">Suivez nous</h5>
                <ul class="footer_ul2_amrc">
                  <li><a href="."><i class="fab fa-twitter fleft padding-right"></i> </a><p>Twiter : <a href="." target="_blank">https://www.twiter.com/</a></p></li>
                  <li><a href="."><i class="fab fab fa-instagram fleft padding-right"></i> </a><p>Instagram : <a href="." target="_blank">https://www.instagram.com/</a></p></li>
                </ul>
              </div>
            </div>
          </div>


          <div class="container">
            <p class="text-center">Copyright FTWKF {date}</p>
            <p class="text-center">Developed by Ribat Advanced ICL</p>
            <ul class="social_footer_ul">
              <li><a href="https://www.facebook.com/La-F%C3%A9d%C3%A9ration-Tunisienne-de-wushu-kung-fu__%D8%A7%D9%84%D8%AC%D8%A7%D9%85%D8%B9%D8%A9-%D8%A7%D9%84%D8%AA%D9%88%D9%86%D8%B3%D9%8A%D8%A9-%D9%84%D9%84%D9%88%D9%88%D8%B4%D9%88-%D9%83%D9%88%D9%86%D8%BA-%D9%81%D9%88-524398237704092" target="_blank"><i class="fab fa-facebook"></i></a></li>
              <li><a href=""><i class="fab fa-twitter"></i></a></li>
              <li><a href=""><i class="fab fa-linkedin"></i></a></li>
              <li><a href=""><i class="fab fa-instagram"></i></a></li>
            </ul>
          </div>

        </footer>


      </footer>
  );
};

export default Footer;
