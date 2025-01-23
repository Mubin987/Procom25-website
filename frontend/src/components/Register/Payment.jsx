import React, { useState } from "react";
import RegisterHeading from "../ui/register-headings";

const Payment = ({ fileUrl, setFileUrl, fileError, setFileError, price, setFile }) => {
  const [fileName, setFileName] = useState(null);
  
  const handleFileChange = (e) => {
    const MAX_FILE_SIZE = 2 * 1024 * 1024;

    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];

      if (!file.type.startsWith('image/')) {
        alert('Please upload an image file.');
        return;
      }

      if (file.size > MAX_FILE_SIZE) {
        alert('File size exceeds the 5MB limit. Please upload a smaller file.');
        return;
      }

      setFile(file); // Pass the file to parent (Register.jsx)
      setFileUrl(URL.createObjectURL(file));
      setFileName(file.name);
      setFileError(false);
    }
  };

  return (
    <div className="relative pl-10 mt-16 font-lemonmilk">
      <RegisterHeading heading={"payment"} textSize='text-2xl' />
      <div className='absolute left-4 top-7 md:left-6 flex w-[90%] sm:w-[90%] md:w-[93%] lg:w-[80%]'>
        <div className="w-full border-t-4 border-dashed border-themeBlue mt-3 " />
        <div className="flex flex-col items-center rounded-lg bg-[linear-gradient(90deg,_#FFFFFF_14.9%,_#DCF4FF_100%)] sm:w-[80%] lg:w-[55%] p-6 pt-3 ml-3 cursor-pointer drop-shadow-lg">
          <div className='lg:w-60'>
            <label htmlFor="file-input" className=" flex flex-col items-center cursor-pointer ">
              <span className="italic block text-center sm:text-base bg-[linear-gradient(90deg,_#1F95ED_0%,_#2169D4_100%)] bg-clip-text text-transparent font-bold">
                UPLOAD PAYMENT RECEIPT
              </span>
              <div className='my-3'><img src='/upload_symbol.png' className='w-[30px] sm:w-[40px] h-[30px] sm:h-[40px]' /></div>
              <span className="italic text-[7px] sm:text-[8px] bg-[linear-gradient(90deg,_#1F95ED_0%,_#2169D4_100%)] bg-clip-text text-transparent font-bold">
                *DRAG AND DROP YOUR IMAGE OR CLICK THE BUTTON
              </span>
              <span className='italic text-[7px] sm:text-[8px] bg-[linear-gradient(90deg,_#1F95ED_0%,_#2169D4_100%)] bg-clip-text text-transparent font-bold'>
                BELOW TO SELECT FILE. *
              </span>
              { fileError &&
                <p className="mt-2 font-bold italic text-[10px] sm:text-[11px] md:text-[12px] text-red-600">You must provide a payment receipt</p>
              }
            </label>
            <input
              id="file-input"
              type="file"
              accept="image/*"
              required
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
          {fileName && fileUrl && (
            <div className="mt-2 text-center">
              <p className="bg-[linear-gradient(90deg,_#1F95ED_0%,_#2169D4_100%)] bg-clip-text text-transparent font-bold text-[10px] italic">
                File{" "}
                <a
                  href={fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  {fileName}
                </a>{" "}
                has been successfully uploaded.
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="absolute top-[29px] left-[-1%] flex h-7 w-7 items-center justify-center rounded-full bg-[linear-gradient(90deg,_#1F95ED_0%,_#2169D4_100%)] font-bold text-white text-xl z-10">
        <span className="bg-[linear-gradient(90deg,_#FFFFFF_14.9%,_#D0EFFF_63.77%,_#A7E2FF_100%)] bg-clip-text text-transparent font-bold">4</span>
      </div>
      <div className="mt-4 bg-[linear-gradient(180deg,_#199DDF_0%,_#145BD5_100%)] w-[50%] sm:w-1/2 md:w-[55%] lg:w-full bg-clip-text text-transparent font-bold">
        <p className="text-[13px] sm:text-sm italic">
          PLEASE PAY YOUR FEES IN THE FOLLOWING ACCOUNT!
          <br />
          BANK NAME: <span className="font-medium text-black opacity-70 not-italic">United Bank Limited (UBL)</span>
          <br />
          ACCOUNT TITLE: <span className="font-medium text-black opacity-70 not-italic">MUHAMMAD SHAHMIR RAZA</span>
          <br />
          ACCOUNT NUMBER: <span className="font-medium text-black opacity-70 not-italic">0471321377551</span>
          <br />
          IBAN: <span className="font-medium text-black opacity-70 not-italic">PK62UNIL0109000321377551</span>
          <br />
          AMOUNT: <span className="font-medium text-black opacity-70 not-italic">{price === 0 ? '-': price}</span>
        </p>
      </div>
    </div>
  );
}

export default Payment;
