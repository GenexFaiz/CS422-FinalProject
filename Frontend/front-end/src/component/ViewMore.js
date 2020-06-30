import React, { Fragment, useState } from 'react';
import {GET_LATEST, GET_RECOMMEND} from '../queries/queries';
import {NavLink} from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
const ViewMore = (props) => {
    const [page, setPage] = useState(parseInt(props.match.params.page_id, 10));
    if (page < 0) setPage(page+1);
    var pageprev=page-1;
    if (pageprev < 0) pageprev = 0;

    const { data, loading, error } = useQuery(GET_LATEST, {variables: {limit: 12, page: page}, fetchPolicy: "cache-and-network"});
    const { data: data2, loading: loading2, error: error2 } = useQuery(GET_RECOMMEND, {variables: {limit: 10, page: 0}, });
    var pagenext=page+1;

    if (loading2) return <div className="loading"></div>;
    if (error2) return <p>ERROR</p>;
    if (!data2) return <p>Not found</p>;

    if (loading) return <div className="loading"></div>;
    if (error) return <p>ERROR</p>;
    if (!data) return <p>Not found</p>;
    if (!(data.Latest && data.Latest.length)) {
        setPage(page-1);
    }
    if(data.Latest.length < 12) pagenext = pagenext - 1;
    return (
        <Fragment>
            <div className="main-body">
                <div className="main-body-left">
                    <div className="vm-latest-update">
                        <div className="vm-latest-update-top"><span>LATEST UPDATE</span></div>
                        <div className="vm-latest-update-mid">
                            <ul className="lucomic-item">
                                {data.Latest.map(x => {
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
                        <div className="vm-latest-update-bottom">
                            <div className="prev-page">
                                <NavLink onClick={() => setPage(page-1)} to={`/viewmore/page=${pageprev}`}>
                                    <i className="fa fa-chevron-left" aria-hidden="true" />
                                    <span>Prev</span>
                                </NavLink>
                            </div>
                            <div className="next-page">
                                <NavLink onClick={() => setPage(page+1)} to={`/viewmore/page=${pagenext}`}>
                                    <span>Next</span>
                                    <i className="fa fa-chevron-right" aria-hidden="true" />
                                </NavLink>
                            </div>
                        </div>  
                    </div>
                    </div>
                <div className="main-body-right">
                    <div className="recommend">
                        <div className="recommend-top"><span>RECOMMEND</span></div> 
                        <div className="recommend-bottom">
                        <ul className="rcomic-item">
                            {
                                data2.Recommend.map(x => (
                                    <li>
                                        <NavLink to={`/summary/id=${x._id}`} title={x.title}>
                                            <img src={x.thumbnail} alt="" />
                                            <h3 className="rcomic-name">{x.title}</h3>
                                        </NavLink>
                                    </li>
                                ))
                            }                     
                        </ul>
                        <div className="down-btn"><i className="fa fa-chevron-down" aria-hidden="true" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default ViewMore;