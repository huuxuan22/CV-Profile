import React from "react";
import { Music, Activity, Heart } from "lucide-react";

const Hobbies = () => {
  const hobbies = [
    {
      name: "Bóng Đá",
      description: "Đá bóng giúp tôi rèn luyện sức khỏe và tinh thần đồng đội",
      icon: <Activity className="h-8 w-8" />,
      image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?auto=format&fit=crop&w=400&q=80",
      color: "from-green-500 to-emerald-600"
    },
    {
      name: "Bóng Chuyền",
      description: "Môn thể thao yêu thích giúp phối hợp nhịp nhàng với đồng đội",
      icon: <Activity className="h-8 w-8" />,
      image: "https://images.unsplash.com/photo-1622279457486-3a6c79da5df9?auto=format&fit=crop&w=400&q=80",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Guitar",
      description: "Chơi guitar là cách tôi thư giãn và thể hiện cảm xúc qua âm nhạc",
      icon: <Music className="h-8 w-8" />,
      image: "https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?auto=format&fit=crop&w=400&q=80",
      color: "from-amber-500 to-orange-500"
    },
    {
      name: "Cajon",
      description: "Nhịp điệu cajon mang lại năng lượng tích cực và cảm hứng sáng tạo",
      icon: <Music className="h-8 w-8" />,
      image: "https://images.unsplash.com/photo-1511370235399-1802c9f6c6c5?auto=format&fit=crop&w=400&q=80",
      color: "from-brown-500 to-amber-800"
    }
  ];

  return (
    <section className="w-full py-16 bg-gradient-to-br from-[#0D3B56] to-[#2A7CB0]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-12 justify-center">
          <div className="p-3 bg-gradient-to-r from-[#2A7CB0] to-[#5DC9E4] rounded-lg">
            <Heart className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white">SỞ THÍCH</h2>
        </div>

        {/* Hobbies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hobbies.map((hobby, index) => (
            <div 
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={hobby.image}
                  alt={hobby.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-b ${hobby.color} opacity-60`}></div>
                <div className="absolute top-4 left-4">
                  <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                    {hobby.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#5DC9E4] transition-colors">
                  {hobby.name}
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  {hobby.description}
                </p>
                
                {/* Decorative element */}
                <div className="mt-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#5DC9E4] rounded-full animate-pulse"></div>
                  <span className="text-xs text-blue-200">Đam mê</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Description */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 rounded-lg border border-white/10">
            <div className="w-2 h-2 bg-[#5DC9E4] rounded-full animate-pulse"></div>
            <p className="text-blue-100">
              "Sở thích giúp tôi cân bằng cuộc sống và luôn tràn đầy năng lượng sáng tạo"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;