import React, { useEffect, useState } from 'react';
import Members from './Members';
import axios from 'axios';

const MembersList = ({ members, setMembers, memberCount, id, test}) => {
  const [comp, setComp] = useState(null);
  const [minMembers, setMinMembers] = useState(1)
  
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

  // Calculate the number of optional members
  const optionalMembers = (memberCount + 1) - Number(test);

  let count = 1;

  return (
    <div>
      {members.map((member, index) => {
        count += index;
        let isOptional = false;
        if (index + 2 > Number(test)) {
          isOptional = true;
        }
        {/* const isOptional = index >= minMembers && index < minMembers + optionalMembers; */}
        
        return (
          <div key={index}>
            <label className='text-xl max-w-[50%] italic mt-5 mb-2 ml-2 bg-[linear-gradient(270deg,#0D32C5_0%,#1768DB_37.9%,#1E8AE9_93.9%,#23A7F4_100%)] bg-clip-text text-transparent font-bold'>
              Team Member {index + 2} {isOptional ? "(Optional)" : ""}
            </label>
            <Members
              key={index}
              isOptional={isOptional}
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
              setOptional={(value) => updateMember(index, 'optional', value)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default MembersList;
