import re

from collections import Counter

SKILL_SYNONYMS = {
    "react.js": "react",
    "reactjs": "react",
    "next.js": "nextjs",
    "nextjs": "nextjs",
    "node.js": "nodejs",
    "nodejs": "nodejs",
    "express.js": "express",
    "expressjs": "express",
    "mongodb": "mongo",
    "mongo": "mongo",
    "restful": "api",
    "rest": "api",
    "apis": "api",
    "artificialintelligence": "ai",
    "machinelearning": "ml",
    "tailwindcss": "tailwind",
    "typescript": "ts",
    "javascript": "js",
}


COMMON_STOPWORDS = {
    "and",
    "or",
    "the",
    "a",
    "an",
    "with",
    "for",
    "to",
    "of",
    "in",
    "on",
    "at",
    "is",
    "are",
    "be",
    "by",
    "this",
    "that",
    "from",
    "as",
    "your",
    "our",
    "their",
    "you",
    "we",
    "they",
    "will",
    "can",
    "have",
    "has",
    "had",
    "about",
    "into",
    "using",
    "use",
    "used",
    "join",
    "team",
    "work",
    "working",
    "role",
    "job",
    "experience",
    "skills",
    "requirements",
    "preferred",
    "including",
    "services",
    "build",
    "develop",
}


def clean_text(text: str):
    text = text.lower()

    text = re.sub(
        r"[^a-zA-Z0-9+#.\s]",
        " ",
        text,
    )

    tokens = text.split()

    normalized_tokens = []

    for token in tokens:
        token = SKILL_SYNONYMS.get(
            token,
            token,
        )

        normalized_tokens.append(token)

    tokens = normalized_tokens

    tokens = [
        token.strip()
        for token in tokens
        if token not in COMMON_STOPWORDS and len(token) > 1
    ]

    return tokens


def extract_keywords(text: str):
    tokens = clean_text(text)

    frequency = Counter(tokens)

    keywords = sorted(
        frequency,
        key=frequency.get,
        reverse=True,
    )[:25]

    return keywords


def compare_resume_jd(
    resume_text: str,
    jd_text: str,
):
    resume_keywords = set(extract_keywords(resume_text))

    jd_keywords = set(extract_keywords(jd_text))

    matching_skills = sorted(list(resume_keywords.intersection(jd_keywords)))

    missing_skills = sorted(list(jd_keywords - resume_keywords))

    if len(jd_keywords) == 0:
        match_percentage = 0
    else:
        match_percentage = int((len(matching_skills) / len(jd_keywords)) * 100)

    return {
        "match_percentage": match_percentage,
        "matching_skills": matching_skills,
        "missing_skills": missing_skills,
        "resume_keywords": list(resume_keywords),
        "jd_keywords": list(jd_keywords),
    }
