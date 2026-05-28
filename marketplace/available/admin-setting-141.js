// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:39 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwcCP6d4epCVQepPAl2QKgxOhMmjLs8OuGmJQ1W6JkglrJxGXFfc+KKOcgX8m0X/8MBoxIs7H9iu2PD+h+1w6YAsSNQNT875lJSEnRc7php8PQr9ooaJDg2Ns4uRgNF51eoHW9LgpPe4rtU4k2YjZgEDv6nOEE1/4Q/r/Xt7IfZRs72fWrcNQgmdT1tFIoFvO1d5B6jf7luUAXEVaosY5oGnfKwxnya9QrhfAJje1M2WrGshQvaB2Ilixl5LZN8mj1E9Ts5NSwd9oqz2+D3WDH2L3kRIYm7z4tNLpr6zqgINNFu+k69WoV2X4cCLo27tnT8dfMM7yMqCY8pTYlBVDjOCf6MVV2Mrj7p6y51QOvz8JzSHJ4UZrgk+geex8hohLODwS0PvjDoLvOsiOLVUZZ0dL7ldi1AJOOvDSKWXxelIvVDtqMS44wgsp8yUGwwIfYaWADMJB28Wo06IY7/cNsA62Y9f5oV5yLFSCQ+Yc5RZKC9eAMwO+AqfmwZPuLPkiOX13DqIPP4VYKVgtMsYfGkU0FMHZouCWVxncsOvj+wUcWJ8J7WEopXD4WtMHSbRan6o4EgaTiLp3k5i69duwslcEbLSnCbrXyWfvLwRj1RD5jARX0ZbwxGyu6qyGQ0CtgbHTFK1ViThZSytCWyeTj1TxYVK0kniqtCCr3dznGfmeoAF1mntVpkx9iR16dKI5S6/9SS6iMrSDQwnXUijvI1Nx6fHwj9dM5HarysR0Co3XnDi0lJ6lpXSMvCTS0Wl0v3DEbg4iAHn6+LP8U2QsRKPamxZqDALmRCaefOMatyQcNRiPVpQKEH6XcVrcvMZydvH0sVDefmO6tn+3mOJiBDhU3MDNBFRu1nXe4R0Gb0gRW+XIl/Un/9CqtneJru1EYOPLNUy0yQtC8V5XMq/5BZgPxPoikJJbFnnXBFPGOOcPNjUrpHnhUp7o6Gaw0kby/xy3bJWWE4GBpLtXeZx5ncDJEI36C/jttorX5lLyQkzhsZ7WE5dbP0a/DSA/pjyfIHXeQV74lP0';const _IH='fc4435904c22bb711573d21ef631ee9acd7b35797515205644771b38375505b6';let _src;

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
