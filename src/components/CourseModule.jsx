import React from 'react'
import { useParams } from 'react-router-dom'

import Header from './Header';
import Footer from './Footer';

const CourseModule = () => {

    const { id, moduleid } = useParams();

    return (
        <>
            <Header />

            <div>

            </div>

            <Footer />
        </>
    )
}

export default CourseModule