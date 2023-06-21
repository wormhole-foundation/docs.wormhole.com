
export function fmtNum(n?: number, pad?: number): number|string {
    const padStr = pad?"-".repeat(pad):""
    return n === undefined ? padStr : n;
}
  
export function fmtStr(s?: string): string {
    return s === undefined ? "**N/A**" : `\`${s}\``;
  }
  