"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/unist-util-is";
exports.ids = ["vendor-chunks/unist-util-is"];
exports.modules = {

/***/ "(rsc)/./node_modules/unist-util-is/lib/index.js":
/*!*************************************************!*\
  !*** ./node_modules/unist-util-is/lib/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   convert: () => (/* binding */ convert),\n/* harmony export */   is: () => (/* binding */ is)\n/* harmony export */ });\n/**\n * @typedef {import('unist').Node} Node\n * @typedef {import('unist').Parent} Parent\n */\n\n/**\n * @template Fn\n * @template Fallback\n * @typedef {Fn extends (value: any) => value is infer Thing ? Thing : Fallback} Predicate\n */\n\n/**\n * @callback Check\n *   Check that an arbitrary value is a node.\n * @param {unknown} this\n *   The given context.\n * @param {unknown} [node]\n *   Anything (typically a node).\n * @param {number | null | undefined} [index]\n *   The node’s position in its parent.\n * @param {Parent | null | undefined} [parent]\n *   The node’s parent.\n * @returns {boolean}\n *   Whether this is a node and passes a test.\n *\n * @typedef {Record<string, unknown> | Node} Props\n *   Object to check for equivalence.\n *\n *   Note: `Node` is included as it is common but is not indexable.\n *\n * @typedef {Array<Props | TestFunction | string> | Props | TestFunction | string | null | undefined} Test\n *   Check for an arbitrary node.\n *\n * @callback TestFunction\n *   Check if a node passes a test.\n * @param {unknown} this\n *   The given context.\n * @param {Node} node\n *   A node.\n * @param {number | undefined} [index]\n *   The node’s position in its parent.\n * @param {Parent | undefined} [parent]\n *   The node’s parent.\n * @returns {boolean | undefined | void}\n *   Whether this node passes the test.\n *\n *   Note: `void` is included until TS sees no return as `undefined`.\n */\n\n/**\n * Check if `node` is a `Node` and whether it passes the given test.\n *\n * @param {unknown} node\n *   Thing to check, typically `Node`.\n * @param {Test} test\n *   A check for a specific node.\n * @param {number | null | undefined} index\n *   The node’s position in its parent.\n * @param {Parent | null | undefined} parent\n *   The node’s parent.\n * @param {unknown} context\n *   Context object (`this`) to pass to `test` functions.\n * @returns {boolean}\n *   Whether `node` is a node and passes a test.\n */\nconst is =\n  // Note: overloads in JSDoc can’t yet use different `@template`s.\n  /**\n   * @type {(\n   *   (<Condition extends string>(node: unknown, test: Condition, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &\n   *   (<Condition extends Props>(node: unknown, test: Condition, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &\n   *   (<Condition extends TestFunction>(node: unknown, test: Condition, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &\n   *   ((node?: null | undefined) => false) &\n   *   ((node: unknown, test?: null | undefined, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &\n   *   ((node: unknown, test?: Test, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => boolean)\n   * )}\n   */\n  (\n    /**\n     * @param {unknown} [node]\n     * @param {Test} [test]\n     * @param {number | null | undefined} [index]\n     * @param {Parent | null | undefined} [parent]\n     * @param {unknown} [context]\n     * @returns {boolean}\n     */\n    // eslint-disable-next-line max-params\n    function (node, test, index, parent, context) {\n      const check = convert(test)\n\n      if (\n        index !== undefined &&\n        index !== null &&\n        (typeof index !== 'number' ||\n          index < 0 ||\n          index === Number.POSITIVE_INFINITY)\n      ) {\n        throw new Error('Expected positive finite index')\n      }\n\n      if (\n        parent !== undefined &&\n        parent !== null &&\n        (!is(parent) || !parent.children)\n      ) {\n        throw new Error('Expected parent node')\n      }\n\n      if (\n        (parent === undefined || parent === null) !==\n        (index === undefined || index === null)\n      ) {\n        throw new Error('Expected both parent and index')\n      }\n\n      return looksLikeANode(node)\n        ? check.call(context, node, index, parent)\n        : false\n    }\n  )\n\n/**\n * Generate an assertion from a test.\n *\n * Useful if you’re going to test many nodes, for example when creating a\n * utility where something else passes a compatible test.\n *\n * The created function is a bit faster because it expects valid input only:\n * a `node`, `index`, and `parent`.\n *\n * @param {Test} test\n *   *   when nullish, checks if `node` is a `Node`.\n *   *   when `string`, works like passing `(node) => node.type === test`.\n *   *   when `function` checks if function passed the node is true.\n *   *   when `object`, checks that all keys in test are in node, and that they have (strictly) equal values.\n *   *   when `array`, checks if any one of the subtests pass.\n * @returns {Check}\n *   An assertion.\n */\nconst convert =\n  // Note: overloads in JSDoc can’t yet use different `@template`s.\n  /**\n   * @type {(\n   *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &\n   *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &\n   *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &\n   *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &\n   *   ((test?: Test) => Check)\n   * )}\n   */\n  (\n    /**\n     * @param {Test} [test]\n     * @returns {Check}\n     */\n    function (test) {\n      if (test === null || test === undefined) {\n        return ok\n      }\n\n      if (typeof test === 'function') {\n        return castFactory(test)\n      }\n\n      if (typeof test === 'object') {\n        return Array.isArray(test) ? anyFactory(test) : propsFactory(test)\n      }\n\n      if (typeof test === 'string') {\n        return typeFactory(test)\n      }\n\n      throw new Error('Expected function, string, or object as test')\n    }\n  )\n\n/**\n * @param {Array<Props | TestFunction | string>} tests\n * @returns {Check}\n */\nfunction anyFactory(tests) {\n  /** @type {Array<Check>} */\n  const checks = []\n  let index = -1\n\n  while (++index < tests.length) {\n    checks[index] = convert(tests[index])\n  }\n\n  return castFactory(any)\n\n  /**\n   * @this {unknown}\n   * @type {TestFunction}\n   */\n  function any(...parameters) {\n    let index = -1\n\n    while (++index < checks.length) {\n      if (checks[index].apply(this, parameters)) return true\n    }\n\n    return false\n  }\n}\n\n/**\n * Turn an object into a test for a node with a certain fields.\n *\n * @param {Props} check\n * @returns {Check}\n */\nfunction propsFactory(check) {\n  const checkAsRecord = /** @type {Record<string, unknown>} */ (check)\n\n  return castFactory(all)\n\n  /**\n   * @param {Node} node\n   * @returns {boolean}\n   */\n  function all(node) {\n    const nodeAsRecord = /** @type {Record<string, unknown>} */ (\n      /** @type {unknown} */ (node)\n    )\n\n    /** @type {string} */\n    let key\n\n    for (key in check) {\n      if (nodeAsRecord[key] !== checkAsRecord[key]) return false\n    }\n\n    return true\n  }\n}\n\n/**\n * Turn a string into a test for a node with a certain type.\n *\n * @param {string} check\n * @returns {Check}\n */\nfunction typeFactory(check) {\n  return castFactory(type)\n\n  /**\n   * @param {Node} node\n   */\n  function type(node) {\n    return node && node.type === check\n  }\n}\n\n/**\n * Turn a custom test into a test for a node that passes that test.\n *\n * @param {TestFunction} testFunction\n * @returns {Check}\n */\nfunction castFactory(testFunction) {\n  return check\n\n  /**\n   * @this {unknown}\n   * @type {Check}\n   */\n  function check(value, index, parent) {\n    return Boolean(\n      looksLikeANode(value) &&\n        testFunction.call(\n          this,\n          value,\n          typeof index === 'number' ? index : undefined,\n          parent || undefined\n        )\n    )\n  }\n}\n\nfunction ok() {\n  return true\n}\n\n/**\n * @param {unknown} value\n * @returns {value is Node}\n */\nfunction looksLikeANode(value) {\n  return value !== null && typeof value === 'object' && 'type' in value\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC1pcy9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBLGFBQWEsc0JBQXNCO0FBQ25DLGFBQWEsd0JBQXdCO0FBQ3JDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsb0VBQW9FO0FBQ2pGOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBLFdBQVcsMkJBQTJCO0FBQ3RDO0FBQ0EsV0FBVywyQkFBMkI7QUFDdEM7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWEsZ0NBQWdDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSx5RkFBeUY7QUFDdEc7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQSxXQUFXLE1BQU07QUFDakI7QUFDQSxXQUFXLG9CQUFvQjtBQUMvQjtBQUNBLFdBQVcsb0JBQW9CO0FBQy9CO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBLFdBQVcsTUFBTTtBQUNqQjtBQUNBLFdBQVcsMkJBQTJCO0FBQ3RDO0FBQ0EsV0FBVywyQkFBMkI7QUFDdEM7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLFlBQVk7QUFDWixnTEFBZ0wsZ0JBQWdCO0FBQ2hNO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsU0FBUztBQUN4QixlQUFlLE1BQU07QUFDckIsZUFBZSwyQkFBMkI7QUFDMUMsZUFBZSwyQkFBMkI7QUFDMUMsZUFBZSxTQUFTO0FBQ3hCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLFlBQVk7QUFDWixvTEFBb0wsZ0JBQWdCO0FBQ3BNO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE1BQU07QUFDckIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxzQ0FBc0M7QUFDakQsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhLGNBQWM7QUFDM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxZQUFZO0FBQ1osWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhO0FBQ2I7QUFDQTtBQUNBLG1DQUFtQyx5QkFBeUI7O0FBRTVEOztBQUVBO0FBQ0EsYUFBYSxNQUFNO0FBQ25CLGVBQWU7QUFDZjtBQUNBO0FBQ0Esb0NBQW9DLHlCQUF5QjtBQUM3RCxpQkFBaUIsU0FBUztBQUMxQjs7QUFFQSxlQUFlLFFBQVE7QUFDdkI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsY0FBYztBQUN6QixhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLFNBQVM7QUFDcEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2l0aHViX215X3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy91bmlzdC11dGlsLWlzL2xpYi9pbmRleC5qcz9lYjcxIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QnKS5Ob2RlfSBOb2RlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdCcpLlBhcmVudH0gUGFyZW50XG4gKi9cblxuLyoqXG4gKiBAdGVtcGxhdGUgRm5cbiAqIEB0ZW1wbGF0ZSBGYWxsYmFja1xuICogQHR5cGVkZWYge0ZuIGV4dGVuZHMgKHZhbHVlOiBhbnkpID0+IHZhbHVlIGlzIGluZmVyIFRoaW5nID8gVGhpbmcgOiBGYWxsYmFja30gUHJlZGljYXRlXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgQ2hlY2tcbiAqICAgQ2hlY2sgdGhhdCBhbiBhcmJpdHJhcnkgdmFsdWUgaXMgYSBub2RlLlxuICogQHBhcmFtIHt1bmtub3dufSB0aGlzXG4gKiAgIFRoZSBnaXZlbiBjb250ZXh0LlxuICogQHBhcmFtIHt1bmtub3dufSBbbm9kZV1cbiAqICAgQW55dGhpbmcgKHR5cGljYWxseSBhIG5vZGUpLlxuICogQHBhcmFtIHtudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkfSBbaW5kZXhdXG4gKiAgIFRoZSBub2Rl4oCZcyBwb3NpdGlvbiBpbiBpdHMgcGFyZW50LlxuICogQHBhcmFtIHtQYXJlbnQgfCBudWxsIHwgdW5kZWZpbmVkfSBbcGFyZW50XVxuICogICBUaGUgbm9kZeKAmXMgcGFyZW50LlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKiAgIFdoZXRoZXIgdGhpcyBpcyBhIG5vZGUgYW5kIHBhc3NlcyBhIHRlc3QuXG4gKlxuICogQHR5cGVkZWYge1JlY29yZDxzdHJpbmcsIHVua25vd24+IHwgTm9kZX0gUHJvcHNcbiAqICAgT2JqZWN0IHRvIGNoZWNrIGZvciBlcXVpdmFsZW5jZS5cbiAqXG4gKiAgIE5vdGU6IGBOb2RlYCBpcyBpbmNsdWRlZCBhcyBpdCBpcyBjb21tb24gYnV0IGlzIG5vdCBpbmRleGFibGUuXG4gKlxuICogQHR5cGVkZWYge0FycmF5PFByb3BzIHwgVGVzdEZ1bmN0aW9uIHwgc3RyaW5nPiB8IFByb3BzIHwgVGVzdEZ1bmN0aW9uIHwgc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZH0gVGVzdFxuICogICBDaGVjayBmb3IgYW4gYXJiaXRyYXJ5IG5vZGUuXG4gKlxuICogQGNhbGxiYWNrIFRlc3RGdW5jdGlvblxuICogICBDaGVjayBpZiBhIG5vZGUgcGFzc2VzIGEgdGVzdC5cbiAqIEBwYXJhbSB7dW5rbm93bn0gdGhpc1xuICogICBUaGUgZ2l2ZW4gY29udGV4dC5cbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICogICBBIG5vZGUuXG4gKiBAcGFyYW0ge251bWJlciB8IHVuZGVmaW5lZH0gW2luZGV4XVxuICogICBUaGUgbm9kZeKAmXMgcG9zaXRpb24gaW4gaXRzIHBhcmVudC5cbiAqIEBwYXJhbSB7UGFyZW50IHwgdW5kZWZpbmVkfSBbcGFyZW50XVxuICogICBUaGUgbm9kZeKAmXMgcGFyZW50LlxuICogQHJldHVybnMge2Jvb2xlYW4gfCB1bmRlZmluZWQgfCB2b2lkfVxuICogICBXaGV0aGVyIHRoaXMgbm9kZSBwYXNzZXMgdGhlIHRlc3QuXG4gKlxuICogICBOb3RlOiBgdm9pZGAgaXMgaW5jbHVkZWQgdW50aWwgVFMgc2VlcyBubyByZXR1cm4gYXMgYHVuZGVmaW5lZGAuXG4gKi9cblxuLyoqXG4gKiBDaGVjayBpZiBgbm9kZWAgaXMgYSBgTm9kZWAgYW5kIHdoZXRoZXIgaXQgcGFzc2VzIHRoZSBnaXZlbiB0ZXN0LlxuICpcbiAqIEBwYXJhbSB7dW5rbm93bn0gbm9kZVxuICogICBUaGluZyB0byBjaGVjaywgdHlwaWNhbGx5IGBOb2RlYC5cbiAqIEBwYXJhbSB7VGVzdH0gdGVzdFxuICogICBBIGNoZWNrIGZvciBhIHNwZWNpZmljIG5vZGUuXG4gKiBAcGFyYW0ge251bWJlciB8IG51bGwgfCB1bmRlZmluZWR9IGluZGV4XG4gKiAgIFRoZSBub2Rl4oCZcyBwb3NpdGlvbiBpbiBpdHMgcGFyZW50LlxuICogQHBhcmFtIHtQYXJlbnQgfCBudWxsIHwgdW5kZWZpbmVkfSBwYXJlbnRcbiAqICAgVGhlIG5vZGXigJlzIHBhcmVudC5cbiAqIEBwYXJhbSB7dW5rbm93bn0gY29udGV4dFxuICogICBDb250ZXh0IG9iamVjdCAoYHRoaXNgKSB0byBwYXNzIHRvIGB0ZXN0YCBmdW5jdGlvbnMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqICAgV2hldGhlciBgbm9kZWAgaXMgYSBub2RlIGFuZCBwYXNzZXMgYSB0ZXN0LlxuICovXG5leHBvcnQgY29uc3QgaXMgPVxuICAvLyBOb3RlOiBvdmVybG9hZHMgaW4gSlNEb2MgY2Fu4oCZdCB5ZXQgdXNlIGRpZmZlcmVudCBgQHRlbXBsYXRlYHMuXG4gIC8qKlxuICAgKiBAdHlwZSB7KFxuICAgKiAgICg8Q29uZGl0aW9uIGV4dGVuZHMgc3RyaW5nPihub2RlOiB1bmtub3duLCB0ZXN0OiBDb25kaXRpb24sIGluZGV4PzogbnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZCwgcGFyZW50PzogUGFyZW50IHwgbnVsbCB8IHVuZGVmaW5lZCwgY29udGV4dD86IHVua25vd24pID0+IG5vZGUgaXMgTm9kZSAmIHt0eXBlOiBDb25kaXRpb259KSAmXG4gICAqICAgKDxDb25kaXRpb24gZXh0ZW5kcyBQcm9wcz4obm9kZTogdW5rbm93biwgdGVzdDogQ29uZGl0aW9uLCBpbmRleD86IG51bWJlciB8IG51bGwgfCB1bmRlZmluZWQsIHBhcmVudD86IFBhcmVudCB8IG51bGwgfCB1bmRlZmluZWQsIGNvbnRleHQ/OiB1bmtub3duKSA9PiBub2RlIGlzIE5vZGUgJiBDb25kaXRpb24pICZcbiAgICogICAoPENvbmRpdGlvbiBleHRlbmRzIFRlc3RGdW5jdGlvbj4obm9kZTogdW5rbm93biwgdGVzdDogQ29uZGl0aW9uLCBpbmRleD86IG51bWJlciB8IG51bGwgfCB1bmRlZmluZWQsIHBhcmVudD86IFBhcmVudCB8IG51bGwgfCB1bmRlZmluZWQsIGNvbnRleHQ/OiB1bmtub3duKSA9PiBub2RlIGlzIE5vZGUgJiBQcmVkaWNhdGU8Q29uZGl0aW9uLCBOb2RlPikgJlxuICAgKiAgICgobm9kZT86IG51bGwgfCB1bmRlZmluZWQpID0+IGZhbHNlKSAmXG4gICAqICAgKChub2RlOiB1bmtub3duLCB0ZXN0PzogbnVsbCB8IHVuZGVmaW5lZCwgaW5kZXg/OiBudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJlbnQ/OiBQYXJlbnQgfCBudWxsIHwgdW5kZWZpbmVkLCBjb250ZXh0PzogdW5rbm93bikgPT4gbm9kZSBpcyBOb2RlKSAmXG4gICAqICAgKChub2RlOiB1bmtub3duLCB0ZXN0PzogVGVzdCwgaW5kZXg/OiBudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJlbnQ/OiBQYXJlbnQgfCBudWxsIHwgdW5kZWZpbmVkLCBjb250ZXh0PzogdW5rbm93bikgPT4gYm9vbGVhbilcbiAgICogKX1cbiAgICovXG4gIChcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3Vua25vd259IFtub2RlXVxuICAgICAqIEBwYXJhbSB7VGVzdH0gW3Rlc3RdXG4gICAgICogQHBhcmFtIHtudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkfSBbaW5kZXhdXG4gICAgICogQHBhcmFtIHtQYXJlbnQgfCBudWxsIHwgdW5kZWZpbmVkfSBbcGFyZW50XVxuICAgICAqIEBwYXJhbSB7dW5rbm93bn0gW2NvbnRleHRdXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1wYXJhbXNcbiAgICBmdW5jdGlvbiAobm9kZSwgdGVzdCwgaW5kZXgsIHBhcmVudCwgY29udGV4dCkge1xuICAgICAgY29uc3QgY2hlY2sgPSBjb252ZXJ0KHRlc3QpXG5cbiAgICAgIGlmIChcbiAgICAgICAgaW5kZXggIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICBpbmRleCAhPT0gbnVsbCAmJlxuICAgICAgICAodHlwZW9mIGluZGV4ICE9PSAnbnVtYmVyJyB8fFxuICAgICAgICAgIGluZGV4IDwgMCB8fFxuICAgICAgICAgIGluZGV4ID09PSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFkpXG4gICAgICApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBwb3NpdGl2ZSBmaW5pdGUgaW5kZXgnKVxuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIHBhcmVudCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgIHBhcmVudCAhPT0gbnVsbCAmJlxuICAgICAgICAoIWlzKHBhcmVudCkgfHwgIXBhcmVudC5jaGlsZHJlbilcbiAgICAgICkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHBhcmVudCBub2RlJylcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICAocGFyZW50ID09PSB1bmRlZmluZWQgfHwgcGFyZW50ID09PSBudWxsKSAhPT1cbiAgICAgICAgKGluZGV4ID09PSB1bmRlZmluZWQgfHwgaW5kZXggPT09IG51bGwpXG4gICAgICApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBib3RoIHBhcmVudCBhbmQgaW5kZXgnKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbG9va3NMaWtlQU5vZGUobm9kZSlcbiAgICAgICAgPyBjaGVjay5jYWxsKGNvbnRleHQsIG5vZGUsIGluZGV4LCBwYXJlbnQpXG4gICAgICAgIDogZmFsc2VcbiAgICB9XG4gIClcblxuLyoqXG4gKiBHZW5lcmF0ZSBhbiBhc3NlcnRpb24gZnJvbSBhIHRlc3QuXG4gKlxuICogVXNlZnVsIGlmIHlvdeKAmXJlIGdvaW5nIHRvIHRlc3QgbWFueSBub2RlcywgZm9yIGV4YW1wbGUgd2hlbiBjcmVhdGluZyBhXG4gKiB1dGlsaXR5IHdoZXJlIHNvbWV0aGluZyBlbHNlIHBhc3NlcyBhIGNvbXBhdGlibGUgdGVzdC5cbiAqXG4gKiBUaGUgY3JlYXRlZCBmdW5jdGlvbiBpcyBhIGJpdCBmYXN0ZXIgYmVjYXVzZSBpdCBleHBlY3RzIHZhbGlkIGlucHV0IG9ubHk6XG4gKiBhIGBub2RlYCwgYGluZGV4YCwgYW5kIGBwYXJlbnRgLlxuICpcbiAqIEBwYXJhbSB7VGVzdH0gdGVzdFxuICogICAqICAgd2hlbiBudWxsaXNoLCBjaGVja3MgaWYgYG5vZGVgIGlzIGEgYE5vZGVgLlxuICogICAqICAgd2hlbiBgc3RyaW5nYCwgd29ya3MgbGlrZSBwYXNzaW5nIGAobm9kZSkgPT4gbm9kZS50eXBlID09PSB0ZXN0YC5cbiAqICAgKiAgIHdoZW4gYGZ1bmN0aW9uYCBjaGVja3MgaWYgZnVuY3Rpb24gcGFzc2VkIHRoZSBub2RlIGlzIHRydWUuXG4gKiAgICogICB3aGVuIGBvYmplY3RgLCBjaGVja3MgdGhhdCBhbGwga2V5cyBpbiB0ZXN0IGFyZSBpbiBub2RlLCBhbmQgdGhhdCB0aGV5IGhhdmUgKHN0cmljdGx5KSBlcXVhbCB2YWx1ZXMuXG4gKiAgICogICB3aGVuIGBhcnJheWAsIGNoZWNrcyBpZiBhbnkgb25lIG9mIHRoZSBzdWJ0ZXN0cyBwYXNzLlxuICogQHJldHVybnMge0NoZWNrfVxuICogICBBbiBhc3NlcnRpb24uXG4gKi9cbmV4cG9ydCBjb25zdCBjb252ZXJ0ID1cbiAgLy8gTm90ZTogb3ZlcmxvYWRzIGluIEpTRG9jIGNhbuKAmXQgeWV0IHVzZSBkaWZmZXJlbnQgYEB0ZW1wbGF0ZWBzLlxuICAvKipcbiAgICogQHR5cGUgeyhcbiAgICogICAoPENvbmRpdGlvbiBleHRlbmRzIHN0cmluZz4odGVzdDogQ29uZGl0aW9uKSA9PiAobm9kZTogdW5rbm93biwgaW5kZXg/OiBudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJlbnQ/OiBQYXJlbnQgfCBudWxsIHwgdW5kZWZpbmVkLCBjb250ZXh0PzogdW5rbm93bikgPT4gbm9kZSBpcyBOb2RlICYge3R5cGU6IENvbmRpdGlvbn0pICZcbiAgICogICAoPENvbmRpdGlvbiBleHRlbmRzIFByb3BzPih0ZXN0OiBDb25kaXRpb24pID0+IChub2RlOiB1bmtub3duLCBpbmRleD86IG51bWJlciB8IG51bGwgfCB1bmRlZmluZWQsIHBhcmVudD86IFBhcmVudCB8IG51bGwgfCB1bmRlZmluZWQsIGNvbnRleHQ/OiB1bmtub3duKSA9PiBub2RlIGlzIE5vZGUgJiBDb25kaXRpb24pICZcbiAgICogICAoPENvbmRpdGlvbiBleHRlbmRzIFRlc3RGdW5jdGlvbj4odGVzdDogQ29uZGl0aW9uKSA9PiAobm9kZTogdW5rbm93biwgaW5kZXg/OiBudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJlbnQ/OiBQYXJlbnQgfCBudWxsIHwgdW5kZWZpbmVkLCBjb250ZXh0PzogdW5rbm93bikgPT4gbm9kZSBpcyBOb2RlICYgUHJlZGljYXRlPENvbmRpdGlvbiwgTm9kZT4pICZcbiAgICogICAoKHRlc3Q/OiBudWxsIHwgdW5kZWZpbmVkKSA9PiAobm9kZT86IHVua25vd24sIGluZGV4PzogbnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZCwgcGFyZW50PzogUGFyZW50IHwgbnVsbCB8IHVuZGVmaW5lZCwgY29udGV4dD86IHVua25vd24pID0+IG5vZGUgaXMgTm9kZSkgJlxuICAgKiAgICgodGVzdD86IFRlc3QpID0+IENoZWNrKVxuICAgKiApfVxuICAgKi9cbiAgKFxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7VGVzdH0gW3Rlc3RdXG4gICAgICogQHJldHVybnMge0NoZWNrfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uICh0ZXN0KSB7XG4gICAgICBpZiAodGVzdCA9PT0gbnVsbCB8fCB0ZXN0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIG9rXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgdGVzdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY2FzdEZhY3RvcnkodGVzdClcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB0ZXN0ID09PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh0ZXN0KSA/IGFueUZhY3RvcnkodGVzdCkgOiBwcm9wc0ZhY3RvcnkodGVzdClcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB0ZXN0ID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gdHlwZUZhY3RvcnkodGVzdClcbiAgICAgIH1cblxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBmdW5jdGlvbiwgc3RyaW5nLCBvciBvYmplY3QgYXMgdGVzdCcpXG4gICAgfVxuICApXG5cbi8qKlxuICogQHBhcmFtIHtBcnJheTxQcm9wcyB8IFRlc3RGdW5jdGlvbiB8IHN0cmluZz59IHRlc3RzXG4gKiBAcmV0dXJucyB7Q2hlY2t9XG4gKi9cbmZ1bmN0aW9uIGFueUZhY3RvcnkodGVzdHMpIHtcbiAgLyoqIEB0eXBlIHtBcnJheTxDaGVjaz59ICovXG4gIGNvbnN0IGNoZWNrcyA9IFtdXG4gIGxldCBpbmRleCA9IC0xXG5cbiAgd2hpbGUgKCsraW5kZXggPCB0ZXN0cy5sZW5ndGgpIHtcbiAgICBjaGVja3NbaW5kZXhdID0gY29udmVydCh0ZXN0c1tpbmRleF0pXG4gIH1cblxuICByZXR1cm4gY2FzdEZhY3RvcnkoYW55KVxuXG4gIC8qKlxuICAgKiBAdGhpcyB7dW5rbm93bn1cbiAgICogQHR5cGUge1Rlc3RGdW5jdGlvbn1cbiAgICovXG4gIGZ1bmN0aW9uIGFueSguLi5wYXJhbWV0ZXJzKSB7XG4gICAgbGV0IGluZGV4ID0gLTFcblxuICAgIHdoaWxlICgrK2luZGV4IDwgY2hlY2tzLmxlbmd0aCkge1xuICAgICAgaWYgKGNoZWNrc1tpbmRleF0uYXBwbHkodGhpcywgcGFyYW1ldGVycykpIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuLyoqXG4gKiBUdXJuIGFuIG9iamVjdCBpbnRvIGEgdGVzdCBmb3IgYSBub2RlIHdpdGggYSBjZXJ0YWluIGZpZWxkcy5cbiAqXG4gKiBAcGFyYW0ge1Byb3BzfSBjaGVja1xuICogQHJldHVybnMge0NoZWNrfVxuICovXG5mdW5jdGlvbiBwcm9wc0ZhY3RvcnkoY2hlY2spIHtcbiAgY29uc3QgY2hlY2tBc1JlY29yZCA9IC8qKiBAdHlwZSB7UmVjb3JkPHN0cmluZywgdW5rbm93bj59ICovIChjaGVjaylcblxuICByZXR1cm4gY2FzdEZhY3RvcnkoYWxsKVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBhbGwobm9kZSkge1xuICAgIGNvbnN0IG5vZGVBc1JlY29yZCA9IC8qKiBAdHlwZSB7UmVjb3JkPHN0cmluZywgdW5rbm93bj59ICovIChcbiAgICAgIC8qKiBAdHlwZSB7dW5rbm93bn0gKi8gKG5vZGUpXG4gICAgKVxuXG4gICAgLyoqIEB0eXBlIHtzdHJpbmd9ICovXG4gICAgbGV0IGtleVxuXG4gICAgZm9yIChrZXkgaW4gY2hlY2spIHtcbiAgICAgIGlmIChub2RlQXNSZWNvcmRba2V5XSAhPT0gY2hlY2tBc1JlY29yZFtrZXldKSByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG59XG5cbi8qKlxuICogVHVybiBhIHN0cmluZyBpbnRvIGEgdGVzdCBmb3IgYSBub2RlIHdpdGggYSBjZXJ0YWluIHR5cGUuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNoZWNrXG4gKiBAcmV0dXJucyB7Q2hlY2t9XG4gKi9cbmZ1bmN0aW9uIHR5cGVGYWN0b3J5KGNoZWNrKSB7XG4gIHJldHVybiBjYXN0RmFjdG9yeSh0eXBlKVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICovXG4gIGZ1bmN0aW9uIHR5cGUobm9kZSkge1xuICAgIHJldHVybiBub2RlICYmIG5vZGUudHlwZSA9PT0gY2hlY2tcbiAgfVxufVxuXG4vKipcbiAqIFR1cm4gYSBjdXN0b20gdGVzdCBpbnRvIGEgdGVzdCBmb3IgYSBub2RlIHRoYXQgcGFzc2VzIHRoYXQgdGVzdC5cbiAqXG4gKiBAcGFyYW0ge1Rlc3RGdW5jdGlvbn0gdGVzdEZ1bmN0aW9uXG4gKiBAcmV0dXJucyB7Q2hlY2t9XG4gKi9cbmZ1bmN0aW9uIGNhc3RGYWN0b3J5KHRlc3RGdW5jdGlvbikge1xuICByZXR1cm4gY2hlY2tcblxuICAvKipcbiAgICogQHRoaXMge3Vua25vd259XG4gICAqIEB0eXBlIHtDaGVja31cbiAgICovXG4gIGZ1bmN0aW9uIGNoZWNrKHZhbHVlLCBpbmRleCwgcGFyZW50KSB7XG4gICAgcmV0dXJuIEJvb2xlYW4oXG4gICAgICBsb29rc0xpa2VBTm9kZSh2YWx1ZSkgJiZcbiAgICAgICAgdGVzdEZ1bmN0aW9uLmNhbGwoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICB0eXBlb2YgaW5kZXggPT09ICdudW1iZXInID8gaW5kZXggOiB1bmRlZmluZWQsXG4gICAgICAgICAgcGFyZW50IHx8IHVuZGVmaW5lZFxuICAgICAgICApXG4gICAgKVxuICB9XG59XG5cbmZ1bmN0aW9uIG9rKCkge1xuICByZXR1cm4gdHJ1ZVxufVxuXG4vKipcbiAqIEBwYXJhbSB7dW5rbm93bn0gdmFsdWVcbiAqIEByZXR1cm5zIHt2YWx1ZSBpcyBOb2RlfVxuICovXG5mdW5jdGlvbiBsb29rc0xpa2VBTm9kZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiAndHlwZScgaW4gdmFsdWVcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/unist-util-is/lib/index.js\n");

/***/ })

};
;