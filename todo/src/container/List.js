import React from 'react';
import Dashboard from '../components/Dashboard';

import img1 from '../assets/question.png';
import img2 from '../assets/fam.png';
import img3 from '../assets/study.png';
import img4 from '../assets/job.png';
import img5 from '../assets/personal.png';

const List = () => {

    
    return (
        <div>
            <Dashboard />
            <div className="category" >
                <div className="category_item">
                    <a href="/dashboard/uncategorized/" >
                        <img src={img1} alt="uncategorized" /> <br/>
                        <p>Uncategorized</p>
                    </a>
                </div>
                <div className="category_item">
                    <a href="/dashboard/family/" >
                        <img src={img2} alt="family" /> <br/>
                        <p>Family</p>
                    </a>
                </div>
                <div className="category_item">
                    <a href="/dashboard/work/" >
                        <img src={img3} alt="work" /> <br/>
                        <p>Work</p>
                    </a>
                </div>
                <div className="category_item">
                    <a href="/dashboard/study/" >
                        <img src={img4} alt="study" /> <br/>
                        <p>Study</p>
                    </a>
                </div>
                <div className="category_item">
                    <a href="/dashboard/personal/" >
                        <img src={img5} alt="personal" /> <br/>
                        <p>Personal</p>
                    </a>
                </div>
            </div>
        </div>
    )
};


export default List;
