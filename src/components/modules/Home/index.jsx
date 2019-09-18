import React from 'react';

import PostList from './PostList';

import Header from '../../common/Header';
import Loader from '../../common/Loader';

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
    const { postData, loading } = this.state;

    return (
      <>
        <Header title="Home" subTitle="Top 10 posts" />
        {loading ? <Loader /> :
          <PostList postData={postData} />
        }
      </>
    );
  }
}

export default Home;
