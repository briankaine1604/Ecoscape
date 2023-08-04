"use client"
import React, { useState, useEffect } from "react";
import {IoIosArrowDropright} from 'react-icons/io'
import {IoIosArrowDropleft} from 'react-icons/io'
import Image from 'next/image'
import Link from "next/link";

const Keyprojects = () => {
  const myArray = [
    {index: 1,title:'Citizen Science Programs',description:'Encourage users to participate in citizen science projects, where they can contribute to research and data collection efforts that aid in understanding and conserving nature.', image:'/image/citizenscience.jpg', alt:'Science conference', link:'#' },
    {index: 2,title:'Nature Photography Contests',description:'Organize photography contests that celebrate the beauty of nature and showcase stunning images taken by photographers from around the world.',image:'/image/photography.jpg', alt:'Photographer', link:'#' },
    {index: 3,title:'Environmental Education in Schools',description:'Develop educational materials and programs that schools can use to teach students about environmental conservation and sustainability.',image:'/image/education.jpg',alt:'Conserving nature', link:'#' },
    {index: 4,title:"Plant Research", description:"Plant research is at the heart of our nature website's mission. Our scientists and experts explore plant biology, genetics, ecology, and more to deepen our understanding of botanical life. Through cutting-edge methods, we uncover how plants adapt to their environment, their impact on ecosystems, and their potential in medicine and agriculture.",image:'/image/plantresearch.jpg',alt:'Plant Science', link:'#' },
    {index: 5,title:'Green Product Reviews',description:'Create a section that reviews eco-friendly and sustainable products, encouraging visitors to make conscious choices when shopping.', image:'/image/greenproducts.jpg', alt:'Science conference', link:'#' },
    {index: 6,title:'Conservation Volunteer Programs',description:'Promote volunteer opportunities with conservation organizations, providing information on how visitors can get involved and make a difference.',image:'/image/volunteer.jpg', alt:'Photographer', link:'#' },
    {index: 7,title:'Nature Documentaries and Video Series',description:'Produce or curate high-quality nature documentaries and video series that explore different ecosystems, wildlife behavior, and conservation efforts.',image:'/image/naturedocu.jpg',alt:'Conserving nature', link:'#' },
    {index: 8,title:'Climate Action Campaigns',description:' Launch awareness campaigns that educate people about climate change, its impact on nature, and ways individuals and communities can contribute to mitigating climate change.',image:'/image/climateaction.jpg',alt:'Plant Science', link:'#' },
    {index: 9,title:'Habitat Restoration Projects',description:'Collaborate with local communities and organizations to participate in habitat restoration initiatives, such as tree planting or beach cleanups.',image:'/image/restoration.jpg',alt:'Conserving nature', link:'#' },
    {index: 10,title:'Interactive Nature Maps',description:'Create interactive maps that highlight biodiversity hotspots, natural landmarks, and areas in need of conservation efforts.',image:'/image/maps.jpg',alt:'Plant Science', link:'#' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentObject, setCurrentObject] = useState(myArray[0]);

  const displayNextObject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % myArray.length);
  };

  const displayPreviousObject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + myArray.length) % myArray.length);
  };

  useEffect(() => {
    setCurrentObject(myArray[currentIndex]);
  }, [currentIndex]);

  useEffect(() => {
    // Set up the interval to display the next object's title and description every 5 seconds
    const intervalId = setInterval(displayNextObject, 5000);

    // Clear the interval when the component unmounts to avoid memory leaks
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run the effect only once on component mount

  return (
    <div className="w-full">
      <div className='head1 gothic mt-20'>PROJECTS</div>
      <div className="flex-col w-full items-center mx-auto justify-center">
      <div className="w-full mx-auto flex items-center justify-center">
        <button onClick={displayPreviousObject}><IoIosArrowDropleft className='text-4xl'/></button>
        <div key={currentObject.index} className='w-10/12 h-96  relative overflow-hidden '>
                <Image
                fill={true}
                style={{objectFit:"cover"}}
                src={currentObject.image}
                alt={currentObject.alt}
                loading="lazy"
                className="z-0"
                />
                <div className="w-full bg-white gothic flex-col h-fit text-black bg-opacity-40 z-20 absolute bottom-0 p-2 shadow-md">
                <Link className="" href={currentObject.link}><h2 className='text-2xl  font-bold '>{currentObject.title}</h2>
                <p className="text-xl font-medium">{currentObject.description}</p></Link>
                </div>
                </div>
        <button onClick={displayNextObject}><IoIosArrowDropright className='text-4xl '/></button>
        
      </div>
      
      

      
      </div>
    </div>
  );
};

export default Keyprojects;
