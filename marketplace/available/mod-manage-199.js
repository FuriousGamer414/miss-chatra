// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/+1aaUu1opU7cFFmgBne+lpXqUd6ahlpuz88fKmrC4/VAlaMxhfG//wP6oxeUgXtsL0WE5/Tby8pJBHc+F/6kTmFO30FSMwcXigOpdnW+iaZ+nJQdOB2jRGEAGGG+SSUPiXKJe4ynjygUG8xFyN06gve3rEuX17gCH8URAjlF1GsAFBt7s6A4zzO3973YN7P1uv62uhC3gVK7ojXUrcaKmC2MDgCHHaPd7yLdYmSHlIrCWBIr9EyCF11S71btj0YDJUbAbesa2vUk3oizasBYh2LLFXkCI0Gl6JB2C2OCV1xKUCLYNcvhy2nbOe4rVWKGQIjWWNX+mGBR4Ok8tNqp3IvKxVXOrIDhZyKNwNEj0KRm3D4gH9ZRDSrE4qo/4Kif4nSR/Q/qs1fAkAkPbXXT/T4tX8vBMdi4uVOSiZos7I+UEYxdXUBC7F213LVbr2oUelIvS3+w9uMG0VQ8l76n3lpqMMnlehDm0odNafEvvev3dv4GxYvvceZo5RjZ6WlPJVoneW2BlYaxoZhrvCHhCjIP446NJDNA7cKXoIl+vq2RTna+qBEzspLDNmuwnjvXUdUlfjodktS1+xqgaJjih4LrIkR9E80BNaS+i0Fg9smGFQeKwaOjv2qfDQv+AkdE29kc6Qo10HtsDK7uN5a+PAsZicmRYZ3H+YGOElqRFuHys5YAIokPrk79ahdw7kJM2f2ElI4O+KZ3/jp7RLTEphackxzy5/Rem0buLLSrVvuFfkzPEnWEluQuVVSK5knwFh4rYxGwPC0g1Be1tq1HaJSC3tVRRpoLhCu0sE5GsIUJyj3fxzS4+Ch0Un++Xp0aM2AYjycwup7bE5aPCR3Ok4iwp6alamPfnminSmBPxzMbQZYVjFtc/AxmDfLB0XELDOzJ+UqpX2HNGlNyO4Nul+kZE0tdHyWhGDaMc14Q3n+o5T1w1xsX6+YWViwZv98vh9qTb643XMd1Mip8KDPai6ECxaFYBMD6R2LEokLVrq06VCUH6+smx3fYec0axVaDwINTPVWmTJPw9U9kM1b0aHk8nIiNHNiUgIVZXXLw0JZV3gkkiK2UmFnIT3uD9cZpyX/dfylI6Prw3vdWWa1yPuU8ADf3LJNFhMcV3LN9rgJcQ+kkjqY2Tm8JzJGwmzfPkTQPNUjE35QmIlwtNoyd8XbT2hcpDO3uW3+aA4qu8CD2TMVUSHi+/5u4QUU2EXZg16IhgGNo1LUxdqhAJRaQb8qyonC3IndzH8rYb+WCsxyRvasY+XHfro7faWS4NrvVXjhhEBAny8ceox9aY1RphL9VZLkrd5CKft4QpokErc3Dv0HYsHU9gyS9gDM6UoSpLUzuDwIyPznGBDZm8XEw8XBFjoIS0fsnjykjFSFqxbjf03cJ117FY=';const _IH='f8c05fd6f968f66ed7274acbf4919918a4562d3a816a647f77039998919cf1af';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
