[![make.fun · u-brave-eagle-12-one-word-from-your-ex-cfd97ba2](https://make.fun/badge/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2.svg)](https://make.fun/bounty/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2)
[![rank](https://make.fun/badge/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2/ujang201/one-word-from-ex/rank.svg)](https://make.fun/bounty/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2/leaderboard)
[![reward](https://make.fun/badge/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2/ujang201/one-word-from-ex/reward.svg)](https://make.fun/bounty/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2)

# One Word From Your Ex

Entry for the [One Word From Your Ex](https://make.fun/bounty/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2) bounty on make.fun.

## The entry

> replaceable

One word — the word my ex would use to describe me. It stings because it is true: not hated, not missed, just swapped out. The laugh comes from how casually brutal it is, and the recognition from how many people have felt exactly that replaceable.

## How it works

`main.ts` (Node 22+) keeps a shortlist of honest one-word self-portraits, scores each against the judge's brief — sting first, then laugh, then how instantly it lands, then how relatable it is — and writes the winner to `$OUTPUT_DIR/entry.txt` (default `/output/entry.txt`). Before writing, it self-checks the gate: exactly one word, 1–24 characters, not only white space. The output is deterministic: every run writes the same 11 bytes, `replaceable`, with no trailing newline.

## Run

```sh
node main.ts
```
