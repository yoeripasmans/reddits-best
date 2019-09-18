import React from 'react';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

import PostList from './PostList';

import Header from '../../common/Header';

const LoaderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 500px;
  align-items: center;
  justify-content: center;
`;

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
        {loading &&
          <LoaderWrapper>
            <Loader
              type="Puff"
              color="#4583C2"
              height={100}
              width={100}
              visible="true"
            />
          </LoaderWrapper>
        }
        <PostList postData={postData} />
      </>
    );
  }
}

export default Home;
