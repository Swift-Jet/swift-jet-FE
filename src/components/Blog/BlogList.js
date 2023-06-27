import React, { useEffect, useState } from 'react';
import { createClient } from "contentful";
import { Link } from 'react-router-dom';
import Layout from '../shared/layout/Layout';

const BlogList = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const client = createClient({ space: "sfoa8p0bdcyz", accessToken: "U5vQTREGJEbHPWSLGJdzMv7xlBJyA6Nqk2r9Mp6yhlk" });

  useEffect(() => {
    const getAllEntries = async () => {
      try {
        await client.getEntries().then((entries) => {
          console.log("entries", entries);
          setBlogPosts(entries.items);
        });
      } catch (error) {
        console.log(`Error fetching authors ${error}`);
      }
    };
    getAllEntries();
  }, []);

  return (
    <Layout>
        <div id="layout" className="mt-36 sm:w-4/5 md:w-1/2 lg:w-2/5 mr-auto ml-auto">
      <div className="content pure-u-1 pure-u-md-3-4">
        <div>
          <div className="posts">
           <div className="justify-center flex">
           <h1 className="content-subhead mb-4 text-[2em]">Our Blog</h1>
           </div>
            {blogPosts.map((post) => (
         
              <section className="post mb-12" key={post.sys.id}>
                <header className="post-header">

                  <img src={post.fields.blogImage.fields.file.url} title="" alt={post.fields.title} className='bg-white shadow-md border border-gray-200 rounded-lg' />

                  <h5 className="text-gray-600 font-bold text-xl tracking-tight mt-4 mb-2">{post.fields.blogTitle}</h5>
                </header>
                <div className="post-description">
                  <p>{post.fields.blogSummary}</p>
                  <Link to={`/blogDetails/${post.sys.id}`} className="text-white bg-rose-900 hover:bg-rose-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center mt-2">
                    Read More
                  </Link>
                  <br></br>
                  <br></br>
                  <p className="post-meta flex justify-end">
                    <a href="https://thecodeangle.com/" className="post-author">By Swiftwings</a>
                  </p>
                </div>
              </section>
            ))}
          </div>

          <div className="footer">
            <div className="pure-menu pure-menu-horizontal">
              {/* <div className="pure-menu-item">
                <a href="http://twitter.com/thecodeangle" className="pure-menu-link">Twitter</a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  
  );
};

export default BlogList;
