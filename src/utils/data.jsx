import Aboutpage from '../pages/Aboutpage'
import Homepage from '../pages/Homepage'
import Projectpage from '../pages/Projectpage'

export const navItems =  [
    {id: 0, title: 'Home', path: "/", page: <Homepage />},
    {id: 1, title: 'About', path: "/About-page", page: <Aboutpage />},
    {id: 2, title: 'Project', path: "/project-page", page: <Projectpage />},
]
