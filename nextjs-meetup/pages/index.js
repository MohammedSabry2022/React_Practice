import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";
const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "Some Address 5 ,12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "Some Address 10 ,12345 Some City",
    description: "This is a first meetup!",
  },
];
const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

// export const getServerSideProps = async (context) => {
//   const req = context.req;
//   const res = context.res;
//   return { props: { meetups: DUMMY_MEETUPS } };

export const getStaticProps = async () => {
  return { props: { meetups: DUMMY_MEETUPS }, revalidate: 1 };
};

export default HomePage;
