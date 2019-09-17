import React from 'react';
import PT from 'prop-types';

import {
  ListWrapper,
  PostItem,
  PostTitle,
  SubRedditLink,
  Points,
  PointsLabel,
} from './styled';

const PostList = ({ postData }) => {
  return (
    <ListWrapper>
      {postData.map((postItem) =>
        <PostItem key={postItem.data.id}>
          <PostTitle
            target="_blank"
            rel="noopener noreferrer"
            href={`https://www.reddit.com${postItem.data.permalink}`}>{postItem.data.title}
          </PostTitle>
          <div>
            <SubRedditLink to={`subreddit/${postItem.data.subreddit}`}>{postItem.data.subreddit_name_prefixed}</SubRedditLink>
            <Points>· {postItem.data.score}</Points>
            <PointsLabel>Points</PointsLabel>
          </div>
        </PostItem>
      )}
    </ListWrapper>
  );
};

PostList.propTypes = {
  postData: PT.array,
};

export default PostList;
