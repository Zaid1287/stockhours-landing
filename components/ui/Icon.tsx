/* Ultra-light line icons (1.4 stroke), drawn inline — no icon dependency. */

type IconName =
  | "bolt"
  | "broadcast"
  | "list"
  | "book"
  | "chat"
  | "target"
  | "check"
  | "arrow"
  | "plus";

const paths: Record<IconName, React.ReactNode> = {
  bolt: <path d="M13 2 4.5 13.5H11l-1 8.5 8.5-11.5H12l1-8.5Z" />,
  broadcast: (
    <>
      <circle cx="12" cy="12" r="2.4" />
      <path d="M7.5 7.5a6.4 6.4 0 0 0 0 9M16.5 7.5a6.4 6.4 0 0 1 0 9M4.6 4.6a10.4 10.4 0 0 0 0 14.8M19.4 4.6a10.4 10.4 0 0 1 0 14.8" />
    </>
  ),
  list: (
    <>
      <path d="M8.5 7h11M8.5 12h11M8.5 17h11" />
      <path d="M4.5 7h.01M4.5 12h.01M4.5 17h.01" />
    </>
  ),
  book: (
    <>
      <path d="M5 4.5h9a2.5 2.5 0 0 1 2.5 2.5v13" />
      <path d="M5 4.5v13.5A1.5 1.5 0 0 0 6.5 19.5H19" />
      <path d="M5 18a2.5 2.5 0 0 1 2.5-2.5H19" />
    </>
  ),
  chat: (
    <>
      <path d="M4.5 6.5A2.5 2.5 0 0 1 7 4h10a2.5 2.5 0 0 1 2.5 2.5v7A2.5 2.5 0 0 1 17 16H9l-4 4v-4a.5.5 0 0 1 0-.03Z" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.6" />
    </>
  ),
  check: <path d="M4.5 12.5 9.5 17.5 19.5 7" />,
  arrow: <path d="M5 12h13m0 0-5-5m5 5-5 5" />,
  plus: <path d="M12 5v14M5 12h14" />,
};

export function Icon({
  name,
  className = "",
  size = 20,
}: {
  name: IconName;
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {paths[name]}
    </svg>
  );
}
