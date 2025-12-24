import React, { useEffect, useState } from "react";

export default function CareersPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    interestField: "",
    cv: null,
  });

  /* ================= FETCH JOB OPENINGS ================= */
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(
          "http://10.27.1.208:8443/api/v1/job/open",
          {
            headers: {
              dbname: "dbfrontcms",
            },
          }
        );

        const json = await res.json();
        setJobs(json.data || []);
      } catch (err) {
        setError("Unable to load job openings");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  /* ================= FORM HANDLERS ================= */
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  /* ================= SUBMIT APPLICATION ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.cv || formData.cv.type !== "application/pdf") {
      alert("Please upload CV in PDF format only");
      return;
    }

    try {
      setSubmitting(true);

      const fd = new FormData();
      fd.append("name", formData.name);
      fd.append("email", formData.email);
      fd.append("phoneNumber", formData.phoneNumber);
      fd.append("interestField", formData.interestField);
      fd.append("job", selectedJob._id);
      fd.append("cv", formData.cv);

      const res = await fetch(
        "http://10.27.1.208:8443/api/v1/careers/add",
        {
          method: "POST",
          headers: {
            dbname: "dbfrontcms",
            Authorization: "Bearer YOUR_JWT_TOKEN", // replace later
          },
          body: fd,
        }
      );

      const result = await res.json();

      if (!res.ok) {
        alert(result.message || "Submission failed");
        return;
      }

      alert("Application submitted successfully 🎓");

      setSelectedJob(null);
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        interestField: "",
        cv: null,
      });
    } catch (error) {
      console.error(error);
      alert("Server error. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
  if (selectedJob) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [selectedJob]);


  return (
    <>
      {/* ================= HERO ================= */}
      <section className="mt-30 lg:mt-50 pb-6 md:pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-start md:text-center">
          <div className="flex justify-start md:justify-center items-center mb-2">
            <span className="w-10 h-0.5 bg-[#9D2235] mr-3"></span>
            <h4 className="text-sm uppercase tracking-widest text-gray-500">
              Careers
            </h4>
            <span className="w-10 h-0.5 bg-[#9D2235] ml-3"></span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Career Opportunities at SASCMA
          </h1>

          <p className="text-gray-600 max-w-3xl mx-auto">
            Join STERS Arts, Science & Commerce Management Academy and contribute
            to a culture of academic excellence and innovation.
          </p>
        </div>
      </section>

      {/* ================= JOB OPENINGS ================= */}
      <section className="bg-gray-50 py-4 md:py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
          {loading && (
            <p className="text-center text-gray-500">Loading openings...</p>
          )}

          {error && (
            <p className="text-center text-red-600">{error}</p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
            {!loading &&
              jobs.map((job) => (
                <div
                  key={job._id}
                  className="bg-white border-l-4 border-[#9D2235] shadow-md p-6 hover:shadow-lg transition"
                >
                  <h3 className="text-xl font-semibold text-[#213153] mb-2">
                    {job.title}
                  </h3>

                  <p className="text-gray-600 mb-1">
                    <strong>Location:</strong> {job.location}
                  </p>

                  <p className="text-gray-600 mb-1">
                    <strong>Experience:</strong> {job.experienceFrom} –{" "}
                    {job.experienceTo} Years
                  </p>

                  {/* <p className="text-gray-600 mb-3">
                    <strong>Salary:</strong> ₹{job.salaryFrom} – ₹
                    {job.salaryTo}
                  </p> */}

                  <p className="text-gray-700 mb-4">
                    {job.description}
                  </p>

                  <button
                    onClick={() => setSelectedJob(job)}
                    className="bg-[#213153] text-white px-6 py-2 rounded hover:bg-[#1a2742]"
                  >
                    Apply Now
                  </button>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* ================= APPLY MODAL ================= */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-2">
          <div className="bg-white w-full max-w-xl p-8 relative  rounded-lg">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-4 right-4 text-gray-500"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-[#213153] mb-2">
              Application Form
            </h2>

            <p className="text-gray-600 mb-6">
              Applying for{" "}
              <span className="font-semibold text-[#9D2235]">
                {selectedJob.title}
              </span>
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="w-full border px-4 py-2 "
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full border px-4 py-2"
                onChange={handleChange}
              />

              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                required
                className="w-full border px-4 py-2"
                onChange={handleChange}
              />

              <input
                type="text"
                name="interestField"
                placeholder="Interest Field (Teaching / Admin / IT)"
                required
                className="w-full border px-4 py-2"
                onChange={handleChange}
              />

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-[#213153]">
                  Upload CV (PDF only)
                </label>
                <input
                  type="file"
                  name="cv"
                  accept=".pdf,application/pdf"
                  required
                  onChange={handleChange}
                  className="
                    block
                    w-full
                    text-sm
                    text-gray-700
                    file:mr-4
                    file:py-2
                    file:px-4
                    file:border-0
                    file:text-sm
                    file:font-semibold
                    file:bg-[#213153]
                    file:text-white
                    hover:file:bg-[#213153]
                    cursor-pointer
                  "
                />
                <p className="text-xs text-gray-500">
                  PDF format only.  
                </p>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#9D2235] text-white py-2 hover:bg-[#7f1c2b] disabled:opacity-60"
              >
                {submitting ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
