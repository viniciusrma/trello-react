import React, {Component} from "react";
import TrelloList from './trellolist';
import { connect } from "react-redux";
import ActionButton from "./actionButton";
import { DragDropContext } from "react-beautiful-dnd";
import { sort } from "../actions"
import styled from "styled-components";

const ListContainer = styled.div `
  display: flex;
  flex-direction:row
`;

class App extends Component {
  
  onDragEnd =  (result) => {
    //Reordering logic
    const { destination, source, draggableId } = result;
   
    if(!destination) {
      return;
    } 

    this.props.dispatch(
      sort(
        source.droppabbleId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId
      )
    );
  };
   
  
  render() {
    const { lists } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd} >
        <div>
          <h2>Hello World</h2>
          <ListContainer>
            {lists.map(list => (
              <TrelloList 
                listID={list.id} 
                key={list.id} 
                title={list.title} 
                cards={list.cards} 
              />
            ))}
            <ActionButton list />
          </ListContainer>
        </div>
      </DragDropContext>
    );
  }
}

const styles = {
  listsContainer: {
    display: "flex",
    flexDirection:"row"
  }
};

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect (mapStateToProps) (App);
