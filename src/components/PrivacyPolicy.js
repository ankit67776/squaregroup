"use client"
import Head from 'next/head';
import Image from 'next/image';

const PrivacyPolicy = () => {
    return (
        <>
            <Head>
                <title>Privacy Policy - Square Group</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <div className="page-wrapper">
                <div className="container">
                    <header>
                        <div className="logo">
                            <Image
                                src="/images/logo.png"
                                alt="Square Group Logo"
                                width={250}
                                height={100}
                                priority
                            />
                        </div>
                        <h1>Privacy Policy</h1>
                    </header>

                    <p><strong>Square Group</strong> developed this app as a commercial product. This Service is provided by Square Group and is intended for use as is.</p>

                    <p>This Privacy Policy explains how we collect, use, and protect information when you choose to use our Service. By using our Service, you agree to the collection and use of information as described in this Privacy Policy. Any terms not defined here have the same meaning as in our Terms and Conditions.</p>

                    <h2>Information Collection and Use</h2>
                    <p>To provide you with a better experience, the app may require certain personally identifiable information. Any information requested will be used only as described in this Privacy Policy and retained only as necessary to operate and improve the Service.</p>
                    <p>The app may integrate third-party services that may collect information used to identify you.</p>

                    <h2>Data Access</h2>
                    <p>Our app may access specific data from your Google account — such as files or metadata in your Google Drive — for the purpose of creating and managing spreadsheets. We only request the minimum permissions required to perform these functions and do not access or read any additional files or data beyond what is necessary for app operation.</p>

                    <h2>Data Retention and Deletion</h2>
                    <p>We retain Google user data only for as long as needed to provide the Service or meet legal requirements. For data accessed through Google APIs, we process it only during active sessions and do not store this data on our servers once the session ends.</p>
                    <p>If you would like your data deleted, you may contact us at <a href="mailto:support@squaregroup.tech">support@squaregroup.tech</a>. Once we receive such a request, we will delete all relevant personal data, including Google user data, in accordance with applicable laws and regulations. Any information no longer required for Service operation will also be removed.</p>

                    <h2>Log Data</h2>
                    <p>In the event of an app error, we may collect log data through third-party tools. This Log Data may include your device's IP address, device name, operating system version, app configuration at the time of the error, timestamp of the error, and other diagnostic details.</p>

                    <h2>Cookies</h2>
                    <p>Cookies are small files commonly used as anonymous identifiers. Although this Service does not directly use cookies, some third-party code or libraries integrated into the app may use cookies to improve their services.</p>
                    <p>You may choose to accept or decline cookies. However, refusing cookies may affect certain app functionalities.</p>

                    <h2>Service Providers</h2>
                    <p>We may engage third-party companies or individuals to:</p>
                    <ul>
                        <li>Facilitate the Service</li>
                        <li>Provide the Service on our behalf</li>
                        <li>Perform Service-related tasks</li>
                        <li>Assist in analyzing how the Service is used</li>
                    </ul>
                    <p>These third parties may have access to certain information solely for performing tasks assigned to them. They are strictly prohibited from using or disclosing this information for any other purpose.</p>

                    <h2>Security</h2>
                    <p>We value your trust in providing your personal information and strive to use commercially acceptable means to protect it. However, no method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security.</p>

                    <h2>Links to Other Sites</h2>
                    <p>This Service may include links to external websites. If you click a third-party link, you will be directed to their site. These external sites are not operated by us, and we strongly recommend reviewing their Privacy Policies. We do not have control over and assume no responsibility for the content or practices of these third-party websites.</p>

                    <h2>Changes to This Privacy Policy</h2>
                    <p>We may update this Privacy Policy periodically. You are encouraged to review this page for changes. Any updates will take effect immediately upon being posted on this page.</p>

                    <h2>Contact Us</h2>
                    <div className="contact-box">
                        <p>If you have any questions or suggestions regarding this Privacy Policy, please contact us at:</p>
                        <p>📧 <a href="mailto:support@squaregroup.tech">support@squaregroup.tech</a></p>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .page-wrapper {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          min-height: 100vh;
          background-color: #f9f9f9;
          padding: 20px;
        }

        .container {
          max-width: 800px;
          width: 100%;
          background-color: #ffffff;
          padding: 40px;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #333;
          line-height: 1.6;
        }

        header {
          text-align: center;
          margin-bottom: 40px;
          border-bottom: 2px solid #eee;
          padding-bottom: 20px;
        }

        .logo {
          max-width: 250px;
          height: auto;
          margin-bottom: 20px;
          margin: 0 auto;
        }

        h1 {
          color: #000;
          font-size: 2.2rem;
          margin-bottom: 10px;
        }

        h2 {
          color: #000;
          font-size: 1.5rem;
          margin-top: 30px;
          margin-bottom: 15px;
          border-left: 4px solid #000;
          padding-left: 10px;
        }

        p {
          margin-bottom: 15px;
        }

        ul {
          margin-bottom: 15px;
          padding-left: 20px;
        }

        li {
          margin-bottom: 8px;
        }

        .contact-box {
          background-color: #f4f4f4;
          padding: 15px;
          border-radius: 5px;
          margin-top: 20px;
        }

        a {
          color: #0056b3;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }

        /* Mobile Responsiveness */
        @media (max-width: 600px) {
          .page-wrapper {
            padding: 10px;
          }
          
          .container {
            padding: 20px;
          }
          
          h1 {
            font-size: 1.8rem;
          }
        }
      `}</style>
        </>
    );
};

export default PrivacyPolicy;