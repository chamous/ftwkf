import React from "react";
import "./Footer.css";
import { Link as link } from "react-router-dom";
const Footer = () => {
    const date = new Date().getFullYear();
    return (<footer>
                    
                        <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
                        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

                        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
                        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous"></link>

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
                        <h5 class="headin5_amrc col_white_amrc pt2">Quick links</h5>
                        <ul class="footer_ul_amrc">
                        <li><a href="http://www.cnot.org.tn">CNOT</a></li>
                        <li><a href="http://www.sport.tn">Ministere de Jeunesse et de Sport</a></li>
                        <li><a href="http://www.sport.tn">Fédération internationnale de Wushu Kung Fu</a></li>
                        </ul>
                        </div>
                        <div class=" col-sm-4 col-md  col-12 col">
                        <h5 class="headin5_amrc col_white_amrc pt2">Follow us</h5>

                        <ul class="footer_ul2_amrc">
                        <li><a href="."><i class="fab fa-twitter fleft padding-right"></i> </a><p>Twiter<a href=".">https://www.twiter.com/</a></p></li>
                        <li><a href="."><i class="fab fab fa-instagram fleft padding-right"></i> </a><p>instagram<a href=".">https://www.instagram.com/</a></p></li>
                        </ul>
                        </div>
                        </div>
                        </div>


                        <div class="container">

                        <p class="text-center">Copyright {date} | Designed  by <a href="">Ribat Advanced</a></p>

                        <ul class="social_footer_ul">
                        <li><a href="https://www.facebook.com/La-F%C3%A9d%C3%A9ration-Tunisienne-de-wushu-kung-fu__%D8%A7%D9%84%D8%AC%D8%A7%D9%85%D8%B9%D8%A9-%D8%A7%D9%84%D8%AA%D9%88%D9%86%D8%B3%D9%8A%D8%A9-%D9%84%D9%84%D9%88%D9%88%D8%B4%D9%88-%D9%83%D9%88%D9%86%D8%BA-%D9%81%D9%88-524398237704092"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href=""><i class="fab fa-twitter"></i></a></li>
                        <li><a href=""><i class="fab fa-linkedin"></i></a></li>
                        <li><a href=""><i class="fab fa-instagram"></i></a></li>
                        </ul>
                        </div>

                        </footer>


                        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
                        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>

             </footer>
    );
};

export default Footer;