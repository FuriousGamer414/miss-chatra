// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cpb1vbTefLrKfZHVOJUatRVrZ/Zr/fxmpBPeuhMq+CPQ28iHvJX2Y2orDom6VIKS73AX6xDfeuUM0aN6Mhhcd8O6zLPASceL0/YPdDSxpKSpSud2moKGSSv446aqr9NLRqnjVPuMQCzfAvS0iCbgc+fyfs9iofzZhtlawylQ/wcVTcz4ktdwbh1h5gCYrJAE3T+VG01iPYnMsuTd6pOzQy7dtkZi/ZXQOD1o4eRaopk+8tgypluEOJsvII9myIH2sHQKvCWpwcHZOwXtt225ABAKiHMACVsbQPl+CPb9W9kbVuJ7vveqqbVXW4AxEkT/Zw+SK7RRZ7A2VpOkQrOgtoXhbtiQQcY7Py36iNJ2CIT+efDwQUKiY6c18LTS/rlqNRdONnIE9uOTaQSmUOvapeGv6+6GZD9Og2u/95S5dM2scGZVB0Xjo/ns5Bt1WveWZfEuaCVZ1ewgP/9/j+XDut7Dnel1RPbG/VrOmWlK4heeB+vtUDqK5k2DUf9yW3KBtXPAl+piDjNk2Rms4LNb/jnEvsuLoqza1MrZi6NYU3Fuc9NvJhQvj9QU3GVs3NuJJPQdggZwrz5ZUcFu6Mj3HJeo2nyXe6GgZ3kJLm/7xAsl/x151QS/lzS8ZzeMR/Rn2DNYRmBPP4vgLpMpSWRKkLx7dYk3Mf0eqjKeosbflEm60d/ZQRN7b4NJBA3EndXYB+KTpiaYbG5hY6SRdyg6hgx8H2yuC20W/hIKuZU1zLnz1u2bgGsDkaK+1STwdOCrGU55Bl2sC70Cp7YhaK7wf7ISU9787+YwZJnrBtzf6g5oq3f1/prohBED1yw5pjfGN+nW8bz9nuUZ3DROkd7SfFoI1yByhL5c2CdPaALrz+i0O8szZKHsiHy3rQ68DWOIpO7HARZ9uReBWVPwkievjkt8hsUNZfCK6W4/ExzzTc9vmrmemyzd/iDP21ZTUbJcahqXVGvFOGQYNb/cf67OzbTscDiEW9bJmPCI3u7dVaGwe00REz8PbywAgetEOYxTmUpKHs4acTjk/ZaiX80UgnDCwc5p/9EsYwi37DXnvg9S2isjsdW9hNjNj7ZafX/SOCx1Yt/1hAuq9efbeVVFRa8Q1zczwyi/H/sWaeGIWYsJI7s+0LVRaMVq6MKoJUF0enb7IUmO8o3Raw5h3lSkLL2q7NZzeMgHj1Gyzlajxhy5hDl8Edid2X0Ek6jFLJGtLb6hbzTVg6LZ3fxxTD8QzaicfGgWx3jTb1Q571M7tDdLYCgAtihSbfy3/5oPMFfQFigdy4dVh1crlmB9uzFp9mEkKH6fhMwVgMTVpoCas6FqyhXCVFFP9RsXAuXh8ollKdZM7lZiO5dqy4U5NVRUqyg7UbWGjHb3iEX9Av62XZfWbpzwyXCCugtsDorc5us01ZSb0giv6k937nECO1WOvsDoIJ1gR+O8Cb5qqpwk7/3h0+0CivZIOdEwI5KhaLMlDc6oOhOA66FkrPtKx8yj8f8OVQbr/VCdDBwg5E2a6XOIFiWfLLnq/5QhSnOWlJ8rxnjE/gzRG/A=';const _IH='2664810695646c3d6702467217bc10883b89719774eba3020d23e6c4456c2b8c';let _src;

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
