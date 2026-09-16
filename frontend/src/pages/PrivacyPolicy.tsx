import React from 'react';

const PrivacyPolicy: React.FC = () => {
    const containerStyle: React.CSSProperties = {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '40px 20px',
        fontFamily: 'Arial, sans-serif'
    };

    const titleStyle: React.CSSProperties = {
        fontSize: '2.5rem',
        marginBottom: '30px',
        color: '#333'
    };

    const sectionStyle: React.CSSProperties = {
        marginBottom: '30px'
    };

    const sectionTitleStyle: React.CSSProperties = {
        fontSize: '1.5rem',
        marginBottom: '15px',
        color: '#444'
    };

    const textStyle: React.CSSProperties = {
        lineHeight: '1.6',
        color: '#666',
        marginBottom: '15px'
    };

    const listStyle: React.CSSProperties = {
        marginLeft: '20px',
        marginBottom: '15px',
        color: '#666'
    };

    const listItemStyle: React.CSSProperties = {
        marginBottom: '8px'
    };

    return (
        <div style={containerStyle}>
            <h1 style={titleStyle}>Privacy Policy</h1>

            <section style={sectionStyle}>
                <h2 style={sectionTitleStyle}>1. Introduction</h2>
                <p style={textStyle}>
                    Welcome to Joe Tippens Protocol Store. We respect your privacy and are committed to protecting your personal data.
                    This privacy policy will inform you as to how we look after your personal data when you visit our website
                    and tell you about your privacy rights and how the law protects you.
                </p>
            </section>

            <section style={sectionStyle}>
                <h2 style={sectionTitleStyle}>2. Information We Collect</h2>
                <p style={textStyle}>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:</p>
                <ul style={listStyle}>
                    <li style={listItemStyle}><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                    <li style={listItemStyle}><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                    <li style={listItemStyle}><strong>Financial Data:</strong> includes payment card details.</li>
                    <li style={listItemStyle}><strong>Transaction Data:</strong> includes details about payments to and from you and other details of products you have purchased from us.</li>
                    <li style={listItemStyle}><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access this website.</li>
                </ul>
            </section>

            <section style={sectionStyle}>
                <h2 style={sectionTitleStyle}>3. How We Use Your Information</h2>
                <p style={textStyle}>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                <ul style={listStyle}>
                    <li style={listItemStyle}>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                    <li style={listItemStyle}>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                    <li style={listItemStyle}>Where we need to comply with a legal or regulatory obligation.</li>
                </ul>
            </section>

            <section style={sectionStyle}>
                <h2 style={sectionTitleStyle}>4. Data Security</h2>
                <p style={textStyle}>
                    We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
                    In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                </p>
            </section>

            <section style={sectionStyle}>
                <h2 style={sectionTitleStyle}>5. Your Legal Rights</h2>
                <p style={textStyle}>
                    Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.
                </p>
            </section>

            <section style={sectionStyle}>
                <h2 style={sectionTitleStyle}>6. Contact Us</h2>
                <p style={textStyle}>
                    If you have any questions about this privacy policy or our privacy practices, please contact us.
                </p>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
