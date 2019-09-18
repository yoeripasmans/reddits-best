import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ListWrapper = styled.ul`
  padding: 0;
  margin: 38px 0;

  @media (max-width: 600px) {
    margin: 21px 0 0 0;
  }
`;

export const PostItem = styled.li`
  list-style-type: none;
  margin: 24px 0;
  min-height: 121px;
  padding: 30px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #E2E7EB;
  border-radius: 4px;

  @media (max-width: 600px) {
    margin: 0;
    border-radius: 0;
    border: none;
    border-top: 1px solid #E2E7EB;
    border-bottom: 1px solid #E2E7EB;
    margin-bottom: -1px;
    padding: 24px;
    min-height: 0;
  }
`;

export const PostTitle = styled.a`
  text-decoration: none;
  color: #263D52;
  font-size: 24px;
  display: block;
  font-weight: bold;
  line-height: 133%;
  margin-bottom: 10px;

  :hover {
    color: #4583C2;
    transition: 0.3s ease;
  }

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export const SubRedditLink = styled(Link)`
  color: #4583C2;
  text-decoration: none;
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;

  :hover {
    color: #263D52;
    transition: 0.3s ease;
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const Points = styled.span`
  color: #8A95A5;
  margin-left: 5px;
  font-size: 18px;
  padding-left: 5px;
  font-weight: bold;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const PointsLabel = styled.span`
  color: #8A95A5;
  margin-left: 5px;
  font-weight: regular;
  font-size: 18px;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;
