'use client';
import { saveJobAction } from "@/app/actions/jobActions";
import ImageUpload from "@/app/components/ImageUpload";
import type { Job } from "@/models/Job";
import { faEnvelope, faMobile, faPerson, faPhone, faStar, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, RadioGroup, TextArea, TextField, Theme } from "@radix-ui/themes";
import { redirect } from "next/navigation";
import { useState } from "react";
import "react-country-state-city/dist/react-country-state-city.css";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
} from "react-country-state-city";

export default function JobForm({ orgId, jobDoc }: { orgId: string; jobDoc?: Job }) {
  const [countryId, setCountryId] = useState(jobDoc?.countryId || 0);
  const [stateId, setStateId] = useState(jobDoc?.stateId || 0);
  const [cityId, setCityId] = useState(jobDoc?.cityId || 0);
  const [countryName, setCountryName] = useState(jobDoc?.country || '');
  const [stateName, setStateName] = useState(jobDoc?.state || '');
  const [cityName, setCityName] = useState(jobDoc?.city || '');

  async function handleSaveJob(data: FormData) {
    data.set('country', countryName.toString());
    data.set('state', stateName.toString());
    data.set('city', cityName.toString());
    data.set('countryId', countryId.toString());
    data.set('stateId', stateId.toString());
    data.set('cityId', cityId.toString());
    data.set('orgId', orgId);
    const jobDoc = await saveJobAction(data);
    redirect(`/jobs/${jobDoc.orgId}`);
  }

  return (
    <Theme>
      <form
        action={handleSaveJob}
        className="container mt-6 flex flex-col gap-4 text-gray-500"
      >
        {jobDoc && (
          <input type="hidden" name="id" value={jobDoc?._id} className="text-gray-500" />
        )}
        <TextField.Root name="title" placeholder="Job title" className="text-gray-500" defaultValue={jobDoc?.title || ''} />
        <div className="grid sm:grid-cols-3 gap-6 *:grow">
          <div>
            Remote?
            <RadioGroup.Root defaultValue={jobDoc?.remote || 'hybrid'} name="remote">
              <label className="flex items-center gap-2">
                <RadioGroup.Item value="onsite" className="radio-item" />
                On-site
              </label>
              <label className="flex items-center gap-2">
                <RadioGroup.Item value="hybrid" className="radio-item" />
                Hybrid-remote
              </label>
              <label className="flex items-center gap-2">
                <RadioGroup.Item value="remote" className="radio-item" />
                Fully remote
              </label>
            </RadioGroup.Root>
          </div>
          <div>
            Full time?
            <RadioGroup.Root defaultValue={jobDoc?.type || 'full'} name="type">
              <label className="flex items-center gap-2">
                <RadioGroup.Item value="project" className="radio-item" />
                Project
              </label>
              <label className="flex items-center gap-2">
                <RadioGroup.Item value="part" className="radio-item" />
                Part-time
              </label>
              <label className="flex items-center gap-2">
                <RadioGroup.Item value="full" className="radio-item" />
                Full-time
              </label>
            </RadioGroup.Root>
          </div>
          <div>
            Salary
            <TextField.Root name="salary" defaultValue={jobDoc?.salary || ''}>
              <TextField.Slot>
                $
              </TextField.Slot>
              <TextField.Slot>
                k/year
              </TextField.Slot>
            </TextField.Root>
          </div>
        </div>
        <div>
          Location
          <div className="flex flex-col sm:flex-row gap-4 *:grow">
            <CountrySelect
              defaultValue={countryId ? { id: countryId, name: countryName } : 0}
              onChange={(e: any) => {
                setCountryId(e.id);
                setCountryName(e.name);
              }}
              placeHolder="Select Country"
              className="text-gray-500"
            />
            <StateSelect
              defaultValue={stateId ? { id: stateId, name: stateName } : 0}
              countryid={countryId}
              onChange={(e: any) => {
                setStateId(e.id);
                setStateName(e.name);
              }}
              placeHolder="Select State"
              className="text-gray-500"
            />
            <CitySelect
              defaultValue={cityId ? { id: cityId, name: cityName } : 0}
              countryid={countryId}
              stateid={stateId}
              onChange={(e: any) => {
                setCityId(e.id);
                setCityName(e.name);
              }}
              placeHolder="Select City"
              className="text-gray-500"
            />
          </div>
        </div>
        <div className="sm:flex">
          {/* <div className="w-1/3">
            <h3>Job icon</h3>
            {/* <ImageUpload name="jobIcon" icon={faStar} defaultValue={jobDoc?.jobIcon || ''} /> */}
          {/* </div>  */}
          <div className="grow">
            <h3>Contact person</h3>
            <div className="flex gap-2">
              {/* <div className="">
                <ImageUpload name="contactPhoto" icon={faUser} defaultValue={jobDoc?.contactPhoto || ''} />
              </div> */}
              <div className="grow flex flex-col gap-3 ">
                <TextField.Root
                  placeholder="John Doe"
                  name="contactName"
                  defaultValue={jobDoc?.contactName || ''}
                  className="text-gray-500 rounded-md ">
                  <TextField.Slot>
                    {/* <FontAwesomeIcon icon={faUser} /> */}
                  </TextField.Slot>
                </TextField.Root>
                <TextField.Root
                  placeholder="Phone"
                  type="tel"
                  name="contactPhone"
                  defaultValue={jobDoc?.contactPhone || ''}
                  className="text-gray-500 rounded-md">
                  <TextField.Slot>
                    {/* <FontAwesomeIcon icon={faPhone} /> */}
                  </TextField.Slot>
                </TextField.Root>
                <TextField.Root
                  placeholder="Email"
                  type="email"
                  name="contactEmail"
                  defaultValue={jobDoc?.contactEmail || ''}
                  className="text-gray-500 rounded-md">
                  <TextField.Slot>
                    {/* <FontAwesomeIcon icon={faEnvelope} /> */}
                  </TextField.Slot>
                </TextField.Root>
              </div>
            </div>
          </div>
        </div>
        <TextArea
          defaultValue={jobDoc?.description || ''}
          placeholder="Job description"
          resize="vertical"
          name="description"
          className="text-gray-500 "
        />
        <div className="flex justify-center">
          <Button size="4">
            <span className="px-12 bg-amber-600 py-2 rounded-md shadow-md shadow-slate-100 text-white">Save</span>
          </Button>
        </div>
      </form>
    </Theme>
  );
}
