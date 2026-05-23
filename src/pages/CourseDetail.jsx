import React, { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { BookOpen, BriefcaseBusiness, Calendar, ChevronRight, GraduationCap, Info, ListChecks, Target, Users } from "lucide-react";
import { coursesData } from "../data/coursesData";

const tabs = [
  { id: "about", label: "About", icon: Info },
  { id: "syllabus", label: "Syllabus", icon: BookOpen },
  { id: "timetable", label: "Timetable", icon: Calendar },
];

const maPrograms = [
  {
    id: "clinical",
    tabLabel: "Clinical",
    tone: "blue",
    title: "MA Psychology (Clinical)",
    description:
      "MA Psychology Clinical focuses on psychological disorders, mental health conditions, assessment techniques, and therapeutic interventions. This specialization is ideal for clinical practice, mental healthcare, psychological assessment, and rehabilitation support services.",
    highlights: [
      "Advanced Psychopathology",
      "Psychological Testing",
      "CBT (Cognitive Behavioral Therapy)",
      "Neuropsychology",
      "Child Psychology",
      "Research & Statistics",
    ],
    careers: [
      "Clinical Psychology Assistance",
      "Hospitals & Mental Health Clinics",
      "NGOs & Rehabilitation Centers",
      "Research & Academia",
      "Mental Health Services",
    ],
  },
  {
    id: "counselling",
    tabLabel: "Counselling",
    tone: "green",
    title: "MA Psychology (Counselling)",
    description:
      "MA Psychology Counselling focuses on guidance, emotional support, behavioural counselling, and therapeutic communication techniques. This specialization is suitable for counselling services, educational guidance, family support, and wellness programs.",
    highlights: [
      "Counselling Theories",
      "Career Counselling",
      "Family Counselling",
      "Group Counselling",
      "Positive Psychology",
      "Trauma-Informed Practice",
    ],
    careers: [
      "Schools & Educational Institutions",
      "Counselling Centers",
      "Corporate Wellness Programs",
      "NGOs & Community Services",
      "Private Practice Support Roles",
    ],
  },
];

const artsFaculty = [
  {
    id: 1,
    name: "Dr. Ashish Desai",
    designation: "Principal",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/faa3acd2-a897-4f4d-92b1-569279b5da6d.jpeg",
  },
  {
    id: 8,
    name: "Ms. Dhyani Darpan Vashi",
    designation: "Coordinator",
    image: "https://sascma.ac.in:8443/api/v1/Uploads/media/ce295a97-27c4-4594-b9e2-2960818b8f84.JPG",
  },
];

const artsCourseSections = {
  ma: [
    { id: "about", label: "About the Course", icon: Info },
    { id: "faculty", label: "Faculty", icon: Users },
    { id: "clinical", label: "MA Psychology (Clinical)", icon: GraduationCap },
    { id: "counselling", label: "MA Psychology (Counselling)", icon: GraduationCap },
    { id: "why", label: "Why Choose MA Psychology?", icon: Target },
    { id: "after", label: "What After MA Psychology?", icon: ListChecks },
    { id: "jobs", label: "Job Scope", icon: BriefcaseBusiness },
    { id: "syllabus", label: "Syllabus", icon: BookOpen },
    { id: "timetable", label: "Timetable", icon: Calendar },
  ],
  ba: [
    { id: "about", label: "About the Course", icon: Info },
    { id: "faculty", label: "Faculty", icon: Users },
    { id: "details", label: "Course Details", icon: GraduationCap },
    { id: "why", label: "Why Choose BA Psychology?", icon: Target },
    { id: "after", label: "What After BA Psychology?", icon: ListChecks },
    { id: "jobs", label: "Job Scope", icon: BriefcaseBusiness },
    { id: "syllabus", label: "Syllabus", icon: BookOpen },
    { id: "timetable", label: "Timetable", icon: Calendar },
  ],
};

export default function CourseDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const course = coursesData.find((c) => c.id === id);
  const [activeSection, setActiveSection] = useState("about");
  const contentRef = useRef(null);
  const isArtsCourse = id === "ba" || id === "ma";
  const sidebarLinks = isArtsCourse ? artsCourseSections[id] : tabs;
  const currentSection = sidebarLinks.some((link) => link.id === activeSection)
    ? activeSection
    : "about";

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center text-[#213153]">
        Course not found
      </div>
    );
  }

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);

    if (window.matchMedia("(max-width: 1023px)").matches) {
      requestAnimationFrame(() => {
        contentRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  };

  const content = (
    <AnimatePresence mode="wait">
      <Motion.div
        key={currentSection}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.35 }}
        className="rounded-lg border border-[#213153]/15 bg-white p-4 md:p-6 shadow-sm"
      >
        {isArtsCourse && <ArtsSection id={id} activeSection={currentSection} />}

        {!isArtsCourse && currentSection === "about" && (
          <section>
            <h2 className="text-2xl font-bold text-[#213153] mb-4">
              About the Course
            </h2>
            <div
              className="text-[#213153]/75 leading-relaxed text-sm sm:text-base space-y-4"
              dangerouslySetInnerHTML={{ __html: course.about }}
            />
          </section>
        )}

        {currentSection === "syllabus" && (
          <section>
            <h2 className="text-2xl font-bold text-[#213153] mb-4">
              Course Syllabus
            </h2>
            <Syllabus course={course} navigate={navigate} />
          </section>
        )}

        {currentSection === "timetable" && (
          <section>
            <h2 className="text-2xl font-bold text-[#213153] mb-4">
              Timetable
            </h2>
            <p className="text-[#213153]/75 text-sm sm:text-base">
              {course.timetable || "Timetable will be updated soon."}
            </p>
          </section>
        )}

      </Motion.div>
    </AnimatePresence>
  );

  return (
    <div className="min-h-screen bg-white pt-20 md:pt-24 pb-10">
      <div className="relative h-64 sm:h-80 md:h-96 w-full">
        <img
          src={course.banner}
          alt={course.full}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#213153]/60" />

        <div className="relative z-10 h-full flex items-center px-6 text-center">
          <Motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto w-full"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-wide mb-2">
              {course.full}
            </h1>
            <p className="text-sm md:text-base uppercase font-semibold tracking-widest text-white/90">
              Duration: {course.duration}
            </p>
          </Motion.div>
        </div>
      </div>

      <div className="md:h-screen max-w-7xl mx-auto px-4 lg:px-8 pt-6 md:pt-10">
        {isArtsCourse ? (
          <div className="grid gap-6 lg:grid-cols-[300px_minmax(0,1fr)] lg:items-start">
            <aside className="lg:sticky lg:top-28 rounded-lg border border-[#213153]/15 bg-white p-3 shadow-sm">
              <p className="px-3 pb-3 text-xs font-semibold uppercase tracking-widest text-[#213153]/55">
                Course Details
              </p>

              <nav className="grid gap-2">
                {sidebarLinks.map((link) => (
                  <SidebarButton
                    key={link.id}
                    link={link}
                    activeSection={currentSection}
                    setActiveSection={handleSectionChange}
                  />
                ))}
              </nav>
            </aside>

            <div ref={contentRef} className="scroll-mt-24">{content}</div>
          </div>
        ) : (
          <>
            <div className="flex flex-wrap gap-1 sm:gap-4 border-b border-[#213153]/15 mb-4 md:mb-8">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveSection(tab.id)}
                    className={`flex items-center gap-1 px-2 sm:px-5 py-2 sm:py-3 text-sm sm:text-base font-medium transition ${
                      currentSection === tab.id
                        ? "text-[#9d2235] border-b-2 border-[#9d2235]"
                        : "text-[#213153]/70 hover:text-[#213153]"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
            {content}
          </>
        )}
      </div>
    </div>
  );
}

function SidebarButton({ link, activeSection, setActiveSection }) {
  const Icon = link.icon;
  const isActive = activeSection === link.id;

  return (
    <button
      type="button"
      onClick={() => setActiveSection(link.id)}
      className={`flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-semibold transition ${
        isActive
          ? "bg-[#9d2235] text-white shadow-sm"
          : "text-[#213153] hover:bg-[#213153]/5"
      }`}
    >
      <span className="flex items-center gap-3">
        <Icon className="h-4 w-4" />
        {link.label}
      </span>
      <ChevronRight className={`h-4 w-4 transition ${isActive ? "translate-x-0.5" : ""}`} />
    </button>
  );
}

function ArtsSection({ id, activeSection }) {
  const isMa = id === "ma";
  const selectedProgram =
    maPrograms.find((program) => program.id === activeSection) || maPrograms[0];

  if (activeSection === "about") {
    return (
      <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_170px]">
        <div className="text-[#213153]/75 leading-relaxed text-sm sm:text-base">
          <h2 className="text-xl md:text-2xl font-bold text-[#213153] mb-4">
            {isMa ? "Master of Arts in Psychology (MA)" : "Bachelor of Arts in Psychology (BA Psychology)"}
          </h2>

          {isMa ? (
            <>
              <p className="mb-4">
                The Master of Arts in Psychology (MA Psychology) is a two-year postgraduate program designed to provide advanced knowledge of human behavior, mental processes, emotional well-being, and psychological assessment.
              </p>
              <p className="mb-4">
                The program focuses on developing analytical, counselling, therapeutic, and research skills required in mental health, education, healthcare, and organizational development.
              </p>
              <p className="mb-4">
                MA Psychology combines theoretical learning with practical exposure through case studies, counselling practice, psychological assessments, internships, workshops, and research projects.
              </p>
              <p className="mb-4">
                Students can choose specialized programs such as MA Psychology Clinical and MA Psychology Counselling based on their career interests and professional goals.
              </p>
              <p>
                With growing awareness of mental health and emotional well-being, MA Psychology offers strong career opportunities in both private and public sectors.
              </p>
            </>
          ) : (
            <>
              <p className="mb-4">
                The BA Psychology program is a three-year undergraduate course designed to provide a deep understanding of human behavior, mental processes, and emotional functioning.
              </p>
              <p className="mb-4">
                The curriculum covers cognitive psychology, developmental psychology, abnormal psychology, social psychology, and psychological assessment.
              </p>
              <p className="mb-4">
                The program blends theoretical knowledge with practical experience through lab work, experiments, fieldwork, research projects, and internships.
              </p>
              <p>
                Students learn to observe, analyze, and interpret human behavior, preparing them for roles in counselling, education, mental health, and human resource development.
              </p>
            </>
          )}
        </div>

      </section>
    );
  }

  if (isMa && (activeSection === "clinical" || activeSection === "counselling")) {
    return (
      <section>
        <h2 className="text-2xl font-bold text-[#213153] mb-5">
          {selectedProgram.title.replace(/^\d+\.\s*/, "")}
        </h2>
        <ProgramCard
          tone={selectedProgram.tone}
          title={selectedProgram.title}
          description={selectedProgram.description}
          highlights={selectedProgram.highlights}
          careers={selectedProgram.careers}
        />
      </section>
    );
  }

  if (activeSection === "faculty") {
    return (
      <section>
        <h2 className="text-2xl font-bold text-[#213153] mb-5">Faculty</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {artsFaculty.map((staff) => (
            <FacultyCard key={staff.id} staff={staff} />
          ))}
        </div>
      </section>
    );
  }

  if (activeSection === "details") {
    return (
      <section>
        <h2 className="text-2xl font-bold text-[#213153] mb-5">Course Details</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <InfoBox title="Duration" value="3 Years" />
          <InfoBox title="Eligibility" value="10+2 (Class 12) from any recognized board" />
          <InfoBox title="Stream" value="Open to students from Commerce, Science, and Arts" />
          <InfoBox title="Admission Process" value="Through GCAS" />
          <InfoBox title="Type" value="Undergraduate Degree in Arts and Behavioral Sciences" wide />
        </div>
      </section>
    );
  }

  if (activeSection === "why") {
    const items = isMa
      ? [
          "Growing demand for mental health professionals",
          "Specialized learning in Clinical and Counselling Psychology",
          "Practical exposure through internships, case studies, and counselling sessions",
          "Strong career opportunities in healthcare, education, NGOs, and corporate sectors",
          "Excellent foundation for research, higher studies, and professional certifications",
        ]
      : [
          "Understanding human behavior and supporting mental well-being",
          "Useful in counselling, HR, teaching, social work, mental health, and public policy",
          "Ideal for careers in mental health services, education, corporate HR, research, and community development",
          "Strong foundation for MA Psychology, Clinical Psychology, Counselling, Social Work, or foreign education",
        ];

    return <ListSection title={isMa ? "Why Choose MA Psychology?" : "Why Choose BA Psychology?"} items={items} />;
  }

  if (activeSection === "after") {
    const items = isMa
      ? [
          "M.Phil. in Clinical Psychology",
          "PhD in Psychology",
          "Research and academic careers",
          "Mental health and counselling services",
          "Rehabilitation and community wellness programs",
          "Corporate HR and wellness roles",
          "Professional certifications in therapy and counselling",
        ]
      : [
          "MA or M.Sc. in Psychology",
          "Postgraduate diplomas in Guidance and Counselling or Mental Health",
          "Competitive exams such as NET, UPSC, Civil Services, and State PSC",
          "Research and doctoral studies",
          "Study abroad in Psychology, Counselling, or related fields",
          "Professional certifications such as CBT, NLP, or Psychometric Testing",
        ];

    return <ListSection title={isMa ? "What After MA Psychology?" : "What After BA Psychology?"} items={items} />;
  }

  if (activeSection === "jobs") {
    const items = isMa
      ? [
          "Counsellor",
          "Clinical Psychology Assistant",
          "School Counsellor",
          "Mental Health Support Professional",
          "Behaviour Therapist",
          "Career Counsellor",
          "Research Associate",
          "Corporate Wellness Executive",
        ]
      : [
          "Mental Health Counselor or Clinical Assistant",
          "School Counselor or Career Guidance Expert",
          "Human Resource Executive",
          "Behavioral Therapist or Rehabilitation Worker",
          "Research Assistant or Project Associate",
          "Social Worker or NGO Professional",
          "Child Development Specialist",
          "Corporate Trainer or Wellness Coach",
        ];

    return <ListSection title="Job Scope" items={items} columns />;
  }

  return null;
}

function FacultyCard({ staff }) {
  return (
    <article className="rounded-lg border border-[#213153]/15 bg-gray-50 p-3 shadow-sm">
      <div className="aspect-3/4 overflow-hidden rounded-lg bg-[#213153]/5">
        <img
          src={staff.image}
          alt={staff.name}
          loading="lazy"
          className="h-full w-full object-cover object-top"
        />
      </div>

      <div className="pt-3">
        <h3 className="text-sm font-bold leading-snug text-[#9d2235]">
          {staff.name}
        </h3>
        <p className="mt-1 text-xs text-[#213153]/65">{staff.designation}</p>
      </div>
    </article>
  );
}

function ProgramCard({ title, description, highlights, careers, tone }) {
  const toneClass =
    tone === "green"
      ? "bg-green-50/70 border-green-200"
      : "bg-blue-50/70 border-blue-200";

  return (
    <div className={`rounded-lg border p-4 md:p-5 ${toneClass}`}>
      <h3 className="text-lg font-bold text-[#9d2235] mb-3">{title}</h3>
      <p className="text-sm text-[#213153]/75 mb-4">{description}</p>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <p className="font-bold text-[#213153] mb-2">Details:</p>
          <ul className="space-y-1 text-sm text-[#213153]/75">
            <li><span className="font-semibold text-[#9d2235]">Duration:</span> 2 Years (4 Semesters)</li>
            <li><span className="font-semibold text-[#9d2235]">Eligibility:</span> BA Psychology / Equivalent Degree</li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-[#213153] mb-2">Curriculum Highlights:</p>
          <ul className="list-disc pl-5 text-sm text-[#213153]/75 space-y-1">
            {highlights.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </div>

      <div className="mt-5">
        <p className="font-bold text-[#213153] mb-2">Career Opportunities:</p>
        <ul className="list-disc pl-5 grid gap-x-6 gap-y-1 text-sm text-[#213153]/75 md:grid-cols-2">
          {careers.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}

function InfoBox({ title, value, wide }) {
  return (
    <div className={`rounded-lg bg-gray-50 p-4 ${wide ? "md:col-span-2" : ""}`}>
      <h3 className="font-bold text-[#9d2235] mb-2">{title}</h3>
      <p className="text-[#213153]/75">{value}</p>
    </div>
  );
}

function ListSection({ title, items, columns }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-[#213153] mb-5">{title}</h2>
      <ul className={`list-disc pl-6 text-[#213153]/75 space-y-2 ${columns ? "md:grid md:grid-cols-2 md:gap-x-8 md:space-y-0" : ""}`}>
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </section>
  );
}

function Syllabus({ course, navigate }) {
  if (course.modules) {
    return (
      <div className="space-y-4">
        {course.modules.map((module, i) => (
          <details key={i} className="rounded-lg bg-gray-50 p-3 md:p-4">
            <summary className="cursor-pointer font-semibold text-[#213153] text-base md:text-lg">
              {module.name}
            </summary>

            <div className="mt-3 space-y-3">
              {module.semesters.map((sem, j) => (
                <details key={j} className="ml-2 border-l border-[#213153]/15 pl-3 md:ml-4 md:pl-4">
                  <summary className="cursor-pointer text-[#9d2235] font-medium text-sm md:text-base">
                    {sem.sem}
                  </summary>

                  <SubjectList subjects={sem.subjects} navigate={navigate} />
                </details>
              ))}
            </div>
          </details>
        ))}
      </div>
    );
  }

  if (course.semesters) {
    return (
      <div className="space-y-4">
        {course.semesters.map((sem, i) => (
          <details key={i} className="rounded-lg bg-gray-50 p-3 md:p-4">
            <summary className="cursor-pointer font-semibold text-[#9d2235] text-sm md:text-base">
              {sem.sem}
            </summary>
            <SubjectList subjects={sem.subjects} navigate={navigate} />
          </details>
        ))}
      </div>
    );
  }

  return <p className="text-gray-500">No syllabus available.</p>;
}

function SubjectList({ subjects, navigate }) {
  return (
    <ul className="mt-3 space-y-2 text-sm">
      {subjects.map((sub, k) => (
        <li
          key={k}
          className="flex flex-col gap-2 rounded-md bg-white p-3 text-[#213153]/80 sm:flex-row sm:items-center sm:justify-between"
        >
          <span>{sub.name}</span>
          <button
            type="button"
            onClick={() => navigate(`/pdf-viewer?file=${encodeURIComponent(sub.pdf)}`)}
            className="self-start text-sm font-semibold text-[#9d2235] hover:underline sm:self-auto"
          >
            View PDF
          </button>
        </li>
      ))}
    </ul>
  );
}
