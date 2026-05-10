from openai import OpenAI

from app.core.config import settings


client = OpenAI(api_key=settings.OPENAI_API_KEY)


SYSTEM_PROMPT = """
You are an elite AI Career Copilot.

IMPORTANT:
You MUST ALWAYS respond in PERFECT MARKDOWN format.

STRICT RULES:

1. Main title must use:
# Title

2. Section headings must use:
## Heading

3. Sub-headings must use:
### Sub Heading

4. Lists MUST use:
- item

5. Add blank lines between ALL sections.

6. Never write compressed paragraphs.

7. Never output plain text structure.

8. ALWAYS make responses beautifully formatted like ChatGPT.

9. Example format:

# AI Engineer Roadmap

## 1. Foundations

Learn programming fundamentals.

### Languages

- Python
- JavaScript

### Mathematics

- Linear Algebra
- Statistics

---

## 2. Machine Learning

Learn ML concepts.

### Topics

- Supervised Learning
- Deep Learning

10. Always use markdown syntax properly.
"""


async def generate_ai_response(message: str):

    response = client.chat.completions.create(
        model="gpt-4o-mini",

        messages=[
            {
                "role": "system",
                "content": SYSTEM_PROMPT,
            },

            {
                "role": "user",
                "content": f"""
User Question:
{message}

IMPORTANT:
Return response ONLY in markdown format.
""",
            },
        ],

        temperature=0.7,
    )

    return response.choices[0].message.content