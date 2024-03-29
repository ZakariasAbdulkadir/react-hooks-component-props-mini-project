import React from 'react'
import Article from './Article'

function ArticleList({posts}) {
  return (
    <main>
        {posts.map(post => {
            return <Article title={post.title} date={post.date} preview={post.preview} />
        })}
    </main>
  )
}

export default ArticleList

// Make an ArticleList component as a child of App. It should return:

// a <main> element with the following components inside:
// an array of Article components (one component for each of the posts passed down as props to ArticleList)
// make sure to assign a unique key attribute to each Article
// Article
// Make an Article component as a child of ArticleList. It should return:

// an <article> element, with the following elements inside:
// an <h3> element displaying the title of the article, passed as a prop called title
// a <small> element displaying the date of the article, passed as a prop called date
// a default value of "January 1, 1970" should be used if no date is passed as a prop
// a <p> element displaying the preview of the article, passed as a prop called preview