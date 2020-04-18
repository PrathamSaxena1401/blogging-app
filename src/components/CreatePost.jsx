import React,{ useState } from 'react';
import { PageHeader,Input ,Button } from "antd";
import db from "../firebase"
const {TextArea}=Input;
const CreatePost=(props)=>{
  const [title,setTitle]=useState('')
  const [content,setContent]=useState('')
  const onTitlechange=(event)=>    setTitle(event.target.value);
  const onContentchange=(event)=>    setContent(event.target.value);
const onCreatePost=()=>{
let postRef =db.collection('posts')
let payload={title,content}
postRef.add(payload)
.then(function (doc){
  console.log('successfuly posted',doc.id)
})
}
  return(
<div>
  <div className="page_header_container">
    <PageHeader
      className="site-page-header"
      style={{ border: "1px solid rgb(133, 133, 133)" }}
      title="Create Post"
    />
</div>
<div className="post_inputs_container">
  <div className="post_input_container">
  <div className="post_input_title">
  <h2>Post Title</h2>

  </div>
  <div className="post_input">
  <Input placeholder="give post title..." value={title} onChange={onTitlechange}/>
  </div>
  </div>
  <div className="post_input_container">
  <div className="post_input_content">
  <h2>Post content</h2>

  </div>
  <div className="post_input_content">
  <TextArea rows={10} value={content} onChange={onContentchange}/>
  </div>
  </div>
  <div className="post_input_button">
<Button type="primary" onClick={onCreatePost}>create post</Button>
  </div>
</div>
</div>
  )
}

export default CreatePost
