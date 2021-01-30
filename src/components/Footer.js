// to prevent page reloading when clicking on about and back
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <p>Copyright &copy; 2021</p>
            <Link to="/about">About</Link>
        </footer>
    )
}

export default Footer
