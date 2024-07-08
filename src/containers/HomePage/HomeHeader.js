import React, { Component } from 'react';
import { connect } from 'react-redux';
import { languages } from '../../utils';
import './HomeHeader.scss';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from "../../utils";
import { withRouter } from 'react-router';
import logo from '../../assets/images/logo.svg';
import { changeLanguageApp } from '../../store/actions/appActions';

class HomeHeader extends Component {

    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language)
    }
    returnToHome = () => {
        if (this.props.history) {
            this.props.history.push(`/home`)
        }
    }
    render() {
        console.log('check props: ', this.props)
        let language = this.props.language;
        return (
            <React.Fragment>
                <div className="home-header-container">
                    <div className="home-header-content">
                        <div className="left-content">
                            <i className="fas fa-bars"></i>
                            <img className="header-logo" src={logo} onClick={() => this.returnToHome()} />
                        </div>
                        <div className="center-content">
                            <div className='child-content'>
                                <div><b><FormattedMessage id="homeheader.service" /></b></div>
                                <div className="subs-title"><FormattedMessage id="homeheader.searchdoctor" /></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="homeheader.dental-facility" /></b></div>
                                <div className="subs-title"><FormattedMessage id="homeheader.select-a-dental-clinic" /></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="homeheader.dentist" /></b></div>
                                <div className="subs-title"><FormattedMessage id="homeheader.select-a-dentist" /></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="homeheader.dental-examination-package" /></b></div>
                                <div className="subs-title"><FormattedMessage id="homeheader.general-dental-examination" /></div>
                            </div>
                        </div>
                        <div className="right-content">
                            <div className="support"><i className="fas fa-question-circle"></i> <FormattedMessage id="homeheader.support" /></div>
                            <div className={language === LANGUAGES.VI ? 'language-vi active' : 'language-vi'}><span onClick={() => this.changeLanguage(LANGUAGES.VI)}>VN</span></div>
                            <div className={language === LANGUAGES.EN ? 'language-en active' : 'language-en'}><span onClick={() => this.changeLanguage(LANGUAGES.EN)}>EN</span></div>
                        </div>
                    </div>

                </div>
                {this.props.isShowBanner === true &&
                <div className="home-header-banner">
                    <div className="content-up">
                        <div className="title1"><FormattedMessage id="banner.title1" /></div>
                        <div className="title2"><FormattedMessage id="banner.title2" /></div>
                        <div className="search">
                            <i className="fas fa-search"></i>
                            <input type="text" placeholder="Tìm dịch vụ nha khoa" />
                        </div>
                    </div>
                    <div className="content-down">
                        <div className='options'>
                            <div className="options-child">
                                <div className="icon-child"><i class="fas fa-briefcase-medical"></i></div>
                                <div className="text-child"><FormattedMessage id="banner.child1" /></div>
                            </div>
                            <div className="options-child">
                                <div className="icon-child"><i className="fas fa-mobile-alt"></i></div>
                                <div className="text-child"><FormattedMessage id="banner.child2" /></div>
                            </div>
                            <div className="options-child">
                                <div className="icon-child"><i className="fas fa-procedures"></i></div>
                                <div className="text-child"><FormattedMessage id="banner.child3" /></div>
                            </div>
                            <div className="options-child">
                                <div className="icon-child"><i className="fas fa-user-md"></i></div>
                                <div className="text-child"><FormattedMessage id="banner.child4" /></div>
                            </div>
                            <div className="options-child">
                                <div className="icon-child"><i className="fas fa-flask"></i></div>
                                <div className="text-child"><FormattedMessage id="banner.child5" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            </React.Fragment>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeHeader));
