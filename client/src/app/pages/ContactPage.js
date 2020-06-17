import React, { } from 'react';

import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

import './ContactPage.scss';

const ContactPage = ({children}) => {
  return (
    <div className="page page--contact">
      <div className="container">
        <div className="row">
          <section class="mb-4 contact--page">

              <h2 class="h1-responsive font-weight-bold text-center my-4">Contacteer ons</h2>
              <p class="text-center w-responsive mx-auto mb-5">Hebt u een vraag? Stel deze dan zeker, onze werknemers zullen u zo snel mogelijk verder helpen</p>

              <div class="row">

                  
                  <div class="col-md-9 mb-md-0 mb-5">
                      <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                          
                          <div class="row">

                              
                              <div class="col-md-6">
                                  <div class="md-form mb-0">
                                      <label for="name" class="">Naam</label>
                                      <input type="text" id="name" name="name" class="form-control" />
                                  </div>
                              </div>
                              

                              
                              <div class="col-md-6">
                                  <div class="md-form mb-0">
                                      <label for="email" class="">E-mailadres</label>
                                      <input type="text" id="email" name="email" class="form-control" />
                                  </div>
                              </div>
                              

                          </div>
                          

                          
                          <div class="row">
                              <div class="col-md-12">
                                  <div class="md-form mb-0">
                                      <label for="subject" class="">Onderwep</label>
                                      <input type="text" id="subject" name="subject" class="form-control" />
                                  </div>
                              </div>
                          </div>
                          

                          
                          <div class="row">

                              
                              <div class="col-md-12">

                                  <div class="md-form">
                                      <label for="message">Bericht</label>
                                      <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                                  </div>

                              </div>
                          </div>

                      </form>

                      <div class="text-center text-md-left">
                          <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Verstuur</a>
                      </div>
                      <div class="status"></div>
                  </div>

                  <div class="col-md-3 text-center">
                      <ul class="list-unstyled mb-0">
                          <li><FaMapMarkerAlt />
                              <p>Boerenstraat 49, Lokeren</p>
                          </li>

                          <li><FaPhone />
                              <p>GSM: +32 40 18 23</p>
                              <p>TEL: 056 82 23 81</p>
                          </li>

                          <li><FaEnvelope />
                              <p>contact@genf.com</p>
                          </li>
                      </ul>
                  </div>

              </div>

          </section>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;