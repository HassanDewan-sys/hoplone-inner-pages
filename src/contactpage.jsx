import React, { useState , useLayoutEffect } from 'react';
import $ from 'jquery';

const ContactPage = () => {
    const [selectedService, setSelectedService] = useState('');
    const [selectedPlatform, setSelectedPlatform] = useState('');
    const [selectedFile, setSelectedFile] = useState('');
    const [fileError, setFileError] = useState('');
    const [filePreview, setFilePreview] = useState(null);
    const [filePreviewType, setFilePreviewType] = useState('');
    const [fileChosen, setFileChosen] = useState(false);

    const handleServiceChange = (event) => {
        setSelectedService(event.target.value);
    };

    const handlePlatformChange = (event) => {
        setSelectedPlatform(event.target.value);
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.pdf|\.doc|\.docx)$/i;
        const maxSize = 50 * 1024 * 1024; // 50 MB

        if (file) {
            if (!allowedExtensions.exec(file.name)) {
                setFileError('Unsupported file type. Only JPG, PNG, PDF, and Word files are allowed.');
                setSelectedFile('');
                setFilePreview(null);
                setFilePreviewType('');
                setFileChosen(false);
                event.target.value = null;
                return;
            }

            if (file.size > maxSize) {
                setFileError('File size exceeds the maximum limit of 50MB.');
                setSelectedFile('');
                setFilePreview(null);
                setFilePreviewType('');
                setFileChosen(false);
                event.target.value = null;
                return;
            }

            setFileError('');
            setSelectedFile(file.name);
            setFileChosen(true); // File is chosen

            // Create a file preview if it's an image
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setFilePreview(reader.result);
                    setFilePreviewType('image');
                };
                reader.readAsDataURL(file);
            } else if (file.type === 'application/pdf') {
                setFilePreview('/img/pdf-icon.svg');
                setFilePreviewType('pdf');
            } else if (file.type === 'application/msword' || file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
                setFilePreview('/img/word-icon.svg');
                setFilePreviewType('word');
            } else {
                setFilePreview(null);
                setFilePreviewType('');
            }
        }
    };

    const services = [
        { label: 'Branding', value: 'Branding' },
        { label: 'Website Development', value: 'Website Development' },
        { label: 'App Development', value: 'App Development' },
        { label: 'SAP Solution', value: 'SAP Solution' },
        { label: 'Digital Marketing', value: 'Digital Marketing' }
    ];

    const platforms = [
        { label: 'Google', value: 'Google' },
        { label: 'Recom- mendations', value: 'Recommendations' },
        { label: 'Instagram', value: 'Instagram' },
        { label: 'LinkedIn', value: 'LinkedIn' },
        { label: 'Other', value: 'Other' }
    ];

    useLayoutEffect(() => {
        const drag_form = (event) => {
            gsap.to('.form-cursor', {
                x: event.clientX,
                y: event.clientY,
                duration: 0.1,
                ease: 'power2.out'
            });
        };

        window.addEventListener('mousemove', drag_form);

        return () => {
            window.removeEventListener('mousemove', drag_form);
        };
    }, []);

    useLayoutEffect(() => {
        $(document).ready(function() {
            $('.form-n-cursor').hover(function() {
                $('.form-cursor').addClass('new');
            }, function() {
                $('.form-cursor').removeClass('new');
            });
        });     
    }, []);

    return (
        <>
            <section id="contactpage" className="inner-banners hover-mask-hide cr-hover">
                <div className="container-fluid">
                    <div className="col-lg-11 mx-auto">
                        <div className="row">
                            <div className="col-lg-6">
                                <h4>Get in touch</h4>
                                <h5>Contact</h5>
                            </div>
                            <div className="col-lg-6">
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contactform">
                <div className="form-cursor">
                    <h6>Fill<br/> Form</h6>
                </div>
                <div className="container-fluid">
                    <div className="col-lg-11 mx-auto">
                        <div className="row">
                            <div className="col-lg-12">
                                <form>
                                    <div className="service-slection">
                                        <h4 className='form-n-cursor'>I'm looking for help with</h4>
                                        <span className='form-n-cursor'>Choose your options below</span>
                                        <div className="checkboxes service">
                                            {services.map(service => (
                                                <div
                                                    key={service.value}
                                                    className={`check-item form-n-cursor ${selectedService === service.value ? 'checked' : ''}`}
                                                    onClick={() => setSelectedService(service.value)}
                                                >
                                                    <input
                                                        type="radio"
                                                        name="service"
                                                        value={service.value}
                                                        checked={selectedService === service.value}
                                                        onChange={handleServiceChange}
                                                    />
                                                    <label>{service.label.split(' ').map((word, index) => (
                                                        <React.Fragment key={index}>
                                                            {word}{index < service.label.split(' ').length - 1 && <br />}
                                                        </React.Fragment>
                                                    ))}</label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="user-info">
                                        <h4 className='form-n-cursor'>My Contact details and some info about my project</h4>
                                        <div className="filed-info">
                                            <input className='form-n-cursor' type="text" name="" id="" placeholder="Full Name" />
                                            <input className='form-n-cursor' type="email" name="" id="" placeholder="Email Address" />
                                            <input className='form-n-cursor' type="tel" name="" id="" placeholder="Phone Number" />
                                            <input className='form-n-cursor' type="text" name="" id="" placeholder="Company Name" />
                                        </div>
                                        <input className='form-n-cursor' type="text" placeholder="Tell us something about your project" />
                                    </div>

                                    <div className="recomendation">
                                        <h4 className='form-n-cursor'>I found your agency through</h4>
                                        <span className='form-n-cursor'>Select your option below</span>
                                        <div className="checkboxes platform">
                                            {platforms.map(platform => (
                                                <div
                                                    key={platform.value}
                                                    className={`check-item form-n-cursor ${selectedPlatform === platform.value ? 'checked' : ''}`}
                                                    onClick={() => setSelectedPlatform(platform.value)}
                                                >
                                                    <input
                                                        type="radio"
                                                        name="platform"
                                                        value={platform.value}
                                                        checked={selectedPlatform === platform.value}
                                                        onChange={handlePlatformChange}
                                                    />
                                                    <label>{platform.label.split(' ').map((word, index) => (
                                                        <React.Fragment key={index}>
                                                            {word}{index < platform.label.split(' ').length - 1 && <br />}
                                                        </React.Fragment>
                                                    ))}</label>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="file form-n-cursor">
                                            {filePreview && (
                                                <div className="file-preview">
                                                    {filePreviewType === 'image' && <img src={filePreview} alt="File Preview" className="img-fluid" />}
                                                    {filePreviewType === 'pdf' && <img src="/img/pdf-icon.svg" alt="PDF Icon" className="img-fluid" />}
                                                    {filePreviewType === 'word' && <img src="/img/word-icon.svg" alt="Word Icon" className="img-fluid" />}
                                                </div>
                                            )}
                                            <input type="file" name="" id="" onChange={handleFileChange} />
                                            <div className="custome-file">
                                                <h6 className={fileChosen ? 'filed-choose' : ''}>{selectedFile || 'Attach any relevant document'}</h6>
                                                <img src="/img/file-icon.svg" className="img-fluid" alt="File Icon" />
                                            </div>
                                            {fileError && <div className="file-error">{fileError}</div>}
                                        </div>
                                    </div>

                                    <div className="timeline form-n-cursor">
                                        <h4>Your Timeline...</h4>
                                        <textarea name="" id="" placeholder="3 month(s)"></textarea>
                                    </div>

                                    <div className="formbtn form-n-cursor">
                                        <button type="submit">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactPage;