import { Link } from "react-router";
import ScoreCircle from "~/components/ScoreCircle";
// If the error persists, try importing it explicitly:
// import type { Resume } from "~/types";

const ResumeCard = ({ resume }: { resume: Resume }) => {
    // Destructure inside the component for better error safety
    const { id, companyName, jobTitle, feedback, imagePath } = resume;

    // FIX: Remove 'public' from the path.
    // Vite serves 'public/images/file.png' as '/images/file.png'
    const displayPath = imagePath.replace('public/', '/');

    return (
        <Link to={`/resume/${id}`} className="resume-card animate-in fade-in duration-1000">
            <div className="resume-card-header">
                <div className="flex flex-col gap-2">
                    <h2 className="!text-black font-bold break-words">{companyName || "Resume"}</h2>
                    <h3 className="text-lg break-words text-gray-500">{jobTitle}</h3>
                </div>
                <div className="flex-shrink-0">
                    <ScoreCircle score={feedback.overallScore} />
                </div>
            </div>

            <div className="gradient-border mt-4">
                <div className="w-full h-full overflow-hidden rounded-xl bg-gray-50">
                    <img
                        src={displayPath}
                        alt="resume thumbnail"
                        className="w-full h-[350px] object-cover object-top"
                        onError={(e) => {
                            console.error("Failed to load image at:", displayPath);
                            e.currentTarget.src = "https://placehold.co/400x600?text=Check+Path";
                        }}
                    />
                </div>
            </div>
        </Link>
    );
};

export default ResumeCard;