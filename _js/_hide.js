import { each } from './_helpers'

let myClasses = document.querySelectorAll('.hide'),
    i = 0,
    l = myClasses.length;

for (i; i < l; i++) {
    myClasses[i].style.position = 'absolute';
    myClasses[i].style.top = '-99999em';
    myClasses[i].style.left = 'auto';
    myClasses[i].style.width = '1px';
    myClasses[i].style.height = '1px';
    myClasses[i].style.overflow = 'hidden';
}
