import React from 'react';
import { Card, CardBody, CardTitle, CardText} from 'reactstrap';

const Character = props => {
let {data} = props;
    return(
        <div>
            {data.map(ricknMorty =>{
                return(
            <div>
                <Card>
                    <CardBody>
                    <CardTitle>Name:{ricknMorty.name}</CardTitle>
                    <CardText>Gender:{ricknMorty.gender}</CardText>
                    <CardText>Birth Year:{ricknMorty.birth_year}</CardText>
                    </CardBody>
                </Card>
        </div>


    )
})}
</div>
    )
}
export default Character;