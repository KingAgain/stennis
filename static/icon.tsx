const Icon = ({ width = "1013", height = "1014", ...props }) => (
    <svg
    width={width}
    height={height}
    viewBox="0 0 99 99"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M49.5 69.75C63.9975 69.75 75.75 57.9975 75.75 43.5C75.75 29.0025 63.9975 17.25 49.5 17.25C35.0025 17.25 23.25 29.0025 23.25 43.5C23.25 57.9975 35.0025 69.75 49.5 69.75Z"
      stroke="black"
      strokeWidth="6.125"
    />
    <path
      d="M49.5 17.25C49.3676 26.002 47.2187 32.5664 43.0535 36.9433C38.8882 41.3201 32.287 43.5093 23.25 43.5109"
      stroke="black"
      strokeWidth="6.125"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M75.7083 44.8193C67.1606 44.233 60.6293 46.06 56.1143 50.3003C51.5992 54.5406 49.3958 61.0238 49.5038 69.7499"
      stroke="black"
      strokeWidth="6.125"
      strokeLinecap="round"
    />
    <rect
      x="13"
      y="85.13"
      width="6.13"
      height="73.5"
      transform="rotate(-90 13 85.13)"
      fill="black"
    />
  </svg>
);

export default Icon;
