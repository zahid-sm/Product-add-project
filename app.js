//Get Element 
const product_form = document.getElementById('product_form');
const msg =document.querySelector('.msg');
const product_list = document.getElementById('product_list');



//Get All Product 
const getAllProduct = () => {

    //Get LS Data
    const data = readLSData('product')

    //Validate
    if ( !data) {
        product_list.innerHTML = `
        <div  class="product-div2">
           <div  class="product">
               <div  id="product_list">
               <h3>Nike Shoes</h3>
               </div>
           </div>
        </div>
        `
    }

    //Show All Data to List

    if(data) {
        let list = '';

        data.map((item, value) => {

            list += `
            
            <div class="all-in-one" id="product_list">
          <div class="hover">
              <img src="${item.photo}" alt="">
              <div class="inner-box">
                  <a href="#">Add to churt <i class="fas fa-shopping-cart"></i></a>
              </div>
          </div>
        
          <h3>${item.name}</h3>
          <div class="icons">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
          </div>
          <p class="sk"><sup>$</sup>${item.price}</p>
          <div class="jsIcon">
            <a class="btn btn-info btn-sm" href=""><i class="fa-solid fa-eye"></i></a>
            <a class="btn btn-warning btn-sm" href=""><i class="fa-solid fa-edit"></i></a>
            <a class="btn btn-danger btn-sm" href=""><i class="fa-solid fa-trash"></i></a>
          </div>
        </div>

            `
        })

        product_list.innerHTML =list;
    }

}
getAllProduct



// submit Product Form
product_form.onsubmit= (e) => {
    e.preventDefault();

    // Get Form Data From formData Object
    let form_data = new FormData(e.target);
    let {name ,price, quantity, photo} = Object.fromEntries(form_data.entries())
    let product_Data = Object.fromEntries(form_data.entries())

    // Form Validiation
    if( !name || !price || !quantity || !photo ){
        msg.innerHTML = setAlert('All Field Are Required')
    }else{

        createLSData('product', product_Data)

        msg.innerHTML = setAlert('Successfully Added', 'success')
        product_form.reset()
    }

}