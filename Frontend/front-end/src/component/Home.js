import React, { Fragment } from 'react';
import { useQuery, useApolloClient } from '@apollo/react-hooks';
import {GET_LATEST, GET_TOP, GET_RECOMMEND} from '../queries/queries';
import { NavLink } from 'react-router-dom';

const Home = () => {
    const client = useApolloClient();

    const { data, loading, error } = useQuery(GET_LATEST, {variables: {limit: 8, page: 0}, fetchPolicy: "cache-and-network"});
    const { data: data2, loading: loading2, error: error2 } = useQuery(GET_TOP, {variables: {limit: 5, page: 0}, fetchPolicy: "cache-and-network"});
    const { data: data3, loading: loading3, error: error3 } = useQuery(GET_RECOMMEND, {variables: {limit: 10, page: 0}, fetchPolicy: "cache-and-network"});

    if (loading3) return <div className="loading"></div>;
    if (error3) return <p>ERROR</p>;
    if (!data3) return <p>Not found</p>;

    if (loading2) return <div className="loading"></div>;
    if (error2) return <p>ERROR</p>;
    if (!data2) return <p>Not found</p>;

    if (loading) return <div className="loading"></div>;
    if (error) return <p>ERROR</p>;
    if (!data) return <p>Not found</p>;

    console.log(client);

    return(
        <Fragment>
            <div className="main-body">
                <div className="main-body-left">
                    <div className="top-comic">
                        <div className="top-comic-top"><span>TOP COMIC</span></div>
                        <div className="top-comic-bottom">
                            <ul className="tcomic-item">
                                {
                                    data2.MostViewed.map(x => {
                                        return(
                                        <li>   
                                            <NavLink to={`/summary/id=${x._id}`} title={x.title}>
                                                <img src={x.thumbnail} alt="" />
                                                <h3 className="tcomic-name">{x.title}</h3>
                                            </NavLink>
                                        </li>
                                        )
                                    })
                                }                         
                            </ul>
                        </div>
                    </div>
                    <div className="latest-update">
                        <div className="latest-update-top"><span>LATEST UPDATE</span></div>
                        <div className="latest-update-bottom">
                        <ul className="lucomic-item">
                            {data.Latest.map(x => {
                                const date = new Date(x.createdTime);
                                const month = new Date(x.createdTime);
                                const year = new Date(x.createdTime);
                                if(x.author.type === "self-created") x.author.name = x.author.account.username;
                                return (
                                    <li key={x._id}>
                                        <div className="lucomic-img">
                                            <NavLink to={`/summary/id=${x._id}`} title={x.title}><img src={x.thumbnail}/></NavLink>
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
                            {
                                data3.Recommend.map(x => (
                                    <li>
                                        <NavLink to={`/summary/id=${x._id}`} title={x.title}>
                                            <img src={x.thumbnail} alt="" />
                                            <h3 className="rcomic-name">{x.title}</h3>
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}


export default Home;