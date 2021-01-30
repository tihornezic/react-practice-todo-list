import Button from './Button'
// allows us to look at the route that we're currently on
import {useLocation} from 'react-router-dom'

const Header = ({onAdd}) => {
    // gives access to location.pathname
    const location = useLocation()

    return (
        <header className='header'>
            <h1 className='header-font'>Task Tracker</h1>
            {location.pathname === '/' && <Button onClick={onAdd} />}
        </header>
    )
}

export default Header
