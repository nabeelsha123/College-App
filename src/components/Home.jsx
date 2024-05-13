import React from 'react'

const Home = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="card mb-3">
                                    <div class="row g-0">
                                        <div class="col-md-4">
                                            <img src="https://sbce.ac.in/wp-content/themes/sbce/images/buddha.jpg" class="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title"><b>WELCOME TO SREE BUDDHA COLLEGE OF ENGINEERING</b></h5>
                                                <br />
                                                <p class="card-text">Sree Buddha College of Engineering, affiliated to Kerala Technological University, has been par excellence in technical education. The sermons of Lord Buddha gave us a lead to be the flowers of exaltation. The primary objective is to promote education and research in the field of technology and to replenish the skills that get lurked in the budding technocrats. Each and every member in the family of SBCE pushes themselves to set the institution as an example to the world.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <div class="card">
                                    <div class="card-body p-0">
                                        <div id="carouselExample" class="carousel slide">
                                            <div class="carousel-inner">
                                                <div class="carousel-item active">
                                                    <img src="https://sbce.ac.in/wp-content/uploads/2017/05/gate2-e1582310432977.jpg" class="d-block w-100" alt="..." />
                                                </div>
                                                <div class="carousel-item">
                                                    <img src="https://sbce.ac.in/wp-content/gallery/sbce/334A9181-copy.jpg" class="d-block w-100" alt="..." />
                                                </div>
                                                <div class="carousel-item">
                                                    <img src="https://sbce.ac.in/wp-content/gallery/sbce/334A9208-copy.jpg" class="d-block w-100" alt="..." />
                                                </div>
                                            </div>
                                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span class="visually-hidden">Previous</span>
                                            </button>
                                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span class="visually-hidden">Next</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <br />
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4">
                                <div class="card text-bg-dark">
                                    <img src="https://sbce.ac.in/wp-content/gallery/sbce/334A9213.jpg" class="card-img" alt="..." style={{ opacity: '0.1' }} />
                                    <div class="card-img-overlay" style={{ opacity: '1.0', transition: 'transform 0.7s ease' }}>
                                        <h3 class="card-title"><b>OUR VISION</b></h3>

                                        <br />
                                        <br />
                                        <h5 class="card-text">To Create Professionally Competent Engineers With Human Values And Social Commitements</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4">
                                <div class="card text-bg-dark">
                                    <img src="https://sbce.ac.in/wp-content/gallery/sbce/334A9153-NNNN.jpg" class="card-img" alt="..." style={{ opacity: '0.1' }} />
                                    <div class="card-img-overlay" style={{ opacity: '1.0' }}>
                                        <h3 class="card-title"><b>OUR PROGRAMMES</b></h3>
                                        <br />
                                        <br />
                                        <button className="btn btn-success"><b>Under Graduate</b></button>
                                        <br />
                                        <br />
                                        <button className="btn btn-success"><b>Post Graduate</b></button>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4">
                                <div class="card text-bg-dark">
                                    <img src="https://sbce.ac.in/wp-content/gallery/sbce/334A9343.jpg" class="card-img" alt="..." style={{ opacity: '0.1' }} />
                                    <div class="card-img-overlay" style={{ opacity: '1.0' }}>
                                        <h3 class="card-title"><b>OUR MISSION</b></h3>
                                        <br />
                                        <br />
                                        <h5 class="card-text">Offer Well Balanced Curriculum With Student-centric Approach</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <br />
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                <b>PLACEMENTS</b>
                                            </button>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                "Participating in placement activities offered by our engineering college opens doors to a world of professional opportunities. From mock interviews and resume workshops to career fairs and networking events, our comprehensive program equips students with the skills and confidence needed to navigate the competitive job market. Engaging with industry professionals through guest lectures and company visits provides invaluable insights into current trends and expectations, while internships and project collaborations offer hands-on experience and real-world exposure. With personalized guidance from our dedicated placement cell, students can tailor their approach to match their career aspirations and secure coveted positions in top companies. Embrace the wealth of resources available and embark on a journey toward a fulfilling and rewarding career."
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                <b>Administration & Accounts</b>
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                            The college office functions from 8.30 a.m to 4.30 p.m. The administrative section and accounts section headed by Sri. Chandrababu P and Smt. Jaya T P, cater to the needs of the student community and staff of the College. The students can meet the officials during working hours and seek clarifications/service.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                <b>PTA</b>
                                            </button>
                                        </h2>
                                        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                            The PTA of Sree Buddha College of Engineering, Pattoor (PTASBCE) aims to foster and promote good relationship among members of the faculty, students and guardians of students. The administration of the association vests in an executive committee elected for the purpose every year. The Principal is the ex-office president and Chairman, Secretary and Treasurer of the Managing Committee of the college being the honorary members of PTA. The association consists of 28 members of whom 14 members are from guardians and 14 from teaching staff comprising of HODs and faculty members distributed among all departments. A secretary is elected from among faculty.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <br />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home
