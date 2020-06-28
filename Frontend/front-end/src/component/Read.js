import React, { Fragment, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import {GET_READ, GET_SUMMARY} from '../queries/queries';
import {NavLink} from 'react-router-dom';

const Read = (props) => {
    let number = props.match.params.num;
    const [i, set_i] = useState(number - 1);
    var prev=i-1;
    var prevnum = prev+1;
    if(prev < 0) prev = 0;
    if (prevnum <= 0) prevnum = 1;
    let chapterid = props.match.params.chapter_id;
    const { data, loading, error } = useQuery(GET_READ, {variables: {id: chapterid}, });
    var next=i+1;
    var nextnum=next+1;
    if (loading) return <div className="loading"></div>;
    if (error) return <p>ERROR</p>;
    if (!data) return <p>Not found</p>;
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
                            <p>
                                {data.ReadChapter.content}
                            </p>
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


/*class Read extends Component {
    render() {
        return (
            <div>
                <div className="main-body">
                    <div className="main-body-wrap">
                        <div className="readnovel-top">
                            <span id="novelname">NAME OF NOVEL</span>
                            <span id="chapter">Chapter x</span>
                        </div>
                        <div className="readnovel-mid">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mattis pretium lectus, at maximus lorem tincidunt vel. Phasellus sagittis quam vitae elementum finibus. Curabitur eget ex imperdiet, hendrerit odio vel, vehicula est. Quisque non libero non nisl tempor commodo. Sed convallis, quam eget placerat aliquam, libero odio viverra ipsum, quis pretium enim velit at purus. Quisque scelerisque, nisi non consectetur lacinia, quam ligula pellentesque erat, eget suscipit justo massa a enim. Cras fermentum interdum nulla, nec bibendum elit sagittis at. Duis ut laoreet turpis. Fusce aliquet vel nisl id suscipit. Nunc a augue vel mi aliquet tristique. Vivamus tristique, mauris sed aliquam rhoncus, velit nibh sagittis urna, vel gravida enim erat sit amet nulla. Nam eget dignissim magna, tristique facilisis sem. Pellentesque fermentum ultrices turpis, eget posuere nunc rhoncus ac.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mattis pretium lectus, at maximus lorem tincidunt vel. Phasellus sagittis quam vitae elementum finibus. Curabitur eget ex imperdiet, hendrerit odio vel, vehicula est. Quisque non libero non nisl tempor commodo. Sed convallis, quam eget placerat aliquam, libero odio viverra ipsum, quis pretium enim velit at purus. Quisque scelerisque, nisi non consectetur lacinia, quam ligula pellentesque erat, eget suscipit justo massa a enim. Cras fermentum interdum nulla, nec bibendum elit sagittis at. Duis ut laoreet turpis. Fusce aliquet vel nisl id suscipit. Nunc a augue vel mi aliquet tristique. Vivamus tristique, mauris sed aliquam rhoncus, velit nibh sagittis urna, vel gravida enim erat sit amet nulla. Nam eget dignissim magna, tristique facilisis sem. Pellentesque fermentum ultrices turpis, eget posuere nunc rhoncus ac.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mattis pretium lectus, at maximus lorem tincidunt vel. Phasellus sagittis quam vitae elementum finibus. Curabitur eget ex imperdiet, hendrerit odio vel, vehicula est. Quisque non libero non nisl tempor commodo. Sed convallis, quam eget placerat aliquam, libero odio viverra ipsum, quis pretium enim velit at purus. Quisque scelerisque, nisi non consectetur lacinia, quam ligula pellentesque erat, eget suscipit justo massa a enim. Cras fermentum interdum nulla, nec bibendum elit sagittis at. Duis ut laoreet turpis. Fusce aliquet vel nisl id suscipit. Nunc a augue vel mi aliquet tristique. Vivamus tristique, mauris sed aliquam rhoncus, velit nibh sagittis urna, vel gravida enim erat sit amet nulla. Nam eget dignissim magna, tristique facilisis sem. Pellentesque fermentum ultrices turpis, eget posuere nunc rhoncus ac.
                            </p>
                        </div>
                        <div className="readnovel-bot">
                            <div className="prev-btn">
                                <a href><span>Prev</span></a>
                            </div>
                            <div className="next-btn">
                                <a href><span>Next</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}*/

export default Read;