import React from 'react';
const PostLists = ({ PostlstProp ,handlePOstDelFun,handlePOstEditFun}) => {
console.log(PostlstProp);
    
    const itr = PostlstProp.map(post => {
        const cls = "card   lighten-3  darken-1 col s4 z-depth-4 ";
        const pStyle = {
           
            backgroundColor:'rgba('+post.coloris.r+','+post.coloris.g+','+post.coloris.b+','+post.coloris.a+')'
          };
         return (
            <div key={post.id}>
                <span key={'rowid' + post.id} >
                   <div className={cls} style={pStyle}  >
                        <div className="card-content white-text">
                            <span className="card-title"  style={{fontWeight: 'bold'  }} ><input type="text" onChange={ (e) => { handlePOstEditFun(post.id,e.target.value,"titleis")} }  defaultValue={post.titleis} />
                            </span>
                            <p style={{wordWrap: 'break-word'}} >
                             <textarea onChange={ (e) => { handlePOstEditFun(post.id,e.target.value,"contentis")} }  defaultValue={post.contentis} ></textarea> 
                            </p>
                        </div>
                        <div className="card-action">
                       
                       <button onClick={ () => { handlePOstDelFun(post.id)} } className="btn waves-effect waves-light red btn-sm">Delete</button>
                        </div>
                    </div>
             </span>
            </div>
        );

    });

    return (
        <div className="row" >
        
        {itr}
         
        </div>
    )
}
export default PostLists;
