let grid_btn= document.querySelectorAll('.grid-btn');
let grid_box=document.querySelector(".main-grid-box");
grid_btn.forEach(grid_btn_element => {
    grid_btn_element.addEventListener('click', ()=>{
        
        if (grid_btn_element.getAttribute( 'id' )!=="active") {
            grid_btn.forEach(grid_btn_inner=>{
                grid_btn_inner.setAttribute('id', '')
            })

            grid_btn_element.setAttribute('id', 'active')

            if (grid_btn_element.getAttribute( 'data-tab-toggle' )=="#network_list") {
                grid_box.classList.add('list-view')
            }
            else{
                grid_box.classList.remove('list-view')
            }
        }

        
    })
});
let page_content_wrapper=document.querySelector('#page-content-wrapper');
let wrapper=document.querySelector('#wrapper');
let sidebarToggle=document.querySelector('#sidebarToggle');
const newDiv = document.createElement('div');
newDiv.classList.add('modal-background');


    sidebarToggle.addEventListener('click', ()=>{
        console.log(wrapper.classList.contains('toggled')=='true');
        if (window.innerWidth < 992){
            console.log(window.innerWidth);
            
            wrapper.appendChild(newDiv);
        }
    })

    newDiv.addEventListener('click', ()=>{
        wrapper.removeChild(newDiv);
        wrapper.classList.remove('toggled')
    })





    let filter_input = document.querySelectorAll('.filter_input');

    filter_input.forEach(filter_input_ele => {
        filter_input_ele.addEventListener('click', ()=>{
            filter_input_ele.parentElement.classList.toggle('active')
            console.log(filter_input_ele.parentElement);
        })
    });