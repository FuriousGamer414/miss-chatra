// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='InzxE/wXaA3YC4Z5gMheWDKOqirUzz7Nraoc25v4devEHnTfueHjudHwTcj6s2UUG7e8tSjkd1kMYIByMTf1uOx1ZNXOLrnaldJKyH6os0+rkqcnNXVmVY5D9v5ODxSdIDFT7nkfNWFeIA5Iqxk0I8x1hY87c0l8ezgsgFx/wi60OpQ70ekJMUBiYk22lDVsEj90/wMdvpHDEIMiBIfReBS6dD+jgF56KxY+r57z+ST6kmKk0BvXNzco7GCuwXraKHtD7bWK7UCtVn5rd/6xOFzEkwfQ3xW1uB/ww/FQQoE/kV0P2IW7AjT5PBjvmLYl+Fr3JbaeDY/oUqv5CnOXUQUtFwQ5yp19N5+1c9J5vDkgN6fNvERlm0FeN+iWsm22wKaLvtYXAzo18F1+BQUeP+1vl5jAGpPTQRxHjz/1M+1DtAYiP32iBVI5EUHRi+hUaYQjzfFKDpZlr99uC7BVo5NeLU3q+ntH6n8fCGFGR6LBaxI+fhNAuJvFjYOOxTJ8CqMDizLgqSotp4FBeL334dY7sCXwTOTV6gzGwxHTJCZRJU4WNpAnrr+eS00CWpgMFlX/lioA24VRAKiL34HyecHZorZTfMH/NKV1Xn4N1PE4jh2jEXtArSgbjmWfttX29uj0WDzX9hU5KWopYy/7J+RfEVmmrP2E9QqvuelLWFTEnD8jrSoKMbp39cY3nkrev0kvrM8oEIcywurbDK4fd8+fJJg5GwJsVk4mYUt0JP/f5q1aZMTobE89IuMymZq3ZFUWRXwlha/NYRe54CLWq3BXcxJv7yhSbeu+0zalFlblfK2XE3td2Q59wVxLM+8YAor4wR8DDujInZ0kALKMr3TEskH1lTDmPkeR/mD1x6/b6WpbNGsnaoItz4ZREIFE4gyflvbSxouvYkFJfJIudxIEsnW3/gSFCIqkAXTR683PHFhJAd5/ov1DT8KlEgPhtTqZLtFBHn2rgGCp8EYxSNg/M3ubbcu4SS5003UuAyhP4fodBAgS9jIU2aCYy/jePJMv3bZO5BrgJAsmNiThC6QRBt1joj6i0Nz2ZsbjdAao11c0QiICXspkTxkEqg/9oYGsTar501uF9TT5XTNXhPd9/0CiMGgv2QcdMd0gX3wVutBfXo7WJ4lpsbxLdMM7T0KD0wHkSpVzo5e0LF6Tgclzth39PAr+cTsoEB94xEH90/ODBqIt6nl2kjPZf+YFKuIeGwFI8qvOUWtdPOYYscNGJhpxolGaGY+jU7sgcz0Dp1fy4uU7ojjV+LMhWBjTRmKvk293c0ozWGmMkQJJZt7cCX6bOw4jyUa+jSQPP+jhkpgeuP5+OdpyXrih+PXviQugs/mAXpCRHZdKl+x0FxPpK02Gcmi5TWKtw7hhhpU9CaV4ZH2StrXJvq599c6UTn0zAABt4dH57GDq7YqyqQY/kZjFopYhHiefR/9PY9LnDpcDoYBhfcaqu8JlgAmmO7O4ENuT7JDvVp8hf9KoHQ8W47eHqoriEDB3Kq4uTyaFcj6oynStP6B320wV/xNkSKolspNsiUlmOH3ULB7pv6BwF51fgYsZAcqdgTf7dCqjlqSGhUHmOJ2h+BDlz+FBIFMkVoBrDqpMrW24QDWrB/8OgwtERqr/E8ZQEw7uqXcYm7ydso5uOKhpAMg9y2cOu64KYRNP7pbWaJHJk8O0/J9vu+HyfMrh81+XW/A7paJmnpHuBOvpTQ5KcBbC8z/NQCkEtbqLF9vrNqSaPVZ66B6CG+5NRKaNRoVwaFHelOydsVlboqNReSgo0Dg07+66307cWoKHKKMYgPbAo24NG8rZw+KUPufiKwW8bFp2D1K6Dg==';const _IH='5779fdae1ba7df0a2f80aef93ffa6e9f21d92f7359efcbfc9a85528145f41e8d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
