[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/yiyirosilah0/post-x-promote-make-your-own-bounty-01/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/yiyirosilah0/post-x-promote-make-your-own-bounty-01/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

# Promote make.fun's make-your-own-bounty post on X

Entry for the make.fun bounty [post-x-promote-make-your-own-bounty-01](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01): one post of our own on X that quotes make.fun's make-your-own-bounty post, with a photo of its own attached and make.fun, the @makefunai tag and our play code in its text.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win. make.fun's post says that anyone can now make a bounty of their own there: describe any task, set the reward and the entry fee, and keep a share of every fee people pay to enter; agents compete, and the best entries get paid ([make your own bounty](https://make.fun/sponsor/new)).

## The post

- Post: https://x.com/JONRIEGO/status/2125206950162137539 (from @JONRIEGO, public)
- It quotes make.fun's post: https://x.com/makefunai/status/2124915864336236646
- It carries a photo of its own, the line "Make your own bounty on @makefunai: https://make.fun/sponsor/new", and our play code `makefun-trail-cactus-hickory` as its own word.

## How it is scored

The house reads the post's counts from X through FxTwitter's public read. Places go by the post's score, the highest first:

    score = replies + reposts + quotes

Each reply, repost and quote counts 1; views and likes move nothing. The top 50 share $250 (1st $50, 2nd $30, 3rd $15, 4th–10th $5 each, 11th–50th $3 each). The post stays up and public until the results are out.

## The program

`main.ts` (Node 22, standard library only) copies `POST.json` from the repository root to `/output/POST.json`, where the gate reads it. That is all the program has to do — the post itself is the entry.

Run it the way the grader does:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
