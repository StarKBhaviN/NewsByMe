import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
      let { title, description, imageUrl, newsUrl, author, date} = this.props;
// const NewsItem = (props) => {
//     let { title, description, imageUrl, newsUrl, author, date } = props;

    return (
      <div className="my-3">
        <div className="card" style={{ height: "470px" }}>
          <div
            className="image-info"
            style={{ height: "200px", width: "100%" }}
          >
            <img
              src={
                imageUrl
                  ? imageUrl
                  : "https://lh3.googleusercontent.com/g-kamgwAFqTxFu0CEfr6bTvI66aTmuHqkrMRIbnV9m71DBDNV8yd-nmD_DGG1JkR4xAzyNR4JfxKhIYpcyORfkmNTXvv0BzXPNBmBNiQ_Qk0vQyWRJ-ZSzQTMFXQAEJPGifNX0llepvc2g5jkZmPkKpyLJFvoPwBmBsgoYWaWRILTssNfLRwSIbXeEA4G8z42EK3ZIOrv40w66kv6gjQh-uSDi0JvTVPQmoY5RSKGfAfemT7JQnA2XbuxMCKq3-TcSuW2OCXCW-ly17UufrZegf6w4LSckwQRUs7CBgjhTtLld0K6goZhRr_mz9w1R-TLA6H1PSK73huqbAWEyiQqMPsYf-GQNvKMwxvNnoEJO0ROoRJmUEdPphYbmJDVQKsPnMDa2f5jLvx12vdRPzVhAmcDH8VtykDId_dvNTtm9GeS4COJFWAUFoGRBiIQIctaQinn3Bl7qsEkQ8qqvgQLSptSnIlg76l-u5yL6RJ1EQ8cLh9rTNpmOpkuLmCez2vaQdKDtwMWFVsD45D9XA4voUKIkbgSzZC9Eev8PrI_rvOIrH6_YB0-I8_s7yJzdZzSVDrGctxPhhcs-TZEhciJ4OJ9QSJM2qfNRpei7zb00blqHyRi5pujq4Sc5bKZ_TT12Uqs3Pm4JuW8BFWH-jyaQdPN0-fsddd3rpQjbeCd9Xdezk8oTsHakAsVTNjaPT--K9lw0b2F5KAda08RG8vbCUIzZZWBG_xkZ6pFu6ojpNqr3ICnooyYZHpYVWzg5bBqeUVuAd5wYlnsTXZvOghXyu5FTWjSqWNiOqPkg9RBOIO3tUu2UbHG-ll0hSYDXX--SI47aQhQ4OXLbGZ2cGO5MuwDZPeVqGddztWUKqWzq6BnJOwA0q6picB1YOJVVBUMUmwWKvbINHmpbhsMRSMAzIZIOSIQSPPl-DVe0fDi-esn7F3=w800-h533-no?authuser=0"
              }
              className="card-img-top"
              alt="..."
              height="200px"
            />
          </div>

          {/* <img src={imageUrl?imageUrl : "https://static.toiimg.com/thumb/msid-91931271,width-1070,height-580,imgsize-107064,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"} className="card-img-top" alt="..." height="200px" width="150px"/> */}
          <div className="card-body">
            <h5 className="card-title" style={{ height: "60px" }}>
              {title}...
            </h5>
            <p className="card-text" style={{ height: "70px" }}>
              {description}...
            </p>
            <p className="card-text" style={{ height: "55px", margin: "0px" }}>
              <small className="text-muted">

                By <strong className='text-wrap'>{author}</strong> Published At{" "}

                <strong>{new Date(date).toGMTString()}</strong>
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-success"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}
}
export default NewsItem;
