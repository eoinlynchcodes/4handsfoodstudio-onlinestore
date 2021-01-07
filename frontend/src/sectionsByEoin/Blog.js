import React from 'react';

function Blog(){

    return (
        <div>
        <section className="homepagebox">
            <div className="coloredBox blue">
              <h2>Blog</h2>
            </div>
            <div className="white">
              <div
                class="aroundBlog w3-justify"
                id="retainable-rss-embed"
                data-rss="https://medium.com/feed/@4handsf"
                data-maxcols="3"
                data-layout="grid"
                data-poststyle="inline"
                data-readmore="Read the rest..."
                data-buttonclass="btn btn-primary"
                data-offset="-100"
              ></div>
            </div>
          </section>

        </div>
    );
}

export default Blog;