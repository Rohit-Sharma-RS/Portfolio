"use client";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { Button } from "./ui/Button";
import React from "react";
export default function Counter() {
    var _a = useState(0), count = _a[0], setCount = _a[1];
    var increment = function () { return setCount(count + 1); };
    var decrement = function () { return setCount(count - 1); };
    return (<div className="flex items-center gap-3">
      <Button size="icon" onClick={decrement}>
        <MinusIcon />
      </Button>
      <p>Counter: {count}</p>
      <Button size="icon" onClick={increment}>
        <PlusIcon />
      </Button>
    </div>);
}
