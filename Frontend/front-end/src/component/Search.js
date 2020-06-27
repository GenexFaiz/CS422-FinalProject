import React, { Fragment, useState} from 'react';
import { useQuery } from '@apollo/react-hooks';
import {GET_SEARCH} from '../queries/queries';
import NovelNotFound from '../component/NovelNotFound';
import {NavLink} from 'react-router-dom';

const Search = (props) => {
    const values = new URLSearchParams(props.location.search);
    const text = values.get("query");
    const { data, loading, error } = useQuery(GET_SEARCH, {variables: {text: text}, });
    if (loading) return <div className="loading"></div>;
    if (error) return <p>ERROR</p>;
    if (!data) return <p>Not found</p>;
    if (!(data.SearchNovel && data.SearchNovel.length)) return <NovelNotFound/>;
    
    return (
        
        <Fragment>
            <div className="main-body">
                <div className="search-wrap">
                    <div className="search-top">
                        <h3>SEARCH RESULT </h3>
                    </div>
                    <div className="search-bot">
                        <ul className="lucomic-item">
                            {data.SearchNovel.map(x => (
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
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Search;