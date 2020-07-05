import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";


const CardContainer = styled.div`
  margin-bottom: 8px;
`;

const TrelloCard = ({ id, text, index }) => {
  return (
    <Draggable draggableId={String(id)} index={index}>
      {provided => (
        <CardContainer {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} >
          <Card>
            <CardContent>
              <Typography gutterBottom>
                {text}
              </Typography>
            </CardContent>
          </Card>
        </CardContainer>
      )}
    </Draggable>
  );
};

export default TrelloCard;