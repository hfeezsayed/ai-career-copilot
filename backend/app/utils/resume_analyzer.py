import re


def extract_candidate_name(text: str):
    lines = text.split("\n")

    invalid_words = [
        "summary",
        "profile",
        "resume",
        "developer",
        "engineer",
        "experience",
        "education",
        "skills",
        "projects",
        "frontend",
        "backend",
        "react",
        "javascript",
        "typescript",
        "contact",
        "email",
        "phone",
    ]

    possible_names = []

    for line in lines[:20]:
        cleaned = line.strip()

        if not cleaned:
            continue

        lower = cleaned.lower()

        # Ignore invalid words
        if any(word in lower for word in invalid_words):
            continue

        # Ignore emails
        if "@" in cleaned:
            continue

        # Ignore numbers
        if any(char.isdigit() for char in cleaned):
            continue

        # Ignore long lines
        if len(cleaned) > 25:
            continue

        words = cleaned.split()

        # Prefer 2-4 word names
        if 2 <= len(words) <= 4:
            possible_names.append(cleaned)

    # Prefer uppercase names first
    for name in possible_names:
        if name.isupper():
            return name.title()

    # Otherwise return first possible
    if possible_names:
        return possible_names[0].title()

    return "Candidate"


def extract_candidate_role(text: str):
    role_keywords = [
        "senior frontend developer",
        "frontend developer",
        "backend developer",
        "full stack developer",
        "software engineer",
        "ai engineer",
        "ml engineer",
        "data scientist",
        "react developer",
        "python developer",
        "ui ux developer",
    ]

    lower_text = text.lower()

    for role in role_keywords:
        if role in lower_text:
            return role.title()

    return "Professional"


def extract_email(text: str):
    email_pattern = r"[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+"

    match = re.search(email_pattern, text)

    if match:
        return match.group()

    return "Not Found"


def extract_education(text: str):
    education_keywords = [
        "bachelor",
        "master",
        "bca",
        "mca",
        "b.tech",
        "m.tech",
        "computer science",
        "university",
    ]

    lines = text.split("\n")

    education = []

    for line in lines:
        lower = line.lower()

        if any(keyword in lower for keyword in education_keywords):
            cleaned = line.strip()

            if cleaned not in education:
                education.append(cleaned)

    return education[:5]


def extract_experience(text: str):
    lines = text.split("\n")

    experience = []

    experience_keywords = [
        "developer",
        "engineer",
        "intern",
        "frontend",
        "backend",
        "software",
    ]

    for line in lines:
        lower = line.lower()

        if any(keyword in lower for keyword in experience_keywords):
            cleaned = line.strip()

            if len(cleaned) > 5:
                experience.append(cleaned)

    return experience[:5]
