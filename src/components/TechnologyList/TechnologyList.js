import React from 'react'
import { DiFirebase } from 'react-icons/di'
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from '../Technologies/TechnologiesStyles'

const techologyList = [
    ["Front end", <>Experiência com <br />
        React.js</>],
    ["Backend end", <>Experiência com <br />
        NodeJS</>],
    ["UI / UX", <>Experiência com <br />
        Ferramentas como o Figma</>]
]

const TechnologyList = () => {
    return (
        <List>
            {techologyList.map(technology => (
                <ListItem>
                    <DiFirebase size="3rem" />
                    <ListContainer>
                        <ListTitle>{technology[0]}</ListTitle>
                        <ListParagraph>
                            {technology[1]}
                        </ListParagraph>
                    </ListContainer>
                </ListItem>
            ))}
        </List>
    )
}

export default TechnologyList