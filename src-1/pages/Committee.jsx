import React from "react";

const Committee = () => {
  const CommitteeIntro = {
    tag: "Committees",
    title: "Committees driving excellence and growth.",
  };
  const facultyData = [
    {
      id: 1,
      name: "Shri Nirmalkumar V. Vakharia",
      designation: "President",
      image:
        "https://sascma.ac.in:8443/api/v1/Uploads/media/4d053ce2-bf1f-4e58-a3c2-aa09ed078209.JPG",
    },
    {
      id: 2,
      name: "Shri Prafulchandra B. Shah",
      designation: "Vice President",
      image:
        "https://sascma.ac.in:8443/api/v1/Uploads/media/bc126d9f-e5ce-4a9b-bced-3f6984d2061a.JPG",
    },
    {
      id: 3,
      name: "Shri Niravbhai P. Modi",
      designation: "Member, STERS",
      image:
        "https://sascma.ac.in:8443/api/v1/Uploads/media/f9fe76e1-d1d9-4ddc-9ecd-cea9cc08dc52.JPG",
    },
    {
      id: 4,
      name: "Shri Dineshbhai S. Zaveri",
      designation: "Hon. Secretary",
      image:
        "https://sascma.ac.in:8443/api/v1/Uploads/media/8023374c-f2c0-460d-8bbf-19cdc0c364aa.JPG",
    },
        {
      id: 5,
      name: "Shri Himanshubhai S. Jariwala",
      designation: "Joint Secretary",
      image:
        "https://sascma.ac.in:8443/api/v1/Uploads/media/52f2d493-ea0e-4485-a6b2-5cb6cf778bf1.JPG",
    },
    {
      id: 6,
      name: "Shri Jaykantbhai M. Chevli",
      designation: "Joint Treasurer",
      image:
        "https://sascma.ac.in:8443/api/v1/Uploads/media/b7d60bc7-20d9-463b-9326-628d626b7654.JPG",
    },
    {
      id: 7,
      name: "Shri Kiritbhai F. Vakharia",
      designation: "Treasurer",
      image:
        "https://sascma.ac.in:8443/api/v1/Uploads/media/da2fd1f3-3ec2-4945-b9c0-cb163a7e99b6.JPG",
    },
    {
      id: 8,
      name: "Shri Harishbhai B. Nagoria",
      designation: "Administrator, STERS",
      image:
        "https://sascma.ac.in:8443/api/v1/Uploads/media/fb3788d3-5762-4851-80ab-2f9da225ba6b.JPG",
    },
  ];

  return (
    <section className="mt-30 lg:mt-50 pb-12 bg-white px-4 lg:px-8">
      <div className="text-start md:text-center">
        <div className="flex items-center justify-start md:justify-center mb-2">
          <span className="w-10 h-0.5 bg-[#9D2235] mr-3"></span>
          <h4 className="text-sm uppercase tracking-widest text-gray-500">
            {CommitteeIntro.tag}
          </h4>
          <span className="w-10 h-0.5 bg-[#9D2235] ml-3"></span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          {CommitteeIntro.title}
        </h2>
      </div>
      <div className="md:pt-4 grid gap-4 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {facultyData.map((faculty) => (
          <div
            key={faculty.id}
            className="group w-full max-w-sm mx-auto overflow-hidden rou bg-white shadow-md rounded-b-lg transition-all duration-300 hover:shadow-2xl"
          >
            {/* 🔼 Increased Image Height */}
            <div className="relative h-96 sm:h-auto overflow-hidden">
              <img
                src={faculty.image}
                alt={faculty.name}
                className="h-full w-full object-cover  rounded-lg transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-white/20 via-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>

            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800 transition-colors duration-300 group-hover:text-[#213153]">
                {faculty.name}
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                {faculty.designation}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Committee;
