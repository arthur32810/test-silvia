import { NavLink } from "react-router-dom"
import './Error.css';


function Error() {
    return (
        <section className='error-container-all'>
            <div className='error-container-title'>
                <h1 className='error-title'>404</h1>
            </div>
            <div className='error-container-text'>
                <p className='error-text'>Oups! La page que vous demandez n'existe pas.</p>
            </div>
            <div className='error-container-link'>
                <NavLink to='/' className='error-link'>
                    Retournez sur la page d'accueil
                </NavLink>
            </div>
        </section>
    )
}

export default Error