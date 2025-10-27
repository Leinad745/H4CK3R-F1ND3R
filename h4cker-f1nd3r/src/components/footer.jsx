import 'bootstrap/dist/css/bootstrap.min.css';
//import logo_new from '../assets/logo_new.png'   
import { Link } from 'react-router-dom';
import '../styles/footer.css';

export function Footer (){
    
    return (
    <footer>
      <link href="../styles/footer.css" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"/>
      <div className="footer">
          <div className="container">		
              <div className="row text-center">						
                  <div className="col-lg-12 col-sm-12 col-xs-12">
                      <div className="footer_menu">
                          <ul>
                              <li><Link to="/index">Home</Link></li>
                              <li><a href="#">About</a></li>
                              <li><a href="#">Service</a></li>
                              <li><a href="#">Works</a></li>
                              <li><a href="#">Contact</a></li>
                          </ul>
                      </div>						
                      <div className="footer_copyright">
                          <p>©2025 H4CK3R-F1ND3R. All Rights Reserved.</p>
                      </div>	
                      <div className="footer_profile">
                          <ul>
                              <li><a href="https://facebook.com"><i className="fa-brands fa-facebook"></i></a></li>
                              <li><a href="https://twitter.com" target="_blank"><i className="fa-brands fa-twitter"></i></a></li>
                              <li><a href="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a></li>
                              <li><a href="https://github.com"><i className="fa-brands fa-github"></i></a></li>
                          </ul>
                      </div>						
                  </div>						
              </div>				
          </div>
      </div>
    </footer>
    )

}

