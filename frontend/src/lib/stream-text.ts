export async function streamText(
  text: string,
  onChunk: (chunk: string) => void
) {
  const words = text.split(" ");

  let currentText = "";

  for (let i = 0; i < words.length; i++) {
    currentText += words[i] + " ";

    onChunk(currentText);

    await new Promise((resolve) =>
      setTimeout(resolve, 40)
    );
  }
}