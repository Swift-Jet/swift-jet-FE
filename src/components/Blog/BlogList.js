import React, { useEffect, useState } from 'react';
import { createClient } from "contentful";
import { Link } from 'react-router-dom';

const BlogList = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const client = createClient({ space: "sfoa8p0bdcyz", accessToken: "U5vQTREGJEbHPWSLGJdzMv7xlBJyA6Nqk2r9Mp6yhlk" });

  useEffect(() => {
    const getAllEntries = async () => {
      try {
        await client.getEntries().then((entries) => {
          setBlogPosts(entries);
        });
      } catch (error) {
        console.log(`Error fetching authors ${error}`);
      }
    };
    getAllEntries();
  }, []);

  return (
    <div id="layout" className="pure-g">
      <div className="content pure-u-1 pure-u-md-3-4">
        <div>
          <div className="posts">
            <h1 className="content-subhead">Swiftwings Blog</h1>

            {blogPosts?.items?.map((post) => {
              const createDate = post.fields.createDate ? new Date(post.fields.createDate) : null;

              return (
                <section className="post" key={post.sys.id}>
                  <header className="post-header">
                    <img src={post.fields.blogImage.fields.file.url} title="" alt={post.fields.title} width="578" height="291" />
                    <h2 className="post-title pt-3">{post.fields.title}</h2>
                    <p className="post-meta">
                      By <a href="https://thecodeangle.com/" className="post-author">{post.fields.blogAuthor}</a> Date <span></span>
                      <small>
                        {createDate && new Intl.DateTimeFormat('en-GB', {
                          month: 'long',
                          day: '2-digit',
                          year: 'numeric',
                        }).format(createDate)}
                      </small>
                    </p>
                  </header>
                  <div className="post-description">
                    <p>{post.fields.blogSummary}</p>
                    <Link to={`/blogDetails/${post.sys.id}`} className="button button1">
                      Read More
                    </Link>
                  </div>
                </section>
              );
            })}
          </div>

          <div className="footer">
            <div className="pure-menu pure-menu-horizontal">
              <div className="pure-menu-item">
                <a href="http://twitter.com/thecodeangle" className="pure-menu-link">Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
