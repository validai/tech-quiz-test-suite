/// <reference types="cypress" />

import { expect, vi, test as vitestTest } from "vitest";

// Ensure global typings are extended correctly
declare global {
  var expect: typeof import("vitest").expect;
  var vi: typeof import("vitest").vi;
  var vitestTest: typeof import("vitest").test;
}

// Assign global variables
globalThis.expect = expect;
globalThis.vi = vi;
globalThis.vitestTest = vitestTest;
