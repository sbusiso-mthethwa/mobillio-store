import React from 'react'

import { Helmet } from 'react-helmet'

import SectionHeading from '../components/section-heading'
import BlogPostCard from '../components/blog-post-card'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Mobillio Online Store</title>
        <meta property="og:title" content="Mobillio Online Store" />
      </Helmet>
      <div className="home-navbar">
        <header data-role="Header" className="home-header max-width-container">
          <div className="home-container01">
            <div className="home-container02">
              <div className="home-container03">
                <div className="home-navbar1">
                  <div className="home-container04"></div>
                  <div className="home-middle">
                    <div className="home-left">
                      <a href="#trending" className="home-text navbar-link">
                        SHOP
                      </a>
                      <a href="#trending" className="home-text01 navbar-link">
                        SPECIAL
                      </a>
                    </div>
                    <span className="navbar-logo-title">ESSENCE</span>
                    <div className="home-right">
                      <a href="#x1" className="home-text02 navbar-link">
                        ABOUT
                      </a>
                      <a
                        href="#contact details"
                        className="home-text03 navbar-link"
                      >
                        CONTACT
                      </a>
                    </div>
                  </div>
                  <div className="home-icons">
                    <div className="home-image"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-role="BurgerMenu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="home-mobile-menu">
            <div className="home-nav">
              <div className="home-container05">
                <span className="home-logo-center1">MOBILLIO</span>
                <div
                  data-role="CloseMobileMenu"
                  className="home-close-mobile-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="home-middle1">
                <span className="home-text04">SHOP</span>
                <span className="home-text05">LOOKBOOK</span>
                <span className="home-text06">SPECIAL</span>
                <span className="home-text07">ABOUT</span>
                <span className="home-text08">BLOG</span>
                <span className="home-text09">CONTACT</span>
              </div>
            </div>
            <div>
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div className="home-main">
        <div className="home-hero section-container">
          <div className="home-max-width max-width-container">
            <div className="home-hero1">
              <div className="home-container06">
                <div className="home-info"></div>
                <h1 className="home-text10">
                  <span className="Heading-1">
                    BLACK GLACIER
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>T-</span>
                  <span className="Heading-1">SHIRT</span>
                </h1>
                <div className="home-container07">
                  <span className="home-text15">FROM</span>
                  <span className="home-text16">R499</span>
                </div>
                <div className="home-btn-group">
                  <a href="#trending" className="home-link button">
                    Explore the collection
                  </a>
                </div>
              </div>
              <animate-on-reveal
                animation="pulse"
                duration="300ms"
                delay="0s"
                direction="normal"
                easing="ease-in"
                iteration="1"
              >
                <img
                  alt="image23271449"
                  src="/img-20240118-wa0118-removebg-preview-600h.png"
                  data-thq-animate-on-reveal="true"
                  className="home-image1"
                />
              </animate-on-reveal>
            </div>
          </div>
        </div>
        <div className="section-container column">
          <div className="max-width-container">
            <SectionHeading
              heading="SHOP BY CATEGORIES"
              subtitle="Start shopping based on the categories you are interested in"
            ></SectionHeading>
            <div className="home-cards-container">
              <div className="home-category-card">
                <a href="#trending" className="home-link1">
                  <img alt="image" src="/2-1100w.png" className="home-image2" />
                </a>
                <span className="home-text17">ESSENCE</span>
              </div>
              <div className="home-category-card1">
                <img
                  alt="image"
                  src="/untitled%20design%20(2)-1100w.jpg"
                  className="home-image3"
                />
                <span className="home-text18">AGNOBAYS</span>
              </div>
            </div>
          </div>
          <div className="home-banner">
            <div className="home-container08">
              <h3 className="home-text19 Heading-3">ESSENCE</h3>
              <span className="home-text20">
                <span></span>
                <span>MADE IN AFRICA</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container09 max-width-container">
            <div className="home-container10">
              <span className="home-text24">
                <span>
                  Mobilio Stores Inc. are unique reseller of modern furnitors,
                  designer-made,
                </span>
                <br></br>
                <span>home-decoration items, since 1997.</span>
                <br></br>
                <span>
                  Our legacy guarantees exceptional product quality, unique
                  designs and special prices for all of our product line-up.
                  Lorem ipsum, consectetur adipiscing elit duis tristique
                  sollicitudin nibh sit amet commodo nulla facilisi nullam
                  vehicula ipsum a arcu cursus vitae congue. Consectetur
                  adipiscing elit duis tristique sollicitudin nibh sit amet
                  commodo nulla facilisi nullam vehicula ipsum a arcu cursus
                  vitae congue
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <img
                alt="M3271427"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTk5JyBoZWlnaHQ9JzIwMCcgdmlld0JveD0nMCAwIDE5OSAyMDAnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CjxwYXRoIGQ9J00zNy4zMDI2IDcxLjI5MjVMOTkuMzgyNyAxODIuMzEzTDE2MS40NjMgNzEuMjkyNUwxNzUuNjIyIDIwMEgxOTguNzY1TDE3NS42MjIgMEw5OS4zODI3IDEzNy45NTlMMjMuMTQzOSAwTDAgMjAwSDIzLjE0MzlMMzcuMzAyNiA3MS4yOTI1WicgZmlsbD0nYmxhY2snIGZpbGwtb3BhY2l0eT0nMC4wNicvPgo8L3N2Zz4K"
                className="home-svg"
              />
              <button className="button">Read more</button>
            </div>
          </div>
        </div>
        <div className="section-container">
          <div id="trending" className="max-width-container">
            <div className="home-section-heading">
              <h1 className="home-text30 Heading-2">TRENDING ITEMS</h1>
              <span className="home-text31">
                Explore our monthly most trending products, new items and the
                best offers you can buy
              </span>
            </div>
            <div className="home-gallery">
              <div className="home-left1">
                <div className="home-gallery-card">
                  <img
                    alt="image"
                    src="/untitled%20design%20(4)-1400w.jpg"
                    className="home-image4"
                  />
                  <div className="home-container11">
                    <div className="home-container12"></div>
                  </div>
                </div>
              </div>
              <div className="home-right1">
                <div className="home-top">
                  <div className="home-left2">
                    <div className="home-gallery-card1">
                      <img
                        alt="image"
                        src="/whatsapp%20image%202024-01-18%20at%2013.50.55-1500w.jpeg"
                        className="home-image5"
                      />
                      <div className="home-container13">
                        <h3 className="home-text32">
                          <span>Essence Desert</span>
                          <br></br>
                          <br></br>
                          <span>T-Shirt</span>
                        </h3>
                        <div className="home-container14">
                          <svg viewBox="0 0 1024 1024" className="home-icon10">
                            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                          </svg>
                          <svg viewBox="0 0 1024 1024" className="home-icon12">
                            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                          </svg>
                          <svg viewBox="0 0 1024 1024" className="home-icon14">
                            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                          </svg>
                          <svg viewBox="0 0 1024 1024" className="home-icon16">
                            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                          </svg>
                          <svg viewBox="0 0 1024 1024" className="home-icon18">
                            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                          </svg>
                        </div>
                        <div className="home-container15">
                          <span className="home-currency">R</span>
                          <span className="home-value">499</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="home-right2">
                    <div className="home-gallery-card2">
                      <img
                        alt="image"
                        src="/whatsapp%20image%202024-01-18%20at%2013.50.56-1500w.jpeg"
                        className="home-image6"
                      />
                      <div className="home-container16">
                        <h3 className="home-text37">
                          <span>Essence Giraffe</span>
                          <br></br>
                          <br></br>
                          <span>T-Shirt</span>
                        </h3>
                        <div className="home-container17">
                          <svg viewBox="0 0 1024 1024" className="home-icon20">
                            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                          </svg>
                          <svg viewBox="0 0 1024 1024" className="home-icon22">
                            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                          </svg>
                          <svg viewBox="0 0 1024 1024" className="home-icon24">
                            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                          </svg>
                          <svg viewBox="0 0 1024 1024" className="home-icon26">
                            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                          </svg>
                          <svg viewBox="0 0 1024 1024" className="home-icon28">
                            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                          </svg>
                        </div>
                        <div className="home-container18">
                          <span className="home-currency1">R</span>
                          <span className="home-value1">499</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="home-bottom">
                  <div className="home-left3">
                    <div className="home-gallery-card3">
                      <img
                        alt="image"
                        src="/whatsapp%20image%202024-01-18%20at%2013.50.59-1500w.jpeg"
                        className="home-image7"
                      />
                      <div className="home-container19">
                        <h3 className="home-text42">
                          <span>Essence Field</span>
                          <br></br>
                          <br></br>
                          <span>T-Shirt</span>
                        </h3>
                        <div className="home-container20">
                          <svg viewBox="0 0 1024 1024" className="home-icon30">
                            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                          </svg>
                          <svg viewBox="0 0 1024 1024" className="home-icon32">
                            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                          </svg>
                          <svg viewBox="0 0 1024 1024" className="home-icon34">
                            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                          </svg>
                          <svg viewBox="0 0 1024 1024" className="home-icon36">
                            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                          </svg>
                          <svg viewBox="0 0 1024 1024" className="home-icon38">
                            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                          </svg>
                        </div>
                        <div className="home-container21">
                          <span className="home-currency2">R</span>
                          <span className="home-value2">499</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="home-right3">
                    <div className="home-gallery-card4">
                      <img
                        alt="image"
                        src="/whatsapp%20image%202024-01-18%20at%2013.51.01-1500w.jpeg"
                        className="home-image8"
                      />
                      <div className="home-container22">
                        <h3 className="home-text47">
                          <span>Essence B/w </span>
                          <br></br>
                          <br></br>
                          <span>T-Shirt</span>
                        </h3>
                        <div className="home-container23">
                          <svg viewBox="0 0 1024 1024" className="home-icon40">
                            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                          </svg>
                          <svg viewBox="0 0 1024 1024" className="home-icon42">
                            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                          </svg>
                          <svg viewBox="0 0 1024 1024" className="home-icon44">
                            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                          </svg>
                          <svg viewBox="0 0 1024 1024" className="home-icon46">
                            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                          </svg>
                          <svg viewBox="0 0 1024 1024" className="home-icon48">
                            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                          </svg>
                        </div>
                        <div className="home-container24">
                          <span className="home-currency3">R</span>
                          <span className="home-value3">600</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-blog section-container">
          <h1 className="home-text52">NOTICE!</h1>
          <div className="max-width-container">
            <SectionHeading
              heading="Our blog"
              subtitle="Read the latest news and furniture related articles"
              rootClassName="section-heading-root-class-name"
            ></SectionHeading>
            <div className="home-container25">
              <BlogPostCard
                imageSrc="https://images.unsplash.com/photo-1630585308572-f53438fc684f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE1fHxzb2ZhfGVufDB8fHx8MTY2Njc4MDYxMQ&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="blog-post-card-root-class-name"
              ></BlogPostCard>
              <BlogPostCard
                title="Unique natural color combinations"
                newProp="Unique natural color combinations"
                imageSrc="https://images.unsplash.com/photo-1550254478-ead40cc54513?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2fHxzb2ZhfGVufDB8fHx8MTY2Njc4MDYxMQ&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="blog-post-card-root-class-name1"
              ></BlogPostCard>
              <BlogPostCard
                title="Special combinations for nature lovers"
                newProp="Special combinations for nature lovers"
                imageSrc="https://images.unsplash.com/photo-1615800002234-05c4d488696c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDMwfHxzb2ZhfGVufDB8fHx8MTY2Njc4MDYzOQ&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="blog-post-card-root-class-name2"
              ></BlogPostCard>
            </div>
          </div>
        </div>
        <span className="home-text53">
          <span>
            We would like to extend our apologies regarding the Add to cart and
            Payment function.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>
            The site is still under construction but we did not want you to miss
            out on our amazing collection.
          </span>
          <br></br>
          <span>
            {' '}
            Should you wish to make an order please make use of our Contact
            details at the bottom of the page , all these numbers are available
            for Whatsapp.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>Thank you for understanding.</span>
        </span>
      </div>
      <div className="home-footer">
        <div className="max-width-container">
          <footer className="home-footer1">
            <div id="contact details" className="home-container26">
              <h3 className="home-text61 Heading-3">ESSENCE</h3>
              <span className="home-text62">
                <span>Durban </span>
                <br></br>
                <span>Johannesburg</span>
                <br></br>
              </span>
              <span className="home-text67">
                <span>(+27) 81 523 6750</span>
                <br></br>
                <span>(+27) 67 186 1948</span>
              </span>
              <span className="home-text71">
                sales@essencemadeinafrica.co.za
              </span>
            </div>
            <div className="home-links-container">
              <div className="home-container27">
                <span className="home-text72">Categories</span>
                <a href="#trending" className="home-link2">
                  Trending
                </a>
                <span className="home-text73">Agnobays</span>
                <span className="home-text74">Essence</span>
              </div>
              <div className="home-container28">
                <span className="home-text75">Resources</span>
                <a href="#contact details" className="home-link3">
                  Contact us
                </a>
                <a
                  href="mailto:sales@essencemadeinafrica.co.za?subject=Order"
                  className="home-link4"
                >
                  Order
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Home
