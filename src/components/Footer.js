import './Footer.sass';

function Footer({ pageNumber }) {
  return (
    <div className="Footer">
      <p className="Footer--text">Less Than <em>3</em>, by <a href="https://github.com/casiimir">Casiimir</a>. &copy; 2021</p>
      <div className="Footer--status">
        <p>Page:</p>
        <p> { pageNumber }</p>
      </div>
    </div>
  )
}

export default Footer;