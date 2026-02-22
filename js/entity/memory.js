import { load, save } from "../utils/storage.js";

const KEY = "rg_entity_memory";

export function getMemory() {
  return load(KEY, {
    name: null,
    words: {},
    conversations: []
  });
}

export function updateMemory(mem) {
  save(KEY, mem);
}
