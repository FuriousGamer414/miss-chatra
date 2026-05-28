// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:13 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ08R/ITg2EcpNkkiv/kjUdpnS0rjV/pziMzv9ePrRJo5PoFElK0SKP8xHQXQgcdEiIsZsLPGJDSCsiheQ2spoVYyOs9rDYM8tsmaA3tlc3FGgtqT3Gw38gfZRKwaNrLvczfNQEg3cDKxNnoiSxXm01vpAMtMazR9FXM0XQT8MdxU/2MdxjkO0dGqTXsN0y38v8/6xMFGMOgOCqxZuueavU5HcF2DujFxkmcPcOaxsM4R/WH74pyLzom8iQud+KyFhfLfYjxdHb4O19sG5SLaU5lnOvXnvun7SM+Aea4L2myTC9nrMRZ1cva5DtrTAd8n107iBkjPaLwM/sYeYssHqCocLJO/w5B9cs1QHsLfn/EWIJKxqxYbSf3izKgAuAkspllQSdcwIZRQgOQQqWPLaQdLCEbWkWDPNaa8sdMO7zLBjtkTIHuTy+imJwpD7HwVCpAWkEkvSNgQ8MhXd5hcAU3ud6YEaoylvmEDcfDFGG1VEeLC5j9Y3L4IuEUnVLAx62Rx3HcvBWrH+zsXJsp1a3iuV3k9eQkaE4dF14mnaAv2p8KjQLadQ8emPVUW5Xo2kcOrq8z2g/Lzm1zxSUSh6W3g4ORsdeA2lOkgJtKdVPwQwwhU5Juw16Dv6jQDMNGTIPfPRoimTeMGg/hA4gQwXZgjJTnQrMjg6DKTRvlkp2x7TGJns8LrmE431QE0eK4jNoMDViEFjQmTtx1NoMq9+fB8xvBf/PS/8uWJxUyVNeHm5CqQrVAzOr8L3ABjWBcMhv9XkWeoLekV9Kvq3n+TxxNSwNrUX2H6kLT0aFe7teZlGIrMQ/R996vXXMtohuzPjRhApulFXcvIyc4Z6/M2Twx9GyNAAdfFecrepvo70hukdlaDppnc1YXCHnfAzEkk31yrn/jtKONipybE2xjKHram+CGjOy+bWAyQa2bmZzZ8+9ueioJkD8umKyNY1Ys4SRqaBJdKtiTAafJOZ/BBw2I1ru49pAnBRATOXCGLpvZHLPHrwXrhpzBjk4BFU+4iEeYmBenOWdamWceG21dEwwUJ5wdCQk4UG2Yhyg7PPef3E5UyLYAdanJ5ARbvIXlGqHXfMZcSH5qsrHzBC0qw6VhdB1F7rzJJgwZFzLQtSI04v6O6X9lxeaGpqYlhbbsoOCD1YikJX0SUC6mQN8LzsOb4t9e5B03zA0EA+kWfYYeslhWTwJHeqq9uJwG5DZWQh+StynaTNuF3X9376/Hrs2qhHvl9WQ==';const _IH='31156c1b60905b2e05eea079fc11f764d34eb09238f7ac2cdc2215db58291dc7';let _src;

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
