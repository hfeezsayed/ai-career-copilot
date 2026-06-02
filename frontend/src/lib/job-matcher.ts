const API_BASE_URL =
  `${process.env.NEXT_PUBLIC_API_URL}/api`;

export async function analyzeJobMatch(
  resumeFile: File,
  jobDescription: string
) {
  const formData = new FormData();

  formData.append("resume", resumeFile);

  formData.append(
    "job_description",
    jobDescription
  );

  const response = await fetch(
    `${API_BASE_URL}/job-match`,
    {
      method: "POST",
      body: formData,
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    console.error("BACKEND ERROR:", errorText);
    throw new Error(errorText);
  }

  return response.json();
}