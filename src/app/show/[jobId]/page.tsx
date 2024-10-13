import {JobModel} from "@/models/Job";
import mongoose from "mongoose";
import Image from "next/image";

type PageProps = {
  params: {
    jobId: string;
  };
};

export default async function SingleJobPage(props:PageProps) {
  const jobId = props.params.jobId;
  await mongoose.connect(process.env.MONGO_URI as string);
  const jobDoc = await JobModel.findById(jobId);
  return (
    <div className="container mt-8 my-6">
      <div className="sm:flex">
        <div className="grow">
          <h1 className="text-4xl mb-2 text-white">{jobDoc.title}</h1>
          <div className="capitalize text-sm text-amber-600 mb-4">
            {jobDoc.remote}
            {' '}&middot;{' '}
            {jobDoc.city}, {jobDoc.country}
            {' '}&middot;{' '}
            {jobDoc.type}-time
          </div>
        </div>
        <div className="w-16 h-16">
          <img
            src="https://img.freepik.com/premium-photo/poster-company-company-with-word-company-it_1115474-114758.jpg" alt={'job icon'}
            width={500} height={500}
            className="w-auto h-auto max-w-16 max-h-16"
          />
        </div>
      </div>
      <div className="whitespace-pre-line text-sm text-gray-200">
        {jobDoc.description}
      </div>
      <div className="mt-4 bg-amber-500 p-8 rounded-lg text-white">
        <h3 className="font-bold mb-2">Apply by contacting us</h3>
        <div className="flex gap-4">
          {/* <Image
            src={jobDoc.contactPhoto}
            alt={'contact person'}
            width={500} height={500}
            className="w-auto h-auto max-w-24 max-h-24"
          /> */}
          <div className="flex content-center items-center">
            {jobDoc.contactName}<br />
            Email: {jobDoc.contactEmail}<br />
            Phone: {jobDoc.contactPhone}
          </div>
        </div>
      </div>
    </div>
  );
}