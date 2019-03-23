import React, { Component } from 'react';
import '../css/agency.min.css';
class Blog extends Component {
  render() {
    return (
        <section id="blog">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2 className="section-heading">My Blogs</h2>

                </div>
            </div>
            <div className="row">
                <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1" >
                    <div className="post-preview">
                        <a href="http://rujoota.blogspot.in/2016/10/submit-your-app-to-apple-for-development.html" target="_blank" rel="noopener noreferrer">
                            <h2 className="post-title">
                                Submit your app to apple for development/testing
                            </h2>
                            <h4 className="post-subtitle">
                                Create apple developer account(99$ per year). Goto keychain access in MacBook. Goto keychain access->request certificate. Enter email id(aka apple developer email id) and a name and choose to save on disk and save the certificate. Go to member center from https://developer.apple.com
                                ...
                            </h4>
                        </a>
                        <p className="post-meta">Posted on Thursday, October 6, 2016</p>
                    </div>
                    <hr />
                    <div className="post-preview">
                        <a href="http://rujoota.blogspot.in/2016/05/cards-of-wild-game.html" target="_blank" rel="noopener noreferrer">
                            <h2 className="post-title">
                                Cards of wild game
                            </h2>
                            <h4 className="post-subtitle">
                                'World of balance' is a gaming solution which includes lots of single-player and
                                multiplayer games. The theme of 'world of balance' is animals and their food chain and all
                                games are conceptualized using that theme. The game lobby is used to login and interact
                                with other ...
                            </h4>
                        </a>
                        <p className="post-meta">Posted on Monday, May 23, 2016</p>
                    </div>
                    <hr />
                    <div className="post-preview">
                        <a href="http://rujoota.blogspot.in/2015/11/cooking-with-mithu.html" target="_blank" rel="noopener noreferrer">
                            <h2 className="post-title">
                                Cooking with mithu
                            </h2>
                            <h4 className="post-subtitle">
                                I think there was one and only one event when we all 5 together cooked! That was on
                                Friendship day(Excuse me Chashmish for dates) when we got together at Chakli’s place when we
                                all got together at night on Friday, talked,...
                            </h4>
                        </a>
                        <p className="post-meta">Posted on Tuesday, November 24, 2015</p>
                    </div>

                    <hr />

                    <div className="post-preview">
                        <a href="http://rujoota.blogspot.in/2013/07/bidding-goodbye-to-dear-friends.html" target="_blank" rel="noopener noreferrer">
                            <h2 className="post-title">
                                Bidding goodbye to dear friends
                            </h2>
                            <h4 className="post-subtitle">
                                It’s only a week since they have gone but it feels like our big Pune gang is separating day
                                by day. Almost two months ago we all were together planning for holidays in May for my
                                wedding!!!...
                            </h4>
                        </a>
                        <p className="post-meta">Posted on Monday, July 15, 2013</p>
                    </div>
                    <hr />
                    <div className="post-preview">
                        <a href="http://rujoota.blogspot.in/2011/07/placements-unforgettable-experience.html"
                        target="_blank" rel="noopener noreferrer">
                            <h2 className="post-title">
                                Placements-an unforgettable experience
                            </h2>
                            <h4 className="post-subtitle">
                                Nirma is all about placements. People join the Institute only because it provides the best
                                placements all over Gujarat. It’s one of the experiences one can never forget in life...
                            </h4>
                        </a>
                        <p className="post-meta">Posted on Wednesday, July 20, 2011</p>
                    </div>
                    <hr />
                    <div className="post-preview">
                        <a href="http://rujoota.blogspot.in/2011/07/mile-jab-hum-tum.html" target="_blank" rel="noopener noreferrer">
                            <h2 className="post-title">

                                Mile jab hum tum
                            </h2>
                            <h4 className="post-subtitle">
                                Here goes the story of how my gang-'mithu' was created.

                                First let me tell you what does the word 'mithu' means. Its a Gujarati/...
                            </h4>
                        </a>
                        <p className="post-meta">Posted on Wednesday, July 20, 2011</p>
                    </div>
                    <hr />
                    <ul className="pagination justify-content-end">
                        <li className="page-item">
                            <a href="http://rujoota.blogspot.in/" target="_blank" className="page-link view-more-btn" rel="noopener noreferrer">View more &rarr;</a>
                        </li>
                    </ul>
                </div>
        </div>
    </div>
    </section>
    );
  }
}

export default Blog;
