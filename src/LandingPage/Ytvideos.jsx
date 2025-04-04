import React, { useState, useEffect } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";

const LatestYouTubeVideos = ({
  channelId = "UCXuqSBlHAE6Xw-yeJA0Tunw",
  maxResults = 4,
}) => {
  // Default channel is Linus Tech Tips as an example
  const [videos, setVideos] = useState([]);
  const [channelInfo, setChannelInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // YouTube API configuration
  const API_KEY = "AIzaSyBFpyzg-5DP0DArEhRDDf7RZ7LzxwQBgJE"; // Replace with your actual YouTube API key

  useEffect(() => {
    const fetchChannelAndVideos = async () => {
      try {
        setLoading(true);

        // First fetch channel info to get channel title and thumbnail
        const channelResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?key=${API_KEY}&id=${channelId}&part=snippet,statistics`
        );

        if (!channelResponse.ok) {
          throw new Error("Failed to fetch channel information");
        }

        const channelData = await channelResponse.json();
        if (channelData.items && channelData.items.length > 0) {
          setChannelInfo(channelData.items[0]);
        }

        // Then fetch videos from YouTube API
        const videosResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}&type=video`
        );

        if (!videosResponse.ok) {
          throw new Error("Failed to fetch videos");
        }

        const videosData = await videosResponse.json();
        setVideos(videosData.items || []);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchChannelAndVideos();
  }, [channelId, maxResults]);

  // Format date to a more readable format
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-8 hero">
          {channelInfo && (
            <div className="flex items-center mb-6">
              <img
                src={channelInfo.snippet.thumbnails.default.url}
                alt={channelInfo.snippet.title}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  {channelInfo.snippet.title}
                </h2>
                <p className="text-gray-600 text-sm">
                  {parseInt(
                    channelInfo.statistics.subscriberCount
                  ).toLocaleString()}{" "}
                  subscribers
                </p>
              </div>
            </div>
          )}

          <div className="w-16 h-1 bg-blue-600 mb-4"></div>
          <p className="text-gray-600 text-center max-w-2xl">
            Check out the latest videos from{" "}
            {channelInfo ? channelInfo.snippet.title : "this channel"}
          </p>
        </div>

        {loading && (
          <div className="flex justify-center items-center h-64">
            <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {error && (
          <div className="text-center text-red-500 py-8">
            Error loading videos: {error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:px-16">
          {videos.map((video) => (
            <Card
              key={video.id.videoId}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div
                className="relative pb-56 overflow-hidden cursor-pointer"
                onClick={() =>
                  window.open(
                    `https://www.youtube.com/watch?v=${video.id.videoId}`,
                    "_blank"
                  )
                }
              >
                <img
                  src={video.snippet.thumbnails.high.url}
                  alt={video.snippet.title}
                  className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <svg
                    className="w-16 h-16 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-blue-600 mb-2">
                  {formatDate(video.snippet.publishedAt)}
                </p>
                <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                  {video.snippet.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {video.snippet.description}
                </p>
                <a
                  href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
                >
                  Watch Video
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {channelInfo && (
          <div className="mt-10 text-center ">
            <Button
              onClick={() =>
                window.open(
                  `https://www.youtube.com/channel/${channelId}`,
                  "_blank"
                )
              }
              target="_blank"
              rel="noopener noreferrer"
              variant="destructive"
              className="mt-4 cursor-pointer"
            >
              Visit {channelInfo.snippet.title} on YouTube
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default LatestYouTubeVideos;
