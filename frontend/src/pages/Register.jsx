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
import ConfirmDialog from '@/components/Register/ConfirmDataDialog';


const Register = () => {
  const [department, setDepartment] = useState("");
  const [departError, setDepartError] = useState(false);
  const [competitions, setCompetitions] = useState("");
  const [compError, setCompError] = useState(false);
  const [teamName, setTeamName] = useState("");
  const [teamNameError, setTeamNameError] = useState("");
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [cnicNo, setCnicNo] = useState(undefined);
  const [cnicError, setCnicError] = useState(false);
  const [emailAddress, setEmailAddress] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [whatsapp, setWhatsapp] = useState(undefined);
  const [whatsappError, setWhatsappError] = useState("");
  const [referenceCode, setReferenceCode] = useState("");
  const [fileUrl, setFileUrl] = useState(null);
  const [fileError, setFileError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isErrorPresent, setIsErrorPresent] = useState(false);
  const navigate = useNavigate();
  const formData = {
    teamName, setTeamName, name, setName, cnicNo, setCnicNo,
    emailAddress, setEmailAddress, whatsapp, setWhatsapp, referenceCode, setReferenceCode,
    emailError, setEmailError, cnicError, setCnicError, teamNameError, setTeamNameError,
    nameError, setNameError, whatsappError, setWhatsappError
  }

  const catchError = () => {
    if (department.length === 0) setDepartError(true);
    if (competitions.length === 0) setCompError(true);
    if (teamName.length === 0) setTeamNameError(true);
    if (name.length === 0) setNameError(true);
    if (whatsapp.length === 0) setWhatsappError(true);
    if (emailAddress === "") setEmailError(true);
    if (cnicNo.length != 13) setCnicError(true);
    if (fileUrl === null) setFileError(true);
  }

  const confirmInfo = () => {
    setIsErrorPresent(false);
    setDepartError(false);
    setCompError(false);
    setTeamNameError(false);
    setNameError(false);
    setCnicError(false);
    setEmailError(false);
    setWhatsappError(false);
    setFileError(false);
    catchError();
    if (departError || compError || cnicError || emailError || teamNameError
      || nameError || whatsappError || fileError) {
      setIsErrorPresent(true);
      return;
    }
    setIsOpen(true);
  }

  const handleSubmit = () => {
    // Implement the logic for post into database here when backend is done
    const updatedFormData = { department, competitions, teamName, name, cnicNo, emailAddress, whatsapp, referenceCode }
    console.log(updatedFormData);
    navigate('/')
  };

  return (
    <div className='flex flex-col gap-16'>
      <Hero page={"Register"} />
      <div className="min-h-screen p-4 md:p-6 lg:p-8">
        <form className="mx-auto max-w-5xl relative mt-9">
          <RegisterHeading heading={"start"} textSize='text-[29px]' />
          {/* Add the main vertical dotted line */}
          <div className="absolute left-10 top-[34px] bottom-[62px] sm:bottom-[20px] border-l-4 border-dashed border-themeBlue md:left-10" />
          <div className='pl-4'>
            <Department setDepartment={setDepartment} departError={departError} />
            <Competitions setCompetitions={setCompetitions} compError={compError} />
            <TeamInformation
              props={formData}
            />
            <Payment fileUrl={fileUrl} setFileUrl={setFileUrl} fileError={fileError} setFileError={setFileError} />
            <Review confirmInfo={confirmInfo} isErrorPresent={isErrorPresent} />
          </div>
        </form>
        <ConfirmDialog
          handleSubmit={handleSubmit}
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
          props={{
            department,
            competitions,
            teamName,
            name,
            cnicNo,
            emailAddress,
            whatsapp,
            referenceCode,
            fileUrl,
          }}
        />
        <Note />
      </div>
    </div>
  );
}

export default Register;