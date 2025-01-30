import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Hero from '@/components/Register/Hero';
import Competitions from '@/components/Register/Competitions';
import Department from '@/components/Register/Department';
import Note from '@/components/Register/Note';
import Payment from '@/components/Register/Payment';
import Review from '@/components/Register/Review';
import TeamInformation from '@/components/Register/Team-Information';
import RegisterHeading from '@/components/ui/register-headings';
import ConfirmDialog from '@/components/Register/ConfirmDataDialog';
import axios from 'axios'

import '../index.css';
import { toast } from '@/hooks/use-toast';

const Register = () => {
  const [department, setDepartment] = useState('');
  const [departError, setDepartError] = useState(false);
  const [competitions, setCompetitions] = useState('');
  const [compError, setCompError] = useState(false);
  const [teamName, setTeamName] = useState('');
  const [teamNameError, setTeamNameError] = useState('');
  const [teamNameAvailableError, setteamNameAvailableError] = useState(false);
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [cnicNo, setCnicNo] = useState('');
  const [cnicError, setCnicError] = useState(false);
  const [emailAddress, setEmailAddress] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [whatsapp, setWhatsapp] = useState('');
  const [whatsappError, setWhatsappError] = useState('');
  const [referenceCode, setReferenceCode] = useState('');
  const [fileUrl, setFileUrl] = useState(null);
  const [file, setFile] = useState(null) 
  const [fileError, setFileError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isErrorPresent, setIsErrorPresent] = useState(false);
  const [memberCount, setMemberCount] = useState(1);
  const [minMemberCount, setMinMemberCount] = useState(1);
  const [fetchedCompetitions, setFetchedCompetitions] = useState(null);
  const [competitionId, setCompetitionId] = useState("");
  const [test, setTest] = useState("")
  const [price, setPrice] = useState(0);
  const [Semaphore, setsemaphore] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams(); // BA = Brand Ambassader



  const minRef = useRef(null);

  const [members, setMembers] = useState(
    Array.from({ length: memberCount }, () => ({
      name: '',
      cnicNo: '',
      emailAddress: '',
      whatsapp: '',
      optional: false,
      nameError: false,
      cnicError: false,
      emailError: false,
      whatsappError: false,
    }))
  );

  const navigate = useNavigate();

  const formData = {
    teamName,
    setTeamName,
    name,
    setName,
    cnicNo,
    setCnicNo,
    emailAddress,
    setEmailAddress,
    whatsapp,
    setWhatsapp,
    referenceCode,
    setReferenceCode,
    emailError,
    setEmailError,
    cnicError,
    setCnicError,
    teamNameError,
    setTeamNameError,
    nameError,
    setNameError,
    whatsappError,
    setWhatsappError,
  };

  const catchError = () => {
    // Check for errors in general fields
    if (department.length === 0) setDepartError(true);
    if (competitions.length === 0) setCompError(true);
    if (teamName.length === 0) setTeamNameError(true);
    if (name.length === 0) setNameError(true);
    if (whatsapp.length === 0) setWhatsappError(true);
    if (emailAddress === '') setEmailError(true);
    if (cnicNo.length !== 15) setCnicError(true);
    if (fileUrl === null) setFileError(true);

    // Check for errors in each member
    members.forEach((member, index) => {
      if (member.name === '' && !member.optional) setMembers(prevMembers => {
        const updatedMembers = [...prevMembers];
        updatedMembers[index].nameError = true;
        return updatedMembers;
      });
      if (member.cnicNo.length !== 15 && !member.optional) setMembers(prevMembers => {
        const updatedMembers = [...prevMembers];
        updatedMembers[index].cnicError = true;
        return updatedMembers;
      });
      if (member.emailAddress === '' && !member.optional) setMembers(prevMembers => {
        const updatedMembers = [...prevMembers];
        updatedMembers[index].emailError = true;
        return updatedMembers;
      });
      if (member.whatsapp === '' && !member.optional) setMembers(prevMembers => {
        const updatedMembers = [...prevMembers];
        updatedMembers[index].whatsappError = true;
        return updatedMembers;
      });
    });
  };

  const confirmInfo = () => {
    setDepartError(false);
    setCompError(false);
    setNameError(false);
    setWhatsappError(false);
    setEmailError(false);
    setCnicError(false);
    setTeamNameError(false);
    setFileError(false);

    // Reset member errors
    setMembers(prevMembers =>
      prevMembers.map(member => ({
        ...member,
        nameError: false,
        cnicError: false,
        emailError: false,
        whatsappError: false,
      }))
    );

    // Call catchError to check all fields
    catchError();

    // If any error exists, set the error flag and return
    if (
      departError ||
      compError ||
      cnicError ||
      emailError ||
      teamNameError ||
      nameError ||
      whatsappError ||
      fileError ||
      members.some(member => member.nameError || member.cnicError || member.emailError || member.whatsappError)
    ) {
      setIsErrorPresent(true);
      return;
    }

    setIsOpen(true);
  };

  const fetchCompetitions = async () => {
    axios.get("https://procom25-server.vercel.app/competition")
      .then((res) => {
        setFetchedCompetitions(res.data)
      })
  }

  useEffect(() => {
    fetchCompetitions();
    setPrice(0)
  }, [department])

  const checkErrors = (members) => {
    let hasError = false;
    const updatedMembers = members.map(member => {
      const updatedMember = { ...member };
      // Check name error
      if (updatedMember.name.trim().length === 0) {
        updatedMember.nameError = true;
        hasError = true;
      } else {
        updatedMember.nameError = false;
      }

      // Check CNIC error
      if (updatedMember.cnicNo.trim().length !== 15) {
        updatedMember.cnicError = true;
        hasError = true;
      } else {
        updatedMember.cnicError = false;
      }

      // Check email error
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(updatedMember.emailAddress)) {
        updatedMember.emailError = true;
        hasError = true;
      } else {
        updatedMember.emailError = false;
      }

      // Check WhatsApp error
      if (updatedMember.whatsapp.trim().length !== 11) {
        updatedMember.whatsappError = true;
        hasError = true;
      } else {
        updatedMember.whatsappError = false;
      }

      return updatedMember;
    });

    setMembers(updatedMembers);

    // If there's any error, return false
    return hasError;
  };

  useEffect(() => {
  }, [minMemberCount])

  const handleSubmit = async () => {
    setsemaphore(true)
    const filteredMembers = members.map((member) => ({
      isLeader: false,
      name: member.name,
      phone: member.whatsapp,
      email: member.emailAddress,
      cnic: member.cnicNo.split('').filter((char) => char !== '-').join(''),
    }));

    const totalMemberData = [
      {
        isLeader: true,
        name: name,
        phone: whatsapp,
        email: emailAddress,
        cnic: cnicNo,
      },
      ...filteredMembers,
    ];

    // Ensure the payment image is provided
    if (!file) {
      setFileError(true);
      setIsOpen(false)
      setsemaphore(false);
      toast({
        variant: "destructive",
        title: "You must upload a payment receipt",
      });
      return;
    }

    // Validate all inputs
    catchError();

    // If any error exists, return
    if (
      departError ||
      compError ||
      cnicError ||
      emailError ||
      teamNameError ||
      nameError ||
      whatsappError ||
      fileError ||
      members.some(
        (member) =>
          member.nameError || member.cnicError || member.emailError || member.whatsappError
      )
    ) {
      setIsErrorPresent(true);
      setIsOpen(false);
      setsemaphore(false);

      toast({
        variant: "destructive",
        title: "Registration failed. Please try again.",
      });
      return;
    }
    setIsErrorPresent(false)
    // const BA_value = searchParams.get('ba')
    const teamData = {
      team_name: teamName,
      brand_Ambassador: searchParams.get('ba'),
      isApproved: false, // Always false
      member: totalMemberData,
      Registration_time: new Date()
    };


    const formData = new FormData();
    formData.append("_id", competitionId);
    formData.append("team", JSON.stringify(teamData));
    formData.append("file", file);

    try {
      const response = await fetch("https://procom25-server.vercel.app/register", {
        method: "POST",
        body: formData, // Browser automatically sets the correct Content-Type
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Handle success
      toast({
        variant: "success",
        title: "Registration successful!",
      });
      setsemaphore(false)
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
      toast({
        variant: "destructive",
        title: "Registration failed. Please try again.",
      });
      setIsOpen(false)
      setsemaphore(false)

    }
  };


  return (
    <div className="flex flex-col gap-16">
      <Hero page="Register" />
      <div className="min-h-screen p-4 md:p-6 lg:p-8">
        <form id="procom-25-registration-form" className="mx-auto max-w-5xl relative mt-9">
          <RegisterHeading heading="start" textSize="text-[29px] " />
          <div className="absolute left-10 top-[34px] bottom-[4.5rem] sm:bottom-[3.5rem] md:bottom-8 xl:bottom-4 border-l-4 border-dashed border-themeBlue md:left-10" />
          <div className="pl-4">
            <Department setDepartment={setDepartment} departError={departError} />
            <Competitions
              minRef={minRef}
              department={department}
              setCompetitions={setCompetitions}
              compError={compError}
              setMinMember={setMinMemberCount}
              setPrice={setPrice}
              setMembers={setMemberCount}
              fetchedCompetitions={fetchedCompetitions}
              setCompetitionId={setCompetitionId}
              setTest={setTest}
            />
            <TeamInformation
              props={formData}
              memberCount={memberCount}
              members={members}
              setMembers={setMembers}
              minMemberCount={minMemberCount}
              checkErrors={checkErrors}
              teamNameAvailableError={teamNameAvailableError}
              setteamNameAvailableError={(e)=>setteamNameAvailableError(e)}
              test={test}
            />
            <Payment fileUrl={fileUrl} setFileUrl={setFileUrl} fileError={fileError} setFileError={setFileError} price={price} setFile={setFile} />
            <Review confirmInfo={confirmInfo} isErrorPresent={isErrorPresent} competitionId={competitionId} team_name={teamName} setteamNameAvailableError={(e)=>setteamNameAvailableError(e)}/>
          </div>
        </form>
        <ConfirmDialog
          handleSubmit={handleSubmit}
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false);
            setsemaphore(false)
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
            Semaphore,
            setsemaphore

          }}
        />
        <Note />
      </div>
    </div>
  );
};

export default Register;
