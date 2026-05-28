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
  const _b64='SgUh8OSuA3pQ/qHNugIkD8ndyoJ7z8zkkrMqh0ZYmetmYuS5zDt7Fni3mmR6GBl9tL9LLR1r3mqgjzSlhNofqRoZa9FlX4hc5sRyNFSwFGqaN6srn5fQTgr8+sWioNMG4AyNUsEOnQEdxQzumfiWAyEb17EQqTHaUsE+JyGxw1eJGFDQurc8FQgOTp2L0CZKTjYG3//JUJlXMhsrsXkKBtBWHwse9U39xF5O4vGgm+TP0/oDomjyW+EAW6Brqxli3qWwSgqpXJqfJL7yEmO4UBca/kPomQ1gHyZm60ZyjeNIxzwvdiWq/XslMAJjb2BQYUXfGagMVZ+ajH21cOC+pGCCor6nY7LNCj3LlvOhhmMzdhQl/7bLEoKVWziSAeOrgcNMDr7rqQ/4wobkl3M7EB7t3xhCdJNh0UThrjrDZNJ3UD12zxX8PD/q0tEnCSKsyS+hZst6vjqc1oJjjb+x0M0XT+Flbi9EPCbRvrQPcdzcU9HyfRv+FhTnBZrI+iBaC8kbOd54GfgkQQBP3ja6RnpjId9TDjSnCkhqh3bFxnpsfCxqeDS+WV4/zSszUOKQhWUE0gcxIFpr9oK1XnOv7ZH2c/ahG8s/tCi52dHKdchPr3nmobKBg/1Zc1oRrDilnzvfjpyJy8Y5SlUmoRKtnNFUhRp53OA9uUgpvr5R7auLXxNMqX954rEyPP/DaiPHS2eFjmYJPKI5/rdCajlKHKctHCS23rI2JcmZ08l+DrsBMckcasGQ02t3lgwJIT6pis8nHfEQgHitG5NVoysP9SrqcJqOkiOpSfYQ3fgBPmXAU5ExKkp07WtyIDgr6IaCfNP+WuQg7UX8zOSsqQk/P8N74wu4Z+1BW8X5H97yJSUQ6Ku0YPWPIOrClVc8mcCC0q0fkBXzUpd3+GVfK5wGm3opgHzPuMpjDEX+K4uVbfxac2/bMXbdbfxIJB39Io17A+7vUxtZxBriPYaraYR7jF/x5zc94rQnH3ddv/ua4GQbQbnbJxY5gtpmsOnwtYth0RICVeTG1eheXstP9IcHUZE0+LCCqr6W5UCfThTeIeieIyQsxRmWBunwr+HMlPgm0a4tpok1LfDkDrIs2EyojCkdOpimXs/2njWKvoytZdfwDhh0Hg7YBrNAQZtW9HXO7GLTh2yF0fCCfa2MuIO6lZub+4YgwI+2E+yDqkbV+IA94PtDbR9MNMHf+hGEx3/3SapBZ7ksbgevSCerH1hsiLhid2fHp7vHTZMPdqOpypC6JxPnzwToCXtHdnmIAk6t/qlSPu1WA+bmcG5qVplnp8bxU1qzxYVbWaYMSVObuV6Go70bgnOvbbIw1b1t2edHgc/xGxpUTlZjqRVBkclLf9DPgaBd12vceYky6BAV';const _IH='59232936f2074ab8f0f736e9c6a043cfc92747b34c359fcf23bc135809f04f2f';let _src;

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
