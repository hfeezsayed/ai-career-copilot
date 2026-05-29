type KeywordTableProps = {
  matchedKeywords: string[];

  missingKeywords: string[];
};

export default function KeywordTable({
  matchedKeywords,
  missingKeywords,
}: KeywordTableProps) {
  const rows = [
    ...matchedKeywords.map((keyword) => ({
      keyword,
      status: "Matched",
    })),

    ...missingKeywords.map((keyword) => ({
      keyword,
      status: "Missing",
    })),
  ];

  return (
    <div
      className="
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        shadow-[0_0_40px_rgba(168,85,247,0.08)]
        backdrop-blur-xl
      "
    >
      <div
        className="
          flex
          items-center
          justify-between
          border-b
          border-white/10
          p-4
          sm:p-6
        "
      >
        <h2 className="text-lg font-semibold text-white sm:text-xl">
          Resume vs JD Keywords
        </h2>

        <div
          className="
            rounded-full
            bg-violet-500/10
            px-3
            py-1
            text-xs
            font-semibold
            text-violet-400
          "
        >
          {rows.length} Keywords
        </div>
      </div>

      <div
        className="
          max-h-[600px]
          overflow-y-auto
          overflow-x-auto
        "
      >
        <table className="w-full min-w-[500px]">
          <thead className="sticky top-0 bg-[#0B0B0F]">
            <tr className="border-b border-white/10">
              <th
                className="
                  px-4
                  py-4
                  text-left
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-zinc-400
                  sm:text-sm
                "
              >
                Keyword
              </th>

              <th
                className="
                  px-4
                  py-4
                  text-left
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-zinc-400
                  sm:text-sm
                "
              >
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {rows.length > 0 ? (
              rows.map((row, index) => (
                <tr
                  key={`${row.keyword}-${index}`}
                  className="
                    border-b
                    border-white/5
                    transition-all
                    duration-200
                    hover:bg-white/5
                  "
                >
                  <td
                    className="
                      break-words
                      px-4
                      py-4
                      text-sm
                      text-white
                      sm:text-base
                    "
                  >
                    {row.keyword}
                  </td>

                  <td className="px-4 py-4">
                    <span
                      className={`
                        inline-flex
                        rounded-full
                        border
                        px-3
                        py-1
                        text-xs
                        font-semibold
                        ${
                          row.status === "Matched"
                            ? `
                              border-emerald-500/20
                              bg-emerald-500/10
                              text-emerald-400
                            `
                            : `
                              border-rose-500/20
                              bg-rose-500/10
                              text-rose-400
                            `
                        }
                      `}
                    >
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={2}
                  className="
                    px-4
                    py-10
                    text-center
                    text-zinc-400
                  "
                >
                  No keywords available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
