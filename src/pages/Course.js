import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Course.css';

export default function Course() {
    const { id } = useParams();
    const [courseData, setCourseData] = useState(null);

    useEffect(() => {
        axios.get(`https://68a1e6ee6f8c17b8f5db0df3.mockapi.io/courseData/${id}`)
            .then(res => setCourseData(res.data))
            .catch(err => console.log(err));
    }, [id]);

    if (!courseData) return <p>در حال بارگذاری دوره...</p>;

    // بررسی اینکه آیا مسیر تصویر URL است یا مسیر local
    const imageSrc = courseData.img.startsWith('http')
        ? courseData.img
        : process.env.PUBLIC_URL + courseData.img;

    return (
        <div className="course-page">
            <div className="course-container">
                <div className="course-image">
                    <img src={imageSrc} alt={courseData.title} />
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
