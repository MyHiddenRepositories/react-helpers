import { useEffect, useRef, useState } from "react";
import jsPDF from "jspdf";


const initialState = {
    component: null,
    filename: '',
};

export const useDownloadPdf = () => {
    const [state, setState] = useState(initialState);
    const [pdfView, setPdfView] = useState(null);
    const pdfRef = useRef(null);

    const clearState = () => {
        setState(initialState);
        setPdfView(null);
        pdfRef.current = null;
    }

    useEffect(() => {
        if (state.component) {
            const pdf = new jsPDF("p", "pt", "a4");
    
            // pdf.html(pdfRef.current, {
            //     callback: () => {
            //         pdf.save(state.filename);
            //         clearState();
            //     }
            // });
            pdf.html(document.querySelector('a'), {
                callback: () => {
                    pdf.save(state.filename);
                    clearState();
                }
            });
        }
    }, [state])

    const handleSetState = (data) => {
        if (!data || !data.component) {
            return;
        }

        const component = <div style={{display: 'none'}} >
            <div ref={pdfRef} style={{width: 595.28}}>
                {data.component}
            </div>
        </div>;

        setPdfView(component);
        setState(data);
    }

    return [
        pdfView,
        handleSetState,
    ]
}