import React from 'react';
import PT from 'prop-types';
import { Link } from 'react-router-dom';

import Header from '../../common/Header';
import TextBlock from '../../common/TextBlock';

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
    const { subRedditData } = this.state;

    return (
      <>
        <Link to="/">Back</Link>
        <Header title={subRedditData.display_name_prefixed} subTitle="Subreddit details" />
        <TextBlock title="Title" text={subRedditData.title} />
        <TextBlock title="Public description" text={subRedditData.public_description} />
        <TextBlock title="Subscriber count" text={subRedditData.subscribers} />
      </>
    );
  }
}

DetailView.propTypes = {
  match: PT.object,
};

export default DetailView;
