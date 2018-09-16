import React, { Component } from 'react'
import * as routes from './index.js'

// User
import Home from '../components/Home.jsx'
import Teachers from '../components/ProfileTeachers.jsx'
import AboutUs from '../Components/AboutUs.jsx'
import Events from '../components/Event.jsx'
import Admin from '../components/Admin'


const RoutesCom = [
    {
        route: routes.TEACHERS,
        components: < Teachers/>
    },
    {
        route: routes.ABOUTUS,
        components: < AboutUs/>
    },
    {
        route: routes.HOME,
        components: <Home/>
    },
    {
        route: routes.EVENTS,
        components: <Events />
    },
    {
        route: routes.ADMIN,
        components: <Admin />
    }
]
export default RoutesCom