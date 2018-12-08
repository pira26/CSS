'use strict';

const btn_active = () => {
    document.querySelector('.texto_centro').className = "texto_centro active_txt";
    document.querySelector('.cont_centrar').className = "cont_centrar activebtn";
    
    return setTimeout(() => {
        document.querySelector('.cont_centrar').className = "cont_centrar activebtn_fin";
        document.querySelector('.texto_centro').className = "texto_centro op_0";
    }, 15000);
}