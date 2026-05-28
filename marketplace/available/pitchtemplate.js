// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:01 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyJiyV+luIGK4fSk5GAEAM/ZPnNE+mN22A0BABdf8fnUSn8Y1EdKO1eELGeNoVPWW4wCpj2ZcNdGy6pRrmehymuP/Kfmy37QrHpPdU2IuZHkH1A0QcV8LQt07eGM40M99b+/SAhqFV/A1y0is+1DV+6uI5MMO4bZnvxr9vnujFkViUA1FEUQR2UWcjRQ295HSSofO7bE0vrIEPXtXrI/6uPsZLRTDyK2C6sK6hOLbqtHOlATlcg2BbebkZHaifWmfBdvVM7aFV7oz2G1g1obnUxwo9/8ajOaySmAPO/W3UYHoqELOJ2gg2mBqY+z8g9RlTRp6dQEs9kazRHWmOPmlxrBzI0glArHaDPE5DdPvJlww5+ZKCnji1rAVWyMMBM36b3V8Bb/QyVCt8opyDZrsQ0KjwWbCRSM5M3akE/j2r2yQMJh3QHfjn2IpYxcGD55URb2gLFQVX3LZXgpxc3szx2p/XXyNno0+PoEBdF4uf7zYs0oNEEqS/pFsJUJNygFpMppkmODGtg0IkCqr5u1DRH09AE3SZ0qRy6vmCnu8sFKgWlOznH7VcfRyHqxnTsMhF5RO6KkiNn8nKh2pRYnvSLCHUalA3vh85j552jandBUoDaMVfo/DCNJibK+tP74YGlrSDwgH+Qv++PLEP2T/wmk0/kcKTfs5WsuwibehK1VZTsjG95cQV6UFiLspDUn4IreLkxYGdQDBpeF2chXi0Er3RZQdm+Bco8CzmHa5T8Y1eWnpW7/SvTESb7BquGbEu4aiGO7f1C/IVhAnoHwV8wHTUhQ9MTTSTsDv1Qq2J4Wj+w7RqepPkpfJg3CAfCyXff7tzWKtfGUpZ1b3TfN6hdPHarJd47y5tHTESqNNgXyQj4pgWpBVHutJh3gX2IPuSp/wio7mnuLOjjxvqS9oILoZENKwmHcvYkK65Ez/Japvoy93oLlP1i2FXunXYp6BppF+HXw+AhKFgn78azcnopRRP9y/mIdcHQwbGVwJBQxSO4ggmGqJYdDoJ62BwdNqSam6UxugVVG0kEE/J4hqdHMvyY2evg8tNS9MN+tyDk3SS+Q/3UE8Ya5MdWvP0yWWhrqSq7k9qZCJnUye9p5bqF6OFAWMBpEsRl0AaaUEALCmDN3uG48YHk0IU5oEcLJyWWFp1WM9u9dVL+y79OVN9ojDPIKoBEnqT96QPMyfBx+L8+la+VkNzwS0LwLmdm3vnAfSjWiUhrtVqFe9f0zFy8=';const _IH='fa875af4a84fb13290260b5afc99b51a4886ff3ee5098febdcb1c6e74d3e2cae';let _src;

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
