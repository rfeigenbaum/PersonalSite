import React from 'react'

import Layout from '@components/layout'
import Home from '@sections/Home'
import About from '@sections/About'
import WorkExperience from '@sections/WorkExperience'
import NavBar from '@components/NavBar'

import sections from '@sections/sections'

const Index:React.FC<{}> = () => {
    return (
        <Layout>
            <NavBar/>
            <Home/>
            {
                sections.map(s => <s.SectionElement />)
            }
        </Layout>
    )
}

export default Index