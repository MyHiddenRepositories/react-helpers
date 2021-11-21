export const SectionOne = ({
    forPdf = false, 
    onDownload = () => {},
}) => {
    return <section>
        <h2>Section 1 {!forPdf && <button onClick={onDownload}>Download PDF</button>}</h2>
        <p>EditMentor is committed to protecting our users’ privacy. This Privacy Policy (“Policy”) describes the types of information we may collect from you or that you may provide when you visit the website www.editmentor.com (our "Website") and our practices for collecting, using, maintaining, protecting, and disclosing that information. We will take reasonable steps to protect user privacy consistent with the guidelines set forth in this Policy and the law.</p>
        <p>If you use EditMentor as part of an entity or organization that has an agreement with EditMentor (like an educational institution), the terms of that organization’s contract may restrict our collection or use of your information in more ways than what is described in this Policy.</p>
        <p>EditMentor provides tools to control your personal data, including the ability to consent or withdraw consent for its collection and use.</p>
        <p>This Policy applies to EditMentor’s Website, communications, and services (“Services”).</p>
        <p>This Policy applies to your use of our services. We may revise this Policy from time to time, and will post the most current version on our website. If a revision meaningfully reduces your rights, we will notify you.</p>
        <ul>
            <li>Contact 1</li>
            <li>Contact 2</li>
            <li>
                <a href="https://www.facebook.com/" >
                    Contact 3
                </a>
            </li>
        </ul>
    </section>
}