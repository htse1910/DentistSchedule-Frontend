import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';

class HomeHeader extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="home-header-container">
                    <div className="home-header-content">
                        <div className="left-content">
                            <i className="fas fa-bars"></i>
                            <div className="header-logo"></div>
                        </div>
                        <div className="center-content">
                            <div className='child-content'>
                                <div><b>Dịch Vụ</b></div>
                                <div className="subs-title">Tìm bác sĩ theo dịch vụ</div>
                            </div>
                            <div className='child-content'>
                                <div><b>Cơ sở nha khoa</b></div>
                                <div className="subs-title">Chọn bệnh viện, nha khoa</div>
                            </div>
                            <div className='child-content'>
                                <div><b>Nha Sĩ</b></div>
                                <div className="subs-title">Chọn nha sĩ giỏi</div>
                            </div>
                            <div className='child-content'>
                                <div><b>Gói khám</b></div>
                                <div className="subs-title">Khám răng miệng tổng quát</div>
                            </div>
                        </div>
                        <div className="right-content">
                            <div className="support"><i className="fas fa-question-circle"></i> Hỗ trợ</div>
                            <div className="flag">VN</div>
                        </div>
                    </div>

                </div>
                <div className="home-header-banner">
                    <div className="content-up">
                        <div className="title1">NỀN TẢNG ĐẶT LỊCH PHÒNG KHÁM NHA KHOA</div>
                        <div className="title2">CHĂM SÓC SỨC KHỎE TOÀN DIỆN</div>
                        <div className="search">
                            <i className="fas fa-search"></i>
                            <input type="text" placeholder="Tìm dịch vụ nha khoa" />
                        </div>
                    </div>
                    <div className="content-down">
                        <div className='options'>
                            <div className="options-child">
                                <div className="icon-child"><i class="fas fa-briefcase-medical"></i></div>
                                <div className="text-child">Khám nha khoa</div>
                            </div>
                            <div className="options-child">
                                <div className="icon-child"><i className="fas fa-mobile-alt"></i></div>
                                <div className="text-child">Khám từ xa</div>
                            </div>
                            <div className="options-child">
                                <div className="icon-child"><i className="fas fa-procedures"></i></div>
                                <div className="text-child">Khám tổng quát răng miệng</div>
                            </div>
                            <div className="options-child">
                                <div className="icon-child"><i className="fas fa-user-md"></i></div>
                                <div className="text-child">Sức khỏe tinh thần</div>
                            </div>
                            <div className="options-child">
                                <div className="icon-child"><FontAwesomeIcon icon="fa-solid fa-teeth-open" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
