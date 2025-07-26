import { React, useEffect , useState } from "react";

const HeroSection = ({isLoaded , items , error}) => {

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div className="text-center items-center">Loading...</div>;
  } else {
    return (
      console.log(items),
      (
        <div>{ items.articles.map((article, index) => (
          <section key={index} className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* LEFT COLUMN – Main Article */}
          <div className="md:col-span-2">
            {/* Title */}
            <h2 className="text-4xl font-serif font-semibold text-gray-900 leading-tight">
              {article.title || "Breaking News: Global Unity"}
            </h2>

            {/* Description */}
            <p className="mt-4 text-sm text-gray-700 leading-relaxed max-w-3xl">
              {article.description || "In a world increasingly divided, the call for global unity has never been more urgent. Leaders from around the globe are coming together to address pressing issues such as climate change, economic inequality, and social justice."}
            </p>

            {/* Read More */}
            <a
              href= {`${article.url || "#"}`}
              target="_blank"
              className="inline-block mt-4 text-sm font-semibold underline text-black"
            >
              Read More.......
            </a>

            {/* Date Tag */}
            <div className="mt-2">
              <span className="text-xs bg-[#6A4B33] text-white px-3 py-1 rounded-sm font-semibold">
                {new Date(article.publishedAt).toLocaleDateString("en-US", {  
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>

            {/* Image */}
            <img
              src={`${article.urlToImage}`}
              alt="Unable to fetch image"
              className="mt-6 w-full h-[500px] object-cover border border-gray-300"
            />
          </div>

          {/* RIGHT COLUMN – Supporting Article */}
          
          
        </section>
        
      ))}
      </div>
      
      )
    );
  }
};

export default HeroSection;
