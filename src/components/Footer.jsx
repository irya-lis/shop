import React from "react";

const Footer = () => {
    return (
        <footer className="page-footer  orange darken-4">
            <div className="footer-copyright orange darken-4">
                <div className="container">
                    © {new Date().getFullYear()} React Shop
                    <a className="grey-text text-lighten-4 right" href="#!">Repo</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
