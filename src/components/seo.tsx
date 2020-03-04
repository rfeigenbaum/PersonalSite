import React from 'react'
import {Helmet} from 'react-helmet'

import urwGeometric from '../fonts/URW-Geometric/URWGeometric-Regular.otf';

const SEO:React.SFC = () => (
    <>
        <Helmet title="Ryan Feigenbaum">
            <link rel="preload" as="font" href={urwGeometric} type="font/otf" />
        </Helmet>
    </>
)

export default SEO