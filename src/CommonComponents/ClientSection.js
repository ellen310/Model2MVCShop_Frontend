import React from 'react';

const ClientSection = () => {
    return (
        <div>
            {/*  ======= Clients Section ======= */}
            <section className="section">
            <div className="container">
                <div className="row justify-content-center text-center mb-4">
                <div className="col-5">
                    <h3 className="h3 heading">My Clients</h3>
                    <p>Yeji's ALDI의 파트너사입니다.</p>
                </div>
                </div>
                <div className="row">
                <div className="col-4 col-sm-4 col-md-2">
                    <a href="#" className="client-logo"><img src="assets/img/logo-adobe.png" alt="Image" className="img-fluid"/></a>
                </div>
                <div className="col-4 col-sm-4 col-md-2">
                    <a href="#" className="client-logo"><img src="assets/img/logo-uber.png" alt="Image" className="img-fluid"/></a>
                </div>
                <div className="col-4 col-sm-4 col-md-2">
                    <a href="#" className="client-logo"><img src="assets/img/logo-apple.png" alt="Image" className="img-fluid"/></a>
                </div>
                <div className="col-4 col-sm-4 col-md-2">
                    <a href="#" className="client-logo"><img src="assets/img/logo-netflix.png" alt="Image" className="img-fluid"/></a>
                </div>
                <div className="col-4 col-sm-4 col-md-2">
                    <a href="#" className="client-logo"><img src="assets/img/logo-nike.png" alt="Image" className="img-fluid"/></a>
                </div>
                <div className="col-4 col-sm-4 col-md-2">
                    <a href="#" className="client-logo"><img src="assets/img/logo-google.png" alt="Image" className="img-fluid"/></a>
                </div>

                </div>
            </div>
            </section>{/* End Clients Section */}
        </div>
    );
};

export default ClientSection;