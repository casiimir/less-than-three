function Footer({ pageNumber }) {
  return (
    <div className="pageFooter">
      <p className="pageFooter--text">Less Than <em>3</em>, by Casiimir. &copy; 2021</p>
      <div className="pageFooter--status">
        <p>Page:</p>
        <p> { pageNumber }</p>
      </div>
    </div>
  )
}

export default Footer;