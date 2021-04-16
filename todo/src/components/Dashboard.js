import React, {useState} from 'react';
import avatar from '../assets/blank-profile.png';
import banner from '../assets/pencil.png';
import { connect } from 'react-redux';
import { logout } from '../redux/auth/authAction';
import PropTypes from 'prop-types';
import Modal from './Modal';

const Dashboard = ({ logout }) => {
    const [isOpen, setIsOpen] = useState(false)
    
    const username = localStorage.getItem('username');
    return (
        <div>
            <div className="dashboard">
                <div className="dashboard_logo">
                    <img src={banner} alt="logo" /><h3>Todo App</h3>
                    <h1> {username} - Things To Do </h1>
                </div>
                <div className="dashboard_avatar" >
                    <a href="/dashboard" ><img src={avatar} alt="avatar" /></a>
                </div>
                <nav id="menu-cat" className="navbar bg-light px-1 sticky-top">
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <a className="nav-link" href="/dashboard/complete">Complete</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/dashboard/archive">Archive</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={logout} href='#!'>Logout</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="add" >
                <button onClick={() => setIsOpen(true)} >
                    <i className="fa fa-plus"></i>
                </button>
            </div>
            <Modal open={isOpen} onClose={() => setIsOpen(false)} />
        </div>
        
    )
};

Dashboard.propTypes = {
    logout: PropTypes.func.isRequired,
}


export default connect(null, {logout})(Dashboard);

