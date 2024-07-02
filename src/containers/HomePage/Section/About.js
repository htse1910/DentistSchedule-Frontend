import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

class About extends Component {
    render() {
        return (
            <div className="section-share section-about">
                <div className="section-about-header">
                    Truyền thông nói gì về DentalCare
                </div>
                <div className="section-about-content">
                    <div className="content-left">
                        <iframe width="100%"
                            height="400px"
                            src="https://www.youtube.com/embed/ZHZnfwoqsHs"
                            title="VITV - Startup 360 - Bác sĩ và bệnh nhân nói về BookingCare"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen></iframe>
                    </div>
                    <div className="content-right">
                        <p>
                            DentalCare là nền tảng đặt lịch khám nha khoa trực tuyến hàng đầu, giúp bạn dễ dàng kết nối với các bác sĩ và phòng khám nha khoa uy tín. Chúng tôi hiểu rằng sức khỏe răng miệng là một phần quan trọng của cuộc sống, và việc chăm sóc răng miệng cần được thực hiện đều đặn và đúng cách.
                        </p>
                    </div>

                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
