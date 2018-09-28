import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchNews } from "../actions";

const url =
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=8d98dac05ec947d1b891832495641b49";

class App extends Component {
    componentDidMount() {
        this.props.fetchNews(url);
    }

    renderNews = () => {
        const { isFetching, hasError, news } = this.props;
        if (isFetching) {
            return <h3>Loading....</h3>;
        }
        if (hasError) {
            return <h3>Error fetching news.</h3>;
        }
        return news.map((n, i) => {
            return (
                <li key={i}>
                    <img src={n.urlToImage} alt="" />
                    <a href={n.url}>
                        <h2>{n.title}</h2>
                    </a>
                    <h5>{n.description}</h5>
                </li>
            );
        });
    };
    render() {
        return (
            <div>
                <h1>Top Headlines</h1>
                <ul>{this.renderNews()}</ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isFetching: state.isFetching,
        hasError: state.hasError,
        news: state.news
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchNews: url => dispatch(fetchNews(url))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
