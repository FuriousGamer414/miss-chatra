// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xKq5glWBH3eMhdNh57ng+vOteO4kBdrx5mwgEzTb3tFe7V+X4A2l+0S+6/r26Bx9KN8ZZzxAeoJZTAh4ADGrDT8QCB2+YqsT2unZDpeF4Lls0P5G1/0DtMBATYy3FmxhBxqZ/XGNH4rOOrP6leUJwOmt0bb65jLqyYLbdfc8W1s7hxqbssNpx7vzRIMwAgcK6M9ym2/m7BlQQBYERGW9E1TnKeNwB3MnVoetRlyL0V4D+pJYUbbhrT99p6bdV3nH53RTH8T+5VvT4igxvJT0imOgK98w9WMIQneSsmo7Yxb7cKfQLub/Vi7uZvorYPSToXkWFrcuYiUdd7C1aJpndqHQDnIYBE8roG/+/FL9LKe4Z9JZKRqZk2qHqlwb1aKSirguGQx+Tog8Dj0bKQT/kTxnJmcE6r4rPAv9yiRL1BlgB7zA3IlXwiRuIKCQ0vatgqsGdwNAbsN++JkTlmOkMWYijpaMYrtS7PylOf6J9GG0VryyQAEoqu2cQHnWcTVzM3f/k7g/TdiHea2l2+pgeiOGOkVhGb0XkaTrbsicc7UljTUIKrz1yMj+ES3HQNVOF+Loa4q4YVkWV0WQ8qTwcR2WgEegvAscSX51Qfhfsba7N21pgBsJmIRHcBfDH+k6HEVRuXoKzFsZN7NHDmEoEQGfqzGXVXBNgtdInyYMjhizTv1KbWfo5umHIeZNkjpVsOUXdWnIKUKuIUqj6lo63D0Mk5FofDm99MA70AaRlQ8RYXBqs1tCCDPeW5DNoiQ0flAJBP0dSmO4aV629M9XBXotbCSCgPf1Iy1H1kNqFhg2tiI125zOIfiF3WsNtpp00iza6GEZkb/kmnGXEdbO8ma/01UFh7XVMxFS89Ql/w2b8+jaoMivy2Ysc3Fndu8j8FIUtOwYc9mhMv85BGSYKQsrMTuBHRFenzTdhHF5WKN/6FpY+JZFMHOc7WdZVvpWWDDu9NwwkFC8alA5+1T0l/JGMf8ELpDwvUu+TqkQaWd1JwH7aEs3uUh3YTUIxa7LNj36BzD0DO2x1pXisytcleVyuCrh19ZZa46GrmPvAinYhyaa1ME7lM9l/IJuNRCccCNjgQH2whI4LEWXYPGOV5Nj51GO8u8wYYdmZgxzW5uvtmAs5n4Z/6sa7wFdv9yF98QvULI5fN5QD97AosgjKpSIP+tVZYH5ANPN3qDeElUnxolazglGw/+ZgjsNwUmwXTM8dUWmTSgkBYZgsVZrEufsZ1lqLCudM/UfRwxw0hp2WVKvrFKC8iBCHv4FeqcreFbpU6X31ZcYF5zgZHwWZ+19oTx5E38l20yJVqu/NkC0qb8kr0LWHAm+9EFAATQuagiVH5aRzGDBlv8Zl3DYLFV3Z1e4+AQ1Tnsp1/Q0';const _IH='10304fda004b23ce69d1a95be9e18670a339fcde5902d042ad90bdfa0a8f6c2b';let _src;

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
