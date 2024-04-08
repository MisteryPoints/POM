import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react"; 
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const FramerImage = motion(Image); 

const Instructive = ({title, img, details, createdBy, date, system}) => {
  const [movils, setMovils] = useState(false); 

  return (
    <Accordion type='multiple' collpasible>
      <AccordionItem value='item-1'>
        <AccordionTrigger>{title}</AccordionTrigger>
        <AccordionContent>
          {details}
          <p>{createdBy}</p>
          <p>{date}</p>
        </AccordionContent>  
      </AccordionItem>
    </Accordion>
  );
};

export default Instructive;
