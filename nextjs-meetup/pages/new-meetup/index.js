import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const addMeetUpHandler = (enterdMeetupData) => {
    console.log(enterdMeetupData);
  };

  return <NewMeetupForm onAddMeetup={addMeetUpHandler} />;
};
export default NewMeetupPage;
