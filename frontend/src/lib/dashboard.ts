const API_URL = process.env.NEXT_PUBLIC_API_URL!;

export async function getDashboardData() {
  const token = localStorage.getItem("token");

  const response = await fetch(
    `${API_URL}/user/dashboard`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.json();
}


export async function updateDashboard(
  payload: {
    resume_score: number;
    job_match_score: number;
    career_goal: string;
    recent_activities: string[];
  }
) {
  const token =
    localStorage.getItem("token");

  const response = await fetch(
    `${API_URL}/user/dashboard`,
    {
      method: "POST",

      headers: {
        "Content-Type":
          "application/json",

        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify(payload),
    }
  );

  return response.json();
}