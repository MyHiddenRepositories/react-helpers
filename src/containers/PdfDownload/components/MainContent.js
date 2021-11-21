import { SectionOne } from "./SectionOne"
import { SectionThree } from "./SectionThree"
import { SectionTwo } from "./SectionTwo"

export const MainContent = ({
    forPdf = false,
    onDownloadAll = () => {},
    onDownloadSectionOne = () => {},
    onDownloadSectionTwo = () => {},
    onDownloadSectionThree = () => {},
}) => {
    return <article>
        Privacy Policy {!forPdf && <button onClick={onDownloadAll}>Download All</button>}
        <SectionOne forPdf={forPdf} onDownload={onDownloadSectionOne}/>
        <SectionTwo forPdf={forPdf} onDownload={onDownloadSectionTwo}/>
        <SectionThree forPdf={forPdf} onDownload={onDownloadSectionThree}/>
    </article>
}