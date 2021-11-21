import './PdfDownload.scss';
import { SectionOne } from './components/SectionOne';
import { SectionTwo } from './components/SectionTwo';
import { SectionThree } from './components/SectionThree';
import { MainContent } from './components/MainContent';
import { useDownloadPdf } from '../../hooks/useDownloadPdf';




export const PdfDownloadContainer = () => {
    const [pdfView, setPdfInfo] = useDownloadPdf();

    const onDownload = (filename, component) => {
        setPdfInfo({
            filename,
            component,
        })
    }

    return <>
        <header>Header</header>
        <main>
            <aside>
                Left Side
            </aside>
            <MainContent
                onDownloadAll={() => onDownload('All', <MainContent forPdf={true} />)}
                onDownloadSectionOne={() => onDownload('Section 1', <SectionOne forPdf={true} />)} 
                onDownloadSectionTwo={() => onDownload('Section 2', <SectionTwo forPdf={true} />)}
                onDownloadSectionThree={() => onDownload('Section 3', <SectionThree forPdf={true} />)}
            />
        </main>
        <footer>Footer</footer>
        {pdfView}
    </>;
}