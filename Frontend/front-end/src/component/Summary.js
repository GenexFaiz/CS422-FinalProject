import React, { Component } from 'react';

class Summary extends Component {
    render() {
        return (
            <div>
                <div className="main-body">
                    <div className="main-body-wrap">
                        <div className="main-body-top">
                            <div className="novel-top">
                                <h2>NAME OF NOVEL</h2>
                            </div>
                            <div className="novel-mid">
                                <div className="novel-info">
                                    <div className="novel-info-left">
                                        <img src="/image/black.jpg" alt=""/>
                                        <span>x total views</span>
                                    </div>
                                    <div className="novel-info-right">
                                        <span>Rating</span>
                                        <span>Author</span>
                                        <span>Date</span>
                                        <span>Posted by</span>
                                    </div>
                                </div>
                                <div className="novel-summary">
                                    <div className="summary-top">
                                        <h3>SUMMARY</h3>
                                    </div>
                                    <div className="summary-content">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mattis pretium lectus, at maximus lorem tincidunt vel. Phasellus sagittis quam vitae elementum finibus. Curabitur eget ex imperdiet, hendrerit odio vel, vehicula est. Quisque non libero non nisl tempor commodo. Sed convallis, quam eget placerat aliquam, libero odio viverra ipsum, quis pretium enim velit at purus. Quisque scelerisque, nisi non consectetur lacinia, quam ligula pellentesque erat, eget suscipit justo massa a enim. Cras fermentum interdum nulla, nec bibendum elit sagittis at. Duis ut laoreet turpis. Fusce aliquet vel nisl id suscipit. Nunc a augue vel mi aliquet tristique.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="main-body-bot">
                            <div className="chapter-top">
                                <h2>LIST OF CHAPTER</h2>
                            </div>
                            <div className="chapter-bot">
                                <ul className="chapter-list">
                                    <li><a href="/read">Chapter 1</a></li>
                                    <li><a href="/read">Chapter 2</a></li>
                                    <li><a href="/read">Chapter 3</a></li>
                                    <li><a href="/read">Chapter 4</a></li>
                                    <li><a href="/read">Chapter 5</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Summary;