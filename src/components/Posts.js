import React from 'react'

class Posts extends React.Component {
    constructor(){
        super()
        this.state = {
            def: ""
        }
    }
    

    if(loading){
        return <h2>Loading</h2> // Will eventually be changed to loading gif or animation
    }


    render(){
        const colorDetect = (color, stock) => { // <- This method determines the color of the Border-left based 
                                                // on data in the api. This method of conditional rendering could
                                                //be Improved.
            if (stock < 1) {
                return "30px solid #F50400"
            }  
            if (color === 1){
                return "30px solid #4AD5AE"
            }
            if (color === 2) {
                return "30px solid #69A8E3"
            }
            if (color === 3) {
                return "30px solid #FF6433"
            } 
        }
        
        
        
        return (
            <div className="container">
            <div className='boxContainer' >
                {this.props.posts.map(post => (
                    <ul key={post._id}className='boxPackage' style={{borderLeft: colorDetect(post.stage, post.stock)}}>
                        <li>  <img src = {post.imgurl} alt = "Failed to load"></img></li>
                        <li id = "brandmodel">{post.brand} <p>{post.name}</p></li>
                        <li id="categoryModel">Category:<p>{post.category}</p></li>
                        <li id="small">Size:<p>{post.size}</p></li>
                        <li id="categoryModel">Colour:<p>{post.color}</p></li>
                        <li id="categoryModel">ProductCode:<p>{post.productcode}</p></li>
                    </ul>
                    
                ))}
            </div>
            </div>
        )
    }
}


export default Posts
