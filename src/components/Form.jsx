import React from 'react'

const Form = ({submitData, formData, setFormData}) => {
  return (
    <form onSubmit={submitData}>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="jobTitle"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Job Title
              </label>
              <div className="mt-2">
                <input
                required
                  type="text"
                  name="jobTitle"
                  id="jobTitle"
                  value={formData.jobTitle}
                  onChange={(e) =>
                    setFormData((prevFormData) => ({
                      ...prevFormData,
                      jobTitle: e.target.value,
                    }))
                  }
                  className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="jobDescription"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Job Description
              </label>
              <div className="mt-2">
                <input
                required
                  type="text"
                  name="jobDescription"
                  id="jobDescription"
                  value={formData.jobDescription}
                  onChange={(e) =>
                    setFormData((prevFormData) => ({
                      ...prevFormData,
                      jobDescription: e.target.value,
                    }))
                  }
                  className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="companyName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Company Name
              </label>
              <div className="mt-2">
                <input
                required
                  type="text"
                  name="companyName"
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) =>
                    setFormData((prevFormData) => ({
                      ...prevFormData,
                      companyName: e.target.value,
                    }))
                  }
                  className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="companyDescription"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Company Description
              </label>
              <div className="mt-2">
                <input
                required
                  type="text"
                  name="companyDescription"
                  id="companyDescription"
                  value={formData.companyDescription}
                  onChange={(e) =>
                    setFormData((prevFormData) => ({
                      ...prevFormData,
                      companyDescription: e.target.value,
                    }))
                  }
                  className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="jobtype"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Job Type
              </label>
              <div className="mt-2">
                <select
                  id="jobtype"
                  name="jobtype"
                  value={formData.jobType}
                  onChange={(e) =>
                    setFormData((prevFormData) => ({
                      ...prevFormData,
                      jobType: e.target.value,
                    }))
                  }
                  className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="Full-Time">Full Time</option>
                  <option value="Part-Time">Part Time</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="location"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Location
              </label>
              <div className="mt-2">
                <input
                required
                  type="text"
                  name="location"
                  id="location"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData((prevFormData) => ({
                      ...prevFormData,
                      location: e.target.value,
                    }))
                  }
                  className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="salary"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Salary
              </label>
              <div className="mt-2">
                <input
                required
                  type="text"
                  name="salary"
                  id="salary"
                  value={formData.salary}
                  onChange={(e) =>
                    setFormData((prevFormData) => ({
                      ...prevFormData,
                      salary: e.target.value,
                    }))
                  }
                  className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <div className="mt-2 bg-blue-700">
                <input
                  type="submit"
                  name="submit"
                  id="submit"
                  className="block w-full p-2 border-0 py-1.5 text-white font-bold shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </form>
  )
}

export default Form