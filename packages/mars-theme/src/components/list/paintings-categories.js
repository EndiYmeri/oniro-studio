import React, { useEffect } from "react";
import Item from "./list-item";
import { connect, styled} from "frontity";

// In a React component that uses "connect":
const PaintingCategories = ({ state }) => {
 // Get the data of the current list.
 const data = state.source.get(state.router.link);
 const categoriesObject = state.source.painting_cat

 // console.log({state, data, categories})
 let categories = []
 
 for(const category in categoriesObject){
   categories.push(categoriesObject[category])
 }
 // let categories = Object.values(categoriesObject)
 // categories.sort(name => categories.name)
 console.log(categories)
 return (
   <Container>
     {/* If the list is a taxonomy, we render a title. */} 
     
     {/* {data.isTaxonomy && (
       <Header>
         {data.taxonomy}:{" "}
         <b>{decode(state.source[data.taxonomy][data.id].name)}</b>
       </Header>
     )}

     {/* If the list is for a specific author, we render a title. */}
    
     {/* Iterate over the items of the list. */}
     { 
      categories?.map((category => {
           return <Item key={category.id} item={category}/>
       }))
     }
     {/* <Pagination /> */}
   </Container>
 )
};


const Container = styled.section`
 margin: 0;
 list-style: none;
 background-color: #E5E5E5;
 display: grid;
 grid-template-columns: repeat(3, minmax(300px, 1fr));
 justify-content: center;
 border-top: 1px solid black;
`;


export default connect(PaintingCategories);