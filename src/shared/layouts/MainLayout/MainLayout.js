import React from 'react'
import { Header } from './components'

const MainLayout = props => (
    <div>
        <Header/>
        {props.children}
    </div>
)
export default MainLayout