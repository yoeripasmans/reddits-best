import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../common/Header';

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
      <>
        <Header title="Home" subTitle="Top 10 posts" />
        <ul>
          {postData.map((postItem) =>
            <li key={postItem.data.id}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://www.reddit.com${postItem.data.permalink}`}>{postItem.data.title}
              </a>
              <Link to={`subreddit/${postItem.data.subreddit}`}>{postItem.data.subreddit_name_prefixed}</Link>
            </li>
          )}
        </ul>
      </>
    );
  }
}

export default Home;
