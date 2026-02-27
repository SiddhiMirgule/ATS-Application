import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import {resumes} from "../../constants";
import {resume} from "react-dom/server";
import {callbackify} from "node:util";
import ResumeCard from "~/components/ResumeCard";
//import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ATS Application" },
    { name: "description", content: "Smart Feedback for your Dream Job! " },
  ];
}

export default function Home() {
  return <main className= "bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar/>
<section className="mainsection">
  <div className="page-heading">
    <h1>Track Your Application & Resume Ratings</h1>
    <h2>Review your submissions and check AI-powered feedback </h2>

  </div>

</section>
    {resumes.length > 0 && (
        <div className="resumes-section">

    {resumes.map((resume) =>(
        <ResumeCard key={resume.id} resume={resume}/>
    ))}
        </div>
    )}
  </main>
}
