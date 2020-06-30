import React, { Fragment } from 'react';
import {useQuery} from '@apollo/react-hooks';
import {GET_SUMMARY} from '../queries/queries';
import {NavLink} from 'react-router-dom';
import StarRating from '../component/StarRating';

const Summary = (props) => {
    const { data, loading, error } = useQuery(GET_SUMMARY, {variables: {id: props.match.params.id}, fetchPolicy: "cache-and-network"});

    if (loading) return <div className="loading"></div>;
    if (error) return <p>ERROR</p>;
    if (!data) return <p>Not found</p>;

    const date = new Date(data.Summary.createdTime);
    const month = new Date(data.Summary.createdTime);
    const year = new Date(data.Summary.createdTime);

    if(data.Summary.author.type === "self-created") data.Summary.author.name = data.Summary.author.account.username;
    return (
        <Fragment>
            <div className="main-body">
                    <div className="main-body-wrap">
                        <div className="main-body-top">
                            <div className="novel-top">
                                <h2>{data.Summary.title}</h2>
                            </div>
                            <div className="novel-mid">
                                <div className="novel-info">
                                    <div className="novel-info-left">
                                        <img src={data.Summary.thumbnail} alt=""/>
                                        <span>{data.Summary.view} views</span>
                                    </div>
                                    <div className="novel-info-right">
                                        <StarRating/>
                                        <span>Author: {data.Summary.author.name}</span>
                                        <span>{`Updated time: ${date.getDate()}/${month.getMonth()+1}/${year.getFullYear()}`}</span>
                                        <span>Posted: {data.Summary.uploader.username}</span>
                                    </div>
                                </div>
                                <div className="novel-summary">
                                    <div className="summary-top">
                                        <h3>SUMMARY</h3>
                                    </div>
                                    <div className="summary-content">
                                        <p>
                                            {data.Summary.summary}
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
                                    {data.Summary.chapter.map(x => (
                                       <li key={x._id}><NavLink to={`/read/chapter${x.number}/id=${x._id}`}>Chapter {x.number}: {x.title}</NavLink></li>
                                    ))}
                                    {/*<li><a href="/read">Chapter 1</a></li>
                                    <li><a href="/read">Chapter 2</a></li>
                                    <li><a href="/read">Chapter 3</a></li>
                                    <li><a href="/read">Chapter 4</a></li>
                                    <li><a href="/read">Chapter 5</a></li>*/}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        </Fragment>
    );
}


export default Summary;