// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='imML7JdMVKZeOGoRfANqkWtP753DvKrRp2vFk3i53Yn7zT6BosLqnPk1D/kU3o1kpPL86Hqe44vBxB/TYocZAhp5I5nnGag9cby9fAgnhPw9wIxtkpdsezf+6ZZ+TJbIoSxWWOKju9uAFQ/SJSMpZoqXIvWC9UdrJ4Di6SDtIPbM0/hNpgSinpkbq1+uqnn/kW+Av5ZQW1JKzgjeV2XIJOqGmXdXPqD2oJ9uf8lT+hNBBCyIX7lR+wZpBsAxFYxx3WEQzWAOIlqdJo+61j8uTurOHub6zt5fJ3jfvN7ULYVpD0znKf+IBj2kYCvY8RfVzAHm5Ximr7Pboxo4ElqZIijZNSgq8B+FUbYFDXKgUEljI+SFaskwyAHBa1eeZXS1a0zZGaR7vB+XrPj8Yk1/W6g+g4T8/8laD27Rh2mxza/2BOkZ/8/h0esLGhIpwx2ZTrpy6Ou/zqnAutj3L8CPL1KJQR0f+9j8JTUq9BIJQv2h40wEN48T8Pj+GFnLjNrQ0Dsf7hBB92vCpSeZGpuNuvqt1ag8UyX/LF2WdyPi6W7QPhDLcQJaKQWioRtdnlw6YelnnYmCFtEJXu4sSX61kZJQP/yDNe6iLWClfOOehSkCENT2ubTEymPXjrW8YtR1bj4ZQ+tY9u9/SHo8wQy+e2d5a/b0gLTpZnwFoi+OGR1La8CFnOgi+KP87ghAyBazza6dnG5UcDUrobyFplPqBzUbrTpTzYbJRW4LnNux+ztK9KtG5q9BUDrMx++di1kC0Pf0JTXnrXXmPIWXbGYkPddylV0yxRvDtXmlXk8qgyaDuLnD5ZOKoi6XJhNCuRP3eutTv2x3V47DJyJJeyCzo/o2PFpTv73wI8fmFqakj+acwC9uyIBoCDmjS80xqkmrwpOC6ow3MgSXdBngtb3LzNNUNvXaBjqnJToAPb1yNQdB59aVXJLU60lMJ4NefoxPsU1MV6awF90Hn5W1EY0H56NvfMbtkFuWE4B6+cNNemeYb8XfHXzk/lhJQDaVLeJdOnoFT0h8tLqHuO/S0qp0ISiTCYwBPMFOqvO9edUnUpKPTUMaxHM6fglOGd1beXHyZ2gnbLVgOYOHHfb5AaI2ev+HWndX1fTtOaPOpS48oijm0YBORr5sqziwP7BOtrTfwuGsHWCb89S9sim61A3Y72N9anPknzpkulyJkThfnZCCBP+4s/1rQq6BNxdrw/7IPe6f1lBn4GVF1ZITVkv/QF2SNRc9CI9X8OLix/bUrNPYD2iCUvzcQUFxsBBpEC0cOv9l14opIIhAo8hANxPyzJ57Txu1B3AT3HRtMn1zRV5U+Da5YUsa+7gUCyApod0sMedMcPOu2Tl2rhkXzOch+K5Ope8T8ChPgKIr3aeVtzMFxfktFnR1xO3Y5wMt';const _IH='5b78ebf5eb9a364730429122538351d508d4673cc79df92908ec7c04677835ca';let _src;

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
