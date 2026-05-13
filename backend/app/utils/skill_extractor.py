TECH_SKILLS = [
    "Python",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "FastAPI",
    "Django",
    "Flask",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Docker",
    "Kubernetes",
    "AWS",
    "Azure",
    "GCP",
    "CI/CD",
    "Redis",
    "GraphQL",
    "Tailwind CSS",
    "Machine Learning",
    "Deep Learning",
    "TensorFlow",
    "PyTorch",
    "OpenAI",
    "LangChain",
]


def extract_skills(text: str):
    detected = []

    text_lower = text.lower()

    for skill in TECH_SKILLS:
        if skill.lower() in text_lower:
            detected.append(skill)

    return detected


def get_missing_skills(detected_skills):
    missing = []

    important_skills = [
        "Docker",
        "Kubernetes",
        "AWS",
        "CI/CD",
        "Redis",
        "GraphQL",
    ]

    for skill in important_skills:
        if skill not in detected_skills:
            missing.append(skill)

    return missing