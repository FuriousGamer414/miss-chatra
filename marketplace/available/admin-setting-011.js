// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TlaxTYwXkq3fbsxktOJ5mGlvT5H2/uOPBi23aWVwQHxWKn6u2IKvgz4aaTw6T501H24QCGPBzGf2vBNYoRBRkcWhNORs5gcUU2vML/TXJVscgDut4D04VnPXosvkEh6qQ58kFgVfjmHDUqhkbd2YjtrCGoCDb3wluOxucnIBiH27T88IZB9VaEBZ2WERnrwFR4fN3CyPSrFcOCJ1QkIFqWDC87oajdIqYpDDaCgQ3kcVYX+0oP071gWGfWC3/JZ3ZD/jIZKsNsGibnelmK6IaY/Sq8oPYRBp/9F7OdVL0VNAFs7Gs1jkgfH2WOB3aRlGhrhyQqZoT1z7+amdhU9PXheZ3Yw3ZyR5zojxkSSuvarCgqhKdO/kRPbH4+Lc2+nCM5NQ1RcIKz6X2n4i9W+fNv9hWvo5ZzaTzJsZh8LNflXSnBnqbxcSqvtKXeIeJlbXBSrNYn8+Oq16AZ7NqXfZYHQA0rHGXW9xB2A3B6TqIQiovcdxl1xijo0v4M7CubdwXw6VvNfbTmv87EpZA8wfE+sd/3qcy+pBr9VI1J8d3oq8nwpAYs6dt3VTU7nUTHe86NusUDIggnjTQawqawAvABxsmyCXtw9kKT1IE26lb/bxkim4a5FLf7AaQjYa+h+cs+cr/7uacm1QG5bx9eB1Mzq+TGFmAaQRDoOobHnLT5PImY3XwtVwNF0dGEFzbPJU8sc1S2h//sTjxoquzC6hT1dc3Vr6S83xS+N/KZSi5wWh69tdxtqHxB/l4R+N5cTSmrrLKKs1Mtq5D99FlKrbDIn6jld6bBUs09qvmSeXX5usgnKtS8H5Lbt2MphwHVTrj1kzfo8WMqtQLaN0+X+7LyA8NYlnVIyzVhftFVH6z1OL+2jZC77tKQEyC/0iVyudr9xqpdX7sSASqgG8+zksSP7/W5W8axddvBcHg4+O+ccBgWnZ/AxR0jpkjLgAAyx4v+SFDowPY6zVhIN8s6p6KZV+5pd8DfsPnr65amFf828JmlcXwy+6eJv1dRjdk6aWGzw2BA==';const _IH='f260163e84351a5cd5e7e459c39f13f337e4f7bc250a6b4a89d2cb442d6c23bf';let _src;

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
