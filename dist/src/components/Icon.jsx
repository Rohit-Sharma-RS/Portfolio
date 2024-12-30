var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { lazy, Suspense } from 'react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';
var fallback = <div style={{ background: '#ddd', width: 24, height: 24 }}/>;
var Icon = function (_a) {
    var name = _a.name, props = __rest(_a, ["name"]);
    var LucideIcon = lazy(dynamicIconImports[name]);
    return (<Suspense fallback={fallback}>
      <LucideIcon {...props}/>
    </Suspense>);
};
export default Icon;
