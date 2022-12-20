import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image='https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg'
      title='First MeetUp'
      address='Some Street 5 , Some City'
      description='The Meetup Description'
    />
  );
};

const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
        id: meetupId,
        title: "First MeetUp",
        address: "Some Street 5 , Some City",
        description: "The Meetup Description",
      },
    },
  };
};
export default MeetupDetails;
