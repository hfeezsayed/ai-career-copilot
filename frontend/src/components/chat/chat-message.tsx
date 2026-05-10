import ReactMarkdown from "react-markdown";

type Props = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatMessage({ role, content }: Props) {
  const isUser = role === "user";

  return (
    <div className={`flex w-full ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`
          w-full
          rounded-3xl
          px-6
          py-5
          text-sm

          ${
            isUser
              ? "max-w-fit bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white"
              : "border border-zinc-800 bg-zinc-900 text-zinc-100"
          }
        `}
      >
        {isUser ? (
          <p className="leading-7">{content}</p>
        ) : (
          <div
            className="
              prose
              prose-invert
              max-w-none
              prose-headings:mb-5
              prose-headings:mt-8
              prose-headings:font-semibold
              prose-headings:text-white
              prose-p:my-5
              prose-p:leading-8
              prose-p:text-zinc-300
              prose-ul:my-6
              prose-ul:space-y-3
              prose-li:text-zinc-300
              prose-li:marker:text-violet-400
              prose-hr:my-8
              prose-hr:border-white/10
              prose-strong:text-white
            "
          >
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h1 className="mb-6 mt-8 text-3xl font-bold text-white">
                    {children}
                  </h1>
                ),

                h2: ({ children }) => (
                  <h2 className="mb-5 mt-8 text-2xl font-semibold text-white">
                    {children}
                  </h2>
                ),

                h3: ({ children }) => (
                  <h3 className="mb-4 mt-7 text-xl font-semibold text-white">
                    {children}
                  </h3>
                ),

                p: ({ children }) => (
                  <p className="my-5 leading-8 text-zinc-300">{children}</p>
                ),

                ul: ({ children }) => (
                  <ul className="my-5 list-disc space-y-3 pl-6 text-zinc-300">
                    {children}
                  </ul>
                ),

                li: ({ children }) => <li className="leading-8">{children}</li>,

                hr: () => <hr className="my-8 border-white/10" />,
              }}
            >
              {content}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}
