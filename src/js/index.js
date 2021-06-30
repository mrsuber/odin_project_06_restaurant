import _ from 'lodash';

import Icon from '../images/me_version6.jpg'

// loading all css
require('../css/bootstrap.min.css')
require('../css/font-awesome.min.css')
require('../css/animate.css')
require('../css/owl.carousel.css')
require('../css/owl.theme.default.min.css')
require('../css/magnific-popup.css')
// modified css
require('../css/styles.css')
//main css
require('../css/templatemo-style.css')
// end of css

// handdles particles



// preloader


// console.log(main.childElementCount)
// preloader
var section1 = document.createElement('div')
section1.innerHTML='<section class="preloader" > <div class="spinner"> <span class="spinner-rotate"></span></div></section>'
document.body.appendChild(section1)


// menu
var section2 = document.createElement('div')
section2.innerHTML='<section class="navbar custom-navbar navbar-fixed-top" role="navigation"> <div class="container"  > <div class="navbar-header" id="particles-js"> <!-- lOGO TEXT HERE --> <a href="index.html" class="navbar-brand"> Food<em class="folio">Folio</em> </a></div> <!-- MENU LINKS --> <a href="index.html" class="navbar-brand"> Food<em class="folio">Folio</em></a><button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"><span class="icon icon-bar"></span><span class="icon icon-bar"></span><span class="icon icon-bar"></span></button><div class="collapse navbar-collapse" ><ul class="nav navbar-nav navbar-nav-first"><li><a href="#home" class="smoothScroll">Home</a></li><li><a href="#gallery" class="smoothScroll">Food Gallery</a></li><li><a href="#about" class="smoothScroll">About</a></li><li><a href="#team" class="smoothScroll">Chef</a></li> <li><a href="#menu" class="smoothScroll">Menu</a></li><li><a href="#contact" class="smoothScroll">Contact</a></li> </ul><ul class="nav navbar-nav navbar-right"><li><a href="#">Call Now! <i class="fa fa-phone"></i> 010 020 0340</a></li><a href="#footer" class="section-btn">Reserve a table</a></ul></div></div></section>'
document.body.appendChild(section2)

var msb = document.querySelector('#particles-js');

window.onscroll = function(){
  if (window.pageYOffset>10){
    msb.remove('#particles-js');

  }
}
// home
var section3 = document.createElement('div')
section3.innerHTML='<!-- HOME --><section id="home" class="slider" data-stellar-background-ratio="0.5" ><div class="row" ><div class="owl-carousel owl-theme"><div class="item item-first" ><div class="caption" ><div class="container" ><div class="col-md-8 col-sm-12" ><h3>Eatery Cafe &amp; Restaurant</h3><h1>Our mission is to provide an unforgettable experience</h1><a href="#team" class="section-btn btn btn-default smoothScroll">Meet our chef</a></div></div> </div> </div> <div class="item item-second"><div class="caption"><div class="container"><div class="col-md-8 col-sm-12"><h3>Your Perfect Breakfast</h3><h1>The best dinning quality can be here too!</h1><a href="#menu" class="section-btn btn btn-default smoothScroll">Discover menu</a></div></div></div></div><div class="item item-third"><div class="caption"><div class="container"><div class="col-md-8 col-sm-12"><h3>New Restaurant in Town</h3><h1>Enjoy our special menus every Sunday and Friday</h1><a href="#contact" class="section-btn btn btn-default smoothScroll">Reservation</a></div></div></div></div></div></div></section>'
document.body.appendChild(section3)

// gallery section
var section4 = document.createElement('div')
section4.innerHTML='<section id="gallery" class="parallax-section"><div class="container"><div class="row"><div class="col-md-offset-2 col-md-8 col-sm-12 text-center"><h1 class="heading">Food Gallery</h1><hr class="hr"></div><div class="col-md-4 col-sm-4 wow fadeInUp" data-wow-delay="0.3s"><a href="../src/images/gallery-img1.jpg" class="image-popup"><img src="../src/images/gallery-img1.jpg" alt="gallery img" class="img-responsive"></a><div><h3>Lemon-Rosemary Prawn</h3><span>Seafood / Shrimp /Lemon</span></div><a href="../src/images/gallery-img2.jpg" class="image-popup"><img src="../src/images/gallery-img2.jpg" alt="gallery img" class="img-responsive"></a><div><h3>Lemon-Rosemary Vegetables</h3><span>Tomato / Rosemary / Lemon</span></div></div><div class="col-md-4 col-sm-4 wow fadeInUp" data-wow-delay="0.6s"><a href="../src/images/gallery-img3.jpg" class="image-popup"><img src="../src/images/gallery-img3.jpg" alt="gallery img" class="img-responsive"></a><div><h3>Lemon-Rosemary Bakery</h3><span>Bread / Rosemary / Orange</span></div></div><div class="col-md-4 col-sm-4 wow fadeInUp" data-wow-delay="0.9s"><a href="../src/images/gallery-img4.jpg" class="image-popup"><img src="../src/images/gallery-img4.jpg" alt="gallery img" class="img-responsive"></a><div><h3>Lemon-Rosemary Salad</h3><span>Chicken / Rosemary / Green</span></div><a href="../src/images/gallery-img5.jpg" class="image-popup"><img src="../src/images/gallery-img5.jpg" alt="gallery img" class="img-responsive"></a><div><h3>Lemon-Rosemary Pizza</h3><span>Pasta / Rosemary / Green</span></div></div></div></div></section>'
document.body.appendChild(section4)

// ABOUT
var section4 = document.createElement('div')
section4.innerHTML='<!-- ABOUT --><section id="about" data-stellar-background-ratio="0.5"><div class="container"><div class="row"><div class="col-md-6 col-sm-12"><div class="about-info"><div class="section-title wow fadeInUp" data-wow-delay="0.2s"><h4>Read our story</h4><h2>'+"We've"+' been Making The Delicious Foods Since 1999</h2></div><div class="wow fadeInUp" data-wow-delay="0.4s"><p>Our mission is not just to provide food for all classes of people but to eradicate famine where ever it might be.</p> <p>We have established our restaurant over 30 countries including African countries like Cameroon, Nigeria, south africa and looking forward to completing all over the world. we have a moto of where there is life, food is needed.Please tell people about <a href="#home">Food Folio</a>. Thank you.</p></div></div></div><div class="col-md-6 col-sm-12"><div class="wow fadeInUp about-image" data-wow-delay="0.6s"><img src="../src/images/about-image.jpg" class="img-responsive" alt=""></div></div></div></div></section>'
document.body.appendChild(section4)


// TEAM
var section5 = document.createElement('div')
section5.innerHTML='<!-- TEAM --><section id="team" data-stellar-background-ratio="0.5"> <div class="container"><div class="row"><div class="col-md-12 col-sm-12"><div class="section-title wow fadeInUp" data-wow-delay="0.1s"> <h2>Meet our chefs</h2><hr class="hr"><h4>They are nice &amp; friendly</h4></div></div><div class="col-md-4 col-sm-4"><div class="team-thumb wow fadeInUp" data-wow-delay="0.2s"><img src="../src/images/team-image1.jpg" class="img-responsive" alt=""><div class="team-hover"><div class="team-item"> <h4>Duis vel lacus id magna mattis vehicula</h4> <ul class="social-icon"><li><a href="#" class="fa fa-linkedin-square"></a></li><li><a href="#" class="fa fa-envelope-o"></a></li></ul></div></div></div><div class="team-info"><h3>New Catherine</h3><p>Kitchen Officer</p></div></div><div class="col-md-4 col-sm-4"><div class="team-thumb wow fadeInUp" data-wow-delay="0.4s"><img src="../src/images/team-image2.jpg" class="img-responsive" alt=""><div class="team-hover"><div class="team-item"> <h4>Cras suscipit neque quis odio feugiat</h4> <ul class="social-icon"><li><a href="#" class="fa fa-instagram"></a></li><li><a href="#" class="fa fa-flickr"></a></li></ul></div></div></div><div class="team-info"><h3>Lindsay Perlen</h3> <p>Owner &amp; Manager</p></div></div><div class="col-md-4 col-sm-4"><div class="team-thumb wow fadeInUp" data-wow-delay="0.6s"><img src="../src/images/team-image3.jpg" class="img-responsive" alt=""><div class="team-hover"><div class="team-item"><h4>Etiam auctor enim tristique faucibus</h4><ul class="social-icon"><li><a href="#" class="fa fa-github"></a></li><li><a href="#" class="fa fa-google"></a></li></ul></div></div></div><div class="team-info"><h3>Isabella Grace</h3><p>Pizza Specialist</p></div></div></div></div></section>'
document.body.appendChild(section5)


// TEAM
var section6 = document.createElement('div')
section6.innerHTML='<!-- MENU--><section id="menu" data-stellar-background-ratio="0.5"><div class="container"> <div class="row"> <div class="col-md-12 col-sm-12"><div class="section-title wow fadeInUp" data-wow-delay="0.1s"> <h2>Our Active Menus</h2> <hr class="hr"> <h4>Tea Time &amp; Dining</h4> </div></div> <div class="col-md-4 col-sm-6">  <!-- MENU THUMB -->  <div class="menu-thumb"><a href="../src/images/menu-image1.jpg" class="image-popup" title="American Breakfast"> <img src="../src/images/menu-image1.jpg" class="img-responsive" alt=""><div class="menu-info"><div class="menu-item"><h3>American Breakfast</h3><p>Tomato / Eggs / Sausage</p></div><div class="menu-price"><span>$25</span> </div> </div></a></div></div><div class="col-md-4 col-sm-6">   <!-- MENU THUMB --> <div class="menu-thumb"> <a href="images/menu-image2.jpg" class="image-popup" title="Self-made Salad"> <img src="../src/images/menu-image2.jpg" class="img-responsive" alt=""> <div class="menu-info"><div class="menu-item">  <h3>Self-made Salad</h3> <p>Green / Fruits / Healthy</p>  </div>  <div class="menu-price">  <span>$18</span> </div></div>  </a> </div>   </div> <div class="col-md-4 col-sm-6"> <!-- MENU THUMB -->  <div class="menu-thumb"> <a href="../src/images/menu-image3.jpg" class="image-popup" title="Chinese Noodle"><img src="../src/images/menu-image3.jpg" class="img-responsive" alt="">   <div class="menu-info">   <div class="menu-item"> <h3>Chinese Noodle</h3> <p>Pepper / Chicken / Vegetables</p>  </div>  <div class="menu-price">  <span>$34</span>    </div>   </div>   </a>  </div>  </div>  <div class="col-md-4 col-sm-6">     <!-- MENU THUMB -->   <div class="menu-thumb">    <a href="../src/images/menu-image4.jpg" class="image-popup" title="Rice Soup">   <img src="../src/images/menu-image4.jpg" class="img-responsive" alt="">   <div class="menu-info">    <div class="menu-item">  <h3>Rice Soup</h3> <p>Green / Chicken</p>  </div><div class="menu-price"> <span>$28</span>     </div>  </div>  </a>  </div>  </div> <div class="col-md-4 col-sm-6">  <!-- MENU THUMB -->  <div class="menu-thumb"> <a href="../src/images/menu-image5.jpg" class="image-popup" title="Project title">   <img src="../src/images/menu-image5.jpg" class="img-responsive" alt=""> <div class="menu-info"><div class="menu-item"> <h3>Deli Burger</h3>  <p>Beef / Fried Potatoes</p> </div><div class="menu-price"> <span>$46</span> </div> </div> </a></div> </div>  <div class="col-md-4 col-sm-6">    <!-- MENU THUMB -->  <div class="menu-thumb"> <a href="../src/images/menu-image6.jpg" class="image-popup" title="Project title">  <img src="../src/images/menu-image6.jpg" class="img-responsive" alt="">  <div class="menu-info"> <div class="menu-item">     <h3>Big Flat Fried</h3>     <p>Pepper / Crispy</p>  </div> <div class="menu-price">  <span>$30</span>   </div>   </div>     </a>  </div>      </div>  </div> </div></section>'
document.body.appendChild(section6)


// TESTIMONIAL
var section7 = document.createElement('div')
section7.innerHTML='<!-- TESTIMONIAL --><section id="testimonial" data-stellar-background-ratio="0.5"> <div class="overlay"></div><div class="container"><div class="row"> <div class="col-md-12 col-sm-12">   <div class="section-title wow fadeInUp" data-wow-delay="0.1s">  <h2>Testimonials</h2>  </div>   </div><div class="col-md-offset-2 col-md-8 col-sm-12">  <div class="owl-carousel owl-theme">      <div class="item"> <p>Firstly I just wanted to say thank you so much for all your work that went into both evenings for our Festival of Food and our Gala night at Tanks, we have had such great feedback especially on the food component of these events. I have loved dealing with you guys although I moved stages around and requested additional cocktails and Vodka you still made it all happen in the most amazing way!”</p>    <div class="tst-author">    <h4>Johnny Stephen</h4>     <span>Events Manager IOOF</span>         </div>   </div>    <div class="item">    <p>Hi Craig I wanted to thank you and your team on two very successful events, as always the catering and service were fantastic. Kind regards</p> <div class="tst-author">    <h4>Jessie White</h4> <span>VIP & Catering Manager UCI MTB World Championship</span>   </div>     </div> </div> </div>    </div></div></section>'
document.body.appendChild(section7)


// CONTACT
var section8 = document.createElement('div')
section8.innerHTML='<!-- CONTACT --><section id="contact" data-stellar-background-ratio="0.5">  <div class="container">     <div class="row"><!-- How to change your own map point   1. Go to Google Maps   2. Click on your location point   3. Click "Share" and choose "Embed map" tab   4. Copy only URL and paste it within the src="" field below-->  <div class="wow fadeInUp col-md-6 col-sm-12" data-wow-delay="0.4s">     <div id="google-map"> <iframe src="<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3979.3484591005144!2d9.283174400000002!3d4.151705599999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2scm!4v1625043149017!5m2!1sen!2scm" allowfullscreen></iframe>      </div>    </div> <div class="col-md-6 col-sm-12">    <div class="col-md-12 col-sm-12">    <div class="section-title wow fadeInUp" data-wow-delay="0.1s">  <h2>Contact Us</h2>   </div>  </div>   <!-- CONTACT FORM --> <form action="#" method="post" class="wow fadeInUp" id="contact-form" role="form" data-wow-delay="0.8s"> <!-- IF MAIL SENT SUCCESSFUL  // connect this with custom JS --> <h6 class="text-success">Your message has been sent successfully.</h6>     <!-- IF MAIL NOT SENT -->    <h6 class="text-danger">E-mail must be valid and message must be longer than 1 character.</h6>  <div class="col-md-6 col-sm-6">     <input type="text" class="form-control" id="cf-name" name="name" placeholder="Full name">   </div>  <div class="col-md-6 col-sm-6">    <input type="email" class="form-control" id="cf-email" name="email" placeholder="Email address">   </div>   <div class="col-md-12 col-sm-12"> <input type="text" class="form-control" id="cf-subject" name="subject" placeholder="Subject">   <textarea class="form-control" rows="6" id="cf-message" name="message" placeholder="Tell about your project"></textarea> <button type="submit" class="form-control" id="cf-submit" name="submit">Send Message</button>   </div>     </form>      </div> </div> </div></section>'
document.body.appendChild(section8)


// FOOTER
var section9 = document.createElement('div')
section9.innerHTML='<!-- FOOTER --><footer id="footer" data-stellar-background-ratio="0.5"> <div class="container" >   <div class="row"> <div class="col-md-3 col-sm-8"> <div class="footer-info"> <div class="section-title"> <h2 class="wow fadeInUp" data-wow-delay="0.2s">Find us</h2>  </div>  <address class="wow fadeInUp" data-wow-delay="0.4s">   <p><a href="#home">find us here</a> with respect to your country</p>  </address>   </div>  </div> <div class="col-md-3 col-sm-8">       <div class="footer-info">   <div class="section-title">  <h2 class="wow fadeInUp" data-wow-delay="0.2s">Reservation</h2>   </div>     <address class="wow fadeInUp" data-wow-delay="0.4s">  <p>090-080-0650 | 090-070-0430</p>  <p><a href="mailto:info@foodfolio.com">info@foodfolio.com</a></p> <p>LINE: Foodfolio237 </p>   </address>  </div> </div><div class="col-md-4 col-sm-8">   <div class="footer-info footer-open-hour"> <div class="section-title">  <h2 class="wow fadeInUp" data-wow-delay="0.2s">Open Hours</h2>  </div>    <div class="wow fadeInUp" data-wow-delay="0.4s"> <p>Monday: Closed</p>  <div>  <strong>Tuesday to Friday</strong>     <p>7:00 AM - 9:00 PM</p>  </div>   <div>  <strong>Saturday - Sunday</strong>    <p>11:00 AM - 10:00 PM</p>   </div>     </div>   </div></div><div class="col-md-2 col-sm-4">  <ul class="wow fadeInUp social-icon" data-wow-delay="0.4s"> <li><a href="#" class="fa fa-facebook-square" attr="facebook icon"></a></li> <li><a href="#" class="fa fa-twitter"></a></li>    <li><a href="#" class="fa fa-instagram"></a></li>   <li><a href="#" class="fa fa-google"></a></li>    </ul>    <div class="wow fadeInUp copyright-text" data-wow-delay="0.8s">  <p><br>Copyright &copy; 2018 <br>Your Company Name      <br><br>Design: <a rel="nofollow" href="http://templatemo.com" target="_parent">TemplateMo</a></p>    </div> </div> </div>  </div></footer>'
document.body.appendChild(section9)
