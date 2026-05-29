"use client";

import { useEffect, useState } from "react";

import { getLastUpdated } from "@/lib/dashboard-storage";

type RecentActivityProps = {
  activities: string[];
};

export default function RecentActivity({ activities }: RecentActivityProps) {
  const [lastUpdated, setLastUpdated] = useState("Not Available");

  useEffect(() => {
    setLastUpdated(getLastUpdated());
  }, []);

  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-[#0B0B0F]
        p-7
      "
    >
      <h2 className="text-2xl font-bold text-white">Recent Activity</h2>

      <p className="mt-2 text-zinc-400">
        Your latest AI Career Copilot actions.
      </p>

      <div className="mt-6 space-y-4">
        {activities.length > 0 ? (
          activities.map((activity, index) => (
            <div
              key={index}
              className="
          rounded-2xl
          border
          border-white/10
          bg-white/[0.02]
          p-4
          text-zinc-300
        "
            >
              {activity}
            </div>
          ))
        ) : (
          <p className="text-zinc-500">No recent activity yet.</p>
        )}
      </div>

      {/* Last Updated */}
      <div className="mt-6 border-t border-white/10 pt-4">
        <p className="text-sm text-zinc-500">Last Updated: {lastUpdated}</p>
      </div>
    </div>
  );
}
