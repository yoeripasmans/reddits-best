import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ListWrapper = styled.ul`
  padding: 0;
  margin: 30px 0;
`;

export const PostItem = styled.li`
  list-style-type: none;
  margin: 20px 0;
  min-height: 121px;
  padding: 30px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PostTitle = styled.a`
  text-decoration: none;
  color: #263D52;
  font-size: 24px;
  display: block;
  font-weight: bold;
  line-height: 133%;
  margin-bottom: 10px;
`;

export const SubRedditLink = styled(Link)`
  color: #4583C2;
  text-decoration: none;
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
`;

export const Points = styled.span`
  color: #8A95A5;
  margin-left: 5px;
  font-size: 18px;
  padding-left: 5px;
  font-weight: bold;
`;

export const PointsLabel = styled.span`
  color: #8A95A5;
  margin-left: 5px;
  font-weight: regular;
  font-size: 18px;
`;
