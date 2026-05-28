// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:10 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9P56rmptzQNyGn3gpwlrwAFJM6h0rRSfUvPGjfsx2lw+yx6EwmU8vfb6zHbPapZnkMpm7j3q36I+rGbj+SxBpa/M7dh708/nq7nIUkoggSbPF9rytzEunOCTgkZikK+Bl49XcTMZPakJGETu+0oXgk73Vm8/8okC5NihGghtaiTJL9/jR4SNYsLg49WDY4vPxdtxo9CIuMSXwztbQwGKNkVWWqusDg8r8cyZXjPKYpaEiraBCuiwynemMkAS9ZnjJWo9Ca4vpKk8arngowQ3RfTz0yy9yRK9ZuFbe4KZcdVcvQHPkjYiw9WsfJc9b7Hyz6rXFXfVUXPqE9UBXPUj++0JwmFEtHGQzPkJYqTpcxPQY4Zo1MEBudtlRg7ixdWKhkyEwiI0lLvaAwPtq0Tf5H2JDHxTAgbZLk8wI0s0IVP4WzrkeYppiNT4vlWE7ggZOLBK4j5qhe2/2++RuFod1G7JuQtpmjEuYemlkH9sJ8LTgDDWJJ+ybeWPaEocYPrOnsnAQOeumVz5iE9wlY5t2nyFSN6vANOP4TuvOZdXBIZWN9/JXBtjh4k4w5TRqxRCUO/RX6/c9u2y0AFOSOznxa4RRJRD+jRr6pBjU1zqVI/6IZ7gRO8zGJC3M7i/Bu1qGirotJsH6Z/vFBKNyd7neJKNtK4qRK4uohOY2gLYZwLJnvWGmwNcWQZjoda/HEs1RtzYsRv3MAc8L57RwCObVQNrrdu13JQzXUuda+eyujEfcDC8LlxbcWoVEy7bZLgdgsExaPzJVvtl31F9polUbBznxmKhvAKDfdk0J11mXHii1LSEhfXdjbdW1ARfppX4fNmfaa9BiuuI/FMaIYRgu9Q0avifXa7WZrOUrB5jouarK9+eEki1gX+bRm1cpemY6h6Mb4jwccE5hoZJns88OLswSYBmaRteOuWhlyD5dusMkAMi4PwefYtZTexdolVvE3Mx7OKGxmitOzr2VDTqrqwP5DEE70tYszfC8p52tcS1WGo4WEH/vwYwK/Q4CRXGIIo49W1xuRyiuCI0gCDR73nUfaIz6Ai6WihujD27ycamtrGh5ykkd6klbeThdhPGHeUOZLZa4NmQG2bgpNohY0sLCTafCnOcI8PK54viN3JvME67v6PAxV8xyGlDjGKrHmDH2pBHtOFfBtDxGXVkjgFqEAA4xx+BO07Zv2cnO+ukVTl/OqKdrnExYOSpdlRw6VesvrLZGh6kU3T6GPwxRdUh4+lmvBeC5EU5R2jz8AuzCyW8IvZj0SxCc+lz8OCKIv/eVH1OMKv1kqcrTfg6qISTAQiXZx+GqFcMruVcoxuIwMl5tRr+DJF4FVsVteM9I8itYfhlwZuBPO+8EUHBNt4UfxW1adb9m8vcyuofhWbcAo1tPqEEeC+PyKKO1v3HauZRLkVzeChyzTzXOsbipuYyDlUQ/F7lKEcvN34lnHDREgrwFnt/B+1pMeoRsCbw6qtm6TxzQLuSB711hxLo8uAzG874S4Jcp7WBfhmuVlwm44yMRZw82G6OSbIYKbqQgMV+gLGpyWobDQnYqMEzGnaPqZgVXNv2DvtnrrLwbfKw1W3GxzgzE7cu3zpkTtAEblBolcuPe6xngEv/anGOvNcnjXeXHAVXwhLjdRbGhfskZnBVJsk8XOtVyk/wcOEP3p0JCMFFIQWijvvaQ6IMPCLaJ4m3fKgOh2TwYGI1cUeeOHVg2mg8KiONNsATt7CtVouV0ckIxDfrlrkbvLsRz7DWzqWQo8iBch43IG1yoap8m3m8WbpjDo3Ag/zyHvMnjX+kFPuzoLtwDY=';const _IH='c32cbe88a0bfd5baa0b18763da6485b1db5f8ce6cc6a5bd4295386cd70ac49f7';let _src;

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
