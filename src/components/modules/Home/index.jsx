import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: [],
      error: false,
      loading: false,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch('https://www.reddit.com/best.json?limit=10')
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      this.setState({ loading: false, postData: res.data.children });
    }).catch((err) => {
      this.setState({ loading: false, error: true });
    });
  }

  render() {
    const { postData } = this.state;

    return (
      <main>
        <header>
          <h1>Home</h1>
          <h3>Top 10 posts</h3>
        </header>
        <ul>
          {postData.map((postItem) =>
            <li key={postItem.data.id}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://www.reddit.com${postItem.data.permalink}`}>{postItem.data.title}
              </a>
              <Link to={`subreddit/${postItem.data.id}`}>{postItem.data.subreddit_name_prefixed}</Link>
            </li>
          )}
        </ul>
      </main>
    );
  }
}

export default Home;
