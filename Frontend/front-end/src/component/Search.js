import React, { Fragment} from 'react';
import { useQuery } from '@apollo/react-hooks';
import {GET_SEARCH} from '../queries/queries';
import NovelNotFound from '../component/NovelNotFound';
import {NavLink} from 'react-router-dom';

const Search = (props) => {
    const values = new URLSearchParams(props.location.search);
    const text = values.get("query");
    const { data, loading, error } = useQuery(GET_SEARCH, {variables: {text: text}, fetchPolicy: "cache-and-network"});
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
                            {data.SearchNovel.map(x => {
                                const date = new Date(x.createdTime);
                                const month = new Date(x.createdTime);
                                const year = new Date(x.createdTime);
                                if(x.author.type === "self-created") x.author.name = x.author.account.username;
                                return (
                                    <li key={x._id}>
                                        <div className="lucomic-img">
                                            <NavLink to={`/summary/id=${x._id}`} title={x.title}><img src={x.thumbnail} alt="" /></NavLink>
                                        </div>
                                        <div className="lucomic-info">
                                            <NavLink to={`/summary/id=${x._id}`} title={x.title} className="lucomic-name">{x.title}</NavLink>
                                            <span>{x.author.name}</span>
                                            <span>{`${date.getDate()}/${month.getMonth()+1}/${year.getFullYear()}`}</span>
                                            <span>{x.view} views</span>
                                        </div>
                                    </li>
                                )
                           })}                        
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Search;