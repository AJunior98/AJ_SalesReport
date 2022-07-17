import logo from '../../assets/img/logo.svg'
import './styles.css'

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>Sales Report</h1>
                <p>
                    Desenvolvido por
                    <a href="https://github.com/AJunior98"> @AJunior98</a>
                </p>
            </div>
        </header>
    )
}

export default Header