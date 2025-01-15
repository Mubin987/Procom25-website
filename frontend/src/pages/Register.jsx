import Hero from '@/components/Register/Hero';
import Competitions from '@/components/Register/Competitions';
import Department from '@/components/Register/Department';
import Note from '@/components/Register/Note';
import Payment from '@/components/Register/Payment';
import Review from '@/components/Register/Review';
import TeamInformation from '@/components/Register/Team-Information';
import RegisterHeading from '@/components/ui/register-headings';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';


const Register = () => {
  const [department, setDepartment] = useState("");
  const [competitions, setCompetitions] = useState("");
  const [teamName, setTeamName] = useState("");
  const [name, setName] = useState("");
  const [cnicNo, setCnicNo] = useState(null);
  const [emailAddress, setEmailAddress] = useState("");
  const [whatsapp, setWhatsapp] = useState(null);
  const [referenceCode, setReferenceCode] = useState(null);
  const navigate = useNavigate();
  const formData = {
    teamName, setTeamName, name, setName, cnicNo, setCnicNo,
    emailAddress, setEmailAddress, whatsapp, setWhatsapp, referenceCode, setReferenceCode
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement the logic for post into database here when backend is done
    const formData = { department, competitions, teamName, name, cnicNo, emailAddress, whatsapp, referenceCode }
    console.log(formData);
    navigate('/')
  };

  return (
    <div className='flex flex-col gap-16'>
      <Hero page={"Register"}/>
      <div className="min-h-screen p-4 md:p-6 lg:p-8">
        <form onSubmit={handleSubmit} className="mx-auto max-w-5xl relative mt-9">
          <RegisterHeading heading={"start"} textSize='text-[29px]'/>
          {/* Add the main vertical dotted line */}
          <div className="absolute left-10 top-[34px] bottom-[62px] sm:bottom-[20px] border-l-4 border-dashed border-themeBlue md:left-10" />
          <div className='pl-4'>
            <Department setDepartment={setDepartment} />
            <Competitions setCompetitions={setCompetitions} />
            <TeamInformation
              props={formData}
            />
            <Payment />
            <Review />
          </div>
        </form>
        <Note />
      </div>
    </div>
  );
}

export default Register;