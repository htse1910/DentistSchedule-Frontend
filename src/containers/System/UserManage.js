import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss'
import {getAllUsers} from '../../services/userService';
import { get } from 'lodash';
class UserManage extends Component {
    constructor(props){
        super(props);
        this.state  = {
            arrUsers: []
        }
    }
    
    async componentDidMount() {
        let response = await getAllUsers('ALL');
        if(response && response.errCode === 0){
            this.setState({
                arrUsers: response.users
            }, () => {
                console.log('check state user 2', this.state.arrUsers);
            })
            console.log('check state user 1', this.state.arrUsers);
        }
    }


    render() {
        console.log('check render', this.state)
        let arrUsers = this.state.arrUsers;
        return (
            <div className="users-container">
                <div className="title text-center">Manage users with react</div>
                <div className="user-table mt-4 mx-3">
                    <table id="customers">
                    <tr>
                        <th>Email</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                        {arrUsers && arrUsers.map((item, index) => {
                            console.log('duong check map', item, index)
                            return(
                                <tr>
                                    <td>{item.email}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.address}</td>
                                    <td>
                                        <button className="btn-edit"><i className="fas fa-pencil-alt"></i></button>
                                        <button className="btn-delete"><i class="fas fa-trash"></i></button>
                                    </td>
                                </tr>
                            )
                        })
                        }
                </table>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
