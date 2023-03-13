import React, { Component } from 'react';
import axios from 'axios';

 


class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      loading: true,
      error: null,
    };
  }

  async componentDidMount() {
    try {
      const response = await axios.get(
        'https://api.chelseafc.com/content/v1/news?pageSize=5&page=1&order=desc&orderBy=publishedDate'
      );
      const news = response.data?.items || [];
      this.setState({ news, loading: false });
    } catch (error) {
      console.error(error);
      this.setState({ error: 'Error loading news', loading: false });
    }
  }

  render() {
    const { news, loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>{error}</div>;
    }

    return (
      <div className="flex flex-col space-y-8">
        {news.map((item) => (
          <div
            key={item.id}
            className="p-6 border border-gray-200 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-medium text-gray-800">
              <a
                href={`https://www.chelseafc.com/en/news/article/${item.id}`}
                target="_blank"
                rel="noreferrer"
              >
                {item.title}
              </a>
            </h2>
            {/* <p className="text-gray-600">
              {moment(item.publishedDate).fromNow()}
            </p> */}
            <p className="mt-4">{item.summary}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default News;
