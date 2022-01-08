import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Tho Nguyen</h1>
      <h4>Work Address: 341 Washington St, Brighton, MA 02135</h4>
      <h4>Work Phone: (617) 783-0454</h4>
      <h4>Email: thonguyen737@gmail.com</h4>
      <p>
        Hours: Monday-Friday  9AM-5PM  | Saturaday 9AM-2PM  | Sunday Closed
      </p>

      <div>
        {/* <!-- Gallery Section --> */}
        <div class="container">
          <div class="row">

          {/* <!-- Column 1 --> */}
            <div class="col-md">
              Exhibit A
          <img className='pic' src='pics/image_0.jpg' class="img-fluid"/>
          <img className='pic' src='pics/image_1.jpg' class="img-fluid"/>
          <img className='pic' src='pics/image_2.jpg' class="img-fluid"/>
          <img className='pic' src='pics/image_3.jpg' class="img-fluid"/>
          <img className='pic' src='pics/image_4.jpg' class="img-fluid"/>
          <img className='pic' src='pics/image_5.jpg' class="img-fluid"/>
          <img className='pic' src='pics/image_6.jpg' class="img-fluid"/>
          <img className='pic' src='pics/image_7.jpg' class="img-fluid"/>
          <img className='pic' src='pics/image_8.jpg' class="img-fluid"/>
          <img className='pic' src='pics/image_9.jpg' class="img-fluid"/>
          <img className='pic' src='pics/image_10.jpg' class="img-fluid"/>
          <img className='pic' src='pics/image_12.jpg' class="img-fluid"/>
          <img className='pic' src='pics/image_13.jpg' class="img-fluid"/>
          <img className='pic' src='pics/image_42.jpg' class="img-fluid"/>
          </div>
          

          {/* <!-- Column 2 --> */}
          <div class="col-md">
            Exhibit B
          <img className='pic' src='pics/image_14.jpg' class="img-fluid"/>
          <img className='pic' src='pics/image_15.jpg' class="img-fluid"/>
          <img className='pic' src='pics/image_16.jpg' class="img-fluid"/>
          <img className='pic' src='pics/image_17.jpg' class="img-fluid"/>
          <img className='pic' src='pics/image_18.jpg' class="img-fluid"/>
          <img className='pic' src='pics/image_19.jpg' class="img-fluid"/>
          <img className='pic' src='pics/image_20.jpg' class="img-fluid"/>
          <img className='pic' src='pics/image_21.jpg' class="img-fluid"/>
          <img className='pic' src='pics/image_22.jpg' class="img-fluid"/>
          <img className='pic' src='pics/image_23.jpg' class="img-fluid"/>
          <img className='pic' src='pics/image_24.jpg' class="img-fluid"/>
          <img className='pic' src='pics/image_25.jpg' class="img-fluid"/>
          <img className='pic' src='pics/image_26.jpg' class="img-fluid"/>
          <img className='pic' src='pics/image_27.jpg' class="img-fluid"/>
          </div>

          {/* <!-- Column 3 --> */}
          <div class="col-md">
            Exhibit C
          <img className='pic' src='pics/image_11.jpg' class="img-fluid"/>
          <img className='pic' src='pics/image_28.jpg' class="img-fluid"/>
          <img className='pic' src='pics/image_29.jpg' class="img-fluid"/>
          <img className='pic' src='pics/image_30.jpg' class="img-fluid"/>
          <img className='pic' src='pics/image_31.jpg' class="img-fluid"/>
          <img className='pic' src='pics/image_32.jpg' class="img-fluid"/>
          <img className='pic' src='pics/image_33.jpg' class="img-fluid"/>
          <img className='pic' src='pics/image_34.jpg' class="img-fluid"/>
          <img className='pic' src='pics/image_35.jpg' class="img-fluid"/>
          <img className='pic' src='pics/image_36.jpg' class="img-fluid"/>
          <img className='pic' src='pics/image_37.jpg' class="img-fluid"/>
          <img className='pic' src='pics/image_38.jpg' class="img-fluid"/>
          <img className='pic' src='pics/image_39.jpg' class="img-fluid"/>
          <img className='pic' src='pics/image_40.jpg' class="img-fluid"/>
          <img className='pic' src='pics/image_41.jpg' class="img-fluid"/>
          </div>

          </div>
          </div>
        
      </div>

      <footer>@Copyright 2021</footer>
    </div>
  );
}

export default App;
