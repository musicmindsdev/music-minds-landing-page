type Json = Record<string, unknown>;

function isPlainObject(v: unknown): v is Json {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

/** Deep-merge `override` onto `base` so missing keys in `override` keep `base` values. */
export function mergeMessages(base: Json, override: Json): Json {
  const out: Json = { ...base };
  for (const key of Object.keys(override)) {
    const b = base[key];
    const o = override[key];
    if (isPlainObject(b) && isPlainObject(o)) {
      out[key] = mergeMessages(b, o);
    } else {
      out[key] = o;
    }
  }
  return out;
}
