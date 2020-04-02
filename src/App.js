import React, {useState, useEffect} from 'react';
import './App.css';
import Posts from './components/Posts'
import Pagination from './components/Pagination'
import axios from 'axios'
import Filter from './components/Filter'





function App() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(4)                  // Would like to implement a method to setPage and let the user determine items per page.
  
    // Async Method to grab data from api
      useEffect(() => {
        const fetchPosts = async () => {
          setLoading(true)
          const res = await axios.get("http://localhost:8080/")
          setPosts(res.data.shoes)
          setLoading(false)
        }
        
        fetchPosts()
      }, [])

      
      // Seperated this function to pass down as props for the reset method,
      // Later I want to add toggle functionality so this will not be needed
      // as you will have the ability to select multiple filters. 
       const postGrab = () => {
          const fetchPosts = async () => {
          setLoading(true)
          const res = await axios.get("http://localhost:8080/")
          setPosts(res.data.shoes)
          setLoading(false)
          }
          fetchPosts()
          setCurrentPage(1)
      }
  
      // Get Current posts
      const indexOfLastPost = currentPage * postsPerPage;
      const indexOfFirstPost = indexOfLastPost - postsPerPage
      const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
  
      // Change Page methods to pass down as props
      const paginate = (pageNumber) => setCurrentPage(pageNumber)
      const postFilter = (stageNumber) => setPosts(stageNumber)
      const setPage = (pagenum) => setCurrentPage(pagenum)
      
      

    return (
      <div>
        <Filter setPage = {setPage} reset={postGrab} postFilter={postFilter} posts ={posts}/>
        <Posts posts={currentPosts} loading={loading}/>
        <Pagination
          currentPage = {currentPage}
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}/>
      </div>
    );
  }
  
  export default App;


  