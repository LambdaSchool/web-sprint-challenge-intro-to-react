import {Card ,CardTitle, CardText} from 'reactstrap'
function Film(props){
  return (
    <div>
      <Card>
        <CardTitle>
          <CardText>DOB: {props.films.birth_year}</CardText>
          <CardText>Films: {props.films.name}   </CardText>       
          <CardText>Height: {props.films.height}</CardText>
          <CardText>Mass: {props.films.mass}</CardText>
          <CardText>Color: {props.films.hair_color}</CardText>
          <CardText>Skin: {props.films.skin_color}</CardText>
          <CardText>Eye: {props.films.eye_color}</CardText>
       
          </CardTitle>
      </Card>
     
    </div>
    
  )
}

  export default Film;