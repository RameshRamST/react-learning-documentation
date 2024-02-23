function About() {
    return <><div>About</div>
        <div>
           <div> Web APIs and REST APIs are both lightweight formats that can be used interchangeably in many situations. However, there are some differences between them, including:</div>
<div>Data formats:
REST APIs support JSON, XML, and other formats, while Web APIs only support XML.</div>
<div>Protocols:
REST APIs use HTTP/HTTPS, while Web APIs use protocols like SOAP and BEEP in addition to HTTP/HTTPS.</div>
<div>Flexibility:
REST APIs only support the JSON data format, making them less flexible.</div>
<div>Customization:
Web APIs provide a more customized experience and support for more message types.</div>
<div>Architecture:
REST APIs follow the REST architectural style and use HTTP methods to perform operations on resources. Web APIs don't follow any specific architecture or structure.</div>
<div>Communication:
All communication in the REST API is supported only through HTTP protocol. Web API supports protocol for HTTP/s protocol and URL requests/responses headers</div>
        </div>
    </>
}
export default About;
