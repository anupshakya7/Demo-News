import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  // articles = [
  //   {
  //     source: {
  //       id: "al-jazeera-english",
  //       name: "Al Jazeera English",
  //     },
  //     author: "Kevin Hand",
  //     title:
  //       "LIVE: Manchester City vs Manchester United – Premier League football",
  //     description:
  //       "Follow our live build-up, team news, score and commentary from the Manchester derby at the Etihad Stadium at 15:30 GMT.",
  //     url: "https://www.aljazeera.com/news/liveblog/2024/3/3/live-manchester-city-vs-manchester-united-premier-league-football",
  //     urlToImage:
  //       "https://www.aljazeera.com/wp-content/uploads/2024/03/2023-05-03T173852Z_1769899257_UP1EJ531D0Q2R_RTRMADP_3_SOCCER-ENGLAND-MCI-WHU-REPORT-1709357861.jpg?resize=1920%2C1440",
  //     publishedAt: "2024-03-03T11:31:44Z",
  //     content:
  //       "blinking-dot\r\nLive MatchLive Match, \r\nFollow our live build-up, team news, score and commentary from the Premier Leagues Manchester derby at the Etihad Stadium at 15:30 GMT.",
  //   },
  //   {
  //     source: {
  //       id: "fox-sports",
  //       name: "Fox Sports",
  //     },
  //     author: null,
  //     title:
  //       "National Football League\n     <!----> \n        Five potential Cowboys picks to track at the NFL Draft Combine\n       \n      1 hour ago",
  //     description: null,
  //     url: "http://www.foxsports.com/stories/nfl/five-potential-cowboys-picks-to-track-at-the-nfl-draft-combine",
  //     urlToImage: null,
  //     publishedAt: "2024-02-29T18:37:22.5746516Z",
  //     content: null,
  //   },
  //   {
  //     source: {
  //       id: "bleacher-report",
  //       name: "Bleacher Report",
  //     },
  //     author: "David Kenyon",
  //     title: "Unique Stats from the 2023 College Football Regular Season",
  //     description:
  //       "Numbers are an integral part of college football. Whether you're previewing games, ranking teams or picking an award winner, statistics help shape the story.…",
  //     url: "https://bleacherreport.com/articles/10100739-unique-stats-from-the-2023-college-football-regular-season",
  //     urlToImage:
  //       "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1702319871/sdx1wjlqkcqz3anqfabp.jpg",
  //     publishedAt: "2023-12-12T12:00:00Z",
  //     content:
  //       "Zach Bolinger/Icon Sportswire via Getty Images\r\nSpeaking of Iowa...\r\nWhat makes the Hawkeyes' stellar defensive season even more impressive is how much the team desperately needed it.\r\nAmong the many… [+711 chars]",
  //   },
  //   {
  //     source: {
  //       id: "talksport",
  //       name: "TalkSport",
  //     },
  //     author: "161385360554578",
  //     title:
  //       "Rice rescues Arsenal, Arteta evades Raya question, more Premier League build-up",
  //     description:
  //       "talkSPORT.com brings you all the latest news, views and gossip from the world of football. Today’s headlines: Mikel Arteta dodges David Raya question after goalkeeper’s errors Declan Ri…",
  //     url: "https://talksport.com/football/1667216/football-news-live-arsenal-mikel-arteta-david-raya-premier-league/",
  //     urlToImage:
  //       "https://talksport.com/wp-content/uploads/sites/5/2023/12/jw-TALKSPORT-BLOG-06-12.jpg?strip=all&quality=100&w=1500&h=1000&crop=1",
  //     publishedAt: "2023-12-06T09:06:42Z",
  //     content:
  //       "Mikel Arteta didn't provide a straight answer when asked about David Raya's struggles during Arsenal's win at Luton.\r\nArsenal claimed a dramatic last-gasp win at Kenilworth Road with Declan Rice's st… [+1106 chars]",
  //   },
  //   {
  //     source: {
  //       id: "talksport",
  //       name: "TalkSport",
  //     },
  //     author: "Josh Fordham",
  //     title:
  //       "Tottenham fans feared relegation without Harry Kane but Ange Postecoglou has got them scoring more...",
  //     description:
  //       "Tottenham losing Harry Kane in the summer sent the fans into crisis mode and you can’t blame them. Not only was he their record goalscorer, but also one of the best strikers in world football seaso…",
  //     url: "https://talksport.com/football/1666888/tottenham-goals-harry-kane-ange-postecoglou/",
  //     urlToImage:
  //       "https://talksport.com/wp-content/uploads/sites/5/2023/12/Kane_Postecoglou-Comp.png?strip=all&quality=100&w=1500&h=1000&crop=1",
  //     publishedAt: "2023-12-05T17:57:19Z",
  //     content:
  //       "Tottenham losing Harry Kane in the summer sent the fans into crisis mode and you cant blame them.\r\nNot only was he their record goalscorer, but also one of the best strikers in world football season … [+2220 chars]",
  //   },
  //   {
  //     source: {
  //       id: "espn-cric-info",
  //       name: "ESPN Cric Info",
  //     },
  //     author: null,
  //     title:
  //       "Five famous people (and one cat) you didn't know have ESPNcricinfo profiles | ESPNcricinfo.com",
  //     description:
  //       "Why do a footballer, a Nobel laureate and a prime minister (no, not Imran Khan) find themselves in the ESPNcricinfo player database? | ESPNcricinfo.com",
  //     url: "http://www.espncricinfo.com/story/_/id/29102695/five-famous-people-one-cat-know-espncricinfo-profiles",
  //     urlToImage:
  //       "https://a.espncdn.com/i/cricket/cricinfo/1221668_1296x1296.gif",
  //     publishedAt: "2020-04-27T07:20:43Z",
  //     content:
  //       "Why do a cat, a footballer, a Nobel laureate and a prime minister find themselves in the ESPNcricinfo database? Here are six player profiles you wouldn't have expected we had.\r\nPeter the catThe only … [+5504 chars]",
  //   },
  // ];
  constructor() {
    super();
    console.log("Hello I am a Constructor from News Component");
    this.state = {
      //articles: this.articles,
      articles: [],
      loading: false,
      page: 1,
      nextDisabled: false,
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=822ded6024bf4ad98e38671aff7d4814&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }
  handlePreviousClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=822ded6024bf4ad98e38671aff7d4814&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };
  handleNextClick = async () => {
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
      this.setState({
        nextDisabled: true,
      });
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.category
      }&apiKey=822ded6024bf4ad98e38671aff7d4814&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();

      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false,
      });
    }
  };
  render() {
    console.log("render");
    return (
      <div className="container my-3">
        <h2 className="text-center" style={{ margin: "40px 0px" }}>
          News Monkey - Top Headlines
        </h2>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-3" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 30) : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://image.cnbcfm.com/api/v1/image/104868849-GettyImages-870116346_1.jpg?v=1709521376&w=1920&h=1080"
                    }
                    newsUrl={element.url ? element.url : ""}
                  />
                </div>
              );
            })}
        </div>
        <div className="container">
          <div className="d-flex justify-content-between">
            <button
              type="button"
              disabled={this.state.page <= 1}
              className="btn btn-outline-primary"
              onClick={this.handlePreviousClick}
            >
              &larr; Previous
            </button>
            <button
              type="button"
              disabled={this.state.nextDisabled}
              className="btn btn-outline-primary"
              onClick={this.handleNextClick}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
