import React from 'react'

const Footer = () => {
    return (
        <div>
             {1900 + new Date().getYear()} - Coded by{" "}
            <a
              href="https://github.com/Enzo-21"
              target="_blank"
              rel="noopener noreferrer"
            >
              Enzo Barrera
            </a>
        </div>
    )
}

export default Footer
