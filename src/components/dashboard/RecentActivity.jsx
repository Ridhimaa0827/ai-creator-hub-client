import {
  FaCheckCircle,
} from "react-icons/fa";

const activities = [
  "Logged in successfully",
  "Created AI account",
  "Profile loaded",
  "Dashboard opened",
];

export default function RecentActivity() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

      <h2 className="mb-8 text-3xl font-bold">
        Recent Activity
      </h2>

      <div className="space-y-5">

        {activities.map((item) => (
          <div
            key={item}
            className="flex items-center gap-4"
          >
            <FaCheckCircle className="text-green-400" />

            <span className="text-slate-300">
              {item}
            </span>
          </div>
        ))}

      </div>

    </div>
  );
}