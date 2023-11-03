'use client';

import React from 'react'
import { useState, useEffect} from 'react'
import PromptCard from './promptcard'

const PromptCardList = ({ data, handleTagClick}) => {
  return (
    <div className='mt-16 prompt_layout'>
        {data.map((post) => 
        <PromptCard
          key={post.id}
          post={post}
          handleTagClick={handleTagClick}
       />)}
    </div>
  )
}

const feed = () => {
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([])

  const handleSearchChange = (e) => {

  }

  useEffect(() => { 
    const fetchPosts = async () => {
      const response = await fetch('api/prompt')
      const data = await response.json()

      setPosts(data)
    }
    fetchPosts();
  }, [])

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
        type='text'
        placeholder='Search for a tag or a username'
        value={searchText}
        onChange={handleSearchChange}
        requred
        className='search_input peer'
        > 
        </input>
      </form>

      <PromptCardList
        data={posts}
        handleTagClick={() => {}}
      />
    </section>
  )
}

export default feed