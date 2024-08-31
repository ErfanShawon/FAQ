const navBtn = document.querySelector("nav .btn button");
const sidebar = document.querySelector('.Sidebar')

const sideBarOpen = () => {
    sidebar.classList.add('active');

};

navBtn.addEventListener("click", sideBarOpen);

const cancelBtn = document.querySelector(".cancelbtn");

const closesideBar = () => {
    sidebar.classList.remove('active');
}

cancelBtn.addEventListener('click', closesideBar);



const darkModeBtn = document.querySelector(".darkModeBtn");
const body = document.querySelector('body')

const darkMode = () => {
 body.classList.toggle('darkmood');
}
darkModeBtn.addEventListener('click', darkMode);

const faqs = Array.from(document.querySelectorAll('.faq'))

const faqToggle = (event) =>{
const currentTarget = event.currentTarget
    
if (currentTarget.classList.contains('active')) {

    faqs.map(faq => faq.classList.remove('active'))
    
}else{

faqs.map(faq => faq.classList.remove('active'))
 currentTarget.classList.add('active')
}

}

faqs.map(faq => faq.addEventListener('click', faqToggle))

