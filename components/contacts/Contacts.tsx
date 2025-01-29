'use client'
import Title from "../utils/Title";
import Animation from "./Animation";
import Social from "./Social";
import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormStatus {
  message: string;
  isError: boolean;
}


const Contacts: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState<FormStatus>({
    message: '',
    isError: false
  });
  
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ message: '', isError: false });
  
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
  
      const result = await response.json();
      setStatus({ message: result.message || 'Message sent successfully!', isError: false });
      setIsSubmitted(true); 
    } catch (error) {
      setStatus({ message: 'Failed to send message. Please try again.', isError: true });
      console.log(error);
    }
  };
  
    
  return (
    <section id='contacts' className='mx-auto bg-[#030712] h-fit w-max-full 
    overflow-hidden pb-8 lg:pb-0 2xl:pb-4'>
      <div className='w-[98%] md:w-[90%] xl:w-[80%] 2xl:w-[70%] mx-auto'>
        <div className='h-full w-full py-8 lg:py-16 xl:pb-0'>
          <div className="mb-4 lg:mb-8 xl:mb-10">
            <Title text='Contacts'/>
          </div>
          <div className="flex flex-col xl:flex-row justify-center xl:justify-between w-full p-4">
            <div className="flex justify-center">
              {!isSubmitted ? (
              <form
                onSubmit={handleSubmit} 
                className="w-full h-full border-4 border-[#00ddff] rounded-lg md:max-w-[500px] md:p-4">
                <p className="custom-gradient-heading text-2xl p-2 md:p-6 text-center font-bold">
                  If you have any questions, you can email me. I will definitely answer!
                </p>

                <div className="px-4 md:px-8">
                  <p className="text-white text-xl mb-1 pl-2">Your name:</p>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                    className="border-2 border-[#00ddff] bg-[#030712] 
                  rounded-lg text-white w-full text-2xl focus:outline-none mb-2 px-2 py-1" />
                  <p className="text-white text-xl mb-1 pl-2">Your mail:</p>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                    className="border-2 border-[#00ddff] bg-[#030712] 
                  rounded-lg text-white w-full text-2xl focus:outline-none mb-2 px-2 py-1" />
                  <p className="text-white text-xl mb-1 pl-2">Message:</p>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required  
                    rows={4}
                    style={{ resize: 'none' }} 
                    className="border-2 border-[#00ddff] bg-[#030712] rounded-lg text-white 
                    w-full text-2xl focus:outline-none md:mb-8 px-2 py-1 xl:mb-2">
                  </textarea>
                  <div className="flex justify-center mb-2">
                    <button className="custom-button my-4">
                      Send
                    </button>
                    {status.message && ( 
                      <p className={`text-center mb-2 ${status.isError ? 'text-red-500' : 'text-green-500'}`}> {status.message} </p> )}
                  </div>
                </div>
              </form>

              ) : (
                <div className="text-center custom-gradient-heading min-h-[50vh] md:min-h-[80vh] flex items-center max-w-[500px]">
                  <p className="text-4xl font-bold">{status.message}</p>
                </div>
            )}
            </div>
            
            <div className="flex flex-col justify-center xl:w-1/2">
                <Animation />
                <Social />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts