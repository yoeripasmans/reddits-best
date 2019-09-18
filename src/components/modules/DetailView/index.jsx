import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';

import Header from '../../common/Header';
import TextBlock from '../../common/TextBlock';
import BackButton from '../../common/BackButton';
import Loader from '../../common/Loader';

const TextBlockWrapper = styled.div`
  margin-top: 82px;

  @media (max-width: 600px) {
    margin-top: 48px;
  }
`;

const formatNumber = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

class DetailView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subRedditData: [],
      error: false,
      loading: false,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch(`https://www.reddit.com/r/${this.props.match.params.id}/about.json`)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      this.setState({ loading: false, subRedditData: res.data });
    }).catch((err) => {
      this.setState({ loading: false, error: true });
    });
  }

  render() {
    const { subRedditData, loading } = this.state;

    return (
      <>
      {loading ? <Loader /> : (
         <>
           <BackButton />
           <Header title={subRedditData.display_name_prefixed} subTitle="Subreddit details" />
           <TextBlockWrapper>
             <TextBlock title="Title" text={subRedditData.title} />
             <TextBlock title="Public description" text={subRedditData.public_description} />
             <TextBlock title="Subscriber count" text={formatNumber(String(subRedditData.subscribers))} />
           </TextBlockWrapper>
         </>
      )}
      </>
    );
  }
}

DetailView.propTypes = {
  match: PT.object,
};

export default DetailView;
