import Link from "next/link";
import React from "react";
export default function LinkWithIcon(_a) {
    var href = _a.href, icon = _a.icon, position = _a.position, text = _a.text;
    return (<Link href={href} className="link flex items-center gap-2 font-light">
      {position === "left" && icon}
      <span>{text}</span>
      {position === "right" && icon}
    </Link>);
}
