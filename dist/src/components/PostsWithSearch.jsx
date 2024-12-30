"use client";
import { Delete } from "lucide-react";
import { useState } from "react";
import Posts from "./Posts";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
export default function PostsWithSearch(_a) {
    var posts = _a.posts;
    var _b = useState(""), query = _b[0], setQuery = _b[1];
    var filtered = posts.filter(function (post) { var _a; return (_a = post.title) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(query.toLowerCase()); });
    var resetFilter = function () { return setQuery(""); };
    return (<div className="flex flex-col gap-12">
      <div className="flex items-center gap-3">
        <Input type="text" placeholder="Search something..." value={query} onChange={function (e) { return setQuery(e.target.value); }}/>
        <Button size="sm" variant="secondary" onClick={resetFilter} disabled={query.length === 0}>
          Clear
          <Delete className="ml-2 size-4"/>
        </Button>
      </div>

      <Posts posts={filtered}/>
    </div>);
}
