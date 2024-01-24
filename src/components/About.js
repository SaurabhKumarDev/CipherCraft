import React from 'react'
import '../App.css'

export default function About(props) {
    return (
        <div className={`mt-4 container text-${props.textColor} bg-${props.bgColor}`}>
            <h2 className="card-title mb-4">About Our Text Processing Project</h2>
            <p>Welcome to our innovative text processing project, where we bring simplicity and functionality together to enhanceww your text manipulation experience. Whether you're looking to create unique email IDs, perform basic operations such as converting text to uppercase or lowercase, clearing unwanted content, or easily copying and pasting text, our application has got you covered.</p>

            <h3 className='card-title my-3'>Key Features</h3>
            <div className="accordion accordion-flush bg-dark" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className={`accordion-button collapsed bg-${props.bgColor} text-${props.textColor}`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            <strong>Email ID Generation</strong>
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className={`accordion-collapse collapse`} aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className={`accordion-body text-${props.textColor} bg-${props.bgColor}`}>Easily generate unique email IDs tailored to your specifications. Whether for personal use or testing purposes, our application streamlines the process for you.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className={`accordion-button collapsed bg-${props.bgColor} text-${props.textColor}`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            <strong>Basic Text Operations:</strong>
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className={`accordion-body bg-${props.bgColor}`}>
                            <ul className="list-group">
                                <li className={`list-group-item text-${props.textColor} bg-${props.bgColor}`}>
                                    <strong>Uppercase and Lowercase Conversion</strong><br />
                                    Switch between uppercase and lowercase effortlessly with a simple click, giving you control over text formatting.
                                </li>
                                <li className={`list-group-item text-${props.textColor} bg-${props.bgColor}`}>
                                    <strong>Clear Text</strong><br />
                                    Quickly remove unwanted content or start afresh by clearing the text field with a single command.
                                </li>
                                <li className={`list-group-item text-${props.textColor} bg-${props.bgColor}`}>
                                    <strong>Copy and Paste</strong><br />
                                    Seamlessly copy text from the application and paste it wherever you need. Our user-friendly interface ensures smooth interaction with your text.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button className={`accordion-button collapsed bg-${props.bgColor} text-${props.textColor}`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            <strong>Customizable Modes</strong>
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className={`accordion-body text-${props.textColor} bg-${props.bgColor}`}>Tailor your text processing experience with different modes. Choose from a range of themes, such as dark, green, or red, to personalize the look and feel of the application according to your preferences.</div>
                    </div>
                </div>
            </div>

            <h3 className='card-title mt-3 mb-4'>Why Choose Our Text Processing Application?</h3>
            <ul>
                <li><strong>User-Friendly Interface</strong></li>
                <p>We prioritize simplicity and ease of use. Our intuitive interface ensures that users, regardless of their technical expertise, can navigate and utilize the application effortlessly.</p>
                <li><strong>Versatility</strong></li>
                <p>Whether you're a professional needing quick text transformations or a casual user looking for a handy tool, our application adapts to your needs with its diverse set of features.</p>
                <li><strong>Efficient Text Manipulation</strong></li>
                <p>Save time and energy with our efficient text manipulation tools. Perform various operations seamlessly and enhance your overall productivity.</p>
                <li><strong>Personalization</strong></li>
                <p>Express your style with our customizable themes. Choose the mode that suits your preferences, creating a personalized environment for your text processing tasks.</p>
            </ul>

            <p>Embrace the power of streamlined text processing with our application. Make your text manipulation tasks a breeze and experience a new level of efficiency.</p>

            <p class="text-center my-5">Copyright &#169; <strong>Saurabh Kumar.</strong> All rights reserved.</p>
        </div>
    );
}