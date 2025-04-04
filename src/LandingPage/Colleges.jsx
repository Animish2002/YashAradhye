import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';

const CollegeMarquee = () => {
  // Define college data
  const collegeData = {
    JEE: [
      { name: "IIT Bombay", type: "Govt." },
      { name: "VJTI Mumbai", type: "Govt." },
      { name: "COEP Pune", type: "Govt." },
      { name: "ICT Mumbai", type: "Govt." },
      { name: "PICT Pune", type: "Govt." },
      { name: "WCE Sangli", type: "Govt." },
      { name: "GHRCE Nagpur", type: "Govt." },
      { name: "BITS Pilani Goa", type: "private" },
      { name: "Symbiosis Institute of Technology", type: "private" },
      { name: "MIT-WPU Pune", type: "private" },
      { name: "VIT Pune", type: "private" },
      { name: "NMIMS Mumbai", type: "private" },
      { name: "DY Patil COE Pune", type: "private" }
    ],
    "MHT CET": [
      { name: "VJTI Mumbai", type: "Govt." },
      { name: "COEP Pune", type: "Govt." },
      { name: "PICT Pune", type: "Govt." },
      { name: "SPIT Mumbai", type: "Govt." },
      { name: "WCE Sangli", type: "Govt." },
      { name: "GHRCE Nagpur", type: "Govt." },
      { name: "MIT Pune", type: "private" },
      { name: "DY Patil School of Engineering", type: "private" },
      { name: "Amity University Mumbai", type: "private" },
      { name: "KJ Somaiya Mumbai", type: "private" },
      { name: "Sinhgad Institutes Pune", type: "private" },
      { name: "Bharati Vidyapeeth Pune", type: "private" },
      { name: "PCCOE Pune", type: "private" },
      { name: "RCOEM Nagpur", type: "private" }
    ],
  };

  // Function to get badge variant based on college type
  const getBadgeVariant = (type) => {
    return type === 'Govt.' ? 'default' : 'secondary';
  };

  // Marquee component for each exam type
  const MarqueeSection = ({ examType, colleges }) => {
    return (
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-3 pl-3 border-l-4 border-blue-800">{examType}</h3>
        
        <div className="relative overflow-hidden py-2">
          <div className="marquee-container flex">
            <div className="marquee-content animate-marquee flex space-x-4 mx-4">
              {colleges.map((college, idx) => (
                <Card key={idx} className="min-w-max border-2 border-indigo-300 hover:border-blue-800 transition-all">
                  <CardContent className="py-3 px-4 flex items-center gap-3">
                    <span className="font-medium">{college.name}</span>
                    <Badge variant={getBadgeVariant(college.type)} className="text-xs">
                      {college.type}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="marquee-content animate-marquee2 flex space-x-4 mx-4">
              {colleges.map((college, idx) => (
                <Card key={idx} className="min-w-max border-2 border-indigo-300 hover:border-blue-800 transition-all">
                  <CardContent className="py-3 px-4 flex items-center gap-3">
                    <span className="font-medium">{college.name}</span>
                    <Badge variant={getBadgeVariant(college.type)} className="text-xs">
                      {college.type}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full bg-white py-8 border-y border-slate-200">
      <div className="w-full mx-auto md:px-2 px-4">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-6 hero">Maharashtra Top Colleges</h2>
        
        <Tabs defaultValue="all" className="w-full mb-6">
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="all">All Colleges</TabsTrigger>
              <TabsTrigger value="Govt.">Govt.</TabsTrigger>
              <TabsTrigger value="private">Private</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all">
            {Object.entries(collegeData).map(([examType, colleges]) => (
              <MarqueeSection key={examType} examType={examType} colleges={colleges} />
            ))}
          </TabsContent>
          
          <TabsContent value="Govt.">
            {Object.entries(collegeData).map(([examType, colleges]) => (
              <MarqueeSection 
                key={examType} 
                examType={examType} 
                colleges={colleges.filter(college => college.type === 'Govt.')} 
              />
            ))}
          </TabsContent>
          
          <TabsContent value="private">
            {Object.entries(collegeData).map(([examType, colleges]) => (
              <MarqueeSection 
                key={examType} 
                examType={examType} 
                colleges={colleges.filter(college => college.type === 'private')} 
              />
            ))}
          </TabsContent>
        </Tabs>
      </div>
      
      {/* CSS for smooth animation */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0); }
        }
        
        .marquee-container {
          width: 100%;
          overflow: hidden;
          position: relative;
        }
        
        .marquee-content {
          white-space: nowrap;
          will-change: transform;
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        
        .animate-marquee2 {
          animation: marquee2 30s linear infinite;
        }
        
        .marquee-container:hover .animate-marquee,
        .marquee-container:hover .animate-marquee2 {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default CollegeMarquee;