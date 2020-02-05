import React from 'React'

import Layout from '@components/layout'
import Home from '@sections/Home'
import About from '@sections/About'
import WorkExperience from '@sections/WorkExperience'
import NavBar from '@components/NavBar'


const Index:React.FC<{}> = () => {
    return (
        <Layout>
            <NavBar/>
            <Home/>
            <About/>
            <WorkExperience />
        </Layout>
    )
}

export default Index