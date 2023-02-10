import React, { useRef } from'react';
import GenericPdfDownloader from './GenericPdfDownloader';

function GenericPdf() {
    const componentRef = useRef();
  return (
    <>
        <GenericPdfDownloader
          componentRef={componentRef}
          rootElementId="testId" 
        />
    
    </>
  );
}

export default GenericPdf;