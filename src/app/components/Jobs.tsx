
// import type {Job} from "@/models/Job";

import JobRow from "./JobRow";

export default function Jobs() {
  return (
    <div className=" py-6 ">
      <div className="container">
        <h2 className="font-bold mb-4 text-center text-2xl text-white">{'Recent jobs'}</h2>

        <div className="flex flex-col gap-4">
          {/* {!jobs?.length && (
            <div>No jobs found</div>
          )}
          {jobs && jobs.map(job => (
            <JobRow jobDoc={job} />
          ))} */}
          <JobRow/>
          <JobRow/>
          <JobRow/>
          <JobRow/>
          <JobRow/>
        </div>

      </div>
    </div>
  );
}