// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:43 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9mNj+aiabCyNUemO+C+u8rYghC/N28zy54wHQyLt/ZO5xOfCiNuws4nZVOWjiZbcbdu/HBeIzAut2DZ963457E4TVjktH1gJbBR5B6bsAI2xfRfC3yDUe9Aw1UetfrdFFWL5X6bqcZAcdm6R7N3XHX4n7RmzoFZ7Ry3ydlhVmQm56P6pi4PqPvg4gsedZmpONQaAa98SjhLkDwT7aQBIAPQdwwQwpQUWQy4p14EVmdNagfUKFtSErcxNdJigfBH9MnqgCYoOjZ6NvGuuyic8QVey0i+B+zw4fgseY1HChlq9o55SRNIwh5+WIkQxMphj4DSzUkZ4nLtgbbYPiW87YW3xH9waSlzAojn+J5sGDKpCUvHlK2xPxSXKiKvvmQRdmHXKuNBK8WBgwS8G8sqPHFh8FHdIHTr5Y2uRht0lrx3WauJpzNOzs7HEQBWvNeIbLGDLFXGHOAFOiKS1KyiZ8T7c/IHlXoVgd1cDvuNyBBpmOJC3rjDeGTdNBLo5Q7FcMitSvjCQ+bEvw8yqvcRUfiXtSfTM3aGlbSXL+RiBhQLk3CqDJFgJMvXU6xOyFRYuqg3mouuxt0S/As0XmZDjUKgzUFMFnN5zv16HcyVh1cflsQlfY7j3LFL2/QJLv8EJZurUWxllCLah5DAwrfZ6EC/6/d7EKUW5cUjrOdScZdbtZUYqiaUEYXpp6MxaiIkj/Oj8pngyUjgFUZvP3ajWvmD1pdrlM5abcdzfTZMqUIJZm4S33nPdTF7enpIPboD/M10AGjzQh6cueYgjrG6SBRsCayMwCBwZLfl4J38frImv9Cqufhz1vtwZHrfBvHVtqN7h+zsZEGud4gc0y/BwVFq8+DaYvdd8bbKJXHgPoQf4StA8prB6kHz85lpms1XQQ4f+0WMs3cVTM/t+bmS9dwlNtuGxDFmx7fGmoxjZwhfccTxk+HMS7M1Txl1xZpHEzhDg/vv8AOj1zhj88kEZYQMZ7KyMTFnn4fVyqaNC0c=';const _IH='b0aef14d310253193bb5f66e109870ddb3644054a0b932b787c66516eb5c8384';let _src;

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
