import logo from '../../assets/img/logo.svg';
import './styles.css';

function Header() {
    return (
        <header>
            <div className="ajsalesreport-logo-container">
                <img src={logo} alt="ajsalesreport" />
                <h1>Sales Report</h1>
                <p>
                    Desenvolvido por
                    <a href="https://github.com/AJunior98"> @AJunior98</a>
                </p>
            </div>
        </header>
    )
}

export default Header;