import { Fragment, type ReactNode } from "react";

/**
 * Renders a translated string with lightweight inline markup:
 *   **bold**  -> <strong> (semibold)
 *   *accent*  -> <em> in the accent colour
 * Keeps translation strings readable while preserving emphasis.
 */
export function Rich({ text }: { text: string }): ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).filter(Boolean);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className="font-semibold">
              {part.slice(2, -2)}
            </strong>
          );
        }
        if (part.startsWith("*") && part.endsWith("*")) {
          return (
            <em key={i} className="not-italic" style={{ color: "#e8623f" }}>
              {part.slice(1, -1)}
            </em>
          );
        }
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}
