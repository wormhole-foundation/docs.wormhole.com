export function fmtNum(n?: number): string {
  return n === undefined ? " " : n.toString();
}

export function fmtStr(s?: string): string {
  return s === undefined ? "**N/A**" : `\`${s}\``;
}

export function fmtCodeStr(s?: string): string {
  return s === undefined ? "<code>-</code>" : `<code>${s}</code>`;
}
