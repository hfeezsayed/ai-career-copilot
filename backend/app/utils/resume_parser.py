import fitz
from docx import Document


def extract_text_from_pdf(file_bytes: bytes) -> str:
    text = ""

    pdf = fitz.open(stream=file_bytes, filetype="pdf")

    for page in pdf:
        text += page.get_text()

    return text


def extract_text_from_docx(file_bytes: bytes) -> str:
    text = ""

    with open("temp.docx", "wb") as f:
        f.write(file_bytes)

    doc = Document("temp.docx")

    for para in doc.paragraphs:
        text += para.text + "\n"

    return text