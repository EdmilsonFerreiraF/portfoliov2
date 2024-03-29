import React from 'react'
import { DiFirebase, DiReact, DiZend } from 'react-icons/di'
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from '../Technologies/TechnologiesStyles'

const technologyList = [
    ["Front end", <DiReact size="3rem" />, <>Experiência com <br />
        React.js</>],
    ["Backend end", <DiFirebase size="3rem" />, <>Experiência com <br />
        NodeJS</>],
    ["Plataformas em nuvem e hospedagem", <DiZend size="3rem" />, <>Experiência com <br />
        Azure, Heroku, Firebase, Netlify, Hostinger</>],
]

const TechnologyList = () => {
    return (
        <List>
            {technologyList.map(technology => (
                <ListItem>
                    {technology[1]}
                    <ListContainer>
                        <ListTitle>{technology[0]}</ListTitle>
                        <ListParagraph>
                            {technology[2]}
                        </ListParagraph>
                    </ListContainer>
                </ListItem>
            ))}
        </List>
    )
}

export default TechnologyList