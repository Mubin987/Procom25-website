import React, { useEffect, useState } from 'react';
import Members from './Members';

const MembersList = ({ members, setMembers, memberCount }) => {
  useEffect(() => {
    if (memberCount > members.length) {
      const newMembers = Array.from(
        { length: memberCount - members.length },
        () => ({
          name: '',
          cnicNo: '',
          emailAddress: '',
          whatsapp: '',
          nameError: false,
          cnicError: false,
          emailError: false,
          whatsappError: false,
        })
      );
      setMembers((prevMembers) => [...prevMembers, ...newMembers]);
    } else if (memberCount < members.length) {
      setMembers((prevMembers) => prevMembers.slice(0, memberCount));
    }
  }, [memberCount, members.length]); 

  const updateMember = (index, field, value) => {
    setMembers(prevMembers =>
      prevMembers.map((member, i) =>
        i === index ? { ...member, [field]: value } : member
      )
    );
  };

  return (
    <div>
      {members.map((member, index) => (
        <div>
            <label>Team Member {index + 1}</label>
            <Members
            key={index}
            name={member.name}
            cnicNo={member.cnicNo}
            emailAddress={member.emailAddress}
            whatsapp={member.whatsapp}
            nameError={member.nameError}
            cnicError={member.cnicError}
            emailError={member.emailError}
            whatsappError={member.whatsappError}
            setName={(value) => updateMember(index, 'name', value)}
            setCnicNo={(value) => updateMember(index, 'cnicNo', value)}
            setEmailAddress={(value) => updateMember(index, 'emailAddress', value)}
            setWhatsapp={(value) => updateMember(index, 'whatsapp', value)}
            setNameError={(value) => updateMember(index, 'nameError', value)}
            setCnicError={(value) => updateMember(index, 'cnicError', value)}
            setEmailError={(value) => updateMember(index, 'emailError', value)}
            setWhatsappError={(value) => updateMember(index, 'whatsappError', value)}
            />
        </div>
      ))}
    </div>
  );
};

export default MembersList;