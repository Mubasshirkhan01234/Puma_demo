import React from 'react';
import './Footer.css';

const Footer = () => {
    return(
        <>

            <footer class="text-center text-lg-start text-muted">
                {/* Section: Social media */}
                <hr class="custom_hr"></hr>
                <section class="d-flex justify-content-center justify-content-lg-between p-4">
                <div class="me-5 d-none d-lg-block">
                    <span class="dark_copyright">Get connected with us on social networks:</span>
                </div>

                <div id="social_media">
                    <a href="https://www.facebook.com/PUMA/" target="_blank" class="me-4 link-secondary">
                    <i class="bi bi-facebook dark_copyright"></i>
                    </a>
                    <a href="https://twitter.com/PUMA" target="_blank" class="me-4 link-secondary">
                    <i class="bi bi-twitter dark_copyright"></i>
                    </a>
                    <a href="https://www.instagram.com/puma/" target="_blank" class="me-4 link-secondary">
                    <i class="bi bi-instagram dark_copyright"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/zomato/?originalSubdomain=in" target="_blank" class="me-4 link-secondary">
                    <i class="bi bi-linkedin dark_copyright"></i>
                    </a>
                    <a href="https://www.youtube.com/puma" target="_blank" class="me-4 link-secondary">
                    <i class="bi bi-youtube dark_copyright"></i>
                    </a>
                </div>
                </section>
                <hr class="custom_hr"></hr>


                {/* Section: Links */}
                <section class="">
                <div class="container text-center text-md-start mt-5">
                    <div class="row mt-3">
                    <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <h6 class="text-uppercase fw-bold mb-4 custom_white">
                        <i class="fas fa-gem me-3 text-secondary "></i>Puma
                        </h6>
                        <p class="custom_white">
                        Here you can Choose your favourite and stylish merchandise.
                        </p>
                    </div>

                    <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 about_puma">
                        <h6 class="text-uppercase fw-bold mb-4">
                        ABOUT PUMA
                        </h6>
                        <p>
                        <a href="#!" class="text-reset">Who We Are</a>
                        </p>
                        <p>
                        <a href="#!" class="text-reset">Blog</a>
                        </p>
                        <p>
                        <a href="#!" class="text-reset">Work With Us</a>
                        </p>
                        <p>
                        <a href="#!" class="text-reset">Investor Relations</a>
                        </p>
                        <p>
                        <a href="#!" class="text-reset">Report Fund</a>
                        </p>
                        <p>
                        <a href="#!" class="text-reset">Contact Us</a>
                        </p>
                    </div>

                    <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 about_puma">
                        <h6 class="text-uppercase fw-bold mb-4">
                        For Merchandise
                        </h6>
                        <p>
                        <a href="#!" class="text-reset">Partner With Us</a>
                        </p>
                        <p>
                        <a href="#!" class="text-reset">Apps For You</a>
                        </p>
                        <p>
                        <a href="#!" class="text-reset">Orders</a>
                        </p>
                        <p>
                        <a href="#!" class="text-reset">Help</a>
                        </p>
                    </div>

                    <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 about_puma">
                        <h6 class="text-uppercase fw-bold mb-4">
                        Learn More
                        </h6>
                        <p>
                        <a href="#!" class="text-reset">Privacy</a>
                        </p>
                        <p>
                        <a href="#!" class="text-reset">Security</a>
                        </p>
                        <p>
                        <a href="#!" class="text-reset">Terms</a>
                        </p>
                        <p>
                        <a href="#!" class="text-reset">Sitemap</a>
                        </p>
                    </div>

                    <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 dark_contact">
                        <h6 class="text-uppercase fw-bold mb-4 dark_contact">Contact</h6>
                        <p><i class="bi bi-house-door-fill"></i>Ground Floor 12A 94 Meghdoot Nehru Place New Delhi - India </p>
                        <p><i class="bi bi-envelope-fill"></i>companysecretary@puma.com</p>
                        <p><i class="bi bi-telephone-fill"></i>+91-011-40592373</p>
                        <p><i class="bi bi-printer-fill"></i>N.A.</p>
                    </div>
                    </div>
                </div>
                </section>

                {/* Copyright */}
                <div class="text-center p-4 dark_copyright" style={{backgroundColor: " rgba(0, 0, 0, 0.100)"}}>
                © 2023-24 Copyright:
                <a class="text-reset fw-bold" href="#">puma.com</a>
                </div>
            </footer>
        </>
    )
}

export default Footer;