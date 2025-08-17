import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Course.css';

export default function Course() {
    const { id } = useParams();
    const [courseData, setCourseData] = useState(null);

    useEffect(() => {
        axios.get(`https://68a078926e38a02c5818cd15.mockapi.io/courseData/${id}`)
            .then(res => setCourseData(res.data))
            .catch(err => console.log(err));
    }, [id]);

    if (!courseData) return <p>در حال بارگذاری دوره...</p>;

    return (
        <div className="course-page">
            <div className="course-container">
                <div className="course-image">
                    <img src={courseData.img} alt={courseData.title} />
                </div>
                <div className="course-info">
                    <h1>{courseData.title}</h1>
                    <p>{courseData.text}</p>
                    <p><strong>مدرس:</strong> {courseData.teacher}</p>
                </div>
            </div>
        </div>
    );
}
