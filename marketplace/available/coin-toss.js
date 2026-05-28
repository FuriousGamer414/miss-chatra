// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:51 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2D9ajcnlvFTZ7PZ6hBYHOO+1K4b2lprhC4htEPA4emhmmjJ9M8p23Y+DTMU97pj5wjTBF43kl2RfJcgTbhppLP+qDMATERAlKyZ+OwIZnQXuO1Sj0TrWKPzxI9w15Br/6UcNWIhCYwTssFu3gl+kAxoBP3okhzm4Fuj10e2U/x5b/9bvZ5MD4I7D1JbroFMOmm2TVOo4JdgoWASoBnF1va+9NcE1GB1rjqGtEgcn9jy31zCF4Bc0yDrHWc2RXCwWagxTfHtb6l8qFFwHkZbEZediIzgABPYMcPQU7qapRTS6cPJL4YNogzpdQqMKvz3qTcbkWZRfV/MjmSC6Oc8tv/N97h2839agEJDixP7X1m1byaeI7HP2kWQqVFXLSQNPM9R86jvUJJhi7Mpjn+01qPiKN4Pzs/YNH1PniwCXNUAXHierXVRAS/F0uuqrGlU6yONu+V55SybfZlkbKtClfi6akOz1rH+cmVM1qCXG7+DevpDccXW+bhjZfs4EscrqpOM3NJ3Y9cXJt2yD+b7cRbp+HFed1n0lNiXl8Ab/Oh/3t3wutYumThRV/uC/9unj5+0Y+SQN9TMpjin2AcVtXlcVNSIO3raL0I1itb3mSnk08yTRnHVB6yoof3v4o/KgClR0cboV3EFGLqNiI2IvXrzV5rLbDYtgen4IgYZ7kLqHtEDNn7tpLVeSTqkvWJ8TxHk63gM1djZLL/wG0NQMHhG5idscaM9GrIZrPgCyEfuaWHSBLR209Dmy9nk04fYQ25Ah9s2z/uJcJ7zywzSlP4cgd+R4q9QnZ4=';const _IH='37673ff1fc73686fbbe12985a1e6cd83bb0a07eafc6712eaedbf576f13b5c332';let _src;

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
