import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { statusChanged } from '../redux/filters/actions';

const Filter = () => {
    const dispatch=useDispatch()
    const {status} = useSelector((state) => state.filter);

    const handleStatusChanged=(val)=>{
        dispatch(statusChanged(val))
    }
    return (
        <div className="flex items-center justify-between mb-12">
            <h4 className="mt-2 text-xl font-bold">Book List</h4>
            <div className="flex items-center space-x-4">
                <button className={`filter-btn ${status=='All' && 'active-filter'}`} id="lws-filterAll" onClick={()=>handleStatusChanged('All')}>All</button>
                <button className={`filter-btn ${status=='Featured' && 'active-filter'}`} id="lws-filterFeatured" onClick={()=>handleStatusChanged('Featured')}>Featured</button>
            </div>
        </div>
    );
};

export default Filter;