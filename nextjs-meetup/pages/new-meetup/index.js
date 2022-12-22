import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Head from "next/head";
import { Fragment } from "react";

const NewMeetupPage = () => {
  const router = useRouter();
  const addMeetUpHandler = async (enterdMeetupData) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enterdMeetupData),
      headers: { "Content-type": "application/json" },
    });
    const data = await response.json();
    console.log(data);
    router.push("/");
  };

  return (
    <Fragment>
      <Head>
        <title>Add a New Meetup</title>
        <meta
          name='description'
          content='Add your own meetups and create amazing networking opportunities.'
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetUpHandler} />
    </Fragment>
  );
};
export default NewMeetupPage;
