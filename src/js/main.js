import modals from "./modules/modals";
import tabs from "./modules/tabs";
import forms from "./modules/forms";
import changeModalState from "./modules/changeModalState";
import timer from "./modules/timer";
import images from "./modules/images";
import './slider';

window.addEventListener('DOMContentLoaded', () => {
    "use strict";

    const ModalState = {};
    const deadline = '2023-11-15';
    
    changeModalState(ModalState);
    modals();
    tabs(".glazing_slider", ".glazing_block", ".glazing_content", "active");
    tabs(".decoration_slider", ".no_click", ".decoration_content > div > div", "after_click");
    tabs(".balcon_icons", ".balcon_icons_img", ".big_img > img", "do_image_more", "inline-block");
    forms(ModalState);
    timer('.container1', deadline);
    images();
})