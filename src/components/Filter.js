import React from 'react'

export const Filter = ({postFilter, posts, reset, setPage}) => {

    //  Method to determine which of the filtered content is then passed
    // to the state via the postfilter method.

    // The reset functionlaity Should not be needed in future when I 
    // make them toggle items.

    const filterHelper = (v) => {
        if (v === 4) {
            let filtered = [];
                for (let i = 0; i < posts.length; i++) {
            if (posts[i].stock === 0) {
        filtered.push(posts[i]);
            }
        }
        setPage(1)
        return filtered
    }
        let filtered = [];
        for (let n = 0; n < posts.length; n++) {
            if (posts[n].stage === v) {
        filtered.push(posts[n]);
        }
    }
    setPage(1)
    console.log(filtered)
    return filtered
    }

    return (
        <div className ="buttonHolder">
            <li>READY TO TRY<button id="ready" onClick = {() => postFilter(filterHelper(1, posts))}></button></li>
            <li>ON THE WAY<button id="onWay" onClick = {() => postFilter(filterHelper(2))}></button></li>
            <li>IN THE QUE<button id="inQ" onClick = {() => postFilter(filterHelper(3))}></button></li>
            <li>OUT OF STOCK<button id="OOS" onClick = {() => postFilter(filterHelper(4))}></button></li>
            <li>RESET<button id="reset" onClick = {() => reset()}></button></li>
        </div>
    )
}

export default Filter
