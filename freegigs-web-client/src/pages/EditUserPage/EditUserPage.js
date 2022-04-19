import TopContainer from "./components/TopContainer";
import BottomContainer from "./components/BottomContainer";
import { useSelector } from "react-redux";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const EditUserPage = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.currentUser);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [contacts, setContacts] = useState("");
  const [university, setUniversity] = useState("");
  const [major, setMajor] = useState("");
  const [languages, setLanguages] = useState("");
  const [skills, setSkills] = useState("");
  const [overview, setOverview] = useState("");

  const handleOnClick = async () => {
    const nameEmail = {
      name: name,
      email: email,
    };

    const addDetails = {
      location: location,
      contacts: contacts,
      university: university,
      major: major,
      languages: languages,
      skills: skills,
      description: overview,
    };

    console.log(addDetails);

    const headers = {
      token: `Bearer ${user.accessToken}`,
    };

    try {
      await axios.put("https://freegigs.herokuapp.com/users/" + user._id, nameEmail, {
        headers,
      });
    } catch (err) {
      console.log(err);
    }

    try {
      const res = await axios.put(
        "https://freegigs.herokuapp.com/additional/" + user._id,
        addDetails,
        {
          headers,
        }
      );
      if (res.status === 201) {
        const success = true;

        navigate("/user" + user._id, { state: { success } });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <TopContainer
        name={name}
        university={university}
        setName={setName}
        setUniversity={setUniversity}
        location={location}
        setLocation={setLocation}
        email={email}
        setEmail={setEmail}
        contacts={contacts}
        setContacts={setContacts}
        major={major}
        setMajor={setMajor}
        languages={languages}
        setLanguages={setLanguages}
        skills={skills}
        setSkills={setSkills}
      />
      <BottomContainer
        overview={overview}
        setOverview={setOverview}
        handleOnClick={handleOnClick}
      />
    </>
  );
};

export default EditUserPage;