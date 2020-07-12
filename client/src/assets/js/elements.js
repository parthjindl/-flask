const waterSymbol = `<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 350 350"
preserveAspectRatio="xMidYMid meet">
<g transform="translate(0.000000,350.000000) scale(0.100000,-0.100000)" stroke="none">
<path d="M1675 3434 c-283 -33 -505 -91 -729 -193 -268 -122 -571 -441 -741
-781 -60 -119 -89 -203 -121 -350 -22 -99 -26 -148 -31 -355 -8 -326 11 -451
106 -708 133 -363 455 -673 835 -806 274 -96 684 -160 951 -148 277 13 440 61
707 208 181 100 370 264 480 419 144 203 262 527 304 840 23 169 23 416 0 540
-71 393 -202 669 -428 906 -187 195 -449 335 -737 394 -160 32 -460 49 -596
34z m560 -164 c218 -47 351 -112 445 -217 86 -95 140 -241 140 -375 0 -63 -5
-84 -30 -135 -34 -67 -105 -140 -170 -173 -79 -40 -212 -36 -317 10 -41 18
-43 21 -43 60 0 55 -26 179 -54 256 l-23 62 25 31 c50 65 174 105 258 82 58
-16 129 -66 148 -105 9 -20 16 -60 16 -96 0 -54 -3 -65 -29 -90 -39 -40 -72
-46 -117 -23 -49 24 -59 53 -32 89 16 20 19 30 11 43 -17 27 -41 24 -74 -9
-28 -28 -31 -36 -26 -75 6 -59 30 -93 80 -116 104 -47 210 -7 258 96 25 54 25
175 0 230 -24 53 -99 121 -169 152 -115 53 -264 24 -353 -67 l-47 -48 -48 61
c-64 80 -197 186 -288 230 -86 43 -243 84 -358 95 l-83 8 115 22 c63 11 129
23 145 26 17 2 140 3 275 1 206 -3 261 -7 345 -25z m-726 -165 c189 -36 291
-88 416 -210 126 -124 187 -265 202 -465 11 -157 -31 -271 -138 -378 -33 -32
-83 -72 -112 -88 -48 -27 -59 -29 -157 -28 -96 0 -112 3 -190 35 l-84 35 -17
81 c-9 45 -31 123 -48 173 l-33 90 28 48 c79 136 131 167 268 160 72 -4 92 -9
133 -34 98 -61 154 -244 97 -321 -26 -36 -79 -63 -123 -63 -38 0 -101 54 -101
88 0 30 10 52 25 52 7 0 18 7 25 15 10 12 10 18 0 30 -32 38 -120 -28 -120
-91 0 -46 32 -107 72 -135 39 -28 128 -37 183 -19 51 17 117 85 133 136 41
140 -16 314 -130 392 -63 43 -112 56 -213 56 -128 0 -183 -21 -260 -98 -34
-34 -69 -72 -78 -85 l-16 -24 -38 34 c-58 52 -100 75 -203 110 -213 71 -425
46 -596 -72 -25 -17 -47 -29 -50 -27 -6 6 105 166 174 250 133 163 332 326
419 343 124 24 426 30 532 10z m1540 -363 c100 -148 191 -352 217 -487 6 -33
5 -37 -10 -32 -116 45 -289 53 -472 22 -226 -39 -367 -97 -524 -216 -91 -69
-162 -128 -480 -398 -213 -181 -292 -237 -425 -301 -202 -97 -327 -130 -503
-130 -182 0 -363 45 -549 137 l-112 55 -7 55 c-3 30 -4 159 -1 286 6 235 13
291 58 457 l21 80 105 71 c193 128 283 163 428 163 97 0 197 -24 286 -69 69
-36 133 -112 168 -203 97 -252 77 -476 -56 -640 -76 -93 -172 -126 -347 -120
-131 5 -190 26 -254 91 -85 87 -116 232 -72 335 29 67 103 135 172 158 122 40
259 -13 301 -116 40 -97 26 -182 -35 -220 -64 -39 -113 -24 -154 45 -27 46
-59 60 -70 30 -9 -22 46 -125 78 -149 41 -29 125 -33 175 -8 85 44 118 112
111 231 -10 170 -109 280 -279 312 -177 32 -366 -100 -415 -290 -28 -112 1
-260 73 -368 78 -117 186 -163 386 -163 116 0 204 18 280 56 64 33 171 139
215 216 36 62 82 186 82 223 l0 24 78 -37 c73 -35 83 -37 192 -40 98 -3 123
-1 171 17 185 70 332 247 374 453 l5 27 43 -19 c64 -28 159 -43 235 -38 179
13 350 175 383 365 13 73 -1 204 -31 293 l-18 55 56 -60 c31 -33 86 -102 121
-153z m184 -613 l65 -12 11 -74 c6 -41 11 -107 11 -147 l0 -73 -187 0 c-151 1
-202 -3 -258 -18 -99 -26 -210 -74 -334 -146 -122 -72 -186 -119 -441 -329
-241 -198 -449 -354 -544 -409 -164 -93 -360 -140 -621 -148 -195 -6 -283 4
-440 50 -76 21 -82 25 -113 72 -51 75 -142 285 -142 326 0 4 39 -12 88 -37
140 -71 362 -124 522 -124 177 0 388 57 589 160 145 74 220 130 543 406 416
356 506 415 709 468 205 54 380 65 542 35z m82 -446 c-2 -21 -9 -78 -15 -128
-10 -84 -28 -170 -51 -241 l-9 -30 -143 0 c-136 0 -145 -2 -222 -32 -44 -17
-127 -58 -185 -90 -213 -119 -275 -166 -495 -382 -115 -113 -239 -227 -275
-254 -123 -93 -289 -156 -520 -197 -140 -25 -173 -22 -332 31 -138 46 -238 96
-348 176 -87 62 -204 169 -175 158 149 -53 176 -58 355 -57 199 1 342 21 506
74 214 67 343 155 889 603 363 298 599 399 948 405 l77 1 -5 -37z m-105 -492
c0 -20 -54 -159 -87 -226 -62 -123 -125 -208 -232 -315 -125 -124 -227 -195
-411 -284 -252 -121 -356 -142 -675 -133 -115 4 -228 10 -250 14 -38 8 -35 9
54 22 269 38 336 78 666 402 171 167 233 221 332 287 128 86 277 168 353 196
97 35 250 58 250 37z"/>
</g>
</svg>`

const airSymbol = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="340.000000pt" height="339.000000pt" viewBox="0 0 340.000000 339.000000"
 preserveAspectRatio="xMidYMid meet">
<g transform="translate(0.000000,339.000000) scale(0.100000,-0.100000)" stroke="none">
<path d="M789 3320 c-224 -40 -423 -150 -550 -302 -58 -70 -120 -192 -144
-283 -22 -83 -30 -291 -16 -395 41 -307 153 -477 402 -614 322 -177 602 -142
849 104 138 137 190 260 190 446 0 308 -143 518 -410 608 -180 60 -323 39
-492 -71 -103 -68 -166 -162 -194 -292 -38 -180 1 -340 109 -451 134 -138 310
-164 495 -75 77 37 123 85 147 154 21 63 19 149 -4 187 -35 58 -117 104 -184
104 -49 0 -146 -49 -153 -77 -10 -39 9 -49 61 -35 25 7 54 12 64 12 47 0 75
-84 46 -139 -25 -49 -91 -75 -186 -76 -70 0 -81 3 -120 31 -115 82 -146 255
-75 410 58 125 253 203 401 159 183 -53 271 -148 310 -332 39 -182 -4 -323
-135 -447 -121 -114 -238 -163 -365 -153 -136 10 -326 101 -436 208 -84 81
-131 206 -148 394 -10 105 -1 247 20 320 47 162 198 314 383 386 130 50 220
63 446 64 179 0 218 -3 309 -23 195 -44 358 -107 505 -197 65 -39 89 -41 94
-8 2 16 -14 35 -73 80 -185 142 -353 224 -585 286 -102 26 -134 30 -285 33
-135 3 -192 0 -276 -16z"/>
<path d="M2308 2940 c-246 -39 -485 -248 -576 -502 -21 -60 -26 -96 -30 -203
-5 -157 17 -264 78 -390 66 -135 142 -213 265 -271 96 -44 200 -64 342 -64
192 0 294 37 399 145 70 73 136 193 154 281 33 158 -28 321 -173 468 -53 53
-102 92 -139 110 -204 100 -459 24 -546 -162 -23 -50 -27 -70 -27 -157 0 -119
19 -179 71 -225 65 -56 170 -83 239 -60 44 14 100 62 121 101 34 67 0 209 -51
209 -24 0 -45 -30 -45 -63 0 -52 -24 -77 -74 -77 -28 0 -52 7 -67 19 -20 16
-23 27 -23 88 0 91 21 129 93 166 67 34 154 37 218 8 91 -42 198 -172 229
-279 15 -51 15 -60 -1 -119 -31 -115 -109 -213 -205 -257 -62 -29 -273 -30
-368 -2 -144 43 -236 138 -288 299 -23 70 -27 100 -27 202 -1 104 2 129 24
185 55 144 163 261 308 333 l84 42 126 0 c116 0 133 -3 220 -33 189 -65 288
-139 386 -286 119 -180 150 -287 141 -491 -11 -248 -79 -455 -208 -631 -28
-38 -141 -158 -250 -266 -199 -198 -221 -229 -177 -243 55 -18 503 339 618
492 118 158 192 425 192 698 0 110 -4 157 -20 220 -55 211 -220 453 -379 559
-176 116 -453 184 -634 156z"/>
<path d="M1424 1631 c-104 -26 -178 -65 -254 -137 -75 -71 -127 -159 -155
-259 -21 -79 -31 -304 -16 -373 39 -185 211 -346 405 -381 87 -16 253 -14 313
4 152 45 250 204 247 400 -3 165 -55 274 -153 322 -49 24 -68 28 -146 28 -73
0 -100 -5 -140 -23 -98 -45 -144 -114 -145 -215 0 -71 18 -108 72 -147 46 -33
69 -37 88 -15 9 11 9 22 1 46 -22 62 -14 108 23 145 31 31 39 34 96 34 82 0
96 -10 116 -77 32 -109 6 -241 -58 -300 -61 -56 -247 -57 -365 -1 -66 31 -137
100 -164 160 -21 46 -24 67 -23 168 1 169 33 267 116 350 133 134 369 150 588
40 161 -81 240 -203 256 -398 13 -152 -34 -355 -112 -484 -96 -157 -279 -243
-550 -255 -75 -3 -147 -1 -189 6 -328 57 -665 386 -759 741 -25 93 -51 282
-62 453 -6 92 -20 116 -49 86 -37 -38 -45 -510 -11 -669 65 -300 396 -644 728
-754 233 -78 582 -46 807 74 222 119 370 413 371 737 0 213 -49 357 -162 478
-171 184 -474 275 -714 216z"/>
</g>
</svg>`

const earthSymbol = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="345.000000pt" height="343.000000pt" viewBox="0 0 345.000000 343.000000"
 preserveAspectRatio="xMidYMid meet">
<g transform="translate(0.000000,343.000000) scale(0.100000,-0.100000)" stroke="none">
<path d="M1144 3319 c-34 -4 -80 -17 -101 -27 -43 -22 -113 -94 -136 -138 -51
-100 -546 -1494 -692 -1949 -128 -399 -136 -439 -136 -691 -1 -282 25 -405 93
-440 53 -28 232 -33 813 -23 531 9 627 15 671 44 52 34 50 11 34 535 -12 363
-1 338 -142 352 -114 11 -921 0 -957 -14 -14 -5 -29 -15 -33 -21 -13 -20 -9
-60 8 -79 16 -17 41 -17 488 -11 260 3 484 3 500 -1 l28 -7 -4 -109 c-2 -72
-7 -113 -16 -122 -10 -10 -112 -13 -486 -13 -520 0 -506 2 -506 -61 0 -66 -8
-65 529 -67 l481 -2 0 -136 0 -136 -77 -6 c-152 -12 -1217 -20 -1244 -9 -33
13 -37 40 -45 257 -11 279 7 357 210 960 164 487 466 1338 575 1619 35 90 78
141 131 156 43 13 1076 26 1173 16 66 -8 68 -8 88 -48 53 -105 140 -342 455
-1253 274 -790 330 -966 354 -1125 13 -86 22 -510 11 -528 -4 -7 -71 -15 -181
-22 -210 -13 -1025 -18 -1036 -7 -11 10 -18 208 -10 241 l6 25 373 0 c204 -1
430 2 500 6 114 7 129 10 142 29 20 28 19 59 -3 79 -17 15 -70 17 -506 20
-416 2 -488 5 -496 17 -6 8 -10 65 -10 126 l0 111 118 6 c64 4 281 10 481 13
335 7 366 9 383 26 22 22 23 46 2 77 l-17 23 -501 -4 c-456 -3 -504 -5 -534
-22 -61 -32 -62 -43 -55 -442 5 -271 3 -355 -5 -350 -7 4 -12 1 -12 -8 0 -9 4
-16 9 -16 5 0 18 -17 28 -37 32 -66 33 -66 593 -59 543 6 735 17 790 44 23 11
43 32 58 62 21 41 22 57 22 241 0 420 -7 447 -370 1499 -377 1090 -461 1312
-518 1363 -50 45 -65 46 -677 45 -319 0 -608 -4 -641 -9z"/>
<path d="M1638 2820 c-216 -37 -437 -194 -522 -373 -84 -179 -114 -370 -81
-524 86 -408 361 -628 761 -611 98 4 119 9 214 46 122 48 150 66 150 93 0 31
-23 32 -88 5 -128 -54 -207 -69 -332 -63 -178 8 -307 56 -407 149 -97 92 -164
219 -199 374 -29 134 -5 303 65 459 86 189 345 336 590 335 92 -1 142 -14 248
-66 118 -58 211 -141 253 -227 67 -139 62 -359 -14 -512 -69 -140 -214 -243
-357 -253 -134 -9 -288 58 -348 154 -77 121 -60 353 32 442 73 71 208 98 290
58 43 -21 89 -82 107 -142 25 -84 -29 -180 -106 -191 -39 -5 -46 -2 -87 36
-73 67 -123 45 -70 -31 98 -142 281 -106 339 67 45 132 -43 315 -173 359 -67
23 -180 21 -247 -4 -65 -25 -144 -96 -176 -159 -27 -54 -50 -159 -50 -232 0
-140 50 -265 133 -330 220 -174 503 -155 702 46 110 112 165 264 165 452 -1
216 -70 365 -229 493 -73 59 -223 134 -299 149 -60 12 -193 13 -264 1z"/>
</g>
</svg>`

const fireSymbol = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="302.000000pt" height="347.000000pt" viewBox="0 0 302.000000 347.000000"
 preserveAspectRatio="xMidYMid meet">
<g transform="translate(0.000000,347.000000) scale(0.100000,-0.100000)" stroke="none">
<path d="M1562 3341 c-8 -5 -24 -66 -38 -142 -68 -373 -147 -519 -383 -708
-120 -95 -159 -136 -221 -228 -105 -156 -140 -391 -84 -549 4 -11 -12 9 -35
43 -23 35 -59 77 -79 94 -47 39 -202 113 -364 174 -106 40 -130 46 -143 35
-22 -18 -20 -27 29 -131 86 -183 104 -278 81 -416 -13 -72 -28 -112 -81 -217
-81 -159 -91 -186 -104 -292 -32 -253 56 -431 263 -532 95 -46 127 -52 127
-24 0 12 -26 35 -75 66 -153 97 -205 189 -213 376 -5 144 8 200 83 349 74 148
99 239 99 366 1 112 -17 180 -78 293 -19 34 -32 62 -30 62 9 0 151 -74 219
-113 144 -84 196 -156 248 -347 48 -173 57 -255 51 -433 -10 -251 16 -327 161
-472 145 -146 249 -188 465 -189 234 -1 407 76 537 236 95 118 143 253 143
402 0 107 -20 196 -70 312 -59 137 -82 246 -82 379 0 226 72 381 269 581 86
88 230 210 237 203 2 -2 -13 -55 -34 -117 -96 -286 -80 -379 135 -767 161
-291 210 -437 203 -604 -3 -86 -7 -104 -41 -176 -21 -44 -62 -111 -92 -150
-68 -89 -197 -214 -255 -248 -46 -27 -191 -89 -196 -85 -1 2 19 32 46 67 144
191 212 371 214 561 0 123 -8 156 -104 425 -106 298 -114 357 -85 600 19 155
19 155 -4 155 -21 0 -27 -19 -55 -185 -39 -233 -34 -285 59 -585 73 -236 85
-290 85 -395 0 -162 -43 -291 -147 -446 -102 -150 -231 -242 -408 -291 -72
-20 -104 -22 -325 -23 -273 0 -341 10 -460 66 -181 85 -313 227 -372 398 -31
90 -30 248 2 474 27 191 24 250 -26 410 -21 68 -31 87 -46 87 -22 0 -22 -2 2
-128 27 -140 26 -182 -16 -377 -48 -230 -57 -409 -24 -505 63 -188 222 -360
428 -464 122 -61 347 -93 592 -83 191 8 309 34 427 92 50 25 100 45 110 45 29
0 246 76 311 109 130 66 305 222 396 354 148 214 119 547 -75 864 -138 227
-162 269 -200 349 -76 160 -70 293 27 565 36 101 38 129 8 129 -21 0 -153 -75
-250 -142 -86 -58 -254 -229 -309 -313 -91 -139 -140 -307 -133 -465 1 -50 2
-90 1 -90 -7 0 -85 124 -112 178 -64 126 -60 209 18 396 52 125 66 179 87 346
34 277 0 418 -164 660 -94 140 -112 155 -150 131z m131 -304 c49 -105 71 -201
70 -317 0 -162 -27 -314 -83 -465 -26 -71 -52 -154 -59 -183 -36 -171 14 -289
239 -562 56 -69 114 -142 128 -162 53 -81 67 -241 32 -387 -51 -211 -193 -354
-401 -405 -126 -31 -312 -15 -410 34 -22 12 -73 52 -113 90 -93 89 -124 153
-133 274 -11 162 33 284 143 393 102 103 240 150 362 125 138 -29 267 -126
296 -222 20 -67 20 -101 0 -198 -38 -188 -118 -270 -269 -280 -63 -3 -76 -1
-125 25 -104 55 -144 141 -120 257 14 67 48 111 105 137 64 29 115 25 159 -14
35 -30 38 -36 38 -87 -1 -49 -4 -58 -33 -83 -26 -24 -37 -28 -63 -22 -65 13
-81 11 -81 -10 0 -14 15 -27 48 -44 43 -21 53 -22 87 -12 158 47 189 255 52
354 -39 28 -53 32 -120 35 -71 4 -82 1 -141 -30 -35 -18 -77 -49 -93 -68 -63
-79 -87 -231 -52 -334 23 -68 99 -147 175 -181 57 -25 69 -27 163 -23 83 3
111 9 158 30 142 66 230 225 232 418 2 284 -157 457 -455 495 -44 5 -47 8 -70
57 -22 46 -24 65 -24 182 0 150 10 179 105 321 68 101 166 304 181 375 17 82
36 224 31 238 -2 7 -11 12 -21 12 -13 0 -25 -25 -50 -105 -49 -156 -84 -224
-264 -508 -31 -48 -65 -116 -76 -150 -45 -137 -51 -314 -12 -402 l18 -41 -71
-32 c-78 -35 -157 -98 -216 -173 l-37 -47 -6 72 c-5 60 -21 126 -54 225 -3 9
11 -10 32 -41 36 -56 60 -72 71 -45 3 8 -10 49 -27 93 -61 148 -50 318 31 489
43 91 112 169 248 280 125 102 239 227 292 320 58 102 66 133 106 404 l6 34
22 -39 c12 -21 34 -65 49 -97z"/>
</g>
</svg>`

export { waterSymbol, airSymbol, earthSymbol, fireSymbol };