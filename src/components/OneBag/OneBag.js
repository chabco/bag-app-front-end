import React from 'react';
import { Link } from 'react-router-dom';

function OneBag(props){
    console.log(props)
    return(
        <div className="col s3">
            <Link to={`/review/${props.bag.name}`}>Hello
            </Link>
        </div>
    )
}
export default OneBag;