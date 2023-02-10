import jsPDF from 'jspdf';
import React, { useContext, useState } from 'react';
import Template1 from './ResumeTemplates/Template1';
import './GenericPdf.css'
import Template2 from './ResumeTemplates/Template2';
import { Button } from '@mui/material';
import UserContext from '../Context/UserContext';

const GenericPdfDownloader = () => {
   let componentRef
   let componentRef2
   const userContextData = useContext(UserContext);

    const handleDownload = () => {
       let doc = new jsPDF("p", "pt", "a4");
        doc.html(selectedResume === "1"?componentRef:componentRef2, {
            callback: function (pdf) {
                pdf.save(`Profile.pdf`)
            }
        })
      };

      const [selectedResume, setSelectedResume] = useState('')


      return (
        <div>
         <div style={{display:"flex", flexDirection:"row", flexWrap:'wrap', justifyContent:'center'}}>
         <div onClick={() =>setSelectedResume('1') } style ={{border: selectedResume === "1"?"2px solid blue":''}} class="card">
            <div style={{width:'600px'}} ref={(response) => (componentRef =   response)} >
                <Template1 userContextData={userContextData} />
            <div class="overlay">
            </div>
            </div>
         
            </div>
            <div onClick={() =>setSelectedResume('2') } style ={{border: selectedResume === "2"?"2px solid blue":''}} class="card">
            <div  style={{width:'600px'}}  ref={(response) => (componentRef2 =  response)}   >
                <Template2  userContextData={userContextData}/>
                <div class="overlay">
            </div>
            </div>
                </div>
                <div style={{position:'relative', left:'39%'}}>
                <Button variant="contained" onClick={handleDownload}>Download PDF</Button>
           
                </div>
                     </div>
        </div>
      );

}

export default GenericPdfDownloader;