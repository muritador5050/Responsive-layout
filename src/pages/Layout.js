import { Link, Outlet } from 'react-router-dom';
import '../styles/Layout.css';
function Layout() {
  return (
    <>
      <header>
        <div className='container'>
          <nav className='nav'>
            <ul className='nav__list nav__list--mg-left'>
              <li className='nav__item '>
                <Link className='nav__link nav__link--decoration-none' to='/'>
                  puffers
                </Link>
              </li>
            </ul>
            <ul className='nav__list nav__list--primary'>
              <li className='nav__item'>
                <Link className='nav__link' to='/women'>
                  women
                </Link>
              </li>
              <li className='nav__item'>
                <Link className='nav__link' to='/men'>
                  men
                </Link>
              </li>

              <li className='nav__item'>
                <Link className='nav__link' to='/accessories'>
                  accessories
                </Link>
              </li>

              <li className='nav__item'>
                <Link className='nav__link' to='/sale'>
                  sale
                </Link>
              </li>

              <li className='nav__item'>
                <Link className='nav__link' to='/giftcard'>
                  Giftcard
                </Link>
              </li>
            </ul>
            <ul className='nav__list nav__list--mg-right'>
              <li className='nav__item'>
                <img className='nav__img' alt='user' />
                cart
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
      <footer className='footer'>
        <section className='footer__list list__one'>
          <article className='list__article'>
            <p className='list__text'>OUR STORY</p>
            <p>
              This is a space to welcome visitors to the site. Grab their
              attention with copy that clearly states what the site is about,
              and add an engaging image or video. This is a space to welcome
              visitors to the site. Grab their attention with copy that clearly
              states what the site is about, and add an engaging image or video.
            </p>
          </article>
        </section>

        <section className='footer__list list__two'>
          <article className='list__article'>
            <p className='list__text'> INFO & LOCATION</p>
            <p>
              500 Terry Francine Street San Francisco, CA 94158 info@mysite.com
              Tel: 123-456-7890
            </p>
          </article>
        </section>
        <section className=' footer__list list__three'>
          <article className='list__article'>
            <p className='list__text'>POLICY</p>
            <p>
              Privacy Policy Shipping & Returns Refund Policy Terms & Conditions
              Accessibility Statement FAQ
            </p>
          </article>
        </section>
        <section className='footer__list list__four'>
          <article className='list__article'>
            <p className='list__text'>SHOP</p>
            <ul>
              <li>Women</li>
              <li>Men</li>
              <li>Accessories</li>
              <li>Sale</li>
              <li>Giftcard</li>
            </ul>
          </article>
        </section>
        <section className='footer__list list__five'>
          <div className='cell'>
            <div className='cell__item'>cell one</div>
          </div>
          <div className='cell'>
            <div className='cell__item'>cell one</div>
          </div>
          <div className='cell'>
            <div className='cell__item'>cell one</div>
          </div>
          <div className='cell'>
            <div className='cell__item'>cell one</div>
          </div>
        </section>
        <div className='footer__last'>
          <div className='flex-page'>
            <h2 className='signup-text'> sign up for our news letter</h2>
            <div className='email-div'>
              <label className='email-label'>Your email *</label>
              <input type='email' name='email' className='email' />
              <span className='subscribe'>
                <input type='checkbox' />
                <label className='checkbox-text'>
                  Yes, subcribe me to your newsletter.
                </label>
              </span>
            </div>
            <button className='submit-btn'>submit</button>
          </div>
          <p className='copywright'>
            &copy;2035 by PUFFERS. Built by Abdulazeez Muritador
          </p>
        </div>
      </footer>
    </>
  );
}

export default Layout;
