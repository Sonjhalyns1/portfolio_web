import React,{useState} from 'react'
import {Document, Page} from 'react-pdf/dist/esm/entry.webpack'
const Resumepdf = () => {
    const  [numPage,setNumPages] = useState(null);
    const [ pageNumber, setPageNumber] = useState(1);
    function onDocumentLoadSuccess({numPages}){
        setNumPages(numPage);
        setPageNumber(1);
    }
  return (
    <div>
        <Document file= '/resume.pdf' onLoadSuccess={onDocumentLoadSuccess}>
            <Page height="600" width= " 1000" pageNumber={pageNumber} />
        </Document>
        <p>
        Page {pageNumber} of {numPage}
        </p>
    </div>
  )
}

export default Resumepdf