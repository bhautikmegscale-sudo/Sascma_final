import React from "react";

const Amenities = () => {
  const AmenitiesIntro = {
    tag: "Amenities",
    title: "Facilities That Empower You.",
  };
  const facultyData = [
    {
      id: 1,
      name: "Seminal Hall - Auditorium-",
      designation: "President",
      image:
        "/amenities/SEMINAR HALL - AUDITORIUM.jpeg",
    },
    {
      id: 2,
      name: "Lab-1",
      designation: "Vice President",
      image:
        "/amenities/LAB 1.jpeg",
    },
    {
      id: 3,
      name: "lab-2",
      designation: "Member, STERS",
      image:
        "/amenities/lab2.jpeg",
    },
    {
      id: 4,
      name: "lab-3",
      designation: "Member, STERS",
      image:
        "/amenities/LAB 3.jpeg",
    },
    {
      id: 5,
      name: "lab-4",
      designation: "Member, STERS",
      image:
        "/amenities/lab4.jpeg",
    },
    {
      id: 6,
      name: "ClassRooms-1",
      designation: "Joint Treasurer",
      image:
        "/amenities/CLASSROOM-1.jpg",
    },
    {
      id: 7,
      name: "classrooms with Projectors",
      designation: "Joint Treasurer",
      image:
        "/amenities/CLASSROOMS WITH PROJECTORS.jpg",
    },
    {
      id: 8,
      name: "Sports Ground",
      designation: "Treasurer",
      image:
        "/amenities/SPORTS GROUND.jpeg",
    },
    {
      id: 9,
      name: "Sports Room",
      designation: "Administrator, STERS",
      image:
        "/amenities/SPORTS ROOM.jpeg",
    },
    {
      id: 10,
      name: "Library",
      designation: "President",
      image:
        "https://sascmafront.megascale.co.in/l1.webp",
    },
  ];

  return (
    <section className="mt-30 lg:mt-50 pb-12 bg-white px-4 lg:px-8">
      <div className="text-start md:text-center">
        <div className="flex items-center justify-start md:justify-center mb-2">
          <span className="w-10 h-0.5 bg-[#9D2235] mr-3"></span>
          <h4 className="text-sm uppercase tracking-widest text-gray-500">
            {AmenitiesIntro.tag}
          </h4>
          <span className="w-10 h-0.5 bg-[#9D2235] ml-3"></span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          {AmenitiesIntro.title}
        </h2>
      </div>
      <div className="md:pt-4 grid gap-4 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {facultyData.map((faculty) => (
          <div
            key={faculty.id}
            className="group w-full max-w-sm mx-auto overflow-hidden rou bg-white shadow-md rounded-b-lg transition-all duration-300 hover:shadow-2xl"
          >
            {/* 🔼 Increased Image Height */}
            <div className="relative h-60 md:h-96 sm:h-auto overflow-hidden">
              <img
                src={faculty.image}
                alt={faculty.name}
                className="h-60 w-full object-cover  rounded-lg transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-white/20 via-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>

            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800 transition-colors duration-300 group-hover:text-[#213153]">
                {faculty.name}
              </h3>
              {/* <p className="mt-1 text-sm text-gray-500">
                {faculty.designation}
              </p> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Amenities;
