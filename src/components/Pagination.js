import React from 'react'

export const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage}) => {
    const pageNumbers = []
    for (let i=1; i <= Math.ceil(totalPosts / postsPerPage); i++)
    pageNumbers.push(i)
    

    return (

        <nav className="navContainer">
            <ul className="navItem">
                {pageNumbers.map(number => (
                    <li   key ={number}>
                        <button  onClick={() => {paginate(number) }} href="!#"></button>
                    </li>
                    
                ))}
                
                <h2 key={Math.random()}>0{currentPage} <div className="line"/> 0{pageNumbers.length}</h2>
            </ul>
            
        </nav>
    )
}

export default Pagination
