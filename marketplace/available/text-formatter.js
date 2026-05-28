// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1MTiE85/N7PnYz4Q+mx8saJNgC2i0X8L3Uh8hR+0YzD0ZqFilwo/bVPY8WH99Dy6Kh8PrJeVwXIvkz10FnNPIqR975NTeVLQeRpDPxjcXVsjxfxufcJvqMZiQGjav8EMrS0Toh5AsodbHqDNEmTHSw7/6FI4Q5vx+w02ZhPjqAH/dSedWqh1J3lxsp2KfPtI1mXSsWAx8Irh5gfb59c9OATrTJsJDzUvSEg3t8BAWHk9dEityLUOqAc8jcp8IhyovrVkDtgFeo1U+WUpq143QNHKwxY7zs0WTzNIEC7kijZa8iDKXmA/Bz17+rz7p84vnpV/vB16OFjw09byLSEv7i5qLPnRfl2FhzoZXusvyE+wPzIRKVEQYqIot1kmKaqYx/7dqAwFSweNSllqihuCnRW4HIEVMWiWfxaUZzsQI/RC2lckc4ZEurmBtCm98Bax4pFTZqAaV0B52oOvFkQ7XJj3FpgSWYMYUxiuykcm2hecw9Q5LUqFDzOup9rPbzYErHaBKOYsfbg9yIUPjUT9LvoPKCIDtqq2N+UZXOxMvjcBkczRDO5ckIGqKBJ6l0TfLjgYIlBZdxcbOop0DTy7MqE5lWI2/8ATNvERfiKqw2a5GxoqV3s15c+DG2W8h6+60mgpearqvnBUioKfgzr9gljr6vFVK4V6i8a6RqGiNUAlpPeVFJ2aiLNDUueGDM32J2TQdjHy3S5v2uCE8oR0hnyvgSs/qoWMbV6tEY12zEAheBz0SLYkGSa4Z5jVheOs8d0WabmLfG8HzQYfc/IPMSSCczTrNtZu4DgOUJzKAChEkQSjdSTYA2loH7WmSOGixbC4TqRjttcplgjqBIHr6xNQ16ZZXH3+uyyvmyoJMleV3f6AKhXUvuxqtvIjrN8+EQ5gk5Ty2DRsmgPFpMFeqN0HcuUeGp0Hli3Ga+6CBqJ5fcR3khzyjJUG0qj45NjrSHwtoHBORjBsxyGwAgqBC6UCL5l5i//0v7XiJaa8tw6E6zHjDXerAul9HUBQrqm31Htx5Ob0x7UsoPrmp1E4CqGQo5L+A1iUDnlaMi1zNiR+ToauJNLNBqpvWdcZ/e3uL9DlGvnlPXjlEFJIjJj+oPRv5x2bWWo3mhQQ8JhwOu23pRTNAE6uYNVruQTLk7eBe4nMqnp/nPGll3Xo8wSRn5ywdB/N8ROWPjUyqClBcmFu+IpelgKUfXF97K3jC4bj5sVUkPn8QM+7l66MTRDMYMzPEW8lN/841jDNlAYenxxWylUlfXvj/6gCr+fxAQ6W4UgpNdYbtYOGPNOdd2HycoJCLCKAOjNrzIX2grX1H92L6qn0aHCj51l/BqAmUztWWpsC04T9LdsazNC96up7X76WaRufFBmysQTo85ffd1rRJC0v65qqsuUyN+zquthVUvmLQOpF+uftk0Jg24gmx9e6lHWqIKN5PWIdAefV4CVjAxcUBdtCQoOocsck0ZHE0HosfvYPG8wWjQEH3xaxrli0UAm+H283MclmQYT5AR7cGI43pjy24wdnrc+HZyuDxAWGL5z/ktyrxUS0TLJLNrGxhw2oiS1g+RmNkTJosO+N5JhsytqDBJoo9cKkFGMv6o60zAofaKdGUIjpUNAMdQiZWsVJydhvEJr3dh+QIFHHDOKPsHFwkssGhqc9Lzh5jqzpcGyo';const _IH='f636fa01d85199050b9284c0b00c448fbafe6cf7791b29ddee9da19999c6cbb6';let _src;

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
