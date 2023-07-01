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
    <div className="py-16">
       <div id="layout" className="px-6 py-16 m-auto text-gray-600 xl:container md:px-12 xl:px-6 ">
  <div className="px-4 my-4 content pure-u-1 pure-u-md-3-4 md:my-0 md:px-8 lg:px-12">
    <div>
      <div className="posts">
        <div className="flex justify-center">
          <h1 className="mb-4 text-2xl content-subhead text-[#670f29]">Our Blog</h1>
        </div>
        <div className="grid gap-12 md:gap-6 md:grid-cols-2 lg:gap-12">
        {blogPosts.map((post) => (
          <section className="px-4 py-6 mb-12 shadow-md rounded-xl post" key={post.sys.id}>
            <header className="post-header">
              <img
                src={post.fields.blogImage.fields.file.url}
                title=""
                alt={post.fields.title}
                className="bg-white border border-gray-200 rounded-lg shadow-md"
              />
              <h5 className="mt-4 mb-2 text-xl font-bold tracking-tight text-gray-600">
                {post.fields.blogTitle}
              </h5>
            </header>
            <div className="post-description">
              <p>{post.fields.blogSummary}</p>
              <Link
                to={`/blogDetails/${post.sys.id}`}
                className="inline-flex items-center px-3 py-2 mt-2 text-sm font-medium text-center text-white rounded-lg bg-rose-900 hover:bg-rose-900 focus:ring-4 focus:ring-blue-300"
              >
                Read More
              </Link>
              <br />
              <br />
              <p className="flex justify-end post-meta">
                <a
                  href="https://thecodeangle.com/"
                  className="post-author"
                >
                  By Swiftwings
                </a>
              </p>
            </div>
          </section>
        
        ))}
      </div>
      </div>

      <div className="footer">
        <div className="pure-menu pure-menu-horizontal">
          {/* <div className="pure-menu-item">
            <a
              href="http://twitter.com/thecodeangle"
              className="pure-menu-link"
            >
              Twitter
            </a>
          </div> */}
        </div>
      </div>
    </div>
  </div>
</div>
</div>
    </Layout>
  
  );
};

export default BlogList;
