import React from "react";
import { Card, Button } from "semantic-ui-react";

const Cards = (props) => {
  const { loading, errorMessage, volunteerOpportunities, openVolunteerModal } =
    props;

  return (
    <Card.Group itemsPerRow={window.innerWidth < 600 ? 1 : 2}>
      {!loading &&
        !errorMessage &&
        volunteerOpportunities.map((volunteer) => (
          <Card fluid>
            <Card.Content
              header={volunteer.position}
              description={volunteer.description}
            />
            <Card.Content extra>
              <Button
                color="blue"
                volunteerId={volunteer._id}
                onClick={openVolunteerModal}
                position={volunteer.position}
              >
                Apply
              </Button>
            </Card.Content>
          </Card>
        ))}
    </Card.Group>
  );
};

export default Cards;
