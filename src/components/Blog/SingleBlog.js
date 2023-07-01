import React, { useEffect, useState } from 'react';
import { createClient } from 'contentful';
import Layout from '../shared/layout/Layout';

const SingleBlog = ({ match }) => {
  const { id } = match.params;
  const [blogPosts, setBlogPosts] = useState([]);
  const client = createClient({ space: 'sfoa8p0bdcyz', accessToken: 'U5vQTREGJEbHPWSLGJdzMv7xlBJyA6Nqk2r9Mp6yhlk' });

  useEffect(() => {
    const getAllEntries = async () => {
      try {
        const entries = await client.getEntries();
        const singleEntry = entries.items.filter((item) => item.sys.id == id)
        setBlogPosts(singleEntry);
      } catch (error) {
        console.log(`Error fetching authors ${error}`);
      }
    };
    getAllEntries();
  }, []);

  return (
    <Layout>
    <div className="py-16">
      <div id="layout" className="px-6 m-auto text-gray-600 xl:container md:px-12 xl:px-16 ">
        <div className=" lg:p-32 rounded-[4rem] space-y-6 md:flex md:gap-6 justify-center md:space-y-0 lg:items-center content">
          <div>
            <div className="posts">
              <div className="flex justify-center"></div>
              {blogPosts.map((post) => (
                <section className="px-6 py-8 mb-12 shadow-md rounded-xl post" key={post.sys.id}>
                  <header className="post-header">
                    <h2 className="mt-2 mb-4 text-3xl font-bold tracking-tight text-[#670f29]">
                      {post.fields.blogTitle}
                    </h2>
                    <img
                      src={post.fields.blogImage.fields.file.url}
                      title=""
                      alt={post.fields.title}
                      className="bg-white border border-gray-200 rounded-lg shadow-md"
                    />
                  </header>
                  <br />
                  <div className="post-description">
                    <p className="mt-2 mb-2 text-xl font-semibold tracking-tight text-[#670f29]">{post.fields.blogSummary}</p>
                    {/* <Link to={`/blogDetails/${post.sys.id}`} className="inline-flex items-center px-3 py-2 mt-2 text-sm font-medium text-center text-white rounded-lg bg-rose-900 hover:bg-rose-900 focus:ring-4 focus:ring-blue-300">
                Read More
              </Link> */}
                    <br />
                    <p className="leading-8 text-justify">{post.fields.postContent}</p>
                    <br />
                    <br />
                    <p className="flex justify-end font-bold post-meta">
                      <a href="" className="post-author">
                        By Swiftwings Authors
                      </a>
                    </p>
                    <p className="flex justify-end post-meta">
                      <a href="" className="post-author">
                        Posted On {(post.fields.createdDate).slice(0, 10)}
                      </a>
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
    </div>
    </Layout>
  );
};

export default SingleBlog;
