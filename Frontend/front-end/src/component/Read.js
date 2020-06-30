import React, { Fragment, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import {GET_READ} from '../queries/queries';
import {NavLink} from 'react-router-dom';

const Read = (props) => {
    let number = props.match.params.num;
    const [i, set_i] = useState(number - 1);
    var prev=i-1;
    var prevnum = prev+1;
    if(prev < 0) prev = 0;
    if (prevnum <= 0) prevnum = 1;
    let chapterid = props.match.params.chapter_id;
    
    const { data, loading, error } = useQuery(GET_READ, {variables: {id: chapterid}, fetchPolicy: "cache-and-network"});
    if (loading) return <div className="loading"></div>;
    if (error) return <p>ERROR</p>;
    if (!data) return <p>Not found</p>;
    
    var next=i+1;
    var nextnum=next+1;
    
    console.log(data);
    var chapter = [];
    data.ReadChapter.novel.chapter.map(x => chapter.push(x._id));
    if(chapter[next] == null) {
        next = data.ReadChapter.novel.chapter.length - 1;
        nextnum=next+1;
    }
    if(chapter[i] == null) set_i(i-1);
    if(i < 0) set_i(i+1);
    return(
        <Fragment>
              <div className="main-body">
                    <div className="main-body-wrap">
                        <div className="readnovel-top">
                            <span id="novelname">{data.ReadChapter.novel.title}</span>
                            <span id="chapter">Chapter {data.ReadChapter.number}: {data.ReadChapter.title}</span>
                        </div>
                        <div className="readnovel-mid">
                            {
                                data.ReadChapter.content.split('\r\n').map(i => {
                                    return  <p>{i}</p>
                                })
                            }
                        </div>
                        <div className="readnovel-bot">
                            <div className="prev-btn">
                                <NavLink onClick={() => set_i(i-1)} to={`/read/chapter${prevnum}/id=${chapter[prev]}`}><span>Prev</span></NavLink>
                            </div>
                            <div className="next-btn">
                                <NavLink onClick={() => set_i(i+1)} to={`/read/chapter${nextnum}/id=${chapter[next]}`}><span>Next</span></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        </Fragment>
    );
}

export default Read;