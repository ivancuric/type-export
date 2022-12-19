// @ts-check

import { $ } from "zx";

try {
  await $`rm -rf core`;
  await $`rm -rf addon`;
  await $`mkdir -p core`;
  await $`mkdir -p addon`;
  await $`cp -a ../core/dist/ core/dist/`;
  await $`cp -a ../core/types/ core/types/`;
  await $`cp -a ../addon/dist/ addon/dist/`;
  await $`cp -a ../addon/types/ addon/types/`;
} catch (error) {}
