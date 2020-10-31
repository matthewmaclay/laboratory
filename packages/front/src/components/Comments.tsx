import React from "react";
import { Tooltip } from "react-tippy";
import { Comment } from "graphqlTypes";
import styled from "styled-components";

interface Props {
  comments?: Pick<
    Comment,
    "content" | "topOffset" | "content" | "leftOffset"
  >[];
}

const Point = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 5px solid #574feb;
  position: absolute;
  cursor: pointer;
  transition: all .2s linear;
  box-sizing: border-box;
  &:hover{
      background: #574feb;
      border: 1px solid white;
  }
`;

const Comments: React.FC<Props> = ({ comments }) => {
  console.log(comments);
  return (
    <div>
      {comments.map((i) => (
        <div style={{ position:'absolute', top: i.topOffset + "px", left: i.leftOffset + "px" }}>
          <Tooltip title={i.content} position="bottom" trigger="click">
            <Point/>
          </Tooltip>
        </div>
      ))}
    </div>
  );
};
export default Comments;
