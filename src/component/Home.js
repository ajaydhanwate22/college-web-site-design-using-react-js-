import React from 'react'
import Images from './Images'
import Footer from './footer'


export default function Home() {
  return (
    <>
      <div class="example">
        <img src="https://learapress.netlify.app/img/banner/slide1.jpg" />
        <h2 >We Are Right Person For Your <br /> Education Teaching</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum et vero, commodi quidem quas sunt Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, cum?</p>
        <div className="button" style={{ position: "absolute", top: "80%", left: "8%", justifyContent: "space-between" }}>
          <button style={{ justifyContent: "space-between" }} type="button" class="btn btn-primary">Learn More</button>
          <button type="button" class="btn btn-danger">Contact us</button>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1 style={{ fontWeight: '700', marginTop: '100px' }}>Welcome To Our Learapress</h1>
            <p style={{ fontWeight: '800' }}>Lorem ipsum dolor sit amet, justo nunc orci donec sagittis metus dapibus, erat ullamcorper odio augue eleifend, consequat enim ullamcorper magnis dignissim nec phasellus, Lorem ipsum dolor sit amet, justo nunc orci donec sagittis metus dapibus, erat ullamcorper odio augue eleifend, consequat enimLorem ipsum dolor sit amet, justo nunc orci donec sagittis metus dapibus, erat ullamcorper odio augue eleifend, consequat enim .</p>
            <button type="button" class="btn btn-warning">Warning</button>
          </div>
          <div className="col-6" style={{ marginTop: "50px", }}>
            <iframe width="500" height="300"
              src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe>
          </div>
        </div>
      </div>
      <div className="container-fluid" style={{ marginTop: "100px" }}>
        <h1 style={{ textAlign: 'center', fontWeight: '800' }}>Our Feature Course</h1>
        <img style={{ height: '500px', width: "100%", opacity: "0.8" }} src="https://media.istockphoto.com/id/1214111373/photo/in-technology-research-facility-female-project-manager-talks-with-chief-engineer-they-consult.webp?b=1&s=170667a&w=0&k=20&c=qydp2Y_KdAnqgIzcLcbh6HcVTppWbimKRZD1ofgIEWc=" alt="" />
      </div>

      <div className="container" style={{ marginTop: "-200px" }}>
        <div className="row">
          <div className="col-4">
            <div class="card" style={{ width: "22rem" }}>
              <img src="https://learapress.netlify.app/img/courses/course_1.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <div className="d-flex">
                  <p style={{ fontWeight: "700", fontSize: "20px", color: "#f1c40f" }}>$550</p>
                  <div className='ms-auto' style={{ color: "#f1c40f" }}>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                  </div>
                </div>
                <h5 style={{ fontWeight: "700" }} class="card-title">Affiliate Marketing</h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi?</p>
                <div className="d-flex" style={{ justifyContent: "space-between" }}>
                  <div>
                    <i style={{ color: "#f1c40f" }} class="fa-solid fa-user"></i>
                    <span style={{ fontSize: "18px", marginLeft: "5px" }}>22 Seats</span>
                  </div>
                  <div>
                    <p style={{ fontSize: "18px" }}>3 Hours</p>
                  </div>
                  <div>
                    <i style={{ color: "#f1c40f" }} class="fa-solid fa-heart"></i>
                    <span style={{ fontSize: "18px", fontWeight: "400", marginLeft: "5px" }}>Save</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div class="card" style={{ width: "22rem" }}>
              <img src="https://learapress.netlify.app/img/courses/course_2.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <div className="d-flex">
                  <p style={{ fontWeight: "700", fontSize: "20px", color: "#f1c40f" }}>$350</p>
                  <div className='ms-auto' style={{ color: "#f1c40f" }}>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                  </div>
                </div>
                <h5 style={{ fontWeight: "700" }} class="card-title">Graphics Designer</h5>
                <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam.</p>
                <div className="d-flex" style={{ justifyContent: "space-between" }}>
                  <div>
                    <i style={{ color: "#f1c40f" }} class="fa-solid fa-user"></i>
                    <span style={{ fontSize: "18px", marginLeft: "5px" }}>22 Seats</span>
                  </div>
                  <div>
                    <p style={{ fontSize: "18px" }}>3 Hours</p>
                  </div>
                  <div>
                    <i style={{ color: "#f1c40f" }} class="fa-solid fa-heart"></i>
                    <span style={{ fontSize: "18px", fontWeight: "400", marginLeft: "5px" }}>Save</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div class="card" style={{ width: "22rem" }}>
              <img src="https://learapress.netlify.app/img/courses/course_4.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <div className="d-flex">
                  <p style={{ fontWeight: "700", fontSize: "20px", color: "#f1c40f" }}>$250</p>
                  <div className='ms-auto' style={{ color: "#f1c40f" }}>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                  </div>
                </div>
                <h5 style={{ fontWeight: "700" }} class="card-title">Web Development</h5>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className="d-flex" style={{ justifyContent: "space-between" }}>
                  <div>
                    <i style={{ color: "#f1c40f" }} class="fa-solid fa-user"></i>
                    <span style={{ fontSize: "18px", marginLeft: "5px" }}>22 Seats</span>
                  </div>
                  <div>
                    <p style={{ fontSize: "18px" }}>3 Hours</p>
                  </div>
                  <div>
                    <i style={{ color: "#f1c40f" }} class="fa-solid fa-heart"></i>
                    <span style={{ fontSize: "18px", fontWeight: "400", marginLeft: "5px" }}>Save</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="container" style={{ marginTop: "20px" }}>
        <div className="head" style={{ textAlign: "center" }}>
          <h1 style={{ fontWeight: '800' }}>Another Course</h1>
          <p style={{ fontSize: '20px', fontWeight: '500', marginTop: "30px" }}>Lorem ipsum dolor sit amet, lorem nibh lectus urna arcu, lorem erat semper, auctor suspendisse quisque molestie ut. Elit massa dui, leo enim magna. Cursus maecenas cubilia, ac nonummy, egestas mauris .</p>
        </div>
      </div>




      <div className="container ">
        <div className="row">
          <div className="col-4">
            <div class="card" style={{ width: "22rem" }}>
              <img src="https://learapress.netlify.app/img/courses/course_1.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <div className="d-flex">
                  <p style={{ fontWeight: "700", fontSize: "20px", color: "#f1c40f" }}>$550</p>
                  <div className='ms-auto' style={{ color: "#f1c40f" }}>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                  </div>
                </div>
                <h5 style={{ fontWeight: "700" }} class="card-title">Web Development</h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi?</p>
                <div className="d-flex" style={{ justifyContent: "space-between" }}>
                  <div>
                    <i style={{ color: "#f1c40f" }} class="fa-solid fa-user"></i>
                    <span style={{ fontSize: "18px", marginLeft: "5px" }}>22 Seats</span>
                  </div>
                  <div>
                    <p style={{ fontSize: "18px" }}>3 Hours</p>
                  </div>
                  <div>
                    <i style={{ color: "#f1c40f" }} class="fa-solid fa-heart"></i>
                    <span style={{ fontSize: "18px", fontWeight: "400", marginLeft: "5px" }}>Save</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div class="card" style={{ width: "22rem" }}>
              <img src="https://learapress.netlify.app/img/courses/course_2.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <div className="d-flex">
                  <p style={{ fontWeight: "700", fontSize: "20px", color: "#f1c40f" }}>$350</p>
                  <div className='ms-auto' style={{ color: "#f1c40f" }}>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                  </div>
                </div>
                <h5 style={{ fontWeight: "700" }} class="card-title">SEO</h5>
                <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam.</p>
                <div className="d-flex" style={{ justifyContent: "space-between" }}>
                  <div>
                    <i style={{ color: "#f1c40f" }} class="fa-solid fa-user"></i>
                    <span style={{ fontSize: "18px", marginLeft: "5px" }}>22 Seats</span>
                  </div>
                  <div>
                    <p style={{ fontSize: "18px" }}>3 Hours</p>
                  </div>
                  <div>
                    <i style={{ color: "#f1c40f" }} class="fa-solid fa-heart"></i>
                    <span style={{ fontSize: "18px", fontWeight: "400", marginLeft: "5px" }}>Save</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div class="card" style={{ width: "22rem" }}>
              <img src="https://learapress.netlify.app/img/courses/course_4.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <div className="d-flex">
                  <p style={{ fontWeight: "700", fontSize: "20px", color: "#f1c40f" }}>$250</p>
                  <div className='ms-auto' style={{ color: "#f1c40f" }}>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                  </div>
                </div>
                <h5 style={{ fontWeight: "700" }} class="card-title">Support Engineer</h5>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className="d-flex" style={{ justifyContent: "space-between" }}>
                  <div>
                    <i style={{ color: "#f1c40f" }} class="fa-solid fa-user"></i>
                    <span style={{ fontSize: "18px", marginLeft: "5px" }}>22 Seats</span>
                  </div>
                  <div>
                    <p style={{ fontSize: "18px" }}>3 Hours</p>
                  </div>
                  <div>
                    <i style={{ color: "#f1c40f" }} class="fa-solid fa-heart"></i>
                    <span style={{ fontSize: "18px", fontWeight: "400", marginLeft: "5px" }}>Save</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="container" style={{ textAlign: "center", marginTop: "40px" }}>
        <h1 style={{ fontWeight: "800" }}>Our Student Gallery</h1>
        <p style={{ fontSize: "20px" }}>Lorem ipsum dolor sit amet, lorem nibh lectus urna arcu, lorem erat semper, auctor suspendisse quisque molestie ut. Elit massa dui, leo enim magna. Cursus maecenas cubilia, ac nonummy, egestas mauris .</p>


      </div>
      <div className="container-fluid text-center" >

        <button type="button" class="btn btn-primary" style={{ margin: "8px", fontSize: "25px" }}>All</button>
        <button type="button" class="btn btn-primary" style={{ margin: "8px", fontSize: "25px" }}>Institute</button>
        <button type="button" class="btn btn-primary" style={{ margin: "8px", fontSize: "25px" }}>Library</button>
        <button type="button" class="btn btn-primary" style={{ margin: "8px", fontSize: "25px" }}>Entertainmen</button>
        <button type="button" class="btn btn-primary" style={{ margin: "8px", fontSize: "25px" }}>Classroom</button>
      </div>

      <div className="container">
        <div className="row" style={{ marginTop: "50px" }}>
          <div className="col-3">
            <div class="card" style={{ width: "18rem" }}>
              <img src="https://learapress.netlify.app/img/event/g1.jpg" class="card-img-top" alt="..." />
            </div>
          </div>
          <div className="col-3">
            <div class="card" style={{ width: "18rem" }}>
              <img src="https://learapress.netlify.app/img/event/g2.jpg " class="card-img-top" alt="..." />
            </div>
          </div>
          <div className="col-3">
            <div class="card" style={{ width: "18rem" }}>
              <img src="https://learapress.netlify.app/img/event/g3.jpg" class="card-img-top" alt="..." />
            </div>
          </div>
          <div className="col-3">
            <div class="card" style={{ width: "18rem" }}>
              <img src="https://learapress.netlify.app/img/event/g4.jpg" class="card-img-top" alt="..." />
            </div>
          </div>
          <div className="row" style={{ marginTop: "50px" }}>
            <div className="col-3">
              <div class="card" style={{ width: "18rem" }}>
                <img src="https://learapress.netlify.app/img/event/g5.jpg " class="card-img-top" alt="..." />
              </div>
            </div>
            <div className="col-3">
              <div class="card" style={{ width: "18rem" }}>
                <img src="https://learapress.netlify.app/img/event/g6.jpg" class="card-img-top" alt="..." />
              </div>
            </div>
            <div className="col-3">
              <div class="card" style={{ width: "18rem" }}>
                <img src="https://learapress.netlify.app/img/event/g7.jpg" class="card-img-top" alt="..." />
              </div>
            </div>
            <div className="col-3">
              <div class="card" style={{ width: "18rem" }}>
                <img src="https://learapress.netlify.app/img/event/g8.jpg" class="card-img-top" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="button  text-center" style={{ marginTop: "20px" }}>
        <button type="button" class="btn btn-danger" style={{}} >Learn more gallery</button>
      </div>
      <div className="container" style={{ textAlign: "center", marginTop: "40px" }}>
        <h1 style={{ fontWeight: "800" }}>Our Expert Instructor</h1>
        <p style={{ fontSize: "20px" }}>Lorem ipsum dolor sit amet, lorem nibh lectus urna arcu, lorem erat semper, auctor suspendisse quisque molestie ut. Elit massa dui, leo enim magna. Cursus maecenas cubilia, ac nonummy, egestas mauris .</p>
         </div>
         <div className="container">
          <div className="row">
            <div className="col-3">
              <div class="card" style={{ width: "18rem" }}>
                <img src="https://learapress.netlify.app/img/instructor/teacher_2.jpg " class="card-img-top" alt="..." />
                <h3 style={{fontWeight:"800"}}>MICHAEL</h3>
                <h5>Apps Development</h5>
              </div>
            </div>
            <div className="col-3">
              <div class="card" style={{ width: "18rem" }}>
                <img src="https://learapress.netlify.app/img/instructor/teacher_2.jpg" class="card-img-top" alt="..." />
                <h3 style={{fontWeight:"800"}} >BENJAMIN</h3>
                <h5>Graphics Design</h5>
              </div>
            </div>
            <div className="col-3">
              <div class="card" style={{ width: "18rem" }}>
                <img src="https://learapress.netlify.app/img/instructor/teacher_3.jpg " class="card-img-top" alt="..." />
                <h3 style={{fontWeight:"800"}}>ISABELLA  </h3>
                <h5>Article Writing</h5>
              </div>
            </div>
            <div className="col-3">
              <div class="card" style={{ width: "18rem" }}>
                <img src="https://learapress.netlify.app/img/instructor/teacher_4.jpg" class="card-img-top" alt="..." />
                <h3 style={{fontWeight:"800"}}>ISTIAK AHMED</h3>
                <h5>Web Development</h5>
              </div>
            </div>
          </div>
         </div>
         <Images/>
         <Footer/>
    </>
  )
}
