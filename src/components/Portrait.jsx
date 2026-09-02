import { useState } from "react";
import { meta } from "../content.js";

// Shows the photo at meta.photo. If the file is missing (or fails to load),
// falls back to a coloured initials block so the layout never breaks.
export default function Portrait({ alt = "Hatem Chehade" }) {
  const [failed, setFailed] = useState(false);

  if (failed || !meta.photo) {
    return <div className="portrait-fallback">HC</div>;
  }

  return (
    <img
      src={meta.photo}
      alt={alt}
      loading="eager"
      onError={() => setFailed(true)}
    />
  );
}
