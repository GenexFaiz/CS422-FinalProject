import React, { Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';
import {GET_LATEST} from '../queries/queries';
import { NavLink } from 'react-router-dom';

const Home = (props) => {
    const { data, loading, error } = useQuery(GET_LATEST, {variables: {limit: 8, page: 0}, });

    if (loading) return <div className="loading"></div>;
    if (error) return <p>ERROR</p>;
    if (!data) return <p>Not found</p>;
    return(
        <Fragment>
            <div className="main-body">
                <div className="main-body-left">
                    <div className="top-comic">
                        <div className="top-comic-top"><span>TOP COMIC</span></div>
                        <div className="top-comic-bottom">
                        <ul className="tcomic-item">
                            <li>
                            <a href="/summary">
                                <img src="/image/black.jpg" alt="" />
                                <h3 className="tcomic-name">Name</h3>
                            </a>
                            </li>
                            <li>
                            <a href="/summary">
                                <img src="/image/black.jpg" alt="" />
                                <h3 className="tcomic-name">Name</h3>
                            </a>
                            </li>
                            <li>
                            <a href="/summary">
                                <img src="/image/black.jpg" alt="" />
                                <h3 className="tcomic-name">Name</h3>
                            </a>
                            </li>
                            <li>
                            <a href="/summary">
                                <img src="/image/black.jpg" alt="" />
                                <h3 className="tcomic-name">Name</h3>
                            </a>
                            </li>
                            <li>
                            <a href="/summary">
                                <img src="/image/black.jpg" alt="" />
                                <h3 className="tcomic-name">Name</h3>
                            </a>
                            </li>
                        </ul>
                        <div className="wrap-btn">
                            <div className="left-btn"><i className="fa fa-chevron-left" aria-hidden="true" /></div>
                            <div className="right-btn"><i className="fa fa-chevron-right" aria-hidden="true" /></div>
                        </div>
                        </div>
                    </div>
                    <div className="latest-update">
                        <div className="latest-update-top"><span>LATEST UPDATE</span></div>
                        <div className="latest-update-bottom">
                        <ul className="lucomic-item">
                            {data.Latest.map(x => (
                                <li key={x._id}>
                                    <div className="lucomic-img">
                                        <NavLink to={`/summary/id=${x._id}`}><img src="/image/black.jpg" alt="" /></NavLink>
                                    </div>
                                    <div className="lucomic-info">
                                        <NavLink to={`/summary/id=${x._id}`} className="lucomic-name">{x.title}</NavLink>
                                        <span>{x.author.name}</span>
                                        <span>{x.createdTime}</span>
                                        <span>View</span>
                                    </div>
                                </li>
                            ))}
                            {/*<li>
                            <div className="lucomic-img">
                                <a href="/summary"><img src="/image/black.jpg" alt="" /></a>
                            </div>
                            <div className="lucomic-info">
                                <a className="lucomic-name" href>Name</a>
                                <span>Author</span>
                                <span>Date</span>
                                <span>View</span>
                            </div>
                            </li>
                            <li>
                            <div className="lucomic-img">
                                <a href="/summary"><img src="/image/black.jpg" alt="" /></a>
                            </div>
                            <div className="lucomic-info">
                                <a className="lucomic-name" href>Name</a>
                                <span>Author</span>
                                <span>Date</span>
                                <span>View</span>
                            </div>
                            </li>
                            <li>
                            <div className="lucomic-img">
                                <a href="/summary"><img src="/image/black.jpg" alt="" /></a>
                            </div>
                            <div className="lucomic-info">
                                <a className="lucomic-name" href>Name</a>
                                <span>Author</span>
                                <span>Date</span>
                                <span>View</span>
                            </div>
                            </li>
                            <li>
                            <div className="lucomic-img">
                                <a href="/summary"><img src="/image/black.jpg" alt="" /></a>
                            </div>
                            <div className="lucomic-info">
                                <a className="lucomic-name" href>Name</a>
                                <span>Author</span>
                                <span>Date</span>
                                <span>View</span>
                            </div>
                            </li>
                            <li>
                            <div className="lucomic-img">
                                <a href="/summary"><img src="/image/black.jpg" alt="" /></a>
                            </div>
                            <div className="lucomic-info">
                                <a className="lucomic-name" href>Name</a>
                                <span>Author</span>
                                <span>Date</span>
                                <span>View</span>
                            </div>
                            </li>
                            <li>
                            <div className="lucomic-img">
                                <a href="/summary"><img src="/image/black.jpg" alt="" /></a>
                            </div>
                            <div className="lucomic-info">
                                <a className="lucomic-name" href>Name</a>
                                <span>Author</span>
                                <span>Date</span>
                                <span>View</span>
                            </div>
                            </li>
                            <li>
                            <div className="lucomic-img">
                                <a href="/summary"><img src="/image/black.jpg" alt="" /></a>
                            </div>
                            <div className="lucomic-info">
                                <a className="lucomic-name" href>Name</a>
                                <span>Author</span>
                                <span>Date</span>
                                <span>View</span>
                            </div>
                            </li>
                            <li>
                            <div className="lucomic-img">
                                <a href="/summary"><img src="/image/black.jpg" alt="" /></a>
                            </div>
                            <div className="lucomic-info">
                                <a className="lucomic-name" href>Name</a>
                                <span>Author</span>
                                <span>Date</span>
                                <span>View</span>
                            </div>
                            </li>
                            <li>
                            <div className="lucomic-img">
                                <a href="/summary"><img src="/image/black.jpg" alt="" /></a>
                            </div>
                            <div className="lucomic-info">
                                <a className="lucomic-name" href>Name</a>
                                <span>Author</span>
                                <span>Date</span>
                                <span>View</span>
                            </div>
                            </li>*/}
                        </ul>
                        <div className="more-btn">
                            <NavLink to="/viewmore/page=0"><h3>View more</h3></NavLink>
                        </div>
                        </div>
                    </div>
                    </div>
                <div className="main-body-right">
                    <div className="recommend">
                        <div className="recommend-top"><span>RECOMMEND</span></div> 
                        <div className="recommend-bottom">
                        <ul className="rcomic-item">
                            <li>
                                <a href="/summary">
                                    <img src="/image/black.jpg" alt="" />
                                    <h3 className="rcomic-name">Name</h3>
                                </a>
                            </li>
                            <li>
                                <a href="/summary">
                                    <img src="/image/black.jpg" alt="" />
                                    <h3 className="rcomic-name">Name</h3>
                                </a>
                            </li>
                            <li>
                                <a href="/summary">
                                    <img src="/image/black.jpg" alt="" />
                                    <h3 className="rcomic-name">Name</h3>
                                </a>
                            </li>
                            <li>
                                <a href="/summary">
                                    <img src="/image/black.jpg" alt="" />
                                    <h3 className="rcomic-name">Name</h3>
                                </a>
                            </li>
                            <li>
                                <a href="/summary">
                                    <img src="/image/black.jpg" alt="" />
                                    <h3 className="rcomic-name">Name</h3>
                                </a>
                            </li>
                            <li>
                                <a href="/summary">
                                    <img src="/image/black.jpg" alt="" />
                                    <h3 className="rcomic-name">Name</h3>
                                </a>
                            </li>
                            <li>
                                <a href="/summary">
                                    <img src="/image/black.jpg" alt="" />
                                    <h3 className="rcomic-name">Name</h3>
                                </a>
                            </li>
                            <li>
                                <a href="/summary">
                                    <img src="/image/black.jpg" alt="" />
                                    <h3 className="rcomic-name">Name</h3>
                                </a>
                            </li>
                            <li>
                                <a href="/summary">
                                    <img src="/image/black.jpg" alt="" />
                                    <h3 className="rcomic-name">Name</h3>
                                </a>
                            </li>
                            <li>
                                <a href="/summary">
                                    <img src="/image/black.jpg" alt="" />
                                    <h3 className="rcomic-name">Name</h3>
                                </a>
                            </li>
                        </ul>
                        <div className="down-btn"><i className="fa fa-chevron-down" aria-hidden="true" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}


/*class Home extends Component {
    render() {
        return (
            <div>
                <div className="main-body">
                    <div className="main-body-left">
                        <div className="top-comic">
                            <div className="top-comic-top"><span>TOP COMIC</span></div>
                            <div className="top-comic-bottom">
                            <ul className="tcomic-item">
                                <li>
                                <a href="/summary">
                                    <img src="/image/black.jpg" alt="" />
                                    <h3 className="tcomic-name">Name</h3>
                                </a>
                                </li>
                                <li>
                                <a href="/summary">
                                    <img src="/image/black.jpg" alt="" />
                                    <h3 className="tcomic-name">Name</h3>
                                </a>
                                </li>
                                <li>
                                <a href="/summary">
                                    <img src="/image/black.jpg" alt="" />
                                    <h3 className="tcomic-name">Name</h3>
                                </a>
                                </li>
                                <li>
                                <a href="/summary">
                                    <img src="/image/black.jpg" alt="" />
                                    <h3 className="tcomic-name">Name</h3>
                                </a>
                                </li>
                                <li>
                                <a href="/summary">
                                    <img src="/image/black.jpg" alt="" />
                                    <h3 className="tcomic-name">Name</h3>
                                </a>
                                </li>
                            </ul>
                            <div className="wrap-btn">
                                <div className="left-btn"><i className="fa fa-chevron-left" aria-hidden="true" /></div>
                                <div className="right-btn"><i className="fa fa-chevron-right" aria-hidden="true" /></div>
                            </div>
                            </div>
                        </div>
                        <div className="latest-update">
                            <div className="latest-update-top"><span>LATEST UPDATE</span></div>
                            <div className="latest-update-bottom">
                            <ul className="lucomic-item">
                                <li>
                                <div className="lucomic-img">
                                    <a href="/summary"><img src="/image/black.jpg" alt="" /></a>
                                </div>
                                <div className="lucomic-info">
                                    <a className="lucomic-name" href="true">Name</a>
                                    <span>Author</span>
                                    <span>Date</span>
                                    <span>View</span>
                                </div>
                                </li>
                                <li>
                                <div className="lucomic-img">
                                    <a href="/summary"><img src="/image/black.jpg" alt="" /></a>
                                </div>
                                <div className="lucomic-info">
                                    <a className="lucomic-name" href="true">Name</a>
                                    <span>Author</span>
                                    <span>Date</span>
                                    <span>View</span>
                                </div>
                                </li>
                                <li>
                                <div className="lucomic-img">
                                    <a href="/summary"><img src="/image/black.jpg" alt="" /></a>
                                </div>
                                <div className="lucomic-info">
                                    <a className="lucomic-name" href="true">Name</a>
                                    <span>Author</span>
                                    <span>Date</span>
                                    <span>View</span>
                                </div>
                                </li>
                                <li>
                                <div className="lucomic-img">
                                    <a href="/summary"><img src="/image/black.jpg" alt="" /></a>
                                </div>
                                <div className="lucomic-info">
                                    <a className="lucomic-name" href="true">Name</a>
                                    <span>Author</span>
                                    <span>Date</span>
                                    <span>View</span>
                                </div>
                                </li>
                                <li>
                                <div className="lucomic-img">
                                    <a href="/summary"><img src="/image/black.jpg" alt="" /></a>
                                </div>
                                <div className="lucomic-info">
                                    <a className="lucomic-name" href="true">Name</a>
                                    <span>Author</span>
                                    <span>Date</span>
                                    <span>View</span>
                                </div>
                                </li>
                                <li>
                                <div className="lucomic-img">
                                    <a href="/summary"><img src="/image/black.jpg" alt="" /></a>
                                </div>
                                <div className="lucomic-info">
                                    <a className="lucomic-name" href="true">Name</a>
                                    <span>Author</span>
                                    <span>Date</span>
                                    <span>View</span>
                                </div>
                                </li>
                                <li>
                                <div className="lucomic-img">
                                    <a href="/summary"><img src="/image/black.jpg" alt="" /></a>
                                </div>
                                <div className="lucomic-info">
                                    <a className="lucomic-name" href="true">Name</a>
                                    <span>Author</span>
                                    <span>Date</span>
                                    <span>View</span>
                                </div>
                                </li>
                                <li>
                                <div className="lucomic-img">
                                    <a href="/summary"><img src="/image/black.jpg" alt="" /></a>
                                </div>
                                <div className="lucomic-info">
                                    <a className="lucomic-name" href="true">Name</a>
                                    <span>Author</span>
                                    <span>Date</span>
                                    <span>View</span>
                                </div>
                                </li>
                                <li>
                                <div className="lucomic-img">
                                    <a href="/summary"><img src="/image/black.jpg" alt="" /></a>
                                </div>
                                <div className="lucomic-info">
                                    <a className="lucomic-name" href="true">Name</a>
                                    <span>Author</span>
                                    <span>Date</span>
                                    <span>View</span>
                                </div>
                                </li>
                            </ul>
                            <div className="more-btn">
                                <a href="/summary"><h3>View more</h3></a>
                            </div>
                            </div>
                        </div>
                        </div>
                    <div className="main-body-right">
                        <div className="recommend">
                            <div className="recommend-top"><span>RECOMMEND</span></div> 
                            <div className="recommend-bottom">
                            <ul className="rcomic-item">
                                <li>
                                    <a href="/summary">
                                        <img src="/image/black.jpg" alt="" />
                                        <h3 className="rcomic-name">Name</h3>
                                    </a>
                                </li>
                                <li>
                                    <a href="/summary">
                                        <img src="/image/black.jpg" alt="" />
                                        <h3 className="rcomic-name">Name</h3>
                                    </a>
                                </li>
                                <li>
                                    <a href="/summary">
                                        <img src="/image/black.jpg" alt="" />
                                        <h3 className="rcomic-name">Name</h3>
                                    </a>
                                </li>
                                <li>
                                    <a href="/summary">
                                        <img src="/image/black.jpg" alt="" />
                                        <h3 className="rcomic-name">Name</h3>
                                    </a>
                                </li>
                                <li>
                                    <a href="/summary">
                                        <img src="/image/black.jpg" alt="" />
                                        <h3 className="rcomic-name">Name</h3>
                                    </a>
                                </li>
                                <li>
                                    <a href="/summary">
                                        <img src="/image/black.jpg" alt="" />
                                        <h3 className="rcomic-name">Name</h3>
                                    </a>
                                </li>
                                <li>
                                    <a href="/summary">
                                        <img src="/image/black.jpg" alt="" />
                                        <h3 className="rcomic-name">Name</h3>
                                    </a>
                                </li>
                                <li>
                                    <a href="/summary">
                                        <img src="/image/black.jpg" alt="" />
                                        <h3 className="rcomic-name">Name</h3>
                                    </a>
                                </li>
                            </ul>
                            <div className="down-btn"><i className="fa fa-chevron-down" aria-hidden="true" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}*/

export default Home;